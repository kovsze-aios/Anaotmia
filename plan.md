1.  **Refactor `formatOcrText` in `src/lib/textbookFormatting.ts` to use a faster regex.**
    -   The current regex `/(?<!\n)\n(?!\n)/g` uses a negative lookbehind, which is significantly slower in V8 than using capture groups. We'll change it to `(/([^\n])\n(?!\n)/g, "$1 ")`.
    -   Run tests to verify the change using `pnpm run test` or `pnpm run check`.
2.  **Add a journal entry to `.jules/bolt.md`**
    -   Log the specific performance learning about V8's slow negative lookbehinds in massive strings and the capture group workaround.
3.  **Run pre-commit steps.**
    -   Complete pre commit steps to make sure proper testing, verifications, reviews and reflections are done.
4.  **Create a PR.**
    -   Title: `⚡ Bolt: Use capture groups over slow lookbehinds in formatOcrText`
    -   Description with 💡 What, 🎯 Why, 📊 Impact, and 🔬 Measurement.
