"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as T from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Activity, Dna, Pause, Play, RotateCcw, Sun } from "lucide-react";

type BiologyTabMode = "biomolecules-3d" | "metabolism-simulator";
type BiomoleculeId = "dna" | "rna" | "atp" | "protein";

interface BiomoleculeInfo {
  id: BiomoleculeId;
  titlePl: string;
  subtitle: string;
  monomer: string;
  bonds: string;
  ckeFact: string;
}

const BIOMOLECULE_SPECS: Record<BiomoleculeId, BiomoleculeInfo> = {
  dna: {
    id: "dna",
    titlePl: "Podwójna helisa B-DNA",
    subtitle: "Nici antyrównoległe (5'→3' oraz 3'→5') • Skręt co 10 pz (3,4 nm)",
    monomer: "Deoksyrybonukleotydy (deoksyryboza + reszta H₃PO₄ + A/T/G/C)",
    bonds: "Wiązania fosfodiestrowe w nici + wiązania wodorowe (A=T podwójne, G≡C potrójne)",
    ckeFact:
      "Reguła Chargaffa: %A = %T oraz %G = %C. DNA o wyższej zawartości par G≡C ma wyższą temperaturę topnienia (denaturacji).",
  },
  rna: {
    id: "rna",
    titlePl: "Spinka jednoniciowego RNA",
    subtitle: "Struktura II-rzędowa (np. ramię tRNA / pre-mRNA) z uracylem (U)",
    monomer: "Rybonukleotydy (ryboza z grupą 2'-OH + H₃PO₄ + A/U/G/C)",
    bonds: "Kowalencyjne wiązania 3',5'-fosfodiestrowe + lokalne parowanie A=U i G≡C",
    ckeFact:
      "Obecność grupy 2'-OH w rybozie czyni RNA mniej trwałym chemicznie w środowisku zasadowym niż DNA, lecz umożliwia funkcje katalityczne (rybozymy).",
  },
  atp: {
    id: "atp",
    titlePl: "Adenozynotrifosforan (ATP)",
    subtitle: "Uniwersalny nośnik energii chemicznej w komórce",
    monomer: "Adenina (puryna) + Ryboza + 3 reszty fosforanowe (α, β, γ)",
    bonds: "1 wiązanie estrowe (niskoenergetyczne) + 2 bezwodnikowe (~P wysokoenergetyczne)",
    ckeFact:
      "PUŁAPKA CKE: ATP = nukleotyd trójfosforanowy (NIE sam nukleozyd). Hydroliza ATP → ADP + Pi uwalnia ok. −30,5 kJ/mol.",
  },
  protein: {
    id: "protein",
    titlePl: "α-Helisa i β-Kartka Białek",
    subtitle: "Struktura drugorzędowa stabilizowana wiązaniami wodorowymi",
    monomer: "20 białkowych L-α-aminokwasów połączonych wiązaniem peptydowym",
    bonds: "Wiązania wodorowe C=O ··· H−N wzdłuż szkieletu polipeptydowego (nie łańcuchy boczne R!)",
    ckeFact:
      "Mostki disiarczkowe (−S−S−) między resztami cysteiny stabilizują strukturę TRZECIORZĘDOWĄ, a wiązania wodorowe szkieletu — DRUGORZĘDOWĄ.",
  },
};

const PHOTOSYNTHESIS_STAGES = [
  {
    step: 1,
    title: "Krok 1: Wzbudzenie PSII (P680) i fotoliza wody w lumenie",
    desc: "Fotony (680 nm) wybijają elektrony z chlorofilu a w PSII. Brak elektronów uzupełnia rozkład wody: 2 H₂O → O₂↑ + 4 H⁺ + 4 e⁻.",
  },
  {
    step: 2,
    title: "Krok 2: Łańcuch PQ → Cyt b₆f → PC (pompowanie H⁺)",
    desc: "Elektrony płyną przez układ przenośników, wykorzystując energię do aktywnego pompowania protonów H⁺ ze stromy do wnętrza tylakoidu.",
  },
  {
    step: 3,
    title: "Krok 3: Wzbudzenie PSI (P700) → Redukcja NADP⁺ do NADPH",
    desc: "Kolejny kwant światła (700 nm) wzbudza elektrony w PSI, skąd przez ferredoksynę (Fd) redukują koenzym NADP⁺ po stronie stromy.",
  },
  {
    step: 4,
    title: "Krok 4: Chemiosmoza — gradient H⁺ napędza syntazę ATP",
    desc: "Protony H⁺ wracają zgodnie z gradientem przez wirujący kanał F₀/F₁ syntazy ATP z lumenu do stromy, syntetyzując ATP z ADP + Pi.",
  },
  {
    step: 5,
    title: "Krok 5: Cykl Calvina w stromie (RuBisCO → PGAL → Glukoza)",
    desc: "Enzym RuBisCO przyłącza CO₂ do RuBP (karboksylacja). Redukcja 3-PGA do PGAL i regeneracja RuBP zużywają 18 ATP oraz 12 NADPH na 1 cząsteczkę glukozy.",
  },
];

function createCylinder(
  p1: [number, number, number],
  p2: [number, number, number],
  radius: number,
  color: number,
  opacity = 1,
): T.Mesh {
  const v1 = new T.Vector3(...p1);
  const v2 = new T.Vector3(...p2);
  const diff = v2.clone().sub(v1);
  const len = Math.max(0.01, diff.length());
  const mat = new T.MeshStandardMaterial({
    color,
    roughness: 0.3,
    metalness: 0.15,
    transparent: opacity < 1,
    opacity,
  });
  const mesh = new T.Mesh(
    new T.CylinderGeometry(radius, radius, len, 12),
    mat,
  );
  mesh.position.copy(v1).add(v2).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), diff.normalize());
  return mesh;
}

function disposeThreeGroup(group: T.Group) {
  group.traverse((obj) => {
    if (obj instanceof T.Mesh) {
      obj.geometry.dispose();
      if (Array.isArray(obj.material)) {
        obj.material.forEach((m) => m.dispose());
      } else {
        obj.material.dispose();
      }
    }
  });
}

export interface BiologyInteractiveWidgetProps {
  initialMode?: BiologyTabMode;
}

export function BiologyInteractiveWidget({
  initialMode = "biomolecules-3d",
}: BiologyInteractiveWidgetProps) {
  const [tab, setTab] = useState<BiologyTabMode>(initialMode);
  const [molecule, setMolecule] = useState<BiomoleculeId>("dna");
  const [autoRotate, setAutoRotate] = useState(true);
  const [resetTick, setResetTick] = useState(0);
  const [webglError, setWebglError] = useState<string | null>(null);

  // Simulator controls
  const [simStep, setSimStep] = useState<number>(1);
  const [simPlaying, setSimPlaying] = useState<boolean>(false);
  const [lightLevel, setLightLevel] = useState<number>(80);
  const [co2Level, setCo2Level] = useState<number>(420);

  const mountRef = useRef<HTMLDivElement | null>(null);

  // Build WebGL 3D biomolecules when tab === biomolecules-3d
  useEffect(() => {
    if (tab !== "biomolecules-3d") return;
    const container = mountRef.current;
    if (!container) return;

    let renderer: T.WebGLRenderer;
    try {
      renderer = new T.WebGLRenderer({ antialias: true, alpha: true });
      setWebglError(null);
    } catch {
      setWebglError(
        "Brak wsparcia WebGL w bieżącym środowisku przeglądarki.",
      );
      return;
    }

    const w = Math.max(280, container.clientWidth);
    const h = Math.max(250, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new T.Scene();
    const camera = new T.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.set(0, 0.8, molecule === "dna" ? 7.0 : 5.8);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 1.4;

    scene.add(new T.AmbientLight(0xffffff, 0.85));
    const keyLight = new T.DirectionalLight(0xffffff, 1.45);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);
    const rimLight = new T.DirectionalLight(0x10b981, 0.7);
    rimLight.position.set(-5, -4, -3);
    scene.add(rimLight);

    const root = new T.Group();
    scene.add(root);

    const pulseMeshes: T.Mesh[] = [];

    if (molecule === "dna") {
      // B-DNA Double Helix (12 base pairs along Y from -2.75 to +2.75)
      const count = 12;
      const radius = 1.25;
      const stepY = 0.48;
      const twist = (34.3 * Math.PI) / 180;
      const phaseOffset = Math.PI * 0.78; // Creates major & minor groove asymmetry!

      let prevA: [number, number, number] | null = null;
      let prevB: [number, number, number] | null = null;

      for (let i = 0; i < count; i += 1) {
        const y = (i - (count - 1) / 2) * stepY;
        const a1 = i * twist;
        const a2 = a1 + phaseOffset;

        const pA: [number, number, number] = [
          Math.cos(a1) * radius,
          y,
          Math.sin(a1) * radius,
        ];
        const pB: [number, number, number] = [
          Math.cos(a2) * radius,
          y,
          Math.sin(a2) * radius,
        ];

        // Sugar-phosphate backbone nodes
        for (const [idxStrand, pos] of [
          [0, pA],
          [1, pB],
        ] as const) {
          const bead = new T.Mesh(
            new T.SphereGeometry(0.16, 16, 16),
            new T.MeshStandardMaterial({
              color: idxStrand === 0 ? 0x38bdf8 : 0x818cf8,
              roughness: 0.3,
            }),
          );
          bead.position.set(...pos);
          root.add(bead);
        }

        if (prevA) root.add(createCylinder(prevA, pA, 0.08, 0x0284c7));
        if (prevB) root.add(createCylinder(prevB, pB, 0.08, 0x6366f1));
        prevA = pA;
        prevB = pB;

        // Midpoint base pair bridge (alternating A=T vs G≡C colors)
        const isGC = i % 2 === 0;
        const mid: [number, number, number] = [
          (pA[0] + pB[0]) * 0.5,
          y,
          (pA[2] + pB[2]) * 0.5,
        ];
        root.add(
          createCylinder(pA, mid, 0.07, isGC ? 0x10b981 : 0xf59e0b),
        );
        root.add(
          createCylinder(mid, pB, 0.07, isGC ? 0x22d3ee : 0xf43f5e),
        );
      }
    } else if (molecule === "rna") {
      // Single-stranded RNA with stem-loop curve
      const points = 18;
      let prev: [number, number, number] | null = null;
      const baseColors = [0x10b981, 0xa855f7, 0x38bdf8, 0xf59e0b]; // A, U, G, C

      for (let i = 0; i < points; i += 1) {
        const t = i / (points - 1);
        const angle = t * Math.PI * 2.2;
        const r = 1.15 - Math.sin(t * Math.PI) * 0.35;
        const pos: [number, number, number] = [
          Math.cos(angle) * r,
          (t - 0.5) * 3.6,
          Math.sin(angle) * r,
        ];

        const backbone = new T.Mesh(
          new T.SphereGeometry(0.16, 16, 16),
          new T.MeshStandardMaterial({ color: 0xc084fc }),
        );
        backbone.position.set(...pos);
        root.add(backbone);

        if (prev) root.add(createCylinder(prev, pos, 0.075, 0x9333ea));
        prev = pos;

        // Protruding ribonucleotide base (A/U/G/C)
        const dir = new T.Vector3(-pos[0], 0, -pos[2]).normalize().multiplyScalar(0.65);
        const basePos: [number, number, number] = [
          pos[0] + dir.x,
          pos[1],
          pos[2] + dir.z,
        ];
        root.add(
          createCylinder(pos, basePos, 0.06, baseColors[i % baseColors.length]),
        );
      }
    } else if (molecule === "atp") {
      // Adenosine (purine double ring + ribose pentagon) + 3 phosphates (alpha, beta, gamma)
      const purinePts: [number, number, number][] = [
        [-2.3, 0.4, 0],
        [-2.0, 0.95, 0.1],
        [-1.35, 0.95, 0.15],
        [-1.05, 0.4, 0.08],
        [-1.35, -0.15, 0],
        [-2.0, -0.15, -0.05],
      ];
      for (let i = 0; i < purinePts.length; i += 1) {
        const p1 = purinePts[i];
        const p2 = purinePts[(i + 1) % purinePts.length];
        const atom = new T.Mesh(
          new T.SphereGeometry(0.14, 14, 14),
          new T.MeshStandardMaterial({
            color: i % 2 === 0 ? 0x3b82f6 : 0x71717a,
          }),
        );
        atom.position.set(...p1);
        root.add(atom);
        root.add(createCylinder(p1, p2, 0.055, 0x94a3b8));
      }

      // Ribose connector
      const rib: [number, number, number] = [-0.4, -0.2, 0.1];
      const ribMesh = new T.Mesh(
        new T.CylinderGeometry(0.45, 0.45, 0.22, 5),
        new T.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.35 }),
      );
      ribMesh.position.set(...rib);
      ribMesh.rotation.x = Math.PI / 2;
      root.add(ribMesh);
      root.add(createCylinder(purinePts[3], rib, 0.06, 0x94a3b8));

      // Three phosphate groups (alpha, beta, gamma) with high-energy pulsing ~P bonds
      const pCoords: [number, number, number][] = [
        [0.45, 0.0, 0],
        [1.25, 0.28, 0],
        [2.05, -0.05, 0],
      ];
      root.add(createCylinder(rib, pCoords[0], 0.065, 0xa1a1aa));

      pCoords.forEach((pPos, idx) => {
        const pSphere = new T.Mesh(
          new T.SphereGeometry(0.24, 20, 20),
          new T.MeshStandardMaterial({
            color: 0xf97316,
            emissive: 0x9a3412,
            emissiveIntensity: 0.35,
          }),
        );
        pSphere.position.set(...pPos);
        root.add(pSphere);

        // Oxygen satellites
        for (const [ox, oy, oz] of [
          [0, 0.38, 0.1],
          [0, -0.35, -0.15],
        ] as const) {
          const oPos: [number, number, number] = [
            pPos[0] + ox,
            pPos[1] + oy,
            pPos[2] + oz,
          ];
          const oMesh = new T.Mesh(
            new T.SphereGeometry(0.13, 14, 14),
            new T.MeshStandardMaterial({ color: 0xef4444 }),
          );
          oMesh.position.set(...oPos);
          root.add(oMesh);
          root.add(createCylinder(pPos, oPos, 0.045, 0xd4d4d8));
        }

        if (idx > 0) {
          // High-energy phosphoanhydride bond (~P)
          const energyBond = createCylinder(
            pCoords[idx - 1],
            pPos,
            0.09,
            0x34d399,
          );
          pulseMeshes.push(energyBond);
          root.add(energyBond);
        }
      });
    } else {
      // Protein secondary structures: Alpha-Helix on left, Antiparallel Beta-Sheet on right
      const helixX = -1.35;
      let prevH: [number, number, number] | null = null;
      const helixNodes: [number, number, number][] = [];
      for (let i = 0; i < 16; i += 1) {
        const ang = i * 1.1;
        const pos: [number, number, number] = [
          helixX + Math.cos(ang) * 0.65,
          (i - 7.5) * 0.25,
          Math.sin(ang) * 0.65,
        ];
        const ca = new T.Mesh(
          new T.SphereGeometry(0.13, 14, 14),
          new T.MeshStandardMaterial({ color: 0x38bdf8 }),
        );
        ca.position.set(...pos);
        root.add(ca);
        if (prevH) root.add(createCylinder(prevH, pos, 0.065, 0x0284c7));
        prevH = pos;
        helixNodes.push(pos);
        // Intra-chain hydrogen bond i -> i+3
        if (i >= 3) {
          root.add(createCylinder(helixNodes[i - 3], pos, 0.025, 0xfbbf24, 0.75));
        }
      }

      // Antiparallel Beta-Sheet strands on right
      const strandXs = [0.65, 1.35, 2.05];
      const strandPts: [number, number, number][][] = [];
      strandXs.forEach((sx, sIdx) => {
        const pts: [number, number, number][] = [];
        for (let j = 0; j < 6; j += 1) {
          const y = (j - 2.5) * 0.62;
          const z = (j % 2 === 0 ? 1 : -1) * 0.2;
          const pos: [number, number, number] = [sx, y, z];
          const node = new T.Mesh(
            new T.SphereGeometry(0.12, 14, 14),
            new T.MeshStandardMaterial({
              color: sIdx % 2 === 0 ? 0x10b981 : 0x34d399,
            }),
          );
          node.position.set(...pos);
          root.add(node);
          if (j > 0) root.add(createCylinder(pts[j - 1], pos, 0.06, 0x059669));
          pts.push(pos);
        }
        strandPts.push(pts);
      });

      // Lateral H-bonds between beta strands
      for (let j = 0; j < 6; j += 1) {
        root.add(
          createCylinder(strandPts[0][j], strandPts[1][j], 0.025, 0xfbbf24, 0.75),
        );
        root.add(
          createCylinder(strandPts[1][j], strandPts[2][j], 0.025, 0xfbbf24, 0.75),
        );
      }
    }

    let rafId = 0;
    const startMs = performance.now();
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = (performance.now() - startMs) * 0.001;
      for (const m of pulseMeshes) {
        const mat = m.material as T.MeshStandardMaterial;
        mat.emissive = new T.Color(0x10b981);
        mat.emissiveIntensity = 0.4 + 0.4 * Math.sin(t * 4);
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = Math.max(280, container.clientWidth);
      const nh = Math.max(250, container.clientHeight);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      disposeThreeGroup(root);
      renderer.dispose();
    };
  }, [tab, molecule, autoRotate, resetTick]);

  // Auto-advance Photosynthesis simulator when playing
  useEffect(() => {
    if (tab !== "metabolism-simulator" || !simPlaying) return;
    const timer = window.setInterval(() => {
      setSimStep((s) => (s >= 5 ? 1 : s + 1));
    }, 2400);
    return () => window.clearInterval(timer);
  }, [tab, simPlaying]);

  const activeBio = BIOMOLECULE_SPECS[molecule];
  const activeStage =
    PHOTOSYNTHESIS_STAGES.find((s) => s.step === simStep) ??
    PHOTOSYNTHESIS_STAGES[0];

  // Calculate Blackman's law limiting factor & relative photosynthesis rate (%)
  const co2Normalized = Math.min(100, Math.round((co2Level / 550) * 100));
  const atpOutputRate = Math.min(lightLevel, co2Normalized);
  const limitingFactor =
    lightLevel < 15
      ? "Ciemność / brak światła — faza jasna zatrzymana (brak ATP i NADPH)"
      : lightLevel < co2Normalized
        ? "Czynnik ograniczający: Natężenie światła"
        : co2Level < 250
          ? "Czynnik ograniczający: Stężenie CO₂ (spowalnia cykl Calvina)"
          : "Optymalne wysycenie światła i CO₂";

  return (
    <div className="my-5 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-lg">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 bg-zinc-900/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <Dna className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
            Biologia Molekularna & Metabolizm 3D • SportNotes
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => setTab("biomolecules-3d")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
              tab === "biomolecules-3d"
                ? "bg-emerald-500 text-zinc-950"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <Dna className="h-3.5 w-3.5" aria-hidden="true" />
            Biomolekuły 3D
          </button>
          <button
            type="button"
            onClick={() => setTab("metabolism-simulator")}
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
              tab === "metabolism-simulator"
                ? "bg-emerald-500 text-zinc-950"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            }`}
          >
            <Sun className="h-3.5 w-3.5" aria-hidden="true" />
            Symulator Fotosyntezy
          </button>
        </div>
      </div>

      {tab === "biomolecules-3d" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* 3D Canvas */}
          <div className="flex flex-col border-b border-zinc-800 bg-zinc-950 lg:col-span-6 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-zinc-900 px-3 py-2 text-[11px] text-zinc-400">
              <span>{activeBio.titlePl}</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setAutoRotate((v) => !v)}
                  className={`rounded border px-2 py-0.5 text-[10px] ${
                    autoRotate
                      ? "border-emerald-700 bg-emerald-950/60 text-emerald-300"
                      : "border-zinc-700 bg-zinc-900 text-zinc-400"
                  }`}
                >
                  {autoRotate ? "Obrót: WŁ" : "Obrót: WYŁ"}
                </button>
                <button
                  type="button"
                  onClick={() => setResetTick((t) => t + 1)}
                  className="inline-flex items-center gap-1 rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-300"
                >
                  <RotateCcw className="h-3 w-3" aria-hidden="true" />
                  Reset
                </button>
              </div>
            </div>

            <div
              ref={mountRef}
              className="h-[270px] w-full cursor-grab active:cursor-grabbing sm:h-[310px]"
            >
              {webglError && (
                <div className="flex h-full items-center justify-center p-4 text-center text-xs text-amber-300">
                  {webglError}
                </div>
              )}
            </div>
          </div>

          {/* Right Info Pane */}
          <div className="p-4 lg:col-span-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {(["dna", "rna", "atp", "protein"] as BiomoleculeId[]).map(
                (id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setMolecule(id)}
                    className={`rounded-lg border px-2.5 py-2 text-center text-xs font-semibold uppercase transition-colors ${
                      molecule === id
                        ? "border-emerald-500 bg-emerald-950/60 text-emerald-200"
                        : "border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    {id === "protein" ? "α/β Białko" : id}
                  </button>
                ),
              )}
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/75 p-3 text-xs space-y-2">
              <div>
                <h4 className="font-semibold text-zinc-100">
                  {activeBio.titlePl}
                </h4>
                <p className="text-[11px] text-sky-300">{activeBio.subtitle}</p>
              </div>
              <p className="text-zinc-300">
                <strong className="text-zinc-400">Monomery / budulec:</strong>{" "}
                {activeBio.monomer}
              </p>
              <p className="text-zinc-300">
                <strong className="text-zinc-400">Kluczowe wiązania:</strong>{" "}
                {activeBio.bonds}
              </p>
              <div className="rounded border border-amber-900/60 bg-amber-950/30 p-2 text-[11px] text-amber-200">
                {activeBio.ckeFact}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 space-y-4">
          {/* Interactive Controls */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3">
              <div className="flex justify-between text-xs font-medium">
                <span>Natężenie światła</span>
                <span className="font-mono text-amber-300">{lightLevel}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={lightLevel}
                onChange={(e) => setLightLevel(Number(e.target.value))}
                className="mt-2 w-full accent-emerald-500"
              />
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-3">
              <div className="flex justify-between text-xs font-medium">
                <span>Stężenie CO₂ w stromie</span>
                <span className="font-mono text-sky-300">{co2Level} ppm</span>
              </div>
              <input
                type="range"
                min={100}
                max={800}
                step={20}
                value={co2Level}
                onChange={(e) => setCo2Level(Number(e.target.value))}
                className="mt-2 w-full accent-sky-400"
              />
            </div>

            <div className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/70 p-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Wydajność fotosyntezy:</span>
                <span className="font-mono text-sm font-bold text-emerald-400">
                  {atpOutputRate}%
                </span>
              </div>
              <p className="mt-1 text-[11px] text-amber-200">
                <Activity className="mr-1 inline h-3 w-3" />
                {limitingFactor}
              </p>
            </div>
          </div>

          {/* Interactive SVG Thylakoid + Calvin Animation */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-3 lg:col-span-7">
              <svg
                viewBox="0 0 100 56"
                className="w-full h-auto select-none"
                role="img"
                aria-label="Symulator fazy jasnej i ciemnej fotosyntezy"
              >
                <rect width="100" height="56" rx="2" fill="#09090b" />
                <text x="3" y="7" fill="#a1a1aa" fontSize="3.2">
                  Stroma chloroplastu (Cykl Calvina)
                </text>
                <text x="3" y="51" fill="#38bdf8" fontSize="3.2">
                  Lumen tylakoidu (Gradient H⁺: {lightLevel}%)
                </text>

                {/* Lipid bilayer */}
                <rect
                  x="3"
                  y="24"
                  width="94"
                  height="9"
                  rx="2"
                  fill="#064e3b"
                  fillOpacity="0.45"
                  stroke="#10b981"
                  strokeWidth="0.5"
                />

                {/* PSII, b6f, PSI, ATP Synthase */}
                <rect
                  x="8"
                  y="20"
                  width="12"
                  height="16"
                  rx="2"
                  fill={simStep === 1 ? "#166534" : "#14532d"}
                  stroke={simStep === 1 ? "#34d399" : "#22c55e"}
                  strokeWidth={simStep === 1 ? "0.9" : "0.5"}
                />
                <text x="10.5" y="29.5" fill="#dcfce7" fontSize="3.1">
                  PSII
                </text>

                <rect
                  x="26"
                  y="21"
                  width="10"
                  height="14"
                  rx="2"
                  fill="#1e293b"
                  stroke={simStep === 2 ? "#38bdf8" : "#475569"}
                  strokeWidth={simStep === 2 ? "0.9" : "0.5"}
                />
                <text x="28" y="29.5" fill="#bae6fd" fontSize="2.8">
                  b₆f
                </text>

                <rect
                  x="42"
                  y="20"
                  width="11"
                  height="16"
                  rx="2"
                  fill={simStep === 3 ? "#166534" : "#14532d"}
                  stroke={simStep === 3 ? "#34d399" : "#22c55e"}
                  strokeWidth={simStep === 3 ? "0.9" : "0.5"}
                />
                <text x="45" y="29.5" fill="#dcfce7" fontSize="3.1">
                  PSI
                </text>

                {/* Rotating ATP Synthase */}
                <polygon
                  points="61,19 71,19 69,38 63,38"
                  fill={simStep === 4 ? "#4c1d95" : "#312e81"}
                  stroke={simStep === 4 ? "#c4b5fd" : "#7c3aed"}
                  strokeWidth="0.7"
                />
                <text x="62.2" y="29.5" fill="#ede9fe" fontSize="2.9">
                  ATP
                </text>

                {/* Electron transport highlight */}
                {lightLevel > 10 && (
                  <path
                    d="M 14 23 L 31 23 L 47 23"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="0.9"
                    strokeDasharray="2 1"
                  />
                )}

                {/* Calvin cycle wheel */}
                <circle
                  cx="85"
                  cy="14"
                  r="9"
                  fill="none"
                  stroke={simStep === 5 ? "#34d399" : "#52525b"}
                  strokeWidth="1"
                  strokeDasharray="3 1.5"
                />
                <text x="80" y="13.5" fill="#e4e4e7" fontSize="2.8">
                  Calvina
                </text>
                <text x="79.5" y="17.2" fill="#34d399" fontSize="2.6">
                  CO₂→PGAL
                </text>

                <text x="8" y="42" fill="#7dd3fc" fontSize="2.8">
                  H₂O → ½O₂ + 2H⁺
                </text>
                <text x="41" y="14" fill="#fbbf24" fontSize="2.8">
                  NADP⁺ → NADPH
                </text>
              </svg>
            </div>

            {/* Stepper Explanation & Autoplay */}
            <div className="flex flex-col justify-between rounded-lg border border-zinc-800 bg-zinc-900/75 p-3 lg:col-span-5">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-1">
                    {PHOTOSYNTHESIS_STAGES.map((st) => (
                      <button
                        key={st.step}
                        type="button"
                        onClick={() => {
                          setSimPlaying(false);
                          setSimStep(st.step);
                        }}
                        className={`h-6 w-6 rounded font-mono text-xs font-bold ${
                          simStep === st.step
                            ? "bg-emerald-500 text-zinc-950"
                            : "bg-zinc-800 text-zinc-400 hover:text-zinc-200"
                        }`}
                      >
                        {st.step}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSimPlaying((p) => !p)}
                    className="inline-flex items-center gap-1 rounded border border-emerald-700 bg-emerald-950/60 px-2.5 py-1 text-[11px] font-medium text-emerald-300"
                  >
                    {simPlaying ? (
                      <>
                        <Pause className="h-3 w-3" aria-hidden="true" />
                        Pauza
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3" aria-hidden="true" />
                        Symuluj etapy
                      </>
                    )}
                  </button>
                </div>

                <h4 className="text-xs font-semibold text-emerald-300">
                  {activeStage.title}
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeStage.desc}
                </p>
              </div>

              <div className="mt-3 rounded border border-zinc-800 bg-zinc-950 p-2 font-mono text-[11px] text-zinc-300">
                Bilans na 1 glukozę: 6 CO₂ + 18 ATP + 12 NADPH → C₆H₁₂O₆
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
