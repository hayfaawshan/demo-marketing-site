import React from "react";
import { render, screen } from "@testing-library/react";

describe("Example Test Suite", () => {
  it("renders a simple message", () => {
    render(<div>Hello, Genie!</div>);
    expect(screen.getByText("Hello, Genie!")).toBeInTheDocument();
  });
});