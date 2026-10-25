1. **Add `type="button"` and `aria-expanded` to hamburger button in `src/components/Topbar.tsx`**
   - The hamburger button toggles `drawerOpen`, so it should include `aria-expanded={drawerOpen}` and `type="button"`.
2. **Add `type="button"`, `role="switch"`, and `aria-checked` to the theme toggle button in `src/components/Topbar.tsx`**
   - The theme toggle acts as a switch, so it should have `role="switch"` and `aria-checked={dark}` for screen reader compatibility, as well as `type="button"`.
3. **Run all tests and static checks**
   - Execute `pnpm run check` and `pnpm test` to verify changes.
4. **Complete pre-commit steps to ensure proper testing, verification, review, and reflection are done.**
   - Run `pre_commit_instructions` and follow the steps.
5. **Update Palette's Journal**
   - Append learning about `role="switch"` to `.jules/palette.md`.
6. **Submit PR**
   - Title: `🎨 Palette: [UX improvement] - Theme switch & Hamburger accessibility`
   - Description formatted properly.
