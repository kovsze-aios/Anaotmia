## 2025-02-12 - UI Search Responsiveness
**Learning:** `useDeferredValue` is highly effective when wrapping computationally expensive fuzzy search (Fuse.js) calls within a React component.
**Action:** When working with synchronous fuzzy search triggered on key press, immediately look for `useDeferredValue` or `useDebounce` to keep inputs responsive.

## 2025-02-12 - Unnecessary Data Processing
**Learning:** Passing `includeMatches: true` to Fuse.js can add overhead when the application logic immediately discards `result.matches`.
**Action:** Always check how return values from third-party libraries are consumed; if the data isn't used, disable its computation if an option is available.

## 2025-02-12 - Isolate Scroll State to Prevent Re-renders
**Learning:** Attaching `scroll` event listeners that update state at the root of a large text-heavy component (like `TextbookContent`) causes massive unnecessary re-renders on every scroll tick.
**Action:** Always isolate high-frequency state updates (like scroll progress or mouse position) into small, dedicated leaf components so that only the tiny visual element re-renders, not the whole page content.

## 2025-02-12 - Word Count Optimization on Massive Strings
**Learning:** Using `text.split(/\s+/).filter(...)` on extremely large OCR text strings causes significant memory allocation and Garbage Collection spikes on the main thread, leading to performance degradation.
**Action:** Always use `(text.match(/\S+/g) || []).length` over `split` and `filter` when counting words or iterating over simple string patterns in massive texts to reduce memory overhead and avoid GC pauses.
## 2025-02-12 - Search Result Re-rendering Lag
**Learning:** Returning unbounded search results from `fuse.search()` directly into a React rendering context (like a list component) causes significant lag on broad keystrokes due to large array iteration and DOM rendering, in addition to the CPU time spent by Fuse itself to rank all matches.
**Action:** When using Fuse.js for client-side search rendering into React components, always provide a `limit` option (e.g., `{ limit: 15 }`) to prevent excessive CPU computation and massive DOM re-renders for broad queries.
