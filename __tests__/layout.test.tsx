import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

describe("Layout Navigation", () => {
  test("renders navigation links in header", () => {
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

  test("renders footer with dynamic year and links", () => {
    render(
      <BrowserRouter>
        <Layout title="Test Page">
          <p>Test Content</p>
        </Layout>
      </BrowserRouter>
    );

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(`© ${currentYear} TechCorp`))).toBeInTheDocument();
    
    const footerAboutLink = screen.getAllByRole("link", { name: /About/i })[1];
    const footerContactLink = screen.getAllByRole("link", { name: /Contact/i })[1];
    
    expect(footerAboutLink).toHaveAttribute("href", "/about");
    expect(footerContactLink).toHaveAttribute("href", "/contact");
  });

  test("renders children content", () => {
    render(
      <BrowserRouter>
        <Layout title="Test Page">
          <p>Test Content</p>
        </Layout>
      </BrowserRouter>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
