/**
 * Schema of the BodyParts3D atlas manifest (`atlas.json`).
 *
 * The manifest is produced by the upstream `ashemag/human-atlas` project and
 * describes where each of the 2,234 source meshes lives inside a set of binary
 * chunks. Only the shape is declared here — fetching is `@/services/atlasService`,
 * rendering is `@/components/atlas`.
 */

/** Display system a part is grouped under. Colours/labels live in the UI tier. */
export type SystemId =
  | "skeletal"
  | "muscular"
  | "arterial"
  | "venous"
  | "nervous"
  | "digestive"
  | "respiratory"
  | "urinary"
  | "reproductive"
  | "lymphatic"
  | "endocrine"
  | "integumentary"
  | "connective"
  | "sensory"
  | "cardiac";

/**
 * One source mesh. `positions`/`normals`/`indices` are **byte offsets** into
 * the decoded chunk buffer, not array indices.
 */
export interface AtlasPart {
  id: string;
  name: string;
  conceptId: string;
  system: SystemId;
  chunk: number;
  positions: number;
  normals: number;
  indices: number;
  vertexCount: number;
  indexCount: number;
  /** `[min, max]` corners in metres, Y-up. */
  bounds: [number[], number[]];
}

/** A named anatomical concept, which may map to several source meshes. */
export interface AtlasConcept {
  id: string;
  name: string;
  elements: string[];
}

/**
 * A binary payload holding many parts. `url`/`gzip` are resolved against the
 * asset origin at runtime, so the manifest can be served from a CDN unchanged.
 */
export interface AtlasChunk {
  url: string;
  bytes: number;
  gzip?: string;
  gzipBytes?: number;
}

export interface Atlas {
  version: string;
  sex?: "male";
  source?: string;
  scope?: string;
  parts: AtlasPart[];
  concepts: AtlasConcept[];
  chunks: AtlasChunk[];
  triangles: number;
}
