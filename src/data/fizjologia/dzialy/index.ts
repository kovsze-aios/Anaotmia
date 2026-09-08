/**
 * Barrel for the generated physiology corpus.
 *
 * Maintained by `fabryka_fizjologii.py`: each run rewrites this file with one
 * `export * from "./dzialN";` per chapter it produced. Empty until the first
 * run, which is why the repository layer reads whatever this module happens to
 * export rather than importing chapter arrays by name — a named import of a
 * file that does not exist yet would not compile.
 */
export {};
