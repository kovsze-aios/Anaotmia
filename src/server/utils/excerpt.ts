/**
 * A fast, zero-allocation-style excerpt generator.
 * Avoids O(N) regex memory allocation and main-thread blocking by iterating
 * over character codes and capping the loop early when the maximum excerpt
 * length is reached.
 */
export const makeExcerpt = (text?: string, max = 160): string | undefined => {
  if (!text) return undefined;

  let clean = "";
  let inWhitespace = true;
  let hasMore = false;

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    const isWhitespace =
      code === 32 ||
      code === 9 ||
      code === 10 ||
      code === 13 ||
      code === 160;

    if (isWhitespace) {
      if (!inWhitespace) {
        clean += " ";
        inWhitespace = true;
      }
    } else {
      clean += text[i];
      inWhitespace = false;
    }

    if (clean.length > max) {
      if (clean.charCodeAt(clean.length - 1) === 32) {
        clean = clean.slice(0, -1);
        for (let j = i + 1; j < text.length; j++) {
          const c = text.charCodeAt(j);
          if (c !== 32 && c !== 9 && c !== 10 && c !== 13 && c !== 160) {
            hasMore = true;
            break;
          }
        }
      } else {
        hasMore = true;
      }
      break;
    }
  }

  if (clean.charCodeAt(clean.length - 1) === 32) {
    clean = clean.slice(0, -1);
  }

  if (!clean) return undefined;

  if (hasMore) {
    return `${clean.slice(0, max).trimEnd()}…`;
  }
  return clean;
};
