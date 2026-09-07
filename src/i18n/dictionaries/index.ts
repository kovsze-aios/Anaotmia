import type { Locale } from "../config";
import en, { type Dictionary } from "./en";
import pl from "./pl";
import de from "./de";
import fr from "./fr";
import it from "./it";
import es from "./es";

/**
 * All dictionaries are imported statically rather than fetched on demand.
 * Together they are a few kB — far less than the round trip and loading state
 * that dynamic imports would cost, and it keeps switching instant.
 */
export const DICTIONARIES: Record<Locale, Dictionary> = { en, pl, de, fr, it, es };

export type { Dictionary };
