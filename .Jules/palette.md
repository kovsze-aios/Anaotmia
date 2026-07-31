## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-07-21 - Visual Backdrops and Keyboard Accessibility
**Learning:** Purely visual backdrops or click-away overlays (e.g., in `SidebarDrawer` and `TextbookLayout`) were missing `aria-hidden="true"`, causing screen readers to potentially focus on non-interactive semantic elements. Additionally, modals and drawers were missing keyboard dismissal support via the `Escape` key, trapping keyboard users.
**Action:** Always add `aria-hidden="true"` to structural overlay `div`s used for click-away behavior, and implement a document-level `keydown` listener for the `Escape` key to close active popovers/drawers.
