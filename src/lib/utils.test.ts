import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('should merge basic strings', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should handle falsy values', () => {
    expect(cn('class1', false, null, undefined, 0, '', 'class2')).toBe('class1 class2');
  });

  it('should merge tailwind classes and resolve conflicts', () => {
    // Both define padding, pb-4 should override p-2 for bottom padding
    // With tailwind-merge, it might just replace p-2 completely if there's conflict, or keep both if not direct conflict.
    // Actually tailwind-merge resolves p-2 and p-4 to p-4 if they are both p-*, but p-2 and pb-4 results in p-2 pb-4.
    // Let's use a clear conflict: px-2 and px-4
    expect(cn('px-2', 'px-4')).toBe('px-4');
  });

  it('should handle arrays', () => {
    expect(cn(['class1', 'class2'])).toBe('class1 class2');
    expect(cn(['class1'], ['class2'])).toBe('class1 class2');
  });

  it('should handle objects', () => {
    expect(cn({ class1: true, class2: false, class3: true })).toBe('class1 class3');
  });

  it('should handle mixed inputs', () => {
    expect(
      cn(
        'base-class',
        { 'conditional-class': true, 'ignored-class': false },
        ['array-class-1', 'array-class-2'],
        undefined,
        null,
        'px-2 py-1',
        'px-4' // overrides px-2
      )
    ).toBe('base-class conditional-class array-class-1 array-class-2 py-1 px-4');
  });
});
