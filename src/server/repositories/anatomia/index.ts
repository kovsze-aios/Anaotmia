import type { TextbookDomain } from "../../models";
import { tom1Domain } from "./domain-tom1";
import { tom2Domain } from "./domain-tom2";
import { tom3Domain } from "./domain-tom3";
import { tom4Domain } from "./domain-tom4";

/**
 * The anatomy book, in reading order.
 *
 * Exactly the four volumes of the source textbook — nothing else. The earlier
 * hand-written system domains (osteologia, miologia, układ nerwowy…) and the
 * Bochenek compendium were removed: the four volumes already cover that
 * material chapter for chapter, so every extra domain was a second route to
 * the same anatomy under a different name.
 *
 * This array is the single source of ordering. The sidebar, the welcome grid,
 * the reading spine and `generateStaticParams` all derive from `getDomains()`,
 * so adding or removing a volume here is the whole change — there is no second
 * list to keep in sync.
 */
const domains: TextbookDomain[] = [tom1Domain, tom2Domain, tom3Domain, tom4Domain];

export function getDomains(): TextbookDomain[] {
  return domains;
}

export function getDomain(id: string): TextbookDomain | undefined {
  return domains.find((d) => d.id === id);
}
