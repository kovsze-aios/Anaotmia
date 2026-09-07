#!/usr/bin/env node
/**
 * Runs the production build locally.
 *
 * `next.config.ts` sets `output: "standalone"`, and `next start` cannot serve
 * that build — Next says so explicitly at startup, and the symptom is a page
 * that returns 200 with every script and stylesheet 404ing.
 *
 * Standalone output deliberately omits `.next/static` and `public/`, on the
 * assumption they will be served by a CDN. The Dockerfile copies them into the
 * standalone tree before running `server.js`; this script does the same thing
 * so `pnpm start` reproduces the container locally.
 *
 * Node's `fs.cpSync` is used rather than shell `cp` because npm scripts run
 * through cmd.exe on Windows.
 *
 * Usage: pnpm start [--port 3000]
 */
import { cpSync, existsSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const standalone = path.join(root, ".next", "standalone");
const server = path.join(standalone, "server.js");

if (!existsSync(server)) {
  console.error(
    "No standalone build found at .next/standalone/server.js.\n" +
      "Run `pnpm run build` first.",
  );
  process.exit(1);
}

/** Copies a directory into the standalone tree if it exists. */
function stage(from, to, label) {
  const source = path.join(root, from);
  if (!existsSync(source)) return;
  cpSync(source, path.join(standalone, to), { recursive: true });
  console.log(`  staged ${label}`);
}

console.log("Preparing standalone build…");
// Both are excluded from standalone output; without them the server returns
// 200 for HTML and 404 for every asset.
stage(path.join(".next", "static"), path.join(".next", "static"), ".next/static");
stage("public", "public", "public/");

// `--port 3000` on the CLI wins over PORT in the environment.
const portFlag = process.argv.indexOf("--port");
const port =
  portFlag !== -1 && process.argv[portFlag + 1]
    ? process.argv[portFlag + 1]
    : (process.env.PORT ?? "3000");

console.log(`Starting standalone server on port ${port}…`);
const child = spawn(process.execPath, ["server.js"], {
  cwd: standalone,
  stdio: "inherit",
  env: { ...process.env, PORT: String(port), HOSTNAME: process.env.HOSTNAME ?? "0.0.0.0" },
});

child.on("exit", (code) => {
  // pnpm symlinks its node_modules, Next copies those symlinks into the
  // standalone bundle, and Windows refuses realpath() on them unless Developer
  // Mode is on — so the bundle starts on Linux (and in Docker) but not here.
  if (code !== 0 && process.platform === "win32") {
    console.error(
      "\nIf that failed with EPERM on a node_modules symlink, this is the known\n" +
        "Windows + pnpm limitation, not a problem with the build. Either enable\n" +
        "Windows Developer Mode, or test the production build via Docker, which\n" +
        "is what this output is built for.",
    );
  }
  process.exit(code ?? 0);
});
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
