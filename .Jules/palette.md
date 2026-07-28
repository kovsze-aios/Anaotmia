## 2026-07-20 - Focus Ring Consistency
**Learning:** Found multiple instances of mismatched or missing `focus-visible` utility classes for interactive elements (`button`, `summary`) causing accessibility regressions during keyboard navigation. Custom styles like `focus:ring-blue-500` were used instead of the app's standard design tokens.
**Action:** Standardize on `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:focus-visible:ring-zinc-600` across all custom interactive components to ensure consistent keyboard accessibility.
## 2023-10-25 - Sidebar Backdrop Accessibility
**Learning:** Backdrops acting as click-away listeners (like in the Sidebar and TextbookLayout) must not be raw `<div>` tags with `onClick` handlers unless they are fully accessible. They confuse screen readers since they act like buttons but aren't exposed as such.
**Action:** When a visually hidden backdrop or overlay is used purely to close a drawer on click outside, hide it from screen readers by adding `aria-hidden="true"`, and ensure an accessible alternative exists (an explicit focusable close button, and listening for the `Escape` key on the document).
