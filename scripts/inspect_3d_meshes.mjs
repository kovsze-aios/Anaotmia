#!/usr/bin/env node
/**
 * inspect_3d_meshes.mjs
 * ---------------------
 * Audits all 3D anatomical assets in the project:
 *   1. Scans workspace and parent directory for `.glb` / `.gltf` files and extracts
 *      scene-graph node & mesh names from their JSON chunks.
 *   2. Fetches the pinned BodyParts3D `atlas.json` manifest used by `atlasService.ts`
 *      (with graceful offline fallback to `src/i18n/anatomy-terms-pl.ts`) to extract
 *      actual concept names, part FMA IDs, system tags, and 3D bounding-box centers.
 *   3. Writes the full audit report to `src/data/discovered-meshes.json`.
 *
 * Usage:
 *   node scripts/inspect_3d_meshes.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_FILE = path.join(ROOT_DIR, "src", "data", "discovered-meshes.json");

const ATLAS_URL =
  "https://cdn.jsdelivr.net/gh/ashemag/human-atlas@7a383d3ee2759e3ddf157c704fb8814fd0c50bcb/public/models/atlas.json";

const IGNORE_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "materiały-źródłowe",
  "materialy-zrodlowe",
  ".cache",
]);

function findGltfFiles(dir, maxDepth = 4, depth = 0, results = []) {
  if (depth > maxDepth || !fs.existsSync(dir)) return results;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return results;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (IGNORE_DIRS.has(entry.name)) continue;
      findGltfFiles(full, maxDepth, depth + 1, results);
    } else if (/\.(glb|gltf)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function parseGltfMetadata(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    if (filePath.toLowerCase().endsWith(".gltf")) {
      const json = JSON.parse(buf.toString("utf8"));
      return {
        file: path.relative(ROOT_DIR, filePath),
        nodes: (json.nodes ?? []).map((n) => n.name).filter(Boolean),
        meshes: (json.meshes ?? []).map((m) => m.name).filter(Boolean),
      };
    }
    // Binary GLB: 12-byte header (magic 0x46546C67, version 2, length), then JSON chunk
    if (buf.length < 20 || buf.readUInt32LE(0) !== 0x46546c67) {
      return { file: path.relative(ROOT_DIR, filePath), nodes: [], meshes: [] };
    }
    const chunkLen = buf.readUInt32LE(12);
    const chunkType = buf.readUInt32LE(16);
    if (chunkType !== 0x4e4f534a) {
      return { file: path.relative(ROOT_DIR, filePath), nodes: [], meshes: [] };
    }
    const jsonStr = buf.subarray(20, 20 + chunkLen).toString("utf8");
    const json = JSON.parse(jsonStr);
    return {
      file: path.relative(ROOT_DIR, filePath),
      nodes: (json.nodes ?? []).map((n) => n.name).filter(Boolean),
      meshes: (json.meshes ?? []).map((m) => m.name).filter(Boolean),
    };
  } catch (err) {
    return {
      file: path.relative(ROOT_DIR, filePath),
      error: String(err),
      nodes: [],
      meshes: [],
    };
  }
}

function fallbackTermsFromTs() {
  const tsPath = path.join(ROOT_DIR, "src", "i18n", "anatomy-terms-pl.ts");
  if (!fs.existsSync(tsPath)) return [];
  const src = fs.readFileSync(tsPath, "utf8");
  const terms = [];
  const re = /^\s*(?:"([^"]+)"|([a-z][a-z0-9\s-]*)):\s*\{\s*pl:\s*"([^"]+)",\s*latin:\s*"([^"]+)"/gm;
  for (const m of src.matchAll(re)) {
    const english = (m[1] ?? m[2] ?? "").trim();
    if (english) {
      terms.push({
        name: english,
        pl: m[3],
        latin: m[4],
      });
    }
  }
  return terms;
}

async function main() {
  console.log("[inspect_3d_meshes] Scanning workspace for GLB/GLTF models...");
  const gltfFiles = [
    ...findGltfFiles(path.join(ROOT_DIR, "public"), 4),
    ...findGltfFiles(path.join(ROOT_DIR, "src"), 4),
    ...findGltfFiles(path.resolve(ROOT_DIR, ".."), 2),
  ];
  const uniqueGltf = Array.from(new Set(gltfFiles));
  const localModels = uniqueGltf.map(parseGltfMetadata);
  console.log(`[inspect_3d_meshes] Local GLB/GLTF files found: ${localModels.length}`);

  let atlasData = null;
  let atlasSource = "cdn";
  try {
    console.log(`[inspect_3d_meshes] Fetching BodyParts3D manifest from ${ATLAS_URL}...`);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const res = await fetch(ATLAS_URL, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    atlasData = await res.json();
    console.log(
      `[inspect_3d_meshes] Loaded atlas.json: ${atlasData.parts?.length ?? 0} parts, ${atlasData.concepts?.length ?? 0} concepts`,
    );
  } catch (err) {
    atlasSource = `fallback (${err instanceof Error ? err.message : String(err)})`;
    console.warn(`[inspect_3d_meshes] Warning: ${atlasSource}; falling back to local dictionary.`);
  }

  let concepts = [];
  let partsSummary = [];
  const systemsCount = {};

  if (atlasData && Array.isArray(atlasData.parts) && Array.isArray(atlasData.concepts)) {
    const partById = new Map();
    for (const p of atlasData.parts) {
      partById.set(p.id, p);
      systemsCount[p.system] = (systemsCount[p.system] ?? 0) + 1;
    }

    // Priority organ/structure list + top multi-part concepts
    const partEntries = atlasData.parts.map((p) => {
      const cx = (p.bounds[0][0] + p.bounds[1][0]) * 0.5;
      const cy = (p.bounds[0][1] + p.bounds[1][1]) * 0.5;
      const cz = (p.bounds[0][2] + p.bounds[1][2]) * 0.5;
      const sx = p.bounds[1][0] - p.bounds[0][0];
      const sy = p.bounds[1][1] - p.bounds[0][1];
      const sz = p.bounds[1][2] - p.bounds[0][2];
      return {
        id: p.id,
        name: p.name,
        conceptId: p.conceptId,
        system: p.system,
        center: [Number(cx.toFixed(4)), Number(cy.toFixed(4)), Number(cz.toFixed(4))],
        size: [Number(sx.toFixed(4)), Number(sy.toFixed(4)), Number(sz.toFixed(4))],
      };
    });

    partsSummary = partEntries;

    concepts = atlasData.concepts.map((c) => {
      let minX = Infinity,
        minY = Infinity,
        minZ = Infinity;
      let maxX = -Infinity,
        maxY = -Infinity,
        maxZ = -Infinity;
      const systems = new Set();
      const childPartNames = [];
      for (const pid of c.elements ?? []) {
        const p = partById.get(pid);
        if (!p) continue;
        systems.add(p.system);
        if (childPartNames.length < 16) {
          childPartNames.push({ id: p.id, name: p.name, system: p.system });
        }
        minX = Math.min(minX, p.bounds[0][0]);
        minY = Math.min(minY, p.bounds[0][1]);
        minZ = Math.min(minZ, p.bounds[0][2]);
        maxX = Math.max(maxX, p.bounds[1][0]);
        maxY = Math.max(maxY, p.bounds[1][1]);
        maxZ = Math.max(maxZ, p.bounds[1][2]);
      }
      const valid = Number.isFinite(minX);
      return {
        id: c.id,
        name: c.name,
        systems: Array.from(systems),
        elementCount: (c.elements ?? []).length,
        center: valid
          ? [
              Number(((minX + maxX) * 0.5).toFixed(4)),
              Number(((minY + maxY) * 0.5).toFixed(4)),
              Number(((minZ + maxZ) * 0.5).toFixed(4)),
            ]
          : null,
        size: valid
          ? [
              Number((maxX - minX).toFixed(4)),
              Number((maxY - minY).toFixed(4)),
              Number((maxZ - minZ).toFixed(4)),
            ]
          : null,
        sampleElements: childPartNames,
      };
    });
  } else {
    const fallback = fallbackTermsFromTs();
    concepts = fallback.map((item, idx) => ({
      id: `local-${idx + 1}`,
      name: item.name,
      pl: item.pl,
      latin: item.latin,
      systems: [],
      elementCount: 1,
      center: null,
      size: null,
      sampleElements: [],
    }));
  }

  // Highlighted core organs/systems for 3D entity cards & DeepSeek synthesis
  const CORE_TARGET_NAMES = [
    "heart",
    "brain",
    "lung",
    "liver",
    "stomach",
    "kidney",
    "spleen",
    "pancreas",
    "trachea",
    "diaphragm",
    "urinary bladder",
    "skull",
    "vertebral column",
    "femur",
    "eyeball",
    "small intestine",
    "large intestine",
    "esophagus",
    "aorta",
    "spinal cord",
    "cerebellum",
    "pectoralis major",
    "biceps brachii",
    "deltoid",
    "quadriceps femoris",
    "humerus",
    "clavicle",
    "scapula",
    "sternum",
  ];

  const conceptByLower = new Map(concepts.map((c) => [c.name.toLowerCase(), c]));
  const priorityMeshes = [];
  for (const target of CORE_TARGET_NAMES) {
    const exact = conceptByLower.get(target);
    if (exact) {
      priorityMeshes.push(exact);
    } else {
      const partial = concepts.find((c) => c.name.toLowerCase().includes(target));
      if (partial) priorityMeshes.push(partial);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    atlasSource,
    localGltfModels: localModels,
    stats: {
      totalParts: partsSummary.length,
      totalConcepts: concepts.length,
      systemsCount,
    },
    priorityMeshes,
    concepts: concepts.slice(0, 600),
  };

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2) + "\n", "utf8");
  console.log(
    `[inspect_3d_meshes] Saved ${priorityMeshes.length} priority meshes & ${report.concepts.length} concepts -> ${path.relative(ROOT_DIR, OUTPUT_FILE)}`,
  );
}

main().catch((err) => {
  console.error("[inspect_3d_meshes] Fatal error:", err);
  process.exit(1);
});
