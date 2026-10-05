import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ActiveRecall } from "./ActiveRecall";

describe("ActiveRecall", () => {
  it("renders the question and replaces multiple underscores with blanks", () => {
    render(<ActiveRecall question="The powerhouse of the cell is the _______." answer="mitochondria" />);

    // Check parts of the question are rendered
    expect(screen.getByText("The powerhouse of the cell is the")).toBeInTheDocument();
    expect(screen.getByText(".")).toBeInTheDocument();

    // Check the gap is rendered correctly with exactly 10 underscores
    expect(screen.getByText("__________")).toBeInTheDocument();
  });

  it("does not render the answer initially", () => {
    render(<ActiveRecall question="What is 2 + 2?" answer="4" />);
    expect(screen.queryByText("4")).not.toBeInTheDocument();
    expect(screen.queryByText("▸ Klucz odpowiedzi")).not.toBeInTheDocument();
  });

  it("reveals the answer and updates attributes when clicked", () => {
    render(<ActiveRecall question="What is 2 + 2?" answer="4" />);

    const trigger = screen.getByRole("button");
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    // Click to reveal
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("▸ Klucz odpowiedzi")).toBeInTheDocument();
  });

  it("renders the examRef when provided and revealed", () => {
    render(
      <ActiveRecall
        question="Describe photosynthesis."
        answer="A process used by plants."
        examRef="Matura 2023, Task 4"
      />
    );

    const trigger = screen.getByRole("button");

    // Shouldn't be visible before click
    expect(screen.queryByText("Źródło: Matura 2023, Task 4")).not.toBeInTheDocument();

    // Click to reveal
    fireEvent.click(trigger);

    expect(screen.getByText("Źródło: Matura 2023, Task 4")).toBeInTheDocument();
  });

  it("toggles the answer visibility when clicked multiple times", () => {
    render(<ActiveRecall question="What is 2 + 2?" answer="4" />);

    const trigger = screen.getByRole("button");

    // Open
    fireEvent.click(trigger);
    expect(screen.getByText("4")).toBeInTheDocument();

    // Close
    fireEvent.click(trigger);
    expect(screen.queryByText("4")).not.toBeInTheDocument();
  });
});
