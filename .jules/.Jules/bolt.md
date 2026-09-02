## 2024-05-18 - Optimize regex replacement on massive strings
**Learning:** Applying a global regex replacement (`.replace(/\s+/g, " ")`) across a massive string (like the entire text body in a search index initialization) before truncating it causes significant CPU overhead and blocks the main thread.
**Action:** Always slice massive strings to a safe maximum length (e.g., `max * 3`) *before* applying global regex replacements. Always call `.trimStart()` before slicing to guarantee no visible characters are truncated if the string contains large chunks of leading whitespace.
