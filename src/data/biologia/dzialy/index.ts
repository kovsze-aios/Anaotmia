/**
 * Barrel for the generated biology corpus.
 *
 * Maintained by `fabryka_biologii.py`: each run rewrites this file with one
 * `export * from "./bioN";` per part of the "Biologia na czasie" series it
 * produced. Empty until the first run, which is why the repository layer reads
 * whatever this module happens to export rather than importing part arrays by
 * name — a named import of a file that does not exist yet would not compile.
 */
export {};
