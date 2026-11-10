"use client";

import { useEffect, useRef } from "react";
import * as T from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

import type { Atlas, SystemId } from "@/server/models";
import { resolveChunkUrls } from "@/services/atlasService";
import { createExplosionLayout } from "./explosion-layout";
import { decodeModelResponse } from "./model-download";
import { PointerTap } from "./pointer-tap";
import { REGION_PRESETS, SYSTEMS, type SceneState } from "./anatomy";

/**
 * Stage colours per theme. Structure colours come from `SYSTEMS` and are the
 * same in both themes — they are anatomical coding, not decoration.
 */
const PALETTE = {
  light: {
    clear: "#eef1f4",
    ground: 0xd4d9df,
    platform: 0xebeeef,
    ring: 0x7e8b96,
    innerRing: 0x9aa6b2,
    marker: 0x475569,
  },
  dark: {
    clear: "#050608",
    ground: 0x090b0e,
    platform: 0x14171c,
    ring: 0x3b424d,
    innerRing: 0x23272f,
    marker: 0x94a3b8,
  },
} as const;

/**
 * Per-system physical surface presets (roughness, clearcoat, sheen) so bones look
 * like mineralised ivory, muscles have moist fascial striation sheen, and vessels
 * & viscera have wet serous membrane reflections.
 */
const MATERIAL_PROPS: Record<
  SystemId,
  {
    roughness: number;
    metalness: number;
    clearcoat: number;
    clearcoatRoughness: number;
    sheen: number;
    sssStrength: number;
  }
> = {
  skeletal: {
    roughness: 0.42,
    metalness: 0.02,
    clearcoat: 0.16,
    clearcoatRoughness: 0.38,
    sheen: 0.12,
    sssStrength: 0.14,
  },
  muscular: {
    roughness: 0.35,
    metalness: 0.04,
    clearcoat: 0.36,
    clearcoatRoughness: 0.26,
    sheen: 0.38,
    sssStrength: 0.28,
  },
  cardiac: {
    roughness: 0.26,
    metalness: 0.05,
    clearcoat: 0.58,
    clearcoatRoughness: 0.18,
    sheen: 0.35,
    sssStrength: 0.32,
  },
  arterial: {
    roughness: 0.24,
    metalness: 0.05,
    clearcoat: 0.56,
    clearcoatRoughness: 0.16,
    sheen: 0.3,
    sssStrength: 0.3,
  },
  venous: {
    roughness: 0.26,
    metalness: 0.05,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
    sheen: 0.28,
    sssStrength: 0.26,
  },
  nervous: {
    roughness: 0.32,
    metalness: 0.02,
    clearcoat: 0.42,
    clearcoatRoughness: 0.22,
    sheen: 0.32,
    sssStrength: 0.3,
  },
  sensory: {
    roughness: 0.22,
    metalness: 0.04,
    clearcoat: 0.65,
    clearcoatRoughness: 0.12,
    sheen: 0.25,
    sssStrength: 0.25,
  },
  respiratory: {
    roughness: 0.34,
    metalness: 0.02,
    clearcoat: 0.46,
    clearcoatRoughness: 0.24,
    sheen: 0.34,
    sssStrength: 0.3,
  },
  digestive: {
    roughness: 0.32,
    metalness: 0.03,
    clearcoat: 0.5,
    clearcoatRoughness: 0.2,
    sheen: 0.32,
    sssStrength: 0.28,
  },
  urinary: {
    roughness: 0.3,
    metalness: 0.03,
    clearcoat: 0.52,
    clearcoatRoughness: 0.2,
    sheen: 0.3,
    sssStrength: 0.28,
  },
  lymphatic: {
    roughness: 0.3,
    metalness: 0.03,
    clearcoat: 0.44,
    clearcoatRoughness: 0.22,
    sheen: 0.25,
    sssStrength: 0.25,
  },
  endocrine: {
    roughness: 0.32,
    metalness: 0.03,
    clearcoat: 0.46,
    clearcoatRoughness: 0.22,
    sheen: 0.3,
    sssStrength: 0.28,
  },
  reproductive: {
    roughness: 0.34,
    metalness: 0.02,
    clearcoat: 0.42,
    clearcoatRoughness: 0.24,
    sheen: 0.28,
    sssStrength: 0.26,
  },
  integumentary: {
    roughness: 0.48,
    metalness: 0.01,
    clearcoat: 0.18,
    clearcoatRoughness: 0.4,
    sheen: 0.35,
    sssStrength: 0.35,
  },
  connective: {
    roughness: 0.38,
    metalness: 0.02,
    clearcoat: 0.3,
    clearcoatRoughness: 0.28,
    sheen: 0.22,
    sssStrength: 0.2,
  },
};

/** Strings the scene needs. Passed in so the engine stays locale-agnostic. */
export interface SceneLabels {
  formatPartName: (englishName: string) => string;
  sceneAria: string;
  errorWebgl: string;
  errorContextLost: string;
  errorFile: string;
  errorIncomplete: string;
  errorGeometry: string;
  errorGeneric: string;
}

interface Props {
  atlas: Atlas;
  state: SceneState;
  dark: boolean;
  labels: SceneLabels;
  onSelect: (id: string) => void;
  onPeelPart?: (id: string) => void;
  onProgress: (n: number) => void;
  onError: (s: string) => void;
}

/** Objects whose colour depends on the theme, plus a way to request a redraw. */
interface ThemeTargets {
  renderer: T.WebGLRenderer;
  ground: T.MeshStandardMaterial;
  platform: T.MeshStandardMaterial;
  ring: T.MeshBasicMaterial;
  innerRing: T.MeshBasicMaterial;
  marker: T.PointsMaterial;
  markDirty: () => void;
}

export default function AnatomyScene({
  atlas,
  state,
  dark,
  labels,
  onSelect,
  onPeelPart,
  onProgress,
  onError,
}: Props) {
  const host = useRef<HTMLDivElement>(null);
  const latest = useRef(state);
  const select = useRef(onSelect);
  const peel = useRef(onPeelPart);
  const theme = useRef<ThemeTargets | null>(null);
  const darkRef = useRef(dark);
  const labelsRef = useRef(labels);

  useEffect(() => {
    latest.current = state;
    select.current = onSelect;
    peel.current = onPeelPart;
    darkRef.current = dark;
    labelsRef.current = labels;
  });

  useEffect(() => {
    const el = host.current!;
    let disposed = false;
    let frame = 0;
    let dirty = true;
    let ready = false;
    let lastView = "";
    let lastRegion = "whole";
    let lastReset = -1;
    let lastFocusTrigger = 0;
    let lastZoomTrigger = 0;
    let lastOrbitTrigger = 0;
    let lastIsolate = "";
    let layoutKey = "";
    let amount = 0;
    let lastState: SceneState | null = null;
    let hoveredIndex = -1;
    let lastHoverRayTime = 0;
    const abort = new AbortController();

    // Smooth camera interpolation state
    let cameraAnimating = false;
    const goalTarget = new T.Vector3(0, 0.85, 0);
    const goalPosition = new T.Vector3(1.4, 1.05, 3.6);

    let renderer: T.WebGLRenderer;
    try {
      renderer = new T.WebGLRenderer({
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
      });
    } catch {
      onError(labelsRef.current.errorWebgl);
      return;
    }

    const palette = PALETTE[darkRef.current ? "dark" : "light"];

    renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 768 ? 1.75 : 2));
    renderer.setClearColor(palette.clear);
    renderer.outputColorSpace = T.SRGBColorSpace;
    renderer.toneMapping = T.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.16;
    el.appendChild(renderer.domElement);
    renderer.domElement.setAttribute("aria-label", labelsRef.current.sceneAria);

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(32, 1, 0.004, 100);
    const controls = new OrbitControls(camera, renderer.domElement);
    camera.position.copy(goalPosition);
    controls.target.copy(goalTarget);
    controls.enableDamping = true;
    controls.dampingFactor = 0.09;
    controls.minDistance = 0.05;
    controls.maxDistance = 40;
    controls.maxPolarAngle = Math.PI * 0.96;
    controls.zoomSpeed = 1.15;
    controls.rotateSpeed = 0.85;
    controls.panSpeed = 0.85;

    // Stop automatic camera fly-to as soon as the user manually grabs/scrolls
    const stopCameraAnimation = () => {
      cameraAnimating = false;
    };
    controls.addEventListener("start", stopCameraAnimation);
    controls.addEventListener("change", () => {
      dirty = true;
    });

    const pmrem = new T.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    const env = pmrem.fromScene(room, 0.035);
    scene.environment = env.texture;
    room.dispose();
    pmrem.dispose();

    // Studio 3-point + anatomical warm sub-fill lighting
    scene.add(new T.HemisphereLight(0xfffcf7, 0x8d96a3, 1.1));
    const key = new T.DirectionalLight(0xfff8ef, 2.45);
    key.position.set(-2.2, 4.2, 3.2);
    scene.add(key);
    const fill = new T.DirectionalLight(0xf3f7ff, 1.15);
    fill.position.set(2.5, 1.2, 2.4);
    scene.add(fill);
    const rim = new T.DirectionalLight(0xdbeafe, 1.95);
    rim.position.set(1.8, 2.5, -3.2);
    scene.add(rim);

    const groundMaterial = new T.MeshStandardMaterial({
      color: palette.ground,
      roughness: 0.95,
    });
    const ground = new T.Mesh(new T.CircleGeometry(30, 96), groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.019;
    scene.add(ground);

    const platformMaterial = new T.MeshStandardMaterial({
      color: palette.platform,
      metalness: 0.16,
      roughness: 0.58,
    });
    const platform = new T.Mesh(
      new T.CylinderGeometry(0.68, 0.7, 0.028, 100),
      platformMaterial,
    );
    platform.position.y = -0.016;
    scene.add(platform);

    const ringMaterial = new T.MeshBasicMaterial({
      color: palette.ring,
      transparent: true,
      opacity: 0.42,
      side: T.DoubleSide,
    });
    const ring = new T.Mesh(new T.RingGeometry(0.63, 0.633, 128), ringMaterial);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.001;
    scene.add(ring);

    const innerRingMaterial = new T.MeshBasicMaterial({
      color: palette.innerRing,
      transparent: true,
      opacity: 0.2,
      side: T.DoubleSide,
    });
    const innerRing = new T.Mesh(
      new T.RingGeometry(0.55, 0.552, 128),
      innerRingMaterial,
    );
    innerRing.rotation.x = -Math.PI / 2;
    innerRing.position.y = 0.001;
    scene.add(innerRing);

    // Per-part transform + visibility live in a texture:
    // R,G,B = dx,dy,dz offset; A = visibility/opacity (0 = hidden, 0.17 = X-Ray ghost, 1 = solid)
    const width = T.MathUtils.ceilPowerOfTwo(atlas.parts.length);
    const data = new Float32Array(width * 4);
    const partTexture = new T.DataTexture(
      data,
      width,
      1,
      T.RGBAFormat,
      T.FloatType,
    );
    partTexture.needsUpdate = true;

    // selectionTexture: R = selected (255), G = hovered (255), B = depth shade
    const selectedData = new Uint8Array(width * 4);
    const selectionTexture = new T.DataTexture(selectedData, width, 1);
    selectionTexture.needsUpdate = true;

    const materials: T.Material[] = [];
    const geometries: T.BufferGeometry[] = [];
    const pickers: (T.Mesh | undefined)[] = [];
    const centers = atlas.parts.map((p) =>
      new T.Vector3()
        .fromArray(p.bounds[0])
        .add(new T.Vector3().fromArray(p.bounds[1]))
        .multiplyScalar(0.5),
    );
    const offsets: T.Vector3[] = [];
    const bounds = atlas.parts.map(
      (p) =>
        new T.Box3(
          new T.Vector3().fromArray(p.bounds[0]),
          new T.Vector3().fromArray(p.bounds[1]),
        ),
    );

    // Compute anatomical superficial-to-deep peel score (0 = outermost, 1 = deepest bone)
    // so the Peel Depth slider strips layers naturally from skin -> outer muscles -> deep muscles -> vessels/organs -> skeleton.
    const partPeelOrder = atlas.parts.map((p, i) => {
      const c = centers[i];
      const bSize = bounds[i].getSize(new T.Vector3());
      const radialSurface = Math.min(
        1,
        Math.hypot(c.x * 0.85, c.z * 1.35) / 0.22 + (bSize.x + bSize.y) * 0.25,
      );
      switch (p.system) {
        case "integumentary":
          return 0.03;
        case "muscular":
        case "connective":
          // Outer muscles peel between 0.08 and 0.42; deeper muscles between 0.42 and 0.58
          return 0.58 - radialSurface * 0.5;
        case "lymphatic":
        case "venous":
          return 0.66 - radialSurface * 0.12;
        case "arterial":
        case "nervous":
          return 0.75 - radialSurface * 0.1;
        case "digestive":
        case "respiratory":
        case "urinary":
        case "reproductive":
        case "endocrine":
        case "cardiac":
        case "sensory":
          return 0.86 - radialSurface * 0.08;
        case "skeletal":
        default:
          return 0.98;
      }
    });

    // Pre-compute hand bounding box from actual hand/wrist parts for precision zoom
    const handBox = new T.Box3();
    atlas.parts.forEach((p, i) => {
      const n = p.name.toLowerCase();
      if (
        (n.includes("hand") ||
          n.includes("carpal") ||
          n.includes("metacarpal") ||
          n.includes("phalanx of finger") ||
          n.includes("thenar") ||
          n.includes("palmar")) &&
        centers[i].x < -0.08
      ) {
        handBox.union(bounds[i]);
      }
    });

    let packingWidth = 1;
    let packingHeight = 1;

    const markerPositions = new Float32Array(atlas.parts.length * 3);
    const markerGeometry = new T.BufferGeometry();
    markerGeometry.setAttribute(
      "position",
      new T.BufferAttribute(markerPositions, 3),
    );
    const markerMaterial = new T.PointsMaterial({
      color: palette.marker,
      size: 5,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.72,
      depthTest: false,
    });
    markerMaterial.onBeforeCompile = (shader) => {
      shader.fragmentShader = shader.fragmentShader.replace(
        "#include <clipping_planes_fragment>",
        "#include <clipping_planes_fragment>\nif (distance(gl_PointCoord, vec2(0.5)) > 0.5) discard;",
      );
    };
    const markers = new T.Points(markerGeometry, markerMaterial);
    markers.frustumCulled = false;
    markers.renderOrder = 10;
    markers.visible = false;
    scene.add(markers);

    theme.current = {
      renderer,
      ground: groundMaterial,
      platform: platformMaterial,
      ring: ringMaterial,
      innerRing: innerRingMaterial,
      marker: markerMaterial,
      markDirty: () => {
        dirty = true;
      },
    };

    const hover = document.createElement("div");
    hover.className = "atlas-part-hover";
    hover.setAttribute("role", "tooltip");
    hover.hidden = true;
    el.appendChild(hover);

    type Target = {
      index: number;
      x: number;
      y: number;
      left: number;
      right: number;
      top: number;
      bottom: number;
    };
    let targets: Target[] = [];
    const projected = new T.Vector3();

    const findTarget = (x: number, y: number, radius: number) => {
      let best = -1;
      let score = Infinity;
      for (const t of targets) {
        const dx = Math.max(t.left - x, 0, x - t.right);
        const dy = Math.max(t.top - y, 0, y - t.bottom);
        const distance = Math.hypot(dx, dy);
        if (distance > radius) continue;
        const candidate = distance + Math.hypot(t.x - x, t.y - y) * 0.025;
        if (candidate < score) {
          score = candidate;
          best = t.index;
        }
      }
      return best;
    };

    const materialFor = (system: SystemId) => {
      const baseColor = SYSTEMS.find((s) => s.id === system)?.color ?? "#aebbb8";
      const props = MATERIAL_PROPS[system] ?? MATERIAL_PROPS.skeletal;
      const m = new T.MeshPhysicalMaterial({
        color: baseColor,
        metalness: props.metalness,
        roughness: props.roughness,
        clearcoat: props.clearcoat,
        clearcoatRoughness: props.clearcoatRoughness,
        sheen: props.sheen,
        sheenColor: new T.Color(baseColor).lerp(new T.Color("#ffffff"), 0.35),
        side: T.DoubleSide,
      });
      m.onBeforeCompile = (shader) => {
        shader.uniforms.partState = { value: partTexture };
        shader.uniforms.selectionState = { value: selectionTexture };
        shader.uniforms.stateWidth = { value: width };
        shader.uniforms.sssStrength = { value: props.sssStrength };
        shader.vertexShader =
          "attribute float partIndex; uniform sampler2D partState; uniform sampler2D selectionState; uniform float stateWidth; varying float partVisible; varying float vPartSelected; varying float vPartHovered; varying float vPartHash;\n" +
          shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace(
          "#include <begin_vertex>",
          "#include <begin_vertex>\nvec2 stateUv = vec2((partIndex + 0.5) / stateWidth, 0.5); vec4 state = texture2D(partState, stateUv); vec4 selState = texture2D(selectionState, stateUv); transformed += state.xyz; partVisible = state.w; vPartSelected = selState.r; vPartHovered = selState.g; vPartHash = fract(sin(partIndex * 12.9898) * 43758.5453);",
        );
        shader.fragmentShader =
          "uniform float sssStrength; varying float partVisible; varying float vPartSelected; varying float vPartHovered; varying float vPartHash;\n" +
          shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <clipping_planes_fragment>",
          `#include <clipping_planes_fragment>
          if (partVisible < 0.02) discard;
          if (partVisible < 0.95) {
            float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
            if (ign > partVisible) discard;
          }`,
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <color_fragment>",
          `#include <color_fragment>
          // Subtle anatomical per-part tonal variation so neighboring muscles & bones are distinct
          diffuseColor.rgb *= (0.91 + 0.17 * vPartHash);
          // X-Ray ghost tint when translucent
          if (partVisible < 0.95) {
            diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.52, 0.74, 0.92), 0.38);
          }
          // Hover highlight (warm amber)
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.98, 0.80, 0.36), vPartHovered * 0.52);
          // Selected highlight (vivid emerald-cyan)
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.18, 0.90, 0.76), vPartSelected * 0.72);`,
        );
        shader.fragmentShader = shader.fragmentShader.replace(
          "#include <dithering_fragment>",
          `#include <dithering_fragment>
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), 2.5);
          // Organic subsurface scattering & rim contour
          gl_FragColor.rgb += gl_FragColor.rgb * fresnel * sssStrength;
          if (vPartSelected > 0.5) {
            gl_FragColor.rgb += vec3(0.15, 0.88, 0.74) * fresnel * 0.65;
          } else if (vPartHovered > 0.5) {
            gl_FragColor.rgb += vec3(1.0, 0.82, 0.38) * fresnel * 0.45;
          }`,
        );
      };
      materials.push(m);
      return m;
    };
    const mats = new Map(SYSTEMS.map((s) => [s.id, materialFor(s.id)]));

    let loaded = 0;
    const loadChunk = async (ci: number) => {
      const chunk = atlas.chunks[ci];
      const urls = resolveChunkUrls(chunk);
      const compressed =
        !!urls.gzip && typeof DecompressionStream !== "undefined";
      const response = await fetch(compressed ? urls.gzip! : urls.url, {
        signal: abort.signal,
      });
      const buffer = await decodeModelResponse(response, chunk.bytes, compressed, {
        failed: labelsRef.current.errorFile,
        incomplete: labelsRef.current.errorIncomplete,
      });
      if (disposed) return;

      const groups = new Map<string, T.BufferGeometry[]>();
      atlas.parts.forEach((p, i) => {
        if (p.chunk !== ci) return;
        const g = new T.BufferGeometry();
        g.setAttribute(
          "position",
          new T.BufferAttribute(
            new Float32Array(buffer, p.positions, p.vertexCount * 3),
            3,
          ),
        );
        g.setAttribute(
          "normal",
          new T.BufferAttribute(
            new Int16Array(buffer, p.normals, p.vertexCount * 3),
            3,
            true,
          ),
        );
        g.setIndex(
          new T.BufferAttribute(
            new Uint32Array(buffer, p.indices, p.indexCount),
            1,
          ),
        );
        g.boundingBox = bounds[i].clone();
        g.computeBoundingSphere();
        const pick = new T.Mesh(g);
        pick.matrixAutoUpdate = false;
        pickers[i] = pick;
        geometries.push(g);
        g.setAttribute(
          "partIndex",
          new T.BufferAttribute(new Float32Array(p.vertexCount).fill(i), 1),
        );
        const list = groups.get(p.system) ?? [];
        list.push(g);
        groups.set(p.system, list);
      });

      groups.forEach((gs, system) => {
        const geometry = mergeGeometries(gs, false);
        if (!geometry) throw new Error(labelsRef.current.errorGeometry);
        geometries.push(geometry);
        const mesh = new T.Mesh(geometry, mats.get(system as never));
        mesh.frustumCulled = false;
        scene.add(mesh);
      });

      lastState = null;
      loaded++;
      onProgress(Math.round((loaded / atlas.chunks.length) * 100));
      dirty = true;
    };

    void (async () => {
      try {
        let cursor = 0;
        await Promise.all(
          Array.from({ length: 3 }, async () => {
            while (cursor < atlas.chunks.length) {
              const i = cursor++;
              await loadChunk(i);
            }
          }),
        );
        if (!disposed) {
          ready = true;
          dirty = true;
        }
      } catch (e) {
        if (!disposed) {
          onError(e instanceof Error ? e.message : labelsRef.current.errorGeneric);
        }
      }
    })();

    const setCameraGoal = (
      target: T.Vector3,
      pos: T.Vector3,
      instant = false,
    ) => {
      goalTarget.copy(target);
      goalPosition.copy(pos);
      if (instant) {
        controls.target.copy(target);
        camera.position.copy(pos);
        controls.update();
        cameraAnimating = false;
      } else {
        cameraAnimating = true;
      }
      dirty = true;
    };

    const fit = (view: string, extent = 0, regionId = "whole", instant = false) => {
      const mobile = el.clientWidth < 768;
      const preset =
        REGION_PRESETS.find((r) => r.id === regionId) ?? REGION_PRESETS[0];

      if (regionId !== "whole" && extent < 0.2) {
        const target = new T.Vector3(...preset.target);
        let baseDist = preset.distance * (mobile ? 1.22 : 1.0);
        if (regionId === "hand" && !handBox.isEmpty()) {
          handBox.getCenter(target);
          const handSize = handBox.getSize(new T.Vector3());
          baseDist = Math.max(handSize.x, handSize.y, handSize.z) * (mobile ? 2.15 : 1.75);
        }
        const dir =
          view === "front"
            ? new T.Vector3(0, 0.04, 1).normalize()
            : view === "back"
              ? new T.Vector3(0, 0.04, -1).normalize()
              : view === "side"
                ? new T.Vector3(target.x < -0.05 ? -1 : 1, 0.04, 0.15).normalize()
                : new T.Vector3(...preset.direction).normalize();
        const pos = target.clone().addScaledVector(dir, baseDist);
        setCameraGoal(target, pos, instant);
        return;
      }

      const normalDistance = mobile
        ? Math.max(
            4.2,
            (1.75 * el.clientHeight) /
              Math.max(160, el.clientHeight - 330) /
              (2 * Math.tan(T.MathUtils.degToRad(camera.fov / 2))),
          )
        : 3.65;
      const reservedHeight = mobile ? 330 : 250;
      const availableAspect = Math.max(
        0.35,
        (el.clientWidth - (mobile ? 40 : 340)) /
          Math.max(160, el.clientHeight - reservedHeight),
      );
      const atlasDistance =
        ((Math.max(packingHeight, packingWidth / availableAspect) /
          (2 * Math.tan(T.MathUtils.degToRad(camera.fov / 2)))) *
          (el.clientHeight / Math.max(160, el.clientHeight - reservedHeight))) *
        1.08;
      const distance = T.MathUtils.lerp(
        normalDistance,
        Math.max(0.2, atlasDistance),
        extent,
      );
      if (extent > 0.8) view = "front";
      const direction =
        view === "front"
          ? new T.Vector3(0, 0.02, 1)
          : view === "back"
            ? new T.Vector3(0, 0.02, -1)
            : view === "side"
              ? new T.Vector3(1, 0.02, 0)
              : new T.Vector3(0.35, 0.06, 1).normalize();
      const target = new T.Vector3(
        extent > 0.1 && el.clientWidth > 767 ? -packingWidth * 0.12 : 0,
        extent > 0.1 || mobile ? 0.85 : 0.76,
        0,
      );
      const pos = target.clone().addScaledVector(direction, distance);
      setCameraGoal(target, pos, instant);
    };

    const focusOnParts = (partIds: string[]) => {
      if (!partIds.length) return;
      const box = new T.Box3();
      atlas.parts.forEach((p, i) => {
        if (partIds.includes(p.id)) {
          box.union(
            bounds[i]
              .clone()
              .translate(
                new T.Vector3(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]),
              ),
          );
        }
      });
      if (box.isEmpty()) return;
      const center = box.getCenter(new T.Vector3());
      const size = box.getSize(new T.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z, 0.08);
      const mobile = el.clientWidth < 768;
      const dist = Math.max(
        0.16,
        (maxDim / (2 * Math.tan(T.MathUtils.degToRad(camera.fov / 2)))) *
          (mobile ? 2.6 : 2.1),
      );
      // Pick an intelligent viewing direction based on where the structure sits on the body
      const currentDir = camera.position
        .clone()
        .sub(controls.target)
        .normalize();
      const smartDir = new T.Vector3(
        Math.abs(center.x) > 0.12 ? Math.sign(center.x) * 0.45 : currentDir.x * 0.4,
        0.12,
        center.z < -0.03 ? -0.9 : 0.9,
      ).normalize();
      const pos = center.clone().addScaledVector(smartDir, dist);
      setCameraGoal(center, pos, false);
    };

    const resize = () => {
      layoutKey = "";
      lastState = null;
      renderer.setPixelRatio(
        Math.min(
          devicePixelRatio,
          el.clientWidth < 768 || el.clientHeight < 600 ? 1.75 : 2,
        ),
      );
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
      fit(
        latest.current.view,
        amount,
        latest.current.region ?? "whole",
        true,
      );
    };
    const observer = new ResizeObserver(resize);
    observer.observe(el);

    const raycaster = new T.Raycaster();
    const pointer = new T.Vector2();
    const tap = new PointerTap();
    const worldBox = new T.Box3();
    const hitPoint = new T.Vector3();

    const setHoveredPart = (nextIndex: number) => {
      if (hoveredIndex === nextIndex) return;
      if (hoveredIndex >= 0) {
        selectedData[hoveredIndex * 4 + 1] = 0;
      }
      hoveredIndex = nextIndex;
      if (hoveredIndex >= 0) {
        selectedData[hoveredIndex * 4 + 1] = 255;
      }
      selectionTexture.needsUpdate = true;
      dirty = true;
    };

    const raycastPartAt = (clientX: number, clientY: number) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.set(
        ((clientX - rect.left) / rect.width) * 2 - 1,
        -((clientY - rect.top) / rect.height) * 2 + 1,
      );
      raycaster.setFromCamera(pointer, camera);
      let nearest = Infinity;
      let found = -1;
      // Only pick solid (non-ghosted, non-hidden) parts; skin only when shown alone.
      const hasSolidNonSkin = atlas.parts.some(
        (p, i) => p.system !== "integumentary" && data[i * 4 + 3] > 0.5,
      );
      pickers.forEach((mesh, i) => {
        if (
          !mesh ||
          data[i * 4 + 3] < 0.5 ||
          (hasSolidNonSkin && atlas.parts[i].system === "integumentary")
        ) {
          return;
        }
        worldBox.copy(bounds[i]).translate(mesh.position);
        if (!raycaster.ray.intersectBox(worldBox, hitPoint)) return;
        if (hitPoint.distanceTo(raycaster.ray.origin) > nearest) return;
        const hits = raycaster.intersectObject(mesh, false);
        if (hits[0] && hits[0].distance < nearest) {
          nearest = hits[0].distance;
          found = i;
        }
      });
      return found;
    };

    const down = (e: PointerEvent) => {
      hover.hidden = true;
      tap.down(
        e.pointerId,
        e.clientX,
        e.clientY,
        e.pointerType === "touch" ? 14 : 6,
      );
    };

    const move = (e: PointerEvent) => {
      tap.move(e.pointerId, e.clientX, e.clientY);
      if (e.buttons || e.pointerType === "touch" || !ready) {
        hover.hidden = true;
        setHoveredPart(-1);
        return;
      }
      const now = performance.now();
      if (now - lastHoverRayTime < 38) return;
      lastHoverRayTime = now;

      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      let index = amount >= 0.5 ? findTarget(x, y, 12) : -1;
      if (index < 0) {
        index = raycastPartAt(e.clientX, e.clientY);
      }
      setHoveredPart(index);
      hover.hidden = index < 0;
      renderer.domElement.style.cursor =
        index < 0
          ? "grab"
          : latest.current.mode === "peel"
            ? "crosshair"
            : "pointer";
      if (index >= 0) {
        const partName = labelsRef.current.formatPartName(atlas.parts[index].name);
        hover.textContent =
          latest.current.mode === "peel" ? `🔪 Odsłoń: ${partName}` : partName;
        hover.style.left = `${Math.max(8, Math.min(x + 14, el.clientWidth - 260))}px`;
        hover.style.top = `${Math.max(8, Math.min(y + 18, el.clientHeight - 55))}px`;
      }
    };

    const cancel = (e: PointerEvent) => {
      tap.cancel(e.pointerId);
      setHoveredPart(-1);
    };

    let lastTapTime = 0;
    let lastTappedId = "";

    const up = (e: PointerEvent) => {
      const validTap = tap.up(e.pointerId, e.clientX, e.clientY);
      if (!validTap || !ready) return;
      const rect = renderer.domElement.getBoundingClientRect();
      let found = raycastPartAt(e.clientX, e.clientY);
      if (found < 0 && amount > 0.45) {
        found = findTarget(
          e.clientX - rect.left,
          e.clientY - rect.top,
          e.pointerType === "touch" ? 24 : 16,
        );
      }
      if (found >= 0) {
        hover.hidden = true;
        setHoveredPart(-1);
        const partId = atlas.parts[found].id;

        // In Peel/Dissection mode, clicking peels the clicked muscle/layer away
        // to reveal deeper structures directly underneath!
        if (latest.current.mode === "peel" && peel.current) {
          peel.current(partId);
          return;
        }

        const now = performance.now();
        const isDoubleTap = now - lastTapTime < 360 && lastTappedId === partId;
        lastTapTime = now;
        lastTappedId = partId;

        select.current(partId);
        if (isDoubleTap && !latest.current.isolate) {
          focusOnParts([partId]);
        }
      }
    };

    renderer.domElement.addEventListener("pointerdown", down);
    renderer.domElement.addEventListener("pointermove", move);
    renderer.domElement.addEventListener("pointerup", up);
    renderer.domElement.addEventListener("pointercancel", cancel);

    const clock = new T.Clock();
    let lastExtent = -1;

    const animate = () => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);
      const dt = Math.min(clock.getDelta(), 0.05);
      const s = latest.current;

      const changed =
        lastState?.visible !== s.visible ||
        lastState?.selected !== s.selected ||
        lastState?.isolate !== s.isolate ||
        lastState?.peeled !== s.peeled ||
        lastState?.peelDepth !== s.peelDepth ||
        lastState?.xray !== s.xray;
      const moving = Math.abs(amount - s.explode) > 0.0001;
      if (moving) {
        amount = T.MathUtils.damp(amount, s.explode, 8, dt);
        dirty = true;
      }

      // Smooth camera interpolation toward goalTarget & goalPosition
      if (cameraAnimating) {
        controls.target.x = T.MathUtils.damp(controls.target.x, goalTarget.x, 9, dt);
        controls.target.y = T.MathUtils.damp(controls.target.y, goalTarget.y, 9, dt);
        controls.target.z = T.MathUtils.damp(controls.target.z, goalTarget.z, 9, dt);
        camera.position.x = T.MathUtils.damp(camera.position.x, goalPosition.x, 9, dt);
        camera.position.y = T.MathUtils.damp(camera.position.y, goalPosition.y, 9, dt);
        camera.position.z = T.MathUtils.damp(camera.position.z, goalPosition.z, 9, dt);
        if (
          controls.target.distanceToSquared(goalTarget) < 0.00001 &&
          camera.position.distanceToSquared(goalPosition) < 0.00001
        ) {
          cameraAnimating = false;
        }
        dirty = true;
      }

      if (changed || moving || lastExtent < 0) {
        const visible = new Set(s.visible);
        const selection = new Set(s.selected);
        const peeledSet = new Set(s.peeled ?? []);
        const peelThreshold = (s.peelDepth ?? 0) * 0.9;
        const xrayActive = Boolean(s.xray && selection.size > 0 && !s.isolate);

        const isPartShown = (p: Atlas["parts"][number], i: number) => {
          if (selection.has(p.id)) return true;
          if (s.isolate) return false;
          if (peeledSet.has(p.id)) return false;
          if (peelThreshold > 0.01 && partPeelOrder[i] <= peelThreshold) return false;
          return visible.has(p.system);
        };

        const visibleParts = atlas.parts.filter((p, i) => isPartShown(p, i));
        const nextLayoutKey =
          visibleParts.length +
          ":" +
          (s.isolate ? s.selected.join(",") : s.visible.join(",")) +
          ":" +
          camera.aspect.toFixed(3);
        if (nextLayoutKey !== layoutKey) {
          const layout = createExplosionLayout(visibleParts, camera.aspect);
          packingWidth = layout.width;
          packingHeight = layout.height;
          atlas.parts.forEach((p, i) => {
            const cell = layout.cells.get(p.id);
            offsets[i] = cell
              ? new T.Vector3(cell.x, cell.y + 0.85, 0)
              : centers[i].clone();
          });
          layoutKey = nextLayoutKey;
          if (amount > 0.05 && !s.isolate) {
            fit(s.view, Math.max(0, (amount - 0.3) / 0.7), s.region ?? "whole");
          }
        }

        atlas.parts.forEach((p, i) => {
          const c = centers[i];
          const destination = offsets[i];
          const group = SYSTEMS.findIndex((sys) => sys.id === p.system);
          const angle = (group / SYSTEMS.length) * Math.PI * 2;
          let dx = 0;
          let dy = 0;
          let dz = 0;
          if (amount <= 0.45) {
            const t = amount / 0.45;
            dx = Math.sin(angle) * t * 0.48;
            dy = (c.y - 0.85) * t * 0.28;
            dz = Math.cos(angle) * t * 0.48;
          } else {
            const t = (amount - 0.45) / 0.55;
            dx = T.MathUtils.lerp(Math.sin(angle) * 0.48, destination.x - c.x, t);
            dy = T.MathUtils.lerp((c.y - 0.85) * 0.28, destination.y - c.y, t);
            dz = T.MathUtils.lerp(Math.cos(angle) * 0.48, -c.z, t);
          }
          const selected = selection.has(p.id);
          const shown = isPartShown(p, i);
          let alpha = 0;
          if (shown) {
            if (selected) {
              alpha = 1;
            } else if (xrayActive) {
              alpha = 0.16;
            } else if (p.system === "integumentary") {
              alpha = 0.18;
            } else {
              alpha = 1;
            }
          }
          data.set([dx, dy, dz, alpha], i * 4);
          selectedData[i * 4] = selected ? 255 : 0;
          markerPositions.set(
            alpha > 0.5 ? [c.x + dx, c.y + dy, c.z + dz] : [10000, 10000, 10000],
            i * 3,
          );
          const mesh = pickers[i];
          if (mesh) {
            mesh.position.set(dx, dy, dz);
            mesh.updateMatrix();
            mesh.updateMatrixWorld(true);
          }
        });
        partTexture.needsUpdate = true;
        selectionTexture.needsUpdate = true;
        markerGeometry.attributes.position.needsUpdate = true;
        lastState = s;
        lastExtent = amount;
        dirty = true;
      }

      const currentRegion = s.region ?? "whole";
      if (
        s.view !== lastView ||
        currentRegion !== lastRegion ||
        s.reset !== lastReset
      ) {
        fit(s.view, amount, currentRegion, false);
        lastView = s.view;
        lastRegion = currentRegion;
        lastReset = s.reset;
      }

      if ((s.focusTrigger ?? 0) !== lastFocusTrigger) {
        lastFocusTrigger = s.focusTrigger ?? 0;
        focusOnParts(s.selected);
      }

      if ((s.zoomTrigger ?? 0) !== lastZoomTrigger) {
        lastZoomTrigger = s.zoomTrigger ?? 0;
        const step = s.zoomStep ?? -1;
        const offset = camera.position.clone().sub(controls.target);
        const factor = step > 0 ? 0.72 : 1.35;
        const nextLen = T.MathUtils.clamp(
          offset.length() * factor,
          controls.minDistance,
          controls.maxDistance,
        );
        offset.setLength(nextLen);
        setCameraGoal(
          controls.target.clone(),
          controls.target.clone().add(offset),
          false,
        );
      }

      if ((s.orbitTrigger ?? 0) !== lastOrbitTrigger) {
        lastOrbitTrigger = s.orbitTrigger ?? 0;
        const az = s.orbitAzimuth ?? 0;
        const pol = s.orbitPolar ?? 0;
        const offset = camera.position.clone().sub(controls.target);
        const spherical = new T.Spherical().setFromVector3(offset);
        spherical.theta += az;
        spherical.phi = T.MathUtils.clamp(
          spherical.phi + pol,
          0.12,
          Math.PI * 0.92,
        );
        offset.setFromSpherical(spherical);
        setCameraGoal(
          controls.target.clone(),
          controls.target.clone().add(offset),
          false,
        );
      }

      if (moving && !s.isolate) {
        fit(
          amount > 0.5 ? "front" : s.view,
          Math.max(0, (amount - 0.3) / 0.7),
          currentRegion,
          true,
        );
      }

      const isolateKey = s.isolate
        ? s.selected.join(",") +
          ":" +
          s.reset +
          ":" +
          s.inspectorOpen +
          ":" +
          camera.aspect
        : "";
      if (isolateKey !== lastIsolate || (s.isolate && moving)) {
        if (s.isolate) {
          const box = new T.Box3();
          atlas.parts.forEach((p, i) => {
            if (s.selected.includes(p.id)) {
              box.union(
                bounds[i]
                  .clone()
                  .translate(
                    new T.Vector3(
                      data[i * 4],
                      data[i * 4 + 1],
                      data[i * 4 + 2],
                    ),
                  ),
              );
            }
          });
          if (!box.isEmpty()) {
            const center = box.getCenter(new T.Vector3());
            const size = box.getSize(new T.Vector3());
            const w = el.clientWidth;
            const h = el.clientHeight;
            const mobile = w < 768;
            const landscape = w > h && h <= 600;
            let left = 20;
            let right = w - 20;
            let top = mobile ? 175 : 110;
            let bottom = h - 170;
            if (s.inspectorOpen) {
              if (landscape) {
                right = w - 335;
                top = 100;
                bottom = h - 125;
              } else if (mobile) {
                const sheet = document
                  .querySelector(".atlas-detail-sheet")
                  ?.getBoundingClientRect();
                const header = document
                  .querySelector(".atlas-identity")
                  ?.getBoundingClientRect();
                top = (header?.bottom ?? 94) + 16;
                bottom = (sheet?.top ?? h * 0.58 - 139) - 16;
              } else {
                right = w - 370;
                left = w > 1100 ? 285 : 25;
              }
            }
            const availableWidth = Math.max(150, right - left);
            const availableHeight = Math.max(40, bottom - top);
            camera.setViewOffset(
              w,
              h,
              w / 2 - (left + right) / 2,
              h / 2 - (top + bottom) / 2,
              w,
              h,
            );
            const distance = Math.max(
              0.07,
              (Math.max(
                (size.y * h) / availableHeight,
                (size.x * w) / availableWidth / camera.aspect,
                size.z,
              ) /
                (2 * Math.tan(T.MathUtils.degToRad(camera.fov / 2)))) *
                1.35,
            );
            controls.maxDistance = Math.max(40, distance * 2);
            const pos = center
              .clone()
              .add(new T.Vector3(0.2, 0.1, 1).normalize().multiplyScalar(distance));
            setCameraGoal(center, pos, false);
          }
        } else if (lastIsolate) {
          camera.clearViewOffset();
          fit(s.view, amount, currentRegion, false);
        }
        lastIsolate = isolateKey;
      }

      controls.enableRotate = amount < 0.8;
      controls.mouseButtons.LEFT = amount < 0.8 ? T.MOUSE.ROTATE : T.MOUSE.PAN;
      controls.touches.ONE = amount < 0.8 ? T.TOUCH.ROTATE : T.TOUCH.PAN;
      ground.visible =
        platform.visible =
        ring.visible =
        innerRing.visible =
          amount < 0.5 && !s.isolate;
      markers.visible = amount > 0.75;
      controls.autoRotate = s.rotate && !s.isolate && amount < 0.4 && !cameraAnimating;
      controls.autoRotateSpeed = 0.75;
      controls.update();
      if (controls.autoRotate) dirty = true;

      if (dirty) {
        renderer.render(scene, camera);
        targets = [];
        if (amount > 0.45) {
          const hasSolid = atlas.parts.some(
            (p, i) => p.system !== "integumentary" && data[i * 4 + 3] > 0.5,
          );
          atlas.parts.forEach((p, i) => {
            if (
              data[i * 4 + 3] < 0.5 ||
              (hasSolid && p.system === "integumentary")
            ) {
              return;
            }
            let left = Infinity;
            let right = -Infinity;
            let top = Infinity;
            let bottom = -Infinity;
            for (let corner = 0; corner < 8; corner++) {
              projected
                .set(
                  p.bounds[corner & 1 ? 1 : 0][0] + data[i * 4],
                  p.bounds[corner & 2 ? 1 : 0][1] + data[i * 4 + 1],
                  p.bounds[corner & 4 ? 1 : 0][2] + data[i * 4 + 2],
                )
                .project(camera);
              const x = ((projected.x + 1) * el.clientWidth) / 2;
              const y = ((1 - projected.y) * el.clientHeight) / 2;
              left = Math.min(left, x);
              right = Math.max(right, x);
              top = Math.min(top, y);
              bottom = Math.max(bottom, y);
            }
            projected
              .copy(centers[i])
              .add(
                new T.Vector3(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]),
              )
              .project(camera);
            if (projected.z < -1 || projected.z > 1) return;
            targets.push({
              index: i,
              x: ((projected.x + 1) * el.clientWidth) / 2,
              y: ((1 - projected.y) * el.clientHeight) / 2,
              left,
              right,
              top,
              bottom,
            });
          });
        }
        dirty = false;
      }
    };
    animate();

    const contextLost = (e: Event) => {
      e.preventDefault();
      onError(labelsRef.current.errorContextLost);
    };
    renderer.domElement.addEventListener("webglcontextlost", contextLost);

    return () => {
      disposed = true;
      theme.current = null;
      abort.abort();
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      scene.traverse((o) => {
        if (o instanceof T.Mesh && !geometries.includes(o.geometry)) {
          o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : [o.material];
          ms.forEach((m) => m.dispose());
        }
      });
      env.dispose();
      partTexture.dispose();
      selectionTexture.dispose();
      markerGeometry.dispose();
      markerMaterial.dispose();
      hover.remove();
      renderer.dispose();
      renderer.domElement.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atlas]);

  useEffect(() => {
    const t = theme.current;
    if (!t) return;
    const palette = PALETTE[dark ? "dark" : "light"];
    t.renderer.setClearColor(palette.clear);
    t.ground.color.set(palette.ground);
    t.platform.color.set(palette.platform);
    t.ring.color.set(palette.ring);
    t.innerRing.color.set(palette.innerRing);
    t.marker.color.set(palette.marker);
    t.markDirty();
  }, [dark]);

  return <div className="atlas-scene" ref={host} />;
}
