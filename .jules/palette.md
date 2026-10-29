## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-08-01 - Screen Reader and Keyboard Nav for Overlays
**Learning:** Found multiple custom overlays (backdrops) for sidebars/drawers (like in `Sidebar.tsx` and `TextbookLayout.tsx`) that act as visual "click-away" dismiss areas but are not hidden from screen readers. This confuses screen readers navigating the DOM. Furthermore, relying entirely on a backdrop click limits keyboard accessibility.
**Action:** When creating visual overlays/backdrops that can be clicked to dismiss a UI, explicitly mark them with `aria-hidden="true"`. Also, ensure keyboard dismissibility by adding an `Escape` key listener via `useEffect` whenever the UI element is open.
## 2026-07-20 - Global Navigation Interactive Elements Focus Visible Styles
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`Link` buttons) on theoretical and topics page causing accessibility regressions during keyboard navigation. Custom styles were missing or mismatched `focus:ring-blue-500` instead of the app design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2025-05-24 - Semantic State for Theme Toggles and Hamburger Menus
**Learning:** Found interactive elements like theme toggles missing `role="switch"` and `aria-checked`, and hamburger menus missing `aria-expanded` and `type="button"`. This prevents screen readers from understanding the current state of these crucial navigation and preference controls.
**Action:** Always include `aria-expanded={booleanState}` on buttons that control expandable UI regions. Use `role="switch"` and `aria-checked={booleanState}` on toggle buttons like theme switchers to provide accurate semantic state information. Ensure all custom buttons have `type="button"` to prevent accidental form submissions.
