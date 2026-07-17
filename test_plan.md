Plan:
1. Update `Topbar.tsx` to make the donation button minimalist (remove text, keep ☕, make it round).
2. Update `GlobalSearch.tsx`:
   - Change the component to use a relative wrapper.
   - Replace the fake search button with a real search input, or style `CommandInput` to look like the search bar, with placeholder "Szukaj...".
   - Use `Command` instead of `CommandDialog`.
   - Place the `CommandList` in an absolute positioned div (`absolute top-full mt-2 right-0 ...`) so it acts as a dropdown.
   - Handle outside clicks to close the dropdown.
3. Complete pre-commit steps.
