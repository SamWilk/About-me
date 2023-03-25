import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Do what you want/i);
  expect(linkElement).toBeInTheDocument();
});
