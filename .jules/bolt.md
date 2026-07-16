## 2025-02-12 - UI Search Responsiveness
**Learning:** `useDeferredValue` is highly effective when wrapping computationally expensive fuzzy search (Fuse.js) calls within a React component.
**Action:** When working with synchronous fuzzy search triggered on key press, immediately look for `useDeferredValue` or `useDebounce` to keep inputs responsive.

## 2025-02-12 - Unnecessary Data Processing
**Learning:** Passing `includeMatches: true` to Fuse.js can add overhead when the application logic immediately discards `result.matches`.
**Action:** Always check how return values from third-party libraries are consumed; if the data isn't used, disable its computation if an option is available.
