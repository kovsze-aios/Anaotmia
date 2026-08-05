1. **Refactor `src/app/theory/biologia/page.tsx` to handle `?domain=` query param**:
   - Wrap the main component's contents in a `<Suspense>` boundary to safely use `useSearchParams` without de-opting from static rendering.
   - Use `useSearchParams` from `next/navigation` to catch the `?domain=` parameter.
   - Add a `useEffect` that checks if `domain` is present in the query string. If so, find the first section for that domain in `biologiaTheory` and set `activeSectionId` and `activeSection`. We can also remove the query param using `router.replace('/theory/biologia', undefined, { shallow: true })` or similar to clean up the URL.
2. **Update Domain Cards in `TeoriaBiologiaPage`**:
   - Change `<ol className="textbook-welcome__domains">` to `<div className="textbook-welcome__domain-grid">` to match the anatomy layout.
   - Replace the `<li>` tags with `<Link>` tags from `next/link`.
   - The `href` for each link should be `/theory/biologia?domain=${d.id}`.
   - Add Tailwind classes for interactivity: `className="textbook-welcome__domain-btn flex items-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors w-full text-left"`.
3. **Pre Commit Steps**:
   - Ensure proper testing, verifications, reviews and reflections are done.
4. **Submit changes**:
   - Submit.
