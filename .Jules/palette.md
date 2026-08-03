## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-07-21 - Escape Key Support for Click-Away Overlays
**Learning:** Found multiple visual backdrops/overlays (e.g., `SidebarDrawer`, `TextbookLayout`) that dismiss on click but lack keyboard dismissal support. These overlays are functionally acting as click-away handlers but missing screen reader exclusion (`aria-hidden="true"`) and `Escape` key support, which hinders keyboard-only navigation.
**Action:** When implementing click-away backdrops or overlays for menus and sidebars, ensure they include an `aria-hidden="true"` attribute and pair them with an `Escape` key listener (`keydown`) on the `document` level to ensure parity between mouse and keyboard navigation.
