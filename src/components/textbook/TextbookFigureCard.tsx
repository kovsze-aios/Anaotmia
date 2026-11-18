"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import type { SvgSchematicTheme, TextbookFigure } from "@/types/textbook-figures";

function SchematicArtwork({
  theme,
  markerId,
}: {
  theme: SvgSchematicTheme;
  markerId: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`Schemat (${theme})`}
      className="h-full w-full select-none"
    >
      <defs>
        <linearGradient id={`${markerId}-grad`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#09090b" />
          <stop offset="100%" stopColor="#18181b" />
        </linearGradient>
      </defs>

      {/* Subtle cleanroom diagnostic grid background */}
      <rect width="100" height="100" fill={`url(#${markerId}-grad)`} rx="3" />
      <g stroke="#27272a" strokeWidth="0.22" opacity="0.7">
        {[20, 40, 60, 80].map((v) => (
          <g key={v}>
            <line x1={v} y1="0" x2={v} y2="100" />
            <line x1="0" y1={v} x2="100" y2={v} />
          </g>
        ))}
      </g>

      {theme === "osteon" && (
        <g>
          {/* Compact bone outer block */}
          <rect
            x="10"
            y="14"
            width="46"
            height="72"
            rx="4"
            fill="#1f1f23"
            stroke="#52525b"
            strokeWidth="0.7"
          />
          {/* Periosteum band & Sharpey's fibers */}
          <rect
            x="7"
            y="14"
            width="5"
            height="72"
            rx="1.5"
            fill="#27272a"
            fillOpacity="0.85"
            stroke="#d4d4d8"
            strokeWidth="0.7"
          />
          <line x1="11" y1="26" x2="16" y2="29" stroke="#e4e4e7" strokeWidth="0.45" />
          <line x1="11" y1="42" x2="16" y2="45" stroke="#e4e4e7" strokeWidth="0.45" />
          <line x1="11" y1="76" x2="16" y2="79" stroke="#e4e4e7" strokeWidth="0.45" />

          {/* Concentric osteon lamellae */}
          {[22, 16, 10].map((r, i) => (
            <circle
              key={r}
              cx="28"
              cy="46"
              r={r}
              fill="none"
              stroke="#a1a1aa"
              strokeWidth={i === 0 ? "0.7" : "0.5"}
              strokeDasharray={i === 1 ? "2 1" : undefined}
              opacity={0.75}
            />
          ))}
          {/* Secondary osteon upper right */}
          {[11, 7].map((r) => (
            <circle
              key={r}
              cx="46"
              cy="24"
              r={r}
              fill="none"
              stroke="#71717a"
              strokeWidth="0.45"
              opacity="0.65"
            />
          ))}
          <circle cx="46" cy="24" r="2.2" fill="#a1a1aa" fillOpacity="0.55" />

          {/* Central Haversian Canal + vessels */}
          <circle
            cx="28"
            cy="46"
            r="4.2"
            fill="#09090b"
            stroke="#e4e4e7"
            strokeWidth="0.8"
          />
          <circle cx="27.2" cy="46" r="1.4" fill="#fafafa" />
          <circle cx="29.4" cy="46.4" r="1.2" fill="#71717a" />

          {/* Perforating Volkmann canal */}
          <path
            d="M 9 68 H 58 M 28 46 V 68"
            fill="none"
            stroke="#e4e4e7"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 9 69.8 H 58 M 29.6 46 V 69.8"
            fill="none"
            stroke="#71717a"
            strokeWidth="1.1"
            strokeDasharray="1.5 1"
            strokeLinecap="round"
          />

          {/* Osteocyte lacunae + radiating canaliculi */}
          {[
            [42, 35],
            [36, 30],
            [17, 36],
            [20, 56],
          ].map(([lx, ly], idx) => (
            <g key={idx}>
              <ellipse
                cx={lx}
                cy={ly}
                rx="1.6"
                ry="0.9"
                fill="#fafafa"
                opacity="0.9"
              />
              <line
                x1={lx}
                y1={ly}
                x2="28"
                y2="46"
                stroke="#d4d4d8"
                strokeWidth="0.25"
                strokeDasharray="0.8 0.8"
                opacity="0.45"
              />
            </g>
          ))}

          {/* Spongy trabeculae + bone marrow sinusoids on the right */}
          <rect
            x="58"
            y="14"
            width="35"
            height="72"
            rx="4"
            fill="#18181b"
            fillOpacity="0.8"
            stroke="#52525b"
            strokeWidth="0.6"
          />
          <path
            d="M 58 24 C 66 28, 72 18, 80 26 C 86 32, 76 42, 92 40
               M 58 44 C 68 38, 74 52, 84 48 C 89 46, 90 58, 92 60
               M 58 66 C 69 58, 75 74, 86 68 C 88 67, 90 78, 92 80
               M 72 22 C 74 36, 66 56, 76 80"
            fill="none"
            stroke="#d4d4d8"
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.72"
          />
        </g>
      )}

      {theme === "heart-valves" && (
        <g>
          {/* Great vessels: Aortic arch & Pulmonary trunk */}
          <path
            d="M 46 38 C 46 15, 68 12, 70 28"
            fill="none"
            stroke="#e4e4e7"
            strokeWidth="6.5"
            strokeLinecap="round"
          />
          <path
            d="M 42 52 C 42 30, 56 26, 63 22"
            fill="none"
            stroke="#71717a"
            strokeWidth="4.8"
            strokeLinecap="round"
          />
          {/* Heart chambers outer contour */}
          <path
            d="M 22 28 C 12 42, 16 74, 65 86 C 85 80, 86 42, 78 26 C 68 18, 34 18, 22 28 Z"
            fill="#18181b"
            fillOpacity="0.7"
            stroke="#e4e4e7"
            strokeWidth="0.9"
          />
          {/* Thick Left Ventricle wall vs thinner Right Ventricle */}
          <path
            d="M 52 80 C 66 86, 80 76, 79 48"
            fill="none"
            stroke="#fafafa"
            strokeWidth="4.2"
            strokeLinecap="round"
            opacity="0.75"
          />
          {/* Interatrial and interventricular septum */}
          <path
            d="M 50 24 L 49 48 L 51 82"
            fill="none"
            stroke="#d4d4d8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Tricuspid & Mitral valves */}
          <line x1="20" y1="48" x2="48" y2="48" stroke="#fafafa" strokeWidth="1.2" strokeDasharray="3 1.5" />
          <line x1="51" y1="48" x2="78" y2="48" stroke="#fafafa" strokeWidth="1.2" strokeDasharray="3 1.5" />
          {/* Chamber shading (right vs left) */}
          <circle cx="29" cy="36" r="9" fill="#3f3f46" fillOpacity="0.32" />
          <circle cx="32" cy="64" r="11" fill="#3f3f46" fillOpacity="0.32" />
          <circle cx="71" cy="35" r="8.5" fill="#71717a" fillOpacity="0.28" />
          <circle cx="66" cy="65" r="11" fill="#71717a" fillOpacity="0.28" />
        </g>
      )}

      {theme === "brachial-plexus" && (
        <g strokeLinecap="round" strokeLinejoin="round">
          {/* C5 - Th1 nerve roots */}
          {[26, 37, 48, 59, 70].map((ry, i) => (
            <g key={ry}>
              <line x1="8" y1={ry} x2="26" y2={ry} stroke="#fafafa" strokeWidth="1.6" />
              <text x="9" y={ry - 2} fill="#e4e4e7" fontSize="3.2" fontFamily="monospace">
                {["C5", "C6", "C7", "C8", "Th1"][i]}
              </text>
            </g>
          ))}
          {/* Trunks: Upper, Middle, Lower */}
          <path d="M 26 26 L 37 33 M 26 37 L 37 33" stroke="#d4d4d8" strokeWidth="1.7" />
          <path d="M 26 48 L 43 48" stroke="#d4d4d8" strokeWidth="1.7" />
          <path d="M 26 59 L 37 66 M 26 70 L 37 66" stroke="#d4d4d8" strokeWidth="1.7" />

          {/* Divisions -> Lateral, Posterior, Medial Cords */}
          <path d="M 37 33 L 58 24 M 43 48 L 58 24" stroke="#e4e4e7" strokeWidth="1.5" />
          <path d="M 37 33 L 58 50 M 43 48 L 58 50 M 37 66 L 58 50" stroke="#a1a1aa" strokeWidth="1.4" strokeDasharray="2 1" />
          <path d="M 37 66 L 58 76" stroke="#d4d4d8" strokeWidth="1.6" />

          {/* Axillary artery reference behind/between cords */}
          <rect x="61" y="45" width="7" height="10" rx="2" fill="#27272a" fillOpacity="0.85" stroke="#a1a1aa" strokeWidth="0.6" />

          {/* Terminal M: Musculocutaneous, Axillary, Radial, Median, Ulnar */}
          <path d="M 58 24 L 88 18" stroke="#e4e4e7" strokeWidth="1.5" />
          <path d="M 58 24 L 74 48 L 88 48" stroke="#fafafa" strokeWidth="1.7" />
          <path d="M 58 76 L 74 48" stroke="#fafafa" strokeWidth="1.7" />
          <path d="M 58 50 L 88 56" stroke="#a1a1aa" strokeWidth="1.7" strokeDasharray="2.5 1.2" />
          <path d="M 58 76 L 88 80" stroke="#d4d4d8" strokeWidth="1.6" />
        </g>
      )}

      {theme === "willis-circle" && (
        <g stroke="#e4e4e7" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Vertebral arteries joining into Basilar artery */}
          <path d="M 39 94 C 39 84, 46 80, 50 76" strokeWidth="2.2" />
          <path d="M 61 94 C 61 84, 54 80, 50 76" strokeWidth="2.2" />
          <line x1="50" y1="76" x2="50" y2="58" strokeWidth="3.2" />
          {/* Pontine branches */}
          {[63, 68, 72].map((py) => (
            <g key={py}>
              <line x1="50" y1={py} x2="40" y2={py} strokeWidth="0.8" />
              <line x1="50" y1={py} x2="60" y2={py} strokeWidth="0.8" />
            </g>
          ))}
          {/* Posterior Cerebral Arteries (PCA) */}
          <path d="M 50 58 C 40 58, 32 62, 20 67" strokeWidth="2.2" />
          <path d="M 50 58 C 60 58, 68 62, 80 67" strokeWidth="2.2" />
          {/* Posterior Communicating Arteries (PComA) */}
          <line x1="38" y1="60" x2="31" y2="42" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="2 1" />
          <line x1="62" y1="60" x2="69" y2="42" stroke="#a1a1aa" strokeWidth="1.5" strokeDasharray="2 1" />
          {/* ICA cross-section + MCA outward */}
          <circle cx="29" cy="42" r="3" fill="#27272a" strokeWidth="1.2" />
          <circle cx="71" cy="42" r="3" fill="#27272a" strokeWidth="1.2" />
          <path d="M 27 42 C 18 40, 12 37, 8 34" strokeWidth="2.5" />
          <path d="M 73 42 C 82 40, 88 37, 92 34" strokeWidth="2.5" />
          {/* ACA upward + AComA bridge */}
          <path d="M 31 39 C 37 26, 42 20, 44 10" strokeWidth="2" />
          <path d="M 69 39 C 63 26, 58 20, 56 10" strokeWidth="2" />
          <line x1="42" y1="18" x2="58" y2="18" stroke="#fafafa" strokeWidth="1.9" />
        </g>
      )}

      {theme === "nephron" && (
        <g>
          {/* Cortex / Medulla boundary line */}
          <line x1="4" y1="45" x2="96" y2="45" stroke="#52525b" strokeWidth="0.7" strokeDasharray="2 2" />
          <text x="6" y="42" fill="#a1a1aa" fontSize="3.3">KORA NERKI</text>
          <text x="6" y="51" fill="#a1a1aa" fontSize="3.3">RDZEŃ NERKI</text>

          {/* Bowman's capsule + Glomerulus (rete mirabile) */}
          <circle cx="22" cy="26" r="8" fill="#18181b" stroke="#e4e4e7" strokeWidth="1.3" />
          <path d="M 8 24 H 17 M 18 28 H 10" stroke="#fafafa" strokeWidth="1.7" />
          <circle cx="21" cy="26" r="4.2" fill="#a1a1aa" fillOpacity="0.6" />

          {/* Proximal Tubule -> Loop of Henle -> Distal Tubule -> Collecting Duct */}
          <path
            d="M 29 24 C 36 16, 42 32, 47 24 C 50 18, 46 34, 46 45 V 75 C 46 84, 58 84, 58 75 V 32 C 58 20, 66 32, 71 25 L 82 25"
            fill="none"
            stroke="#d4d4d8"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Collecting duct */}
          <path
            d="M 83 18 V 88 M 77 36 L 83 41 M 78 55 L 83 60"
            fill="none"
            stroke="#71717a"
            strokeWidth="3.0"
            strokeLinecap="round"
          />
        </g>
      )}

      {theme === "lungs-alveoli" && (
        <g>
          {/* Trachea & primary bronchi + Carina */}
          <path
            d="M 38 8 V 25 L 25 40 M 38 25 L 52 40"
            fill="none"
            stroke="#e4e4e7"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Right Lung (3 lobes: horizontal + oblique fissure) */}
          <path
            d="M 33 28 C 16 28, 10 48, 12 72 C 18 76, 33 74, 34 62 Z"
            fill="#27272a"
            fillOpacity="0.45"
            stroke="#d4d4d8"
            strokeWidth="0.9"
          />
          <line x1="12" y1="44" x2="32" y2="44" stroke="#a1a1aa" strokeWidth="0.6" strokeDasharray="1.5 1" />
          <line x1="13" y1="62" x2="33" y2="47" stroke="#a1a1aa" strokeWidth="0.6" strokeDasharray="1.5 1" />

          {/* Left Lung (2 lobes + cardiac notch) */}
          <path
            d="M 43 28 C 58 28, 63 48, 61 72 C 54 74, 46 72, 49 62 C 50 56, 44 54, 43 44 Z"
            fill="#27272a"
            fillOpacity="0.45"
            stroke="#d4d4d8"
            strokeWidth="0.9"
          />

          {/* Zoomed Alveolus cluster on the right */}
          <rect
            x="67"
            y="22"
            width="28"
            height="58"
            rx="4"
            fill="#18181b"
            stroke="#52525b"
            strokeWidth="0.6"
          />
          <path d="M 76 22 V 37 L 82 44" fill="none" stroke="#e4e4e7" strokeWidth="2" />
          {[
            [82, 50, 7],
            [75, 58, 6],
            [88, 59, 6],
            [82, 67, 6.5],
          ].map(([ax, ay, ar], idx) => (
            <circle
              key={idx}
              cx={ax}
              cy={ay}
              r={ar}
              fill="#27272a"
              fillOpacity="0.4"
              stroke="#d4d4d8"
              strokeWidth="0.9"
            />
          ))}
          <path
            d="M 70 68 C 78 76, 87 76, 93 66"
            fill="none"
            stroke="#fafafa"
            strokeWidth="1.4"
          />
        </g>
      )}

      {theme === "action-potential" && (
        <g>
          {/* Reference voltage dashed lines: +35 mV (y=18), -55 mV (y=62), -70 mV (y=76) */}
          <line x1="12" y1="18" x2="90" y2="18" stroke="#52525b" strokeWidth="0.35" strokeDasharray="1.5 1.5" />
          <line x1="12" y1="62" x2="90" y2="62" stroke="#a1a1aa" strokeWidth="0.45" strokeDasharray="2 1.5" />
          <line x1="12" y1="76" x2="90" y2="76" stroke="#71717a" strokeWidth="0.35" strokeDasharray="1.5 1.5" />
          {/* Voltage axis & labels */}
          <line x1="12" y1="12" x2="12" y2="88" stroke="#71717a" strokeWidth="0.6" />
          <text x="2.5" y="19" fill="#a1a1aa" fontSize="2.7">+35</text>
          <text x="2.5" y="63" fill="#e4e4e7" fontSize="2.7">−55</text>
          <text x="2.5" y="77" fill="#a1a1aa" fontSize="2.7">−70</text>
          <text x="2.5" y="88" fill="#d4d4d8" fontSize="2.7">−85</text>
          <text x="15" y="12" fill="#e4e4e7" fontSize="3.2" fontWeight="bold">mV</text>

          {/* Main membrane potential curve calibrated to (16,76) -> (36,46) -> (46,18) -> (60,50) -> (73,86) */}
          <path
            d="M 12 76 L 26 76 C 30 76, 32 62, 36 46 C 40 30, 43 18, 46 18 C 49 18, 54 34, 60 50 C 65 65, 69 86, 73 86 C 78 86, 82 76, 90 76"
            fill="none"
            stroke="#fafafa"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <text x="38" y="45" fill="#e4e4e7" fontSize="2.8">Na+</text>
          <text x="62" y="48" fill="#a1a1aa" fontSize="2.8">K+</text>
          {/* Myelinated axon Ranvier nodes inset */}
          <line x1="56" y1="93" x2="90" y2="93" stroke="#71717a" strokeWidth="0.8" />
          {[58, 68, 78].map((rx) => (
            <rect key={rx} x={rx} y="90.8" width="6.5" height="4.4" rx="1.6" fill="#27272a" stroke="#a1a1aa" strokeWidth="0.4" />
          ))}
        </g>
      )}

      {theme === "wiggers-ecg" && (
        <g>
          {/* Top panel: Aortic & LV pressures */}
          <line x1="12" y1="14" x2="12" y2="54" stroke="#71717a" strokeWidth="0.5" />
          <line x1="12" y1="54" x2="92" y2="54" stroke="#52525b" strokeWidth="0.4" />
          <text x="2.5" y="21" fill="#e4e4e7" fontSize="2.6">120</text>
          <text x="3.5" y="34" fill="#a1a1aa" fontSize="2.6">80</text>
          <text x="5" y="54" fill="#a1a1aa" fontSize="2.6">0</text>
          {/* Aortic pressure curve with dicrotic notch */}
          <path
            d="M 14 34 L 48 33 L 56 20 L 66 28 L 68 31 L 72 29 L 90 35"
            fill="none"
            stroke="#a1a1aa"
            strokeWidth="0.95"
            strokeDasharray="2 1"
          />
          {/* Left ventricular pressure curve */}
          <path
            d="M 14 51 L 34 51 L 45 48 L 49 32 L 56 20 L 64 29 L 70 51 L 90 50"
            fill="none"
            stroke="#fafafa"
            strokeWidth="1.25"
          />
          <text x="45" y="43" fill="#e4e4e7" fontSize="2.5">S1</text>
          <text x="69" y="27" fill="#e4e4e7" fontSize="2.5">S2</text>

          {/* Bottom panel: ECG P-QRS-T */}
          <line x1="12" y1="78" x2="92" y2="78" stroke="#52525b" strokeWidth="0.4" />
          <path
            d="M 14 78 L 19 78 Q 22 71 25 78 L 36 78 L 38 81 L 41 63 L 44 82 L 46 78 L 63 78 Q 68 69 73 78 L 90 78"
            fill="none"
            stroke="#d4d4d8"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
          <text x="20.5" y="84" fill="#a1a1aa" fontSize="2.8">P</text>
          <text x="38.5" y="87" fill="#d4d4d8" fontSize="2.8">QRS</text>
          <text x="67" y="84" fill="#a1a1aa" fontSize="2.8">T</text>
        </g>
      )}

      {theme === "bohr-oxygen-curve" && (
        <g>
          {/* Left panel: Alveolus (24,28) + Capillary RBC (28,66) */}
          <circle
            cx="24"
            cy="28"
            r="13"
            fill="#18181b"
            fillOpacity="0.85"
            stroke="#d4d4d8"
            strokeWidth="1"
          />
          <text x="15.5" y="22" fill="#e4e4e7" fontSize="2.8">O2</text>
          <text x="27" y="22" fill="#a1a1aa" fontSize="2.6">CO2</text>
          {/* Capillary tube & erythrocyte */}
          <path d="M 8 58 Q 28 54 44 58" fill="none" stroke="#71717a" strokeWidth="0.9" />
          <path d="M 8 74 Q 28 70 44 74" fill="none" stroke="#71717a" strokeWidth="0.9" />
          <ellipse
            cx="28"
            cy="66"
            rx="7"
            ry="4"
            fill="#27272a"
            fillOpacity="0.8"
            stroke="#e4e4e7"
            strokeWidth="0.8"
          />
          <text x="24" y="67.2" fill="#fafafa" fontSize="2.7">HbO2</text>

          {/* Right panel: Bohr curve %HbO2 vs pO2 */}
          <line x1="53" y1="18" x2="53" y2="82" stroke="#71717a" strokeWidth="0.6" />
          <line x1="53" y1="82" x2="94" y2="82" stroke="#71717a" strokeWidth="0.6" />
          <text x="48" y="21" fill="#a1a1aa" fontSize="2.6">100%</text>
          <text x="72" y="87.5" fill="#a1a1aa" fontSize="2.6">pO2 (mmHg)</text>
          {/* Normal pH 7.4 sigmoid curve */}
          <path
            d="M 53 82 C 58 76, 61 62, 65 52 C 70 38, 75 26, 84 24 L 93 22"
            fill="none"
            stroke="#fafafa"
            strokeWidth="1.3"
          />
          {/* Bohr right-shifted curve (↑CO2, ↓pH) */}
          <path
            d="M 53 82 C 62 79, 68 68, 74 58 C 79 45, 84 30, 93 26"
            fill="none"
            stroke="#a1a1aa"
            strokeWidth="1.15"
            strokeDasharray="2.2 1.4"
          />
          <text x="76" y="64" fill="#d4d4d8" fontSize="2.6">Bohr →</text>
        </g>
      )}

      {theme === "photosynthesis-thylakoid" && (
        <g>
          {/* Thylakoid lipid bilayer band */}
          <rect x="6" y="42" width="88" height="10" rx="2" fill="#18181b" fillOpacity="0.85" stroke="#71717a" strokeWidth="0.6" />
          <text x="8" y="34" fill="#a1a1aa" fontSize="2.8">Stroma</text>
          <text x="8" y="72" fill="#d4d4d8" fontSize="2.8">Lumen tylakoidu (↑H+)</text>

          {/* PSII (16,47), Cyt b6f (32,47), PSI (47,47), ATP synthase (62,47) */}
          <rect
            x="11"
            y="38"
            width="10"
            height="18"
            rx="2"
            fill="#27272a"
            stroke="#e4e4e7"
            strokeWidth="0.9"
          />
          <text x="12.7" y="48.2" fill="#fafafa" fontSize="2.7">PSII</text>

          <rect x="27.5" y="39" width="9" height="16" rx="2" fill="#18181b" stroke="#a1a1aa" strokeWidth="0.8" />
          <text x="29" y="48.2" fill="#e4e4e7" fontSize="2.5">b6f</text>

          <rect x="42.5" y="38" width="9" height="18" rx="2" fill="#27272a" stroke="#e4e4e7" strokeWidth="0.8" />
          <text x="44.8" y="48.2" fill="#fafafa" fontSize="2.7">PSI</text>

          <path d="M 58 37 L 66 37 L 64.5 57 L 59.5 57 Z" fill="#18181b" stroke="#d4d4d8" strokeWidth="0.8" />
          <text x="58.7" y="48.2" fill="#fafafa" fontSize="2.4">ATP</text>

          {/* Electron path and light arrows */}
          <path d="M 16 42 L 32 42 L 47 42" fill="none" stroke="#fafafa" strokeWidth="0.8" strokeDasharray="1.5 1" />
          <text x="10.5" y="63" fill="#a1a1aa" fontSize="2.5">H2O → ½O2 + 2H+</text>

          {/* Calvin Cycle circle in stroma (80, 24) */}
          <circle
            cx="80"
            cy="24"
            r="11"
            fill="none"
            stroke="#a1a1aa"
            strokeWidth="1"
            strokeDasharray="3 1.5"
          />
          <text x="73.5" y="23.5" fill="#e4e4e7" fontSize="2.7">Cykl</text>
          <text x="73" y="27" fill="#d4d4d8" fontSize="2.7">Calvina</text>
        </g>
      )}

      {theme === "dna-replication-fork" && (
        <g>
          {/* Parental duplex helix on left */}
          <path d="M 8 43 Q 16 55 24 44 L 34 45" fill="none" stroke="#d4d4d8" strokeWidth="1.2" />
          <path d="M 8 57 Q 16 45 24 56 L 34 55" fill="none" stroke="#d4d4d8" strokeWidth="1.2" />
          {/* Open fork template strands */}
          <path d="M 34 45 L 88 22" fill="none" stroke="#a1a1aa" strokeWidth="1.1" />
          <path d="M 34 55 L 88 78" fill="none" stroke="#a1a1aa" strokeWidth="1.1" />

          {/* Helicase wedge at (34, 50) */}
          <polygon
            points="29,50 38,44 38,56"
            fill="#27272a"
            fillOpacity="0.9"
            stroke="#fafafa"
            strokeWidth="0.9"
          />

          {/* Leading strand (continuous 5'->3' along top) */}
          <line x1="84" y1="27" x2="42" y2="44" stroke="#fafafa" strokeWidth="1.25" />
          <text x="53" y="30" fill="#fafafa" fontSize="2.8">5'→3' wiodąca</text>

          {/* Primase RNA primer + Okazaki fragments along bottom */}
          <line x1="40" y1="60" x2="48" y2="63.5" stroke="#a1a1aa" strokeWidth="1.6" strokeDasharray="1.5 1" />
          <line x1="50" y1="64.5" x2="66" y2="71.5" stroke="#e4e4e7" strokeWidth="1.35" />
          <line x1="69" y1="73" x2="84" y2="79" stroke="#e4e4e7" strokeWidth="1.35" />
          <circle cx="78" cy="70" r="3.4" fill="#27272a" stroke="#d4d4d8" strokeWidth="0.7" />
          <text x="50" y="83" fill="#d4d4d8" fontSize="2.7">Okazaki (5'→3')</text>
        </g>
      )}

      {theme === "chemical-synapse" && (
        <g>
          {/* Presynaptic terminal bulb */}
          <path
            d="M 32 10 L 32 22 C 20 26, 20 45, 50 45 C 80 45, 80 26, 68 22 L 68 10"
            fill="#18181b"
            fillOpacity="0.85"
            stroke="#71717a"
            strokeWidth="0.9"
          />
          {/* Voltage-gated Ca2+ channel at (26, 36) */}
          <rect
            x="22"
            y="32"
            width="6"
            height="7"
            rx="1.2"
            fill="#27272a"
            fillOpacity="0.9"
            stroke="#e4e4e7"
            strokeWidth="0.8"
          />
          <text x="11" y="37" fill="#e4e4e7" fontSize="2.7">Ca2+ →</text>

          {/* Synaptic vesicles around (50, 30) */}
          <circle cx="43" cy="28" r="4" fill="#27272a" stroke="#d4d4d8" strokeWidth="0.7" />
          <circle cx="55" cy="29" r="4" fill="#27272a" stroke="#d4d4d8" strokeWidth="0.7" />
          <circle cx="49" cy="36" r="4" fill="#27272a" stroke="#d4d4d8" strokeWidth="0.7" />

          {/* Neurotransmitter dots in synaptic cleft (y=46..58) */}
          {[42, 47, 52, 57].map((dx) => (
            <circle key={dx} cx={dx} cy={51 + (dx % 3)} r="1.1" fill="#fafafa" />
          ))}

          {/* Postsynaptic membrane + receptors at (46, 63) */}
          <path d="M 18 66 Q 50 61 82 66 L 82 88 L 18 88 Z" fill="#18181b" stroke="#52525b" strokeWidth="0.9" />
          <rect x="42" y="59" width="8" height="8" rx="1.5" fill="#27272a" stroke="#e4e4e7" strokeWidth="0.8" />
          <rect x="55" y="59.5" width="7" height="7" rx="1.5" fill="#27272a" stroke="#e4e4e7" strokeWidth="0.8" />
          <text x="38" y="76" fill="#d4d4d8" fontSize="2.8">EPSP / IPSP</text>

          {/* Clearance / AChE at (78, 52) */}
          <circle cx="78" cy="52" r="4.5" fill="#27272a" fillOpacity="0.9" stroke="#a1a1aa" strokeWidth="0.7" />
          <text x="73.5" y="53" fill="#fafafa" fontSize="2.3">AChE</text>
        </g>
      )}

      {theme === "reaction-energy-profile" && (
        <g>
          {/* Axes */}
          <line x1="10" y1="14" x2="10" y2="86" stroke="#71717a" strokeWidth="0.6" />
          <line x1="10" y1="86" x2="92" y2="86" stroke="#71717a" strokeWidth="0.6" />
          <text x="12" y="15" fill="#a1a1aa" fontSize="2.8">E</text>
          <text x="64" y="92" fill="#a1a1aa" fontSize="2.7">Postęp reakcji</text>

          {/* Reference level lines & ΔH vertical bracket */}
          <line x1="10" y1="46" x2="84" y2="46" stroke="#52525b" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
          <line x1="72" y1="74" x2="90" y2="74" stroke="#d4d4d8" strokeWidth="0.9" />
          <line x1="10" y1="46" x2="24" y2="46" stroke="#d4d4d8" strokeWidth="1.1" />
          <line x1="82" y1="46" x2="82" y2="74" stroke="#a1a1aa" strokeWidth="0.7" strokeDasharray="1.2 1" />
          <text x="83.5" y="61" fill="#e4e4e7" fontSize="2.7">ΔH&lt;0</text>

          {/* Uncatalyzed path peaking at (48, 20) */}
          <path
            d="M 10 46 L 24 46 C 34 46, 40 20, 48 20 C 57 20, 63 74, 72 74 L 90 74"
            fill="none"
            stroke="#fafafa"
            strokeWidth="1.25"
          />
          {/* Catalyzed path peaking at (48, 38) */}
          <path
            d="M 24 46 C 34 46, 40 38, 48 38 C 56 38, 63 74, 72 74"
            fill="none"
            stroke="#a1a1aa"
            strokeWidth="1.15"
            strokeDasharray="2.5 1.4"
          />
          <text x="39" y="16" fill="#e4e4e7" fontSize="2.6">Ea</text>
          <text x="51" y="37" fill="#d4d4d8" fontSize="2.5">Ea,kat</text>

          {/* Endothermic inset top-right around (76, 22) */}
          <rect x="59" y="9" width="33" height="23" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="0.6" />
          <path d="M 62 28 L 67 28 Q 71 13 75 21 L 89 21" fill="none" stroke="#d4d4d8" strokeWidth="0.9" />
          <text x="61" y="14" fill="#e4e4e7" fontSize="2.4">ΔH&gt;0 (endo)</text>
        </g>
      )}

      {theme === "daniell-cell" && (
        <g>
          {/* External wire & Voltmeter (50, 16) */}
          <polyline points="22,32 22,16 78,16 78,32" fill="none" stroke="#a1a1aa" strokeWidth="0.9" />
          <circle
            cx="50"
            cy="16"
            r="6"
            fill="#18181b"
            stroke="#e4e4e7"
            strokeWidth="0.95"
          />
          <text x="45.8" y="17.2" fill="#fafafa" fontSize="2.5">1.10V</text>
          <text x="33" y="13.2" fill="#d4d4d8" fontSize="2.7">e− →</text>

          {/* Left Beaker (ZnSO4) & Zn anode (22, 54) */}
          <rect x="9" y="40" width="26" height="44" rx="2" fill="#18181b" fillOpacity="0.85" stroke="#52525b" strokeWidth="0.8" />
          <rect x="9" y="50" width="26" height="34" rx="1.5" fill="#27272a" fillOpacity="0.45" />
          <rect x="19" y="30" width="6" height="44" rx="1" fill="#71717a" stroke="#e4e4e7" strokeWidth="0.7" />
          <text x="12" y="81" fill="#d4d4d8" fontSize="2.6">Zn2+ (⊖)</text>

          {/* Right Beaker (CuSO4) & Cu cathode (78, 54) */}
          <rect x="65" y="40" width="26" height="44" rx="2" fill="#18181b" fillOpacity="0.85" stroke="#52525b" strokeWidth="0.8" />
          <rect x="65" y="50" width="26" height="34" rx="1.5" fill="#3f3f46" fillOpacity="0.45" />
          <rect x="75" y="30" width="6" height="44" rx="1" fill="#52525b" stroke="#fafafa" strokeWidth="0.7" />
          <text x="68" y="81" fill="#e4e4e7" fontSize="2.6">Cu2+ (⊕)</text>

          {/* Salt bridge U-tube centered around (50, 42) */}
          <path d="M 30 62 L 30 43 Q 30 37 36 37 L 64 37 Q 70 37 70 43 L 70 62" fill="none" stroke="#a1a1aa" strokeWidth="4.2" strokeLinecap="round" opacity="0.45" />
          <text x="41.5" y="43" fill="#e4e4e7" fontSize="2.5">← NO3− | K+ →</text>
        </g>
      )}

      {theme === "orbital-hybridization" && (
        <g>
          {/* Three VSEPR hybridization panels: sp3 (20,42), sp2 (52,42), sp (84,42) */}
          <rect x="6" y="16" width="28" height="42" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="0.6" />
          <text x="10" y="22" fill="#e4e4e7" fontSize="2.8">sp3 (109,5°)</text>
          <line x1="20" y1="42" x2="20" y2="28" stroke="#e4e4e7" strokeWidth="0.9" />
          <line x1="20" y1="42" x2="11" y2="50" stroke="#e4e4e7" strokeWidth="0.9" />
          <line x1="20" y1="42" x2="29" y2="50" stroke="#e4e4e7" strokeWidth="0.9" />
          <line x1="20" y1="42" x2="23" y2="53" stroke="#a1a1aa" strokeWidth="0.7" strokeDasharray="1.2 1" />
          <circle cx="20" cy="42" r="2.6" fill="#fafafa" />

          <rect x="38" y="16" width="28" height="42" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="0.6" />
          <text x="41.5" y="22" fill="#e4e4e7" fontSize="2.8">sp2 (120°)</text>
          {/* pi-bond lobes spanning around (52, 24..42) */}
          <ellipse cx="48" cy="34" rx="2" ry="6.5" fill="#27272a" fillOpacity="0.75" stroke="#a1a1aa" strokeWidth="0.5" />
          <ellipse cx="56" cy="34" rx="2" ry="6.5" fill="#27272a" fillOpacity="0.75" stroke="#a1a1aa" strokeWidth="0.5" />
          <line x1="48" y1="41" x2="56" y2="41" stroke="#e4e4e7" strokeWidth="0.9" />
          <line x1="48" y1="43" x2="56" y2="43" stroke="#a1a1aa" strokeWidth="0.9" />
          <circle cx="48" cy="42" r="2.2" fill="#d4d4d8" />
          <circle cx="56" cy="42" r="2.2" fill="#d4d4d8" />

          <rect x="70" y="16" width="26" height="42" rx="2" fill="#18181b" stroke="#3f3f46" strokeWidth="0.6" />
          <text x="74" y="22" fill="#e4e4e7" fontSize="2.8">sp (180°)</text>
          <line x1="74" y1="42" x2="92" y2="42" stroke="#e4e4e7" strokeWidth="0.9" />
          <line x1="78" y1="40" x2="88" y2="40" stroke="#a1a1aa" strokeWidth="0.75" />
          <line x1="78" y1="44" x2="88" y2="44" stroke="#a1a1aa" strokeWidth="0.75" />
          <circle cx="79" cy="42" r="2.1" fill="#fafafa" />
          <circle cx="87" cy="42" r="2.1" fill="#fafafa" />

          {/* Bottom VSEPR comparison box centered around (50, 78) */}
          <rect x="14" y="64" width="72" height="26" rx="2.5" fill="#18181b" stroke="#3f3f46" strokeWidth="0.6" />
          <text x="20" y="73" fill="#e4e4e7" fontSize="2.7">VSEPR (sp3 + wolne pary):</text>
          <text x="20" y="81" fill="#d4d4d8" fontSize="2.7">CH4: 109,5°</text>
          <text x="44" y="81" fill="#d4d4d8" fontSize="2.7">NH3: 107°</text>
          <text x="66" y="81" fill="#d4d4d8" fontSize="2.7">H2O: 104,5°</text>
        </g>
      )}

      {/* Generic fallback geometric circle */}
      {theme === "generic" && (
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="#18181b"
          stroke="#a1a1aa"
          strokeWidth="1"
          strokeDasharray="3 2"
        />
      )}
    </svg>
  );
}

export interface TextbookFigureCardProps {
  figure: TextbookFigure;
  onOpenAtlas?: (entityId: string, label: string) => void;
}

export function TextbookFigureCard({ figure }: TextbookFigureCardProps) {
  const reactId = useId();
  const markerId = `fig-${reactId.replace(/:/g, "")}`;
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const showImage = !figure.svgSchematicSpec && Boolean(figure.imageUrl);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (lightboxOpen) {
      if (!dialog.open) dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [lightboxOpen]);

  return (
    <figure
      aria-label={figure.titlePl}
      className="my-6 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 text-zinc-100 shadow-lg"
    >
      {/* Clean Header */}
      <div className="border-b border-zinc-800/80 bg-zinc-950 px-4 py-3">
        <h3 className="text-sm font-bold text-zinc-100">{figure.titlePl}</h3>
        {figure.titleLat && (
          <p className="mt-0.5 text-xs italic text-zinc-400">
            {figure.titleLat}
          </p>
        )}
      </div>

      {/* Minimalist Illustration Area */}
      <div className="bg-zinc-950 p-3">
        <div
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setLightboxOpen(true);
            }
          }}
          aria-label={`Powiększ rycinę: ${figure.titlePl}`}
          className="relative aspect-[16/10] min-h-[260px] w-full cursor-zoom-in overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950"
        >
          {showImage && figure.imageUrl ? (
            <div className="flex h-full w-full items-center justify-center bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={figure.imageUrl}
                alt={figure.titlePl}
                width={figure.width ?? 900}
                height={figure.height ?? 700}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <SchematicArtwork
              theme={figure.svgSchematicSpec?.theme ?? "generic"}
              markerId={markerId}
            />
          )}

          {!showImage &&
            figure.hotspots.map((hotspot, idx) => (
              <span
                key={hotspot.id}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                }}
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 flex size-6 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 text-[11px] font-bold text-zinc-100 shadow-md"
              >
                {idx + 1}
              </span>
            ))}
        </div>
      </div>

      {/* Clean Static 2-Column Numbered Legend */}
      {figure.hotspots.length > 0 && (
        <div className="grid gap-x-6 gap-y-2 border-t border-zinc-800/80 bg-zinc-950 px-4 py-3.5 sm:grid-cols-2">
          {figure.hotspots.map((hotspot, idx) => (
            <div
              key={hotspot.id}
              className="text-xs leading-relaxed text-zinc-300"
            >
              <span className="font-semibold text-zinc-100">
                {idx + 1}. {hotspot.labelPl}
              </span>
              {hotspot.labelLat && (
                <span className="italic text-zinc-400">
                  {" "}
                  ({hotspot.labelLat})
                </span>
              )}
              {hotspot.description && (
                <span className="text-zinc-500"> — {hotspot.description}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Caption & Attribution Footer */}
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-800/80 bg-zinc-950 px-4 py-2.5 text-[11px] text-zinc-400">
        <span>{figure.caption}</span>
        {figure.licenseAttribution && (
          <span className="rounded bg-zinc-900 px-2 py-0.5 font-mono text-[10px] text-zinc-500">
            {figure.licenseAttribution}
          </span>
        )}
      </figcaption>

      {/* Native Baseline <dialog> Lightbox */}
      <dialog
        ref={dialogRef}
        aria-label={`Powiększenie: ${figure.titlePl}`}
        onClose={() => setLightboxOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) setLightboxOpen(false);
        }}
        className="m-auto max-h-[92vh] w-[min(92vw,1000px)] overflow-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-4 text-zinc-100 shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        <div className="mb-3 flex items-center justify-between gap-2 border-b border-zinc-800 pb-2">
          <span className="text-sm font-bold text-zinc-100">
            {figure.titlePl}
          </span>
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="focus-ring inline-flex items-center gap-1 rounded-lg border border-zinc-700 bg-zinc-900 px-2.5 py-1 text-xs font-semibold text-zinc-200 hover:bg-zinc-800"
          >
            <X className="size-3.5" aria-hidden="true" />
            Zamknij (Esc)
          </button>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
          {showImage && figure.imageUrl ? (
            <div className="flex h-full w-full items-center justify-center bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={figure.imageUrl}
                alt={figure.titlePl}
                width={figure.width ?? 1000}
                height={figure.height ?? 750}
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
          ) : (
            <SchematicArtwork
              theme={figure.svgSchematicSpec?.theme ?? "generic"}
              markerId={`${markerId}-dialog`}
            />
          )}
        </div>
      </dialog>
    </figure>
  );
}
