import { render, screen, act } from "@testing-library/react";
import { useIsMobile } from "../hooks/use-mobile";
import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom';
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

// Helper function to simulate window resize
const resizeWindow = (width: number) => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  window.dispatchEvent(new Event('resize'));
  const mql = { matches: width < MOBILE_BREAKPOINT, addEventListener: jest.fn(), removeEventListener: jest.fn() };
  jest.spyOn(window, 'matchMedia').mockImplementation(() => mql as any);
  const event = new Event('change');
  mql.addEventListener.mock.calls[0][1](event);
};

// Test component that uses the hook
const TestComponent = () => {
  const isMobile = useIsMobile();
  return (
    <div data-testid="mobile-status">
      {isMobile ? "Mobile View" : "Desktop View"}
    </div>
  );
};

describe("useIsMobile Hook", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(window, 'matchMedia').mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn()
    } as any));
  });

  test("returns true when viewport width is below mobile breakpoint", () => {
    render(<TestComponent />);
    
    // Simulate mobile viewport
    act(() => {
      resizeWindow(MOBILE_BREAKPOINT - 1);
    });
    
    expect(screen.getByTestId("mobile-status")).toHaveTextContent("Mobile View");
  });

  test("returns false when viewport width is above mobile breakpoint", () => {
    render(<TestComponent />);
    
    // Simulate desktop viewport
    act(() => {
      resizeWindow(MOBILE_BREAKPOINT + 1);
    });
    
    expect(screen.getByTestId("mobile-status")).toHaveTextContent("Desktop View");
  });

  test("updates when viewport changes size", () => {
    render(<TestComponent />);
    
    // Start with desktop viewport
    act(() => {
      resizeWindow(MOBILE_BREAKPOINT + 100);
    });
    expect(screen.getByTestId("mobile-status")).toHaveTextContent("Desktop View");
    
    // Change to mobile viewport
    act(() => {
      resizeWindow(MOBILE_BREAKPOINT - 100);
    });
    expect(screen.getByTestId("mobile-status")).toHaveTextContent("Mobile View");
    
    // Back to desktop
    act(() => {
      resizeWindow(MOBILE_BREAKPOINT + 1);
    });
    expect(screen.getByTestId("mobile-status")).toHaveTextContent("Desktop View");
  });

  test("cleans up event listeners on unmount", () => {
    const removeEventListenerMock = jest.fn();
    jest.spyOn(window, 'matchMedia').mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: removeEventListenerMock
    } as any));
    
    const { unmount } = render(<TestComponent />);
    unmount();
    
    expect(removeEventListenerMock).toHaveBeenCalled();
  });
});
