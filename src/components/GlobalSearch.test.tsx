/**
 * @vitest-environment jsdom
 */
import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { GlobalSearch } from "./GlobalSearch";
import { useRouter } from "next/navigation";
import { searchSections } from "@/services/searchService";
import { useI18n } from "@/i18n";
import '@testing-library/jest-dom'; // Add jest-dom matchers

// Mock the router
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

// Mock the search service
vi.mock("@/services/searchService", () => ({
  searchSections: vi.fn(),
}));

// Mock i18n
vi.mock("@/i18n", () => ({
  useI18n: vi.fn(),
}));

// Setup intersection observer mock for CMDk (radix-ui/cmdk requires this)
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

class MockResizeObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
Object.defineProperty(window, "ResizeObserver", {
  writable: true,
  configurable: true,
  value: MockResizeObserver,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("GlobalSearch", () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useRouter).mockReturnValue({
      push: mockPush,
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
    } as unknown as ReturnType<typeof useRouter>);

    vi.mocked(useI18n).mockReturnValue({
      t: {
        topbar: {
          searchPlaceholder: "Search...",
          searching: "Searching...",
          noResults: "No results for '{query}'",
        },
      },
    } as unknown as ReturnType<typeof useI18n>);
  });

  it("renders the search input closed by default", () => {
    render(<GlobalSearch />);
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("opens the palette and focuses input when CMD+K is pressed", async () => {
    render(<GlobalSearch />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.keyDown(document, { key: "k", metaKey: true });
    expect(input).toHaveFocus();
  });

  it("triggers a search request and displays results after a debounce", async () => {
    vi.mocked(searchSections).mockResolvedValue([
      {
        id: "1",
        title: "Heart Anatomy",
        url: "/theory/anatomy/heart",
        subject: "Anatomia",
        excerpt: "The heart is a muscular organ.",
      },
    ]);

    render(<GlobalSearch />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.focus(input);
    await userEvent.type(input, "heart");

    await waitFor(() => {
      expect(searchSections).toHaveBeenCalledWith("heart", expect.any(Object));
    });

    await waitFor(() => {
      expect(screen.getByText("🩺 Anatomia")).toBeInTheDocument();
      expect(screen.getByText("Heart Anatomy")).toBeInTheDocument();
      expect(screen.getByText("The heart is a muscular organ.")).toBeInTheDocument();
    });
  });

  it("navigates and closes the palette when a result is clicked", async () => {
    vi.mocked(searchSections).mockResolvedValue([
      {
        id: "2",
        title: "Lungs",
        url: "/theory/anatomy/lungs",
        subject: "Anatomia",
        excerpt: "Lungs help you breathe.",
      },
    ]);

    render(<GlobalSearch />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.focus(input);
    await userEvent.type(input, "lungs");

    const resultItem = await screen.findByText("Lungs");
    expect(resultItem).toBeInTheDocument();

    const commandItem = resultItem.closest('[role="option"]');
    expect(commandItem).toBeInTheDocument();

    if (commandItem) {
      fireEvent.click(commandItem);
    }

    expect(mockPush).toHaveBeenCalledWith("/theory/anatomy/lungs");
  });

  it("shows no results state when search returns empty", async () => {
    vi.mocked(searchSections).mockResolvedValue([]);

    render(<GlobalSearch />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.focus(input);
    await userEvent.type(input, "nonexistent");

    await waitFor(() => {
      expect(searchSections).toHaveBeenCalledWith("nonexistent", expect.any(Object));
    });

    expect(await screen.findByText("No results for 'nonexistent'")).toBeInTheDocument();
  });

  it("closes the palette when Escape is pressed", async () => {
    render(<GlobalSearch />);
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.focus(input);
    await userEvent.type(input, "test");

    await waitFor(() => {
      expect(screen.getByText(/Searching...|No results/)).toBeInTheDocument();
    });

    fireEvent.keyDown(input, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByText(/Searching...|No results/)).not.toBeInTheDocument();
    });
  });
});
