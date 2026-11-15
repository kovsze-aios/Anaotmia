import { createHash, randomBytes, randomUUID } from "node:crypto";
import tls from "node:tls";
import { NextRequest, NextResponse } from "next/server";
import type { NeuralVoiceId } from "@/lib/speechText";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const EDGE_HOST = "speech.platform.bing.com";
const EDGE_PORT = 443;
const TRUSTED_CLIENT_TOKEN = "6A5AA1D4EAFF4E9FB37E23D68491D6F4";
const EDGE_ORIGIN = "chrome-extension://jdiccldimpdaibmpdkjnbmckianbfold";
const EDGE_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0";
const SEC_MS_GEC_VERSION = "1-130.0.2849.68";
const MAX_TEXT_LENGTH = 1200;
const SYNTH_TIMEOUT_MS = 4500;

const ALLOWED_VOICES = new Set<NeuralVoiceId>([
  "pl-PL-MarekNeural",
  "pl-PL-ZofiaNeural",
]);

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRatePercent(rate: number): string {
  const clamped = Math.max(0.5, Math.min(2.0, Number.isFinite(rate) ? rate : 1));
  const pct = Math.round((clamped - 1) * 100);
  return pct >= 0 ? `+${pct}%` : `${pct}%`;
}

/** Generates Microsoft Edge DRM `Sec-MS-GEC` SHA-256 token rounded to 5 minutes. */
function generateSecMsGec(): string {
  const unixSec = Math.floor(Date.now() / 1000);
  const ticksSec = unixSec + 11_644_473_600;
  const roundedSec = ticksSec - (ticksSec % 300);
  const fileTimeTicks = `${roundedSec}0000000`;
  return createHash("sha256")
    .update(`${fileTimeTicks}${TRUSTED_CLIENT_TOKEN}`, "ascii")
    .digest("hex")
    .toUpperCase();
}

function formatEdgeTimestamp(): string {
  return new Date().toString().replace(/ GMT.*$/, " GMT+0000 (Coordinated Universal Time)");
}

function encodeWsFrame(opcode: number, payload: Buffer): Buffer {
  const mask = randomBytes(4);
  const len = payload.length;
  let header: Buffer;

  if (len < 126) {
    header = Buffer.alloc(6);
    header[0] = 0x80 | (opcode & 0x0f);
    header[1] = 0x80 | len;
    mask.copy(header, 2);
  } else if (len < 65536) {
    header = Buffer.alloc(8);
    header[0] = 0x80 | (opcode & 0x0f);
    header[1] = 0x80 | 126;
    header.writeUInt16BE(len, 2);
    mask.copy(header, 4);
  } else {
    header = Buffer.alloc(14);
    header[0] = 0x80 | (opcode & 0x0f);
    header[1] = 0x80 | 127;
    header.writeBigUInt64BE(BigInt(len), 2);
    mask.copy(header, 10);
  }

  const masked = Buffer.allocUnsafe(len);
  for (let i = 0; i < len; i += 1) {
    masked[i] = payload[i] ^ mask[i & 3];
  }
  return Buffer.concat([header, masked]);
}

function synthesizeWithEdgeNeural(
  text: string,
  voice: NeuralVoiceId,
  rate: number,
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const requestId = randomUUID().replace(/-/g, "");
    const wsKey = randomBytes(16).toString("base64");
    const secMsGec = generateSecMsGec();
    const path =
      `/consumer/speech/synthesize/readaloud/edge/v1` +
      `?TrustedClientToken=${TRUSTED_CLIENT_TOKEN}` +
      `&Sec-MS-GEC=${secMsGec}` +
      `&Sec-MS-GEC-Version=${SEC_MS_GEC_VERSION}` +
      `&ConnectionId=${requestId}`;

    let settled = false;
    let upgraded = false;
    let recvBuf = Buffer.alloc(0);
    let fragmentedOpcode = 0;
    let fragmentedChunks: Buffer[] = [];
    const audioChunks: Buffer[] = [];

    const socket = tls.connect({
      host: EDGE_HOST,
      port: EDGE_PORT,
      servername: EDGE_HOST,
      timeout: SYNTH_TIMEOUT_MS,
    });

    const timer = setTimeout(() => {
      fail(new Error("Edge Neural TTS timeout"));
    }, SYNTH_TIMEOUT_MS);

    function cleanup() {
      clearTimeout(timer);
      socket.removeAllListeners();
      if (!socket.destroyed) {
        socket.destroy();
      }
    }

    function finish() {
      if (settled) return;
      settled = true;
      try {
        socket.write(encodeWsFrame(0x8, Buffer.alloc(0)));
      } catch {
        // Ignore close-frame write error
      }
      cleanup();
      if (audioChunks.length === 0) {
        reject(new Error("Edge Neural TTS returned empty audio stream"));
        return;
      }
      resolve(Buffer.concat(audioChunks));
    }

    function fail(err: Error) {
      if (settled) return;
      settled = true;
      cleanup();
      reject(err);
    }

    function handleMessage(opcode: number, payload: Buffer) {
      if (opcode === 0x9) {
        // Ping -> Pong
        socket.write(encodeWsFrame(0xA, payload));
        return;
      }
      if (opcode === 0x8) {
        if (audioChunks.length > 0) finish();
        else fail(new Error("Edge Neural TTS closed before audio completed"));
        return;
      }
      if (opcode === 0x1) {
        const msg = payload.toString("utf8");
        if (msg.includes("Path:turn.end")) {
          finish();
        }
        return;
      }
      if (opcode === 0x2 && payload.length > 2) {
        const headerLen = payload.readUInt16BE(0);
        const bodyStart = 2 + headerLen;
        if (bodyStart <= payload.length) {
          const headerText = payload.subarray(2, bodyStart).toString("utf8");
          if (headerText.includes("Path:audio")) {
            audioChunks.push(payload.subarray(bodyStart));
          }
        }
      }
    }

    function drainWsFrames() {
      while (recvBuf.length >= 2) {
        const firstByte = recvBuf[0];
        const secondByte = recvBuf[1];
        const fin = (firstByte & 0x80) !== 0;
        const opcode = firstByte & 0x0f;
        const masked = (secondByte & 0x80) !== 0;
        let offset = 2;
        let payloadLen = secondByte & 0x7f;

        if (payloadLen === 126) {
          if (recvBuf.length < 4) return;
          payloadLen = recvBuf.readUInt16BE(2);
          offset = 4;
        } else if (payloadLen === 127) {
          if (recvBuf.length < 10) return;
          const high = recvBuf.readUInt32BE(2);
          const low = recvBuf.readUInt32BE(6);
          const fullLen = high * 0x1_0000_0000 + low;
          if (high !== 0 || fullLen > 16_777_216) {
            fail(new Error("Oversized WS frame"));
            return;
          }
          payloadLen = fullLen;
          offset = 10;
        }

        const maskLen = masked ? 4 : 0;
        const totalLen = offset + maskLen + payloadLen;
        if (recvBuf.length < totalLen) return;

        let payload = recvBuf.subarray(offset + maskLen, totalLen);
        if (masked) {
          const maskKey = recvBuf.subarray(offset, offset + 4);
          const unmasked = Buffer.allocUnsafe(payloadLen);
          for (let i = 0; i < payloadLen; i += 1) {
            unmasked[i] = payload[i] ^ maskKey[i & 3];
          }
          payload = unmasked;
        }
        recvBuf = recvBuf.subarray(totalLen);

        if (opcode >= 0x8) {
          handleMessage(opcode, payload);
          continue;
        }

        if (opcode !== 0) {
          fragmentedOpcode = opcode;
          fragmentedChunks = [payload];
        } else {
          fragmentedChunks.push(payload);
        }

        if (fin) {
          const full =
            fragmentedChunks.length === 1
              ? fragmentedChunks[0]
              : Buffer.concat(fragmentedChunks);
          const op = fragmentedOpcode || opcode;
          fragmentedOpcode = 0;
          fragmentedChunks = [];
          handleMessage(op, full);
        }
      }
    }

    function sendSpeechPayload() {
      const ts = formatEdgeTimestamp();
      const configMsg =
        `X-Timestamp:${ts}\r\n` +
        `Content-Type:application/json; charset=utf-8\r\n` +
        `Path:speech.config\r\n\r\n` +
        JSON.stringify({
          context: {
            synthesis: {
              audio: {
                metadataoptions: {
                  sentenceBoundaryEnabled: "false",
                  wordBoundaryEnabled: "false",
                },
                outputFormat: "audio-24khz-48kbitrate-mono-mp3",
              },
            },
          },
        });

      const rateStr = formatRatePercent(rate);
      const ssml =
        `<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='pl-PL'>` +
        `<voice name='${voice}'>` +
        `<prosody pitch='+0Hz' rate='${rateStr}'>${escapeXml(text)}</prosody>` +
        `</voice></speak>`;

      const ssmlMsg =
        `X-RequestId:${requestId}\r\n` +
        `Content-Type:application/ssml+xml\r\n` +
        `X-Timestamp:${new Date().toISOString()}\r\n` +
        `Path:ssml\r\n\r\n` +
        ssml;

      socket.write(encodeWsFrame(0x1, Buffer.from(configMsg, "utf8")));
      socket.write(encodeWsFrame(0x1, Buffer.from(ssmlMsg, "utf8")));
    }

    socket.on("secureConnect", () => {
      const req =
        `GET ${path} HTTP/1.1\r\n` +
        `Host: ${EDGE_HOST}\r\n` +
        `Upgrade: websocket\r\n` +
        `Connection: Upgrade\r\n` +
        `Sec-WebSocket-Key: ${wsKey}\r\n` +
        `Sec-WebSocket-Version: 13\r\n` +
        `Origin: ${EDGE_ORIGIN}\r\n` +
        `User-Agent: ${EDGE_UA}\r\n\r\n`;
      socket.write(req);
    });

    socket.on("data", (chunk: Buffer) => {
      recvBuf = Buffer.concat([recvBuf, chunk]);
      if (!upgraded) {
        const headerEnd = recvBuf.indexOf("\r\n\r\n");
        if (headerEnd === -1) return;
        const head = recvBuf.subarray(0, headerEnd).toString("latin1");
        if (!/^HTTP\/1\.[01]\s+101\b/i.test(head)) {
          fail(new Error(`Edge WS handshake failed: ${head.split("\r\n")[0]}`));
          return;
        }
        upgraded = true;
        recvBuf = recvBuf.subarray(headerEnd + 4);
        sendSpeechPayload();
      }
      if (upgraded) {
        drainWsFrames();
      }
    });

    socket.on("timeout", () => fail(new Error("Socket timeout")));
    socket.on("error", (err) => fail(err));
    socket.on("end", () => {
      if (!settled) {
        if (audioChunks.length > 0) finish();
        else fail(new Error("Socket ended without audio"));
      }
    });
  });
}

async function handleTtsRequest(
  rawText: string | null,
  rawVoice: string | null,
  rawRate: string | number | null,
): Promise<Response> {
  const text = (rawText ?? "").trim();
  if (!text) {
    return NextResponse.json({ error: "Missing text parameter" }, { status: 400 });
  }
  if (text.length > MAX_TEXT_LENGTH) {
    return NextResponse.json(
      { error: `Text exceeds ${MAX_TEXT_LENGTH} character limit` },
      { status: 400 },
    );
  }

  const voiceCandidate = (rawVoice ?? "pl-PL-ZofiaNeural") as NeuralVoiceId;
  const voice: NeuralVoiceId = ALLOWED_VOICES.has(voiceCandidate)
    ? voiceCandidate
    : "pl-PL-ZofiaNeural";
  const parsedRate = typeof rawRate === "number" ? rawRate : Number(rawRate ?? 1);
  const rate = Number.isFinite(parsedRate)
    ? Math.max(0.5, Math.min(2.0, parsedRate))
    : 1;

  try {
    const audioBuffer = await synthesizeWithEdgeNeural(text, voice, rate);
    return new Response(new Uint8Array(audioBuffer), {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=3600",
        "X-TTS-Provider": "edge-neural",
        "X-TTS-Voice": voice,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Neural TTS unavailable";
    return NextResponse.json(
      {
        error: message,
        fallback: "browser-speech-synthesis",
      },
      { status: 503 },
    );
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  return handleTtsRequest(
    searchParams.get("text"),
    searchParams.get("voice"),
    searchParams.get("rate"),
  );
}

export async function POST(req: NextRequest) {
  let body: { text?: unknown; voice?: unknown; rate?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  return handleTtsRequest(
    typeof body.text === "string" ? body.text : null,
    typeof body.voice === "string" ? body.voice : null,
    typeof body.rate === "number" || typeof body.rate === "string" ? body.rate : 1,
  );
}
