import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import App from "./App";

test("renders artisans link in sidebar", () => {
  render(<App />);
  expect(screen.getByText(/artisans/i)).toBeInTheDocument();
});

