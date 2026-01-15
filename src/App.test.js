// src/App.test.tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders artisans link in sidebar", () => {
  render(<App />);

  expect(screen.getByText(/artisans/i)).toBeInTheDocument();
});
