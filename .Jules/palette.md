## 2024-05-18 - Improve accessibility of layout and sidebar
**Learning:** Found several buttons in layout and sidebar components that lack `aria-label` or `aria-expanded` attributes, making them difficult for screen readers to navigate. Icon-only buttons should always have an `aria-label` and accordion buttons need `aria-expanded` so screen reader users know the state of the component.
**Action:** Added `aria-label` and `aria-expanded` properties to buttons in `Sidebar.tsx`, `TextbookLayout.tsx`, and `ChapterNav.tsx`. Always ensure buttons have semantic meaning.
