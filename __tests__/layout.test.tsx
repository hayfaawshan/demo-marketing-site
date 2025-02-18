import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Layout Navigation", () => {
  test("renders navigation links", () => {
    render(
      <BrowserRouter>
        <Layout title="Test Page">
          <p>Test Content</p>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByText("TechCorp")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Home/i })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: /About/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /Products/i })).toHaveAttribute("href", "/products");
    expect(screen.getByRole("link", { name: /Contact/i })).toHaveAttribute("href", "/contact");
  });
});
