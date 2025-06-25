import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom';

// Mock next/router for testing active link highlighting
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const { useRouter } = require("next/router");

describe("Layout Navigation", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders navigation links", () => {
    useRouter.mockReturnValue({ pathname: "/" });
    render(
      <Layout title="Test Page">
        <p>Test Content</p>
      </Layout>
    );

    expect(screen.getByText("TechCorp")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /Products/i })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "/contact");
  });

  test("highlights the active page link (About)", () => {
    useRouter.mockReturnValue({ pathname: "/about" });
    render(
      <Layout title="Test Page">
        <p>Test Content</p>
      </Layout>
    );

    const aboutLink = screen.getByRole("link", { name: /About/i });
    expect(aboutLink).toHaveClass("font-bold");
    expect(aboutLink).toHaveClass("underline");
    expect(aboutLink).toHaveClass("text-white");

    const homeLink = screen.getByRole("link", { name: /Home/i });
    expect(homeLink).not.toHaveClass("font-bold");
    expect(homeLink).not.toHaveClass("underline"); // Only hover:underline when not active
    expect(homeLink).toHaveClass("text-gray-300");
  });
});
