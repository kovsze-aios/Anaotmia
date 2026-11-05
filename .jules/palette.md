## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-08-01 - Screen Reader and Keyboard Nav for Overlays
**Learning:** Found multiple custom overlays (backdrops) for sidebars/drawers (like in `Sidebar.tsx` and `TextbookLayout.tsx`) that act as visual "click-away" dismiss areas but are not hidden from screen readers. This confuses screen readers navigating the DOM. Furthermore, relying entirely on a backdrop click limits keyboard accessibility.
**Action:** When creating visual overlays/backdrops that can be clicked to dismiss a UI, explicitly mark them with `aria-hidden="true"`. Also, ensure keyboard dismissibility by adding an `Escape` key listener via `useEffect` whenever the UI element is open.
## 2026-07-20 - Global Navigation Interactive Elements Focus Visible Styles
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`Link` buttons) on theoretical and topics page causing accessibility regressions during keyboard navigation. Custom styles were missing or mismatched `focus:ring-blue-500` instead of the app design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-11-05 - Semantic Roles and States for Interactive Controls
**Learning:** Found multiple instances of buttons functioning as toggles/switches (e.g., theme switcher) or expandable controls (e.g., hamburger menus) lacking appropriate ARIA roles (`role="switch"`) and states (`aria-checked`, `aria-expanded`). Additionally, decorative text icons inside buttons with `aria-label` (like '✕' close buttons) were exposed to screen readers, causing redundant announcements. Finally, many buttons lacked an explicit `type="button"`.
**Action:** When implementing toggle controls, explicitly assign `role="switch"` and `aria-checked`. For controls revealing UI regions, use `aria-expanded`. Always wrap decorative text inside labeled interactive elements with `aria-hidden="true"`, and include `type="button"` to prevent form submission side effects.
