import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

test("renders learn react link", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/About me, Sam/i);
  expect(linkElement).toBeInTheDocument();
});
