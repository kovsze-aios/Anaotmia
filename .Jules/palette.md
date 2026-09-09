## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-08-01 - Screen Reader and Keyboard Nav for Overlays
**Learning:** Found multiple custom overlays (backdrops) for sidebars/drawers (like in `Sidebar.tsx` and `TextbookLayout.tsx`) that act as visual "click-away" dismiss areas but are not hidden from screen readers. This confuses screen readers navigating the DOM. Furthermore, relying entirely on a backdrop click limits keyboard accessibility.
**Action:** When creating visual overlays/backdrops that can be clicked to dismiss a UI, explicitly mark them with `aria-hidden="true"`. Also, ensure keyboard dismissibility by adding an `Escape` key listener via `useEffect` whenever the UI element is open.
## 2026-07-20 - Global Navigation Interactive Elements Focus Visible Styles
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`Link` buttons) on theoretical and topics page causing accessibility regressions during keyboard navigation. Custom styles were missing or mismatched `focus:ring-blue-500` instead of the app design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.
## 2026-08-01 - Screen Reader Noise in Linked Cards
**Learning:** Found that custom linked cards containing decorative icons and generic/repetitive "Learn more" style call-to-actions are read out by screen readers in an annoying and noisy way.
**Action:** Always add `aria-hidden="true"` to purely decorative icons and generic repetitive CTA text inside complex wrapper links (like `<Link>` cards), allowing users to focus on meaningful content like the title and description to provide the link's accessible name.
## 2026-09-09 - PNPM Workspace CI
**Learning:** Found that newer versions of `pnpm` (v9+) strictly require a `packages` array in `pnpm-workspace.yaml` files, otherwise `pnpm install` fails in CI with `packages field missing or empty`.
**Action:** When a repository uses `pnpm-workspace.yaml` (even just for settings like `allowBuilds`), ensure it includes at minimum `packages: ['.']`.
