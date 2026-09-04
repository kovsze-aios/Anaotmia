## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-08-01 - Screen Reader and Keyboard Nav for Overlays
**Learning:** Found multiple custom overlays (backdrops) for sidebars/drawers (like in `Sidebar.tsx` and `TextbookLayout.tsx`) that act as visual "click-away" dismiss areas but are not hidden from screen readers. This confuses screen readers navigating the DOM. Furthermore, relying entirely on a backdrop click limits keyboard accessibility.
**Action:** When creating visual overlays/backdrops that can be clicked to dismiss a UI, explicitly mark them with `aria-hidden="true"`. Also, ensure keyboard dismissibility by adding an `Escape` key listener via `useEffect` whenever the UI element is open.
## 2026-07-20 - Global Navigation Interactive Elements Focus Visible Styles
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`Link` buttons) on theoretical and topics page causing accessibility regressions during keyboard navigation. Custom styles were missing or mismatched `focus:ring-blue-500` instead of the app design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.

## 2026-09-04 - Hide Decorative and Redundant Elements in Custom Card Links from Screen Readers
**Learning:** In complex `<Link>` components containing rich layout (like cards with icons, titles, descriptions, and repetitive 'Read more' CTAs), screen readers read every text node. Redundant CTAs and decorative icons create noise and slow down keyboard navigation for visually impaired users. This was observed specifically in the `Topics.tsx` subject and anatomy cards.
**Action:** Always add `aria-hidden="true"` to purely decorative visual elements (like large emojis or background icons) and repetitive CTA text (e.g., 'Go to subject ->') within complex interactive components. Let the screen reader focus only on the meaningful title and description of the card.
