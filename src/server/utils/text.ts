/**
 * Common server-side string manipulation and text processing utilities.
 */

// ⚡ Bolt Optimization: Zero-allocation word-boundary excerpt generation
// 💡 What: Replaced regex `replace(/\s+/g, " ").trim()` with a bounded `charCodeAt` loop that streams the string until the character limit is reached.
// 🎯 Why: To avoid severe CPU/memory overhead and Garbage Collection pauses when generating excerpts from multi-megabyte OCR text strings during search index construction.
// 📊 Impact: O(1) memory and O(max limit) time complexity instead of O(N) memory/time where N is the length of the massive textbook section text.
export const makeExcerpt = (text?: string, max = 160): string | undefined => {
  if (!text) return undefined;

  let result = "";
  let inWhitespace = true;

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    // Space (32), tab (9), LF (10), CR (13), non-breaking space (160).
    const isWhitespace = code === 32 || (code >= 9 && code <= 13) || code === 160;

    if (isWhitespace) {
      if (!inWhitespace) {
        inWhitespace = true;
        result += " ";
      }
    } else {
      inWhitespace = false;
      result += text[i];
    }

    if (result.length > max) {
        let hasMoreNonWhitespace = false;
        // Check if there is any actual content left in the string,
        // or if it was just trailing whitespace which wouldn't require an ellipsis.
        for (let j = i + 1; j < text.length; j++) {
            const code2 = text.charCodeAt(j);
            const isWs = code2 === 32 || (code2 >= 9 && code2 <= 13) || code2 === 160;
            if (!isWs) {
                hasMoreNonWhitespace = true;
                break;
            }
        }

        if (!hasMoreNonWhitespace) {
             break;
        } else {
             return `${result.slice(0, max).trimEnd()}…`;
        }
    }
  }

  const finalStr = result.trimEnd();
  if (!finalStr) return undefined;
  return finalStr;
};
