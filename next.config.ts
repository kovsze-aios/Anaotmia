import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Produces `.next/standalone`, which the Dockerfile copies and runs. Locally
   * it is served by `pnpm start` (see `scripts/start-standalone.mjs`) — plain
   * `next start` cannot serve a standalone build.
   */
  output: "standalone",

  /**
   * Pin the file-tracing root to this project.
   *
   * There is a stray `package-lock.json` in the parent directory, so Next
   * inferred the workspace root one level up and emitted the standalone build
   * to `.next/standalone/Anaotmia/server.js` instead of `.next/standalone/server.js`.
   * That silently breaks any consumer expecting the documented layout — the
   * Dockerfile's `CMD ["node", "server.js"]` included.
   *
   * `next build` always runs from the project root, so `process.cwd()` is the
   * right anchor and keeps the output location independent of whatever sits in
   * parent directories.
   */
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
