/**
 * The data tier's public entry point.
 *
 * ── Architecture ────────────────────────────────────────────────────────────
 *   models/        data schemas — shapes only, no values
 *   repositories/  raw datasets and narrow accessors over them
 *   services/      query and business logic composed from repositories
 *
 * UI code (components, pages, hooks) imports from `@/server` or
 * `@/server/models` and never reaches into `repositories/` directly. ESLint
 * enforces this — see the `no-restricted-imports` rule in eslint.config.mjs.
 */

export * from "./services";
export type * from "./models";
