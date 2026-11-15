export interface FigureHotspot {
  id: string;
  labelPl: string;
  labelLat?: string;
  /** Normalized percentage coordinates (0-100) on the figure canvas */
  x: number;
  y: number;
  description: string;
  clinicalNote?: string;
  /** Optional bridge to 3D Atlas entity & sub-pin */
  linkedEntityId?: string;
  linkedSubPinId?: string;
}

export interface FigureAnimationStep {
  stepNumber: number;
  title: string;
  explanationHtml: string;
  /** IDs of hotspots that pulse/highlight during this step */
  activeHotspotIds: string[];
  /** Optional SVG directional arrow coordinates [x1, y1, x2, y2] in 0-100 space */
  flowArrow?: [number, number, number, number];
}

export type SvgSchematicTheme =
  | "osteon"
  | "heart-valves"
  | "brachial-plexus"
  | "willis-circle"
  | "nephron"
  | "lungs-alveoli"
  | "action-potential"
  | "wiggers-ecg"
  | "bohr-oxygen-curve"
  | "photosynthesis-thylakoid"
  | "dna-replication-fork"
  | "chemical-synapse"
  | "reaction-energy-profile"
  | "daniell-cell"
  | "orbital-hybridization"
  | "generic";

export interface TextbookFigure {
  id: string;
  subject: string;
  chapterIds: string[];
  titlePl: string;
  titleLat?: string;
  caption: string;
  /** 'extracted-asset' for CC-BY/CC-BY-SA crops, 'cleanroom-svg-schematic' for copyrighted sources */
  renderMode: "extracted-asset" | "cleanroom-svg-schematic";
  imageUrl?: string;
  width?: number;
  height?: number;
  svgSchematicSpec?: {
    viewBox: string;
    theme: SvgSchematicTheme;
    elementsSummary?: string;
  };
  licenseAttribution?: string;
  hotspots: FigureHotspot[];
  animationSteps: FigureAnimationStep[];
}
