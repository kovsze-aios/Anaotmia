/**
 * A highly optimized function to create a short, single-line excerpt from a string.
 * It collapses contiguous whitespace into a single space, up to a maximum length.
 * Replaces naive `text.replace(/\s+/g, " ")` to prevent severe GC pauses on massive OCR strings.
 */
export const makeExcerpt = (text?: string, max = 160): string | undefined => {
  if (!text) return undefined;

  let excerpt = "";
  let inWhitespace = true; // Start true to trim leading whitespace
  let i = 0;

  for (; i < text.length; i++) {
    const code = text.charCodeAt(i);
    // Fast check for common whitespace characters (space, newline, tab, carriage return, non-breaking space)
    const isWhitespace =
      code <= 32 ? (code === 32 || code === 10 || code === 9 || code === 13) : code === 160;

    if (isWhitespace) {
      if (!inWhitespace) {
        excerpt += " ";
        inWhitespace = true;
      }
    } else {
      excerpt += text[i];
      inWhitespace = false;
    }

    if (excerpt.length > max) {
      break;
    }
  }

  const clean = excerpt.trimEnd();
  if (!clean) return undefined;

  // If we truncated the string, check if there's any non-whitespace text remaining
  // to determine if we should append an ellipsis
  if (excerpt.length > max) {
    let hasMoreText = false;
    for (let j = i + 1; j < text.length; j++) {
      const code = text.charCodeAt(j);
      const isWhitespace =
        code <= 32 ? (code === 32 || code === 10 || code === 9 || code === 13) : code === 160;
      if (!isWhitespace) {
        hasMoreText = true;
        break;
      }
    }

    if (hasMoreText || clean.length > max) {
      return `${clean.slice(0, max).trimEnd()}…`;
    }
  }

  return clean;
};
