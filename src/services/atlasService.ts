import type { Atlas, AtlasChunk } from "@/server/models";

/**
 * UI-facing access to the BodyParts3D atlas assets.
 *
 * The geometry is ~57 MB across 15 chunks, far too large to live in this
 * repository, so it is served from jsDelivr against a **pinned commit** of
 * `ashemag/human-atlas`. Pinning matters twice over: the upstream repo can move
 * without breaking us, and jsDelivr answers with `immutable` caching.
 *
 * The manifest ships relative paths (`/models/body-0.bin`), so every URL is
 * resolved through `resolveAssetUrl` rather than the manifest being rewritten.
 */

/** Upstream commit the assets are pinned to. Bump deliberately, never by hand-editing URLs. */
export const ATLAS_COMMIT = "7a383d3ee2759e3ddf157c704fb8814fd0c50bcb";

export const ATLAS_ASSET_BASE = `https://cdn.jsdelivr.net/gh/ashemag/human-atlas@${ATLAS_COMMIT}/public`;

/** Resolve a manifest-relative asset path against the pinned CDN origin. */
export function resolveAssetUrl(path: string): string {
  return /^https?:\/\//.test(path) ? path : `${ATLAS_ASSET_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** Absolute URLs for a chunk, preferring the pre-gzipped payload when present. */
export function resolveChunkUrls(chunk: AtlasChunk): { url: string; gzip?: string } {
  return {
    url: resolveAssetUrl(chunk.url),
    gzip: chunk.gzip ? resolveAssetUrl(chunk.gzip) : undefined,
  };
}

/**
 * Fetch the atlas manifest (~1.3 MB). Throws a user-presentable message on
 * failure; callers surface it directly.
 */
export async function getAtlas(options: { signal?: AbortSignal } = {}): Promise<Atlas> {
  const response = await fetch(resolveAssetUrl("/models/atlas.json"), {
    signal: options.signal,
  });
  if (!response.ok) {
    throw new Error("Nie udało się wczytać katalogu anatomicznego.");
  }
  return (await response.json()) as Atlas;
}
