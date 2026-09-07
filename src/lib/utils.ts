import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Hides the scrollbar visually while leaving the element fully scrollable by
 * wheel, touch, trackpad and keyboard.
 *
 * The three panels this is used on are dark, and a platform scrollbar renders
 * as a bright stripe down their edge. Covers Firefox (`scrollbar-width`), old
 * Edge/IE (`-ms-overflow-style`) and WebKit/Blink (the pseudo-element).
 */
export const HIDE_SCROLLBAR =
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
