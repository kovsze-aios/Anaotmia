/**
 * Static hosts serve `.gz` either as a compressed response (with
 * `Content-Encoding: gzip`, which `fetch` transparently decodes) or as a plain
 * gzip *file*. jsDelivr does the latter — it sends `Content-Type: application/gzip`
 * and no encoding header — so the payload is sniffed for the gzip magic bytes
 * rather than assumed, otherwise we would decode twice or not at all.
 */
export async function decodeModelResponse(
  response: Response,
  expectedBytes: number,
  compressed: boolean,
  messages: { failed: string; incomplete: string },
): Promise<ArrayBuffer> {
  if (!response.ok) throw new Error(messages.failed);

  const payload = await response.arrayBuffer();
  const signature = new Uint8Array(payload, 0, Math.min(2, payload.byteLength));
  const gzip = compressed && signature[0] === 0x1f && signature[1] === 0x8b;

  const buffer = gzip
    ? await new Response(
        new Blob([payload]).stream().pipeThrough(new DecompressionStream("gzip")),
      ).arrayBuffer()
    : payload;

  // Byte offsets in the manifest are absolute, so a short read would silently
  // produce corrupt geometry rather than an error.
  if (buffer.byteLength !== expectedBytes) {
    throw new Error(messages.incomplete);
  }
  return buffer;
}
