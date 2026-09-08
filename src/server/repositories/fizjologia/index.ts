/**
 * Physiology repository — the Lewiński textbook.
 *
 * Mirrors `../anatomia`: one module owns the mapping from generated corpus to
 * `TextbookDomain[]`, and this barrel is the only thing the services layer
 * imports.
 */
export { fizjologiaTheory } from "./domains";
