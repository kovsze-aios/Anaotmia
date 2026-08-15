## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-08-01 - Screen Reader and Keyboard Nav for Overlays
**Learning:** Found multiple custom overlays (backdrops) for sidebars/drawers (like in `Sidebar.tsx` and `TextbookLayout.tsx`) that act as visual "click-away" dismiss areas but are not hidden from screen readers. This confuses screen readers navigating the DOM. Furthermore, relying entirely on a backdrop click limits keyboard accessibility.
**Action:** When creating visual overlays/backdrops that can be clicked to dismiss a UI, explicitly mark them with `aria-hidden="true"`. Also, ensure keyboard dismissibility by adding an `Escape` key listener via `useEffect` whenever the UI element is open.
## 2026-07-20 - Global Navigation Interactive Elements Focus Visible Styles
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`Link` buttons) on theoretical and topics page causing accessibility regressions during keyboard navigation. Custom styles were missing or mismatched `focus:ring-blue-500` instead of the app design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.
## 2026-08-15 - Screen Reader Optimization for Card-Based Layouts
**Learning:** Found multiple card-based layouts in `src/components/Topics.tsx` wrapped in `<Link>` tags containing purely decorative icons and generic, repetitive CTA text ("Przejdź do przedmiotu →"). This causes unnecessary noise for screen reader users, who hear the redundant information for every single card.
**Action:** Always add `aria-hidden="true"` to purely decorative icons and repetitive CTA text inside clickable card links to allow screen readers to focus on the meaningful, unique content of each link (like the title and description).
## 2026-08-15 - pnpm Workspace Configuration
**Learning:** `pnpm` will fail the installation step in CI if a `pnpm-workspace.yaml` file exists (e.g., just to define `allowBuilds`) but does not explicitly declare the workspace packages.
**Action:** When updating or working with pnpm workspaces, explicitly add `packages: ["."]` to `pnpm-workspace.yaml` to ensure successful installation in CI.
