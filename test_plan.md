1. **Refactor `TeoriaBiologiaPage` to support query params**:
   - Wrap the main content inside a `<Suspense>` boundary.
   - Use `useSearchParams` to listen for the `?domain=` query parameter.
   - Add a `useEffect` that catches this parameter. When present, find the domain, set its first section as `activeSectionId` and `activeSection`, and strip the `?domain` query param using `router.replace('/theory/biologia')`.

2. **Update the "Działy tematyczne" layout**:
   - Change the `<ol>` to `<div className="textbook-welcome__domain-grid">` to match the anatomy layout.
   - Replace the `<li>` items with `<Link>` components pointing to `href={`/theory/biologia?domain=${d.id}`}`.
   - Apply classes: `textbook-welcome__domain-btn flex items-center cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors w-full text-left`.

3. **Complete pre commit steps**:
   - Ensure proper testing, verifications, reviews and reflections are done.

4. **Submit**:
   - Commit and push the changes.
