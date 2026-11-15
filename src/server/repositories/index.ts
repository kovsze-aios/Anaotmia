/**
 * Repository layer — the only place raw datasets are read from.
 *
 * Each repository owns one subject's data and exposes narrow accessors over it.
 * Nothing outside `src/server` may import a repository directly; go through
 * `src/server/services` instead. That indirection is what keeps the datasets
 * (several megabytes of textbook content) out of the client bundle.
 */

export { getDomains, getDomain } from "./anatomia";
export { biologiaDomains as biologiaTheory } from "./biologia/domains";
export { chemiaDomains as chemiaTheory } from "./chemia/domains";
export { fizjologiaTheory } from "./fizjologia";
export {
  biologiaMatura2023Theory,
  biologiaMatura2015Theory,
  chemiaMatura2023Theory,
  chemiaMatura2015Theory,
} from "./matura-cke";
export {
  fizykaTheory,
  matematykaTheory,
  biochemiaTheory,
  neurobiologiaTheory,
  farmakologiaTheory,
  informatykaTheory,
} from "./oer-departments";

export { biologia, getBiologiaRecords, getBiologiaRecord } from "./biologia";
export { chemia, getChemiaRecords, getChemiaRecord } from "./chemia";

