
## 2024-03-24 - Memoize derived state in React components
**Learning:** When performing array operations like `.filter()` or `.map()` directly inside a React component's render body based on props or state, it creates new array references on every render, which can lead to unnecessary re-renders of child components and wasted CPU cycles.
**Action:** Always wrap derived array computations in `useMemo` to preserve referential equality across renders unless dependencies change.
