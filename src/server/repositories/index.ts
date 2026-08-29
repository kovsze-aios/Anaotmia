/**
 * Repository layer — the only place raw datasets are read from.
 *
 * Each repository owns one subject's data and exposes narrow accessors over it.
 * Nothing outside `src/server` may import a repository directly; go through
 * `src/server/services` instead. That indirection is what keeps the datasets
 * (several megabytes of textbook content) out of the client bundle.
 */

export { getDomains, getDomain } from "../../data/anatomia";
export { biologiaTheory } from "../../data/biologia/theory";
export { chemiaTheory } from "../../data/chemia/theory";
export { fizjologiaTheory } from "../../data/fizjologia/theory";

export { biologia, getBiologiaRecords, getBiologiaRecord } from "../../data/biologia";
export { chemia, getChemiaRecords, getChemiaRecord } from "../../data/chemia";
