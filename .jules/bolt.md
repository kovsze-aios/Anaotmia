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

## 2025-02-12 - Limit Fuzzy Search Results
**Learning:** When using Fuse.js for client-side search rendering into React components (like cmdk CommandList), allowing unbounded results causes excessive CPU computation and massive DOM re-renders for broad queries, leading to severe input lag. The overhead is twofold: Fuse.js itself spends extra CPU ranking all matches, and React then iterates and renders the entire returned array.
**Action:** Always provide a `limit` option (e.g., `{ limit: 15 }`) to `fuse.search` to strictly bound the work required for both computing and rendering search results.

## 2025-02-12 - Word Count Optimization on Massive Strings (Refinement)
**Learning:** While using `text.match(/\S+/g)` avoids creating a massive string split array, it still allocates an array containing all words in the text, which for very large strings (e.g. OCR textbooks) can cause massive memory allocations (e.g. 14MB+ for 200k words) and Garbage Collection spikes on the main thread.
**Action:** When counting words in extremely large strings and memory allocation is a concern, use a zero-allocation `for` loop that iterates over character codes instead of regex methods. It requires `O(1)` space and runs ~4-5x faster.
