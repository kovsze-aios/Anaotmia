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

## 2025-02-12 - Word Count Optimization on Massive Strings (Regex vs Iteration)
**Learning:** Using `(text.match(/\S+/g) || []).length` on extremely large OCR text strings causes significant memory allocation (O(N)) because it creates a massive array containing every matched word. This leads to main thread blockage and severe Garbage Collection spikes.
**Action:** Use a zero-allocation `for` loop that iterates over character codes instead of regex to count words in massive strings, which performs ~10x faster and causes no heap allocations or GC pauses.
## 2025-02-12 - Module-Level Data Parsing Blocks App Load
**Learning:** Eagerly parsing massive domain data structures (like aggregating all textbook sections into a single search index array) and initializing libraries like `Fuse.js` at the top level of a module (e.g., `src/lib/search.ts`) blocks the main thread during initial app hydration and route loads, even if the user never opens the search UI.
**Action:** Always lazily initialize heavy data aggregations and search indices. Wrap the generation in a getter function and only execute it when the user performs an action (like typing in a search bar) for the first time.

## 2025-02-12 - Limit String Operations on Massive Texts
**Learning:** Applying global regular expressions (e.g., `text.replace(/\s+/g, " ")`) to massive text fields before truncating them causes significant CPU and memory overhead, especially when building search indices across MBs of text.
**Action:** Always slice massive text strings to a safe maximum length (e.g., `maxLength * 3`) before applying global formatting rules to convert O(N) operations into O(1).
