/**
 * Repository layer — the only place raw datasets are read from.
 *
 * Each repository owns one subject's data and exposes narrow accessors over it.
 * Nothing outside `src/server` may import a repository directly; go through
 * `src/server/services` instead. That indirection is what keeps the datasets
 * (several megabytes of textbook content) out of the client bundle.
 */

export { getDomains, getDomain } from "./anatomia";
export { biologiaTheory } from "./biologia/theory";
export { chemiaTheory } from "./chemia/theory";
export { fizjologiaTheory } from "./fizjologia/theory";

export { biologia, getBiologiaRecords, getBiologiaRecord } from "./biologia";
export { chemia, getChemiaRecords, getChemiaRecord } from "./chemia";
