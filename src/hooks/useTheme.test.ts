// @vitest-environment jsdom
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, beforeEach, afterEach, vi } from "vitest";
import { useTheme } from "./useTheme";

describe("useTheme", () => {
  let localStorageMock: Record<string, string>;
  let mutationObserverCallbacks: MutationCallback[];

  beforeEach(() => {
    // Reset DOM state
    document.documentElement.className = "";

    // Mock localStorage
    localStorageMock = {};
    const mockStorage = {
      getItem: vi.fn((key: string) => localStorageMock[key] ?? null),
      setItem: vi.fn((key: string, value: string) => {
        localStorageMock[key] = value;
      }),
      clear: vi.fn(() => {
        localStorageMock = {};
      }),
      removeItem: vi.fn((key: string) => {
        delete localStorageMock[key];
      }),
      length: 0,
      key: vi.fn(),
    };
    Object.defineProperty(window, "localStorage", {
      value: mockStorage,
      writable: true,
    });

    // Mock MutationObserver
    mutationObserverCallbacks = [];
    class MockMutationObserver implements MutationObserver {
      constructor(callback: MutationCallback) {
        mutationObserverCallbacks.push(callback);
      }
      observe = vi.fn();
      disconnect = vi.fn();
      takeRecords = vi.fn(() => []);
    }
    Object.defineProperty(window, "MutationObserver", {
      value: MockMutationObserver,
      writable: true,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("initializes to false when document does not have dark class", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.dark).toBe(false);
  });

  it("initializes to true when document has dark class", () => {
    document.documentElement.classList.add("dark");
    const { result } = renderHook(() => useTheme());
    expect(result.current.dark).toBe(true);
  });

  it("updates state when MutationObserver triggers a class change", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.dark).toBe(false);

    // Simulate another script adding the "dark" class and triggering the observer
    act(() => {
      document.documentElement.classList.add("dark");
      mutationObserverCallbacks.forEach((cb) => cb([], window.MutationObserver.prototype as MutationObserver));
    });

    expect(result.current.dark).toBe(true);
  });

  it("toggles the theme class and state", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.dark).toBe(false);
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.dark).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(window.localStorage.setItem).toHaveBeenCalledWith("theme", "dark");

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.dark).toBe(false);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(window.localStorage.setItem).toHaveBeenCalledWith("theme", "light");
  });

  it("handles localStorage throwing an error gracefully", () => {
    // Simulate quota exceeded or private mode
    window.localStorage.setItem = vi.fn(() => {
      throw new Error("Quota exceeded");
    });

    const { result } = renderHook(() => useTheme());
    expect(result.current.dark).toBe(false);

    act(() => {
      result.current.toggleTheme();
    });

    // Should still toggle the DOM and state despite the error
    expect(result.current.dark).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
