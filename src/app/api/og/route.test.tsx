import { describe, it, expect, vi } from 'vitest';
import { GET } from './route';
import { NextRequest } from 'next/server';

describe('OG API Route', () => {
  it('returns a 500 error if URL parsing fails', async () => {
    // Mock request with an invalid URL string to trigger URL parsing error
    const req = { url: 'not-a-valid-url' } as NextRequest;

    // Spy on console.log
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});

    const response = await GET(req);

    expect(response.status).toBe(500);
    const text = await response.text();
    expect(text).toBe('Failed to generate the image');

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Invalid URL'));

    consoleSpy.mockRestore();
  });
});
