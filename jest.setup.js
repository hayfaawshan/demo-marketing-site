import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";
import { setDefaultOptions } from "@testing-library/user-event";

// Configure testing library
configure({
  testIdAttribute: "data-testid",
  defaultHidden: true,
  renderActiveElement: true
});

// Configure user events to run synchronously
setDefaultOptions({
  advanceTimers: jest.advanceTimersByTime
});
