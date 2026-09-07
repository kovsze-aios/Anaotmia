/**
 * English — the canonical dictionary.
 *
 * Its shape defines the `Dictionary` type, so every other locale is checked
 * against it at compile time: a missing or misspelled key is a build error
 * rather than an `undefined` leaking into the interface.
 *
 * Scope is the UI shell only. Textbook prose, anatomical structure names (they
 * come from the BodyParts3D dataset) and the source/licence notice are not
 * translated here.
 */
const en = {
  /**
   * Noun counted in the search results ("2 pieces"), selected with
   * `Intl.PluralRules`. English collapses to one/other; Polish genuinely needs
   * one / few (2–4) / many (5+), which is why every category is spelled out.
   */
  plurals: {
    zero: "pieces",
    one: "piece",
    two: "pieces",
    few: "pieces",
    many: "pieces",
    other: "pieces",
  },

  nav: {
    /** Product name — a proper noun, identical in every locale. */
    brand: "Medycyna",
    atlas: "3D Atlas",
    textbook: "Textbook",
    home: "Home",
  },

  topbar: {
    openMenu: "Open navigation menu",
    toggleTheme: "Change theme",
    supportTitle: "Buy me a coffee",
    supportAria: "Support the project (opens in a new tab)",
    searchPlaceholder: "Search…",
    language: "Change language",
    languageCurrent: "Current language",
    mainNav: "Main navigation",
    searching: "Searching…",
    noResults: "No results found for “{query}”.",
  },

  sidebar: {
    closeMenu: "Close menu",
    anatomy: "ANATOMY",
    physiology: "PHYSIOLOGY",
    biology: "BIOLOGY",
    chemistry: "CHEMISTRY — Matura 2015 syllabus",
    chemistryInorganic: "Inorganic chemistry and calculations",
    chemistryOrganic: "Organic chemistry",
    examSheetsBiology: "CKE exam papers — Biology",
    examSheetsChemistry: "CKE exam papers — Chemistry",
    home: "Home",
  },

  atlasPoster: {
    eyebrow: "INTERACTIVE 3D ANATOMY",
    title: "3D Atlas",
    lead: "Rotate, explode and explore a complete anatomical model of the human body — 2,234 structures across 15 systems, right in your browser.",
    systemsTitle: "15 systems",
    systemsBody: "Toggle the skeletal, muscular, nervous, circulatory and remaining systems on and off.",
    structuresTitle: "2,234 structures",
    structuresBody: "Tap any structure to isolate it and read its description.",
    searchTitle: "Search",
    searchBody: "Find a specific bone, muscle or nerve among 3,432 named concepts.",
    launch: "Launch 3D Atlas",
    weight: "The model is about 30 MB and only downloads once you launch it. Requires a browser with WebGL support.",
    booting: "Starting the 3D viewer…",
  },

  atlas: {
    eyebrow: "INTERACTIVE ANATOMY",
    structures: "structures",
    findStructure: "Find a structure",
    findStructureAria: "Search anatomical structures",
    about: "About this atlas",
    close: "Close 3D atlas",

    systems: "Systems",
    closeSystems: "Close the systems list",
    presetAll: "All",
    presetSkeleton: "Skeleton",
    presetOrgans: "Organs",
    showOnly: "Show only:",
    show: "Show:",
    visibleStructures: "structures visible",
    hideAll: "Hide all",

    searchPanelTitle: "Find a structure",
    searchPlaceholder: "Heart, femur, cranial nerve…",
    searchAria: "Search named anatomical structures",
    searchEmpty: "No structures match your search.",
    searchHintTyping: "Showing up to 80 matches. Refine your search to find smaller structures.",
    searchHintIdle: "Structure names come from the BodyParts3D database and are in English.",
    closeSearch: "Close search",

    cameraControls: "Camera controls",
    viewThreeQuarter: "Three-quarter view",
    viewFront: "Front view",
    viewSide: "Side view",
    viewBack: "Back view",
    viewLetters: ["¾", "F", "S", "B"],
    autoRotate: "Auto rotate",
    rotateModel: "Rotate model",
    pauseRotation: "Pause rotation",
    resetView: "Reset view and layers",
    reset: "Reset",
    resetDock: "Assemble and reset",

    explode: "Explode anatomy",
    assembled: "Assembled",
    everyPiece: "Every piece",
    openLayers: "Open system layers",

    captionAdult: "ADULT HUMAN · MALE",
    captionSeparated: "SEPARATED STRUCTURES",
    captionInventory: "ANATOMICAL INVENTORY",
    captionSelected: "SELECTED STRUCTURE",

    dragOrbit: "Drag to orbit",
    dragPan: "Drag to pan",
    pinchZoom: "Pinch to zoom",
    tapInspect: "Tap to inspect",
    sourceCredits: "Source & licence",

    preparing: "Preparing the anatomy",
    loadingPieces: "Loading",
    reload: "Reload viewer",

    detailFallback: "ANATOMY",
    atlasReference: "Reference",
    selectedPieces: "Selected pieces",
    includedStructures: "Included structures",
    andMore: "And {count} more modelled pieces.",
    viewSource: "View the anatomical source",
    systemOverviewNote: "System overview · structure identified from the source data",
    isolate: "Isolate structure",
    showSurrounding: "Show surrounding anatomy",
    clearSelection: "Clear selection",

    panelsLabel: "Explorer panels",
    layersLabel: "Anatomical layers",
    findLabel: "Find anatomy",

    sceneAria:
      "Interactive human anatomy. Drag to orbit, pinch or scroll to zoom, and tap a structure to inspect it.",
    errorWebgl: "This browser could not start the 3D viewer. Please try a browser with WebGL enabled.",
    errorContextLost: "The 3D session was paused by your device. Reload to continue.",
    errorCatalogue: "The anatomy catalogue could not be loaded.",
    errorFile: "An anatomy file could not be loaded.",
    errorIncomplete: "An anatomy file was incomplete. Please reload the viewer.",
    errorGeometry: "Could not assemble the anatomy geometry.",
    errorGeneric: "Could not load the anatomy.",
  },


  subjects: {
    academicSubtitle: "Academic textbook",
    maturaSubtitle: "Matura 2015 syllabus",
    anatomy: "Anatomy",
    anatomyBody: "8 anatomical domains — from osteology to the sense organs.",
    anatomyEmphasis: "The full scope of the anatomy exam.",
    physiology: "Physiology",
    physiologyBody: "How the human body works.",
    physiologyEmphasis: "Neurophysiology, circulation, muscles.",
    biology: "Biology",
    biologyBody: "Cytology, metabolism, genetics, botany and human physiology.",
    biologyEmphasis: "Theory plus CKE exam papers.",
    chemistry: "Chemistry",
    chemistryBody: "Inorganic and organic chemistry.",
    chemistryEmphasis: "Stoichiometry, reactions, CKE exam papers.",
    chooseSubject: "Choose a subject",
    chooseSubjectHint: "Open a subject to reach its interactive textbook with Active Recall questions.",
    subjectCta: "Go to subject →",
    examSheets: "Exam papers",
    examSheetsHint: "Authentic CKE papers (2015–2024) with answer keys.",
    examSheetsCta: "Go to papers →",
  },

  domains: {
    heading: "Exam domains — Anatomy",
    hint: "Or jump straight to the anatomical domain you need.",
    cta: "Go to domain →",
    osteology: "Osteology and Arthrology",
    osteologyBody: "Bones, joints and ligaments — skeletal structure, joint classification, mechanics of movement.",
    myology: "Myology",
    myologyBody: "Muscles, attachments, innervation and function — the key muscle groups.",
    nervous: "Nervous System",
    nervousBody: "Central and peripheral nervous system, neural pathways, cranial nerves.",
    endocrine: "Endocrine System",
    endocrineBody: "Endocrine glands, hormones and how they act.",
    cardioResp: "Circulatory and Respiratory Systems",
    cardioRespBody: "Heart, blood vessels, lungs and airways — the functional anatomy of two linked systems.",
    digestive: "Digestive System",
    digestiveBody: "From the oral cavity to the rectum — structure and function of the gut and digestive glands.",
    urogenital: "Urinary and Reproductive Systems",
    urogenitalBody: "Kidneys, urinary tract and reproductive organs, where anatomy meets physiology.",
    sensory: "Sense Organs",
    sensoryBody: "Eye, ear and skin — receptor structure and conduction pathways.",
  },

  pagination: {
    label: "Pagination",
    previous: "Previous page",
    next: "Next page",
    goToPage: "Go to page {page}",
    currentPage: "Page {page}, current page",
    morePages: "More pages",
    jumpToPage: "Go to page…",
    go: "Go",
    status: "Page {current} of {total}",
    invalidPage: "Enter a number between 1 and {total}.",
  },

  reader: {
    toc: "Table of contents",
    openToc: "Open the table of contents",
    closeToc: "Close the table of contents",
    previous: "Previous page",
    next: "Next page",
    chapterOf: "Chapter {current} of {total}",
    volumes: "Volumes",
    topics: "Topics",
    newVolume: "Start of",
    endOfBook: "End of the textbook",
    startOfBook: "Start of the textbook",
    jumpToChapter: "Jump to chapter",
  },
  /** Anatomical system labels — panel chrome, so they are translated. */
  systems: {
    skeletal: "Skeleton",
    muscular: "Muscles",
    cardiac: "Heart",
    sensory: "Sensory organs",
    arterial: "Arteries",
    venous: "Veins",
    nervous: "Nervous system",
    respiratory: "Respiratory",
    digestive: "Digestive",
    urinary: "Urinary",
    lymphatic: "Lymphatic",
    endocrine: "Endocrine",
    reproductive: "Reproductive",
    integumentary: "Body surface",
    connective: "Connective tissue",
  },
} as const;

/**
 * Widens the literal types produced by `as const` back to plain `string`.
 * Arrays stay `readonly` so the const tuple in this file still satisfies it;
 * a mutable array in another locale is assignable to a readonly one.
 */
type Stringify<T> = {
  -readonly [K in keyof T]: T[K] extends readonly string[] ? readonly string[] : string;
};

/** Every other locale must match this shape exactly, or the build fails. */
export type Dictionary = {
  -readonly [K in keyof typeof en]: Stringify<(typeof en)[K]>;
};

export default en as Dictionary;
