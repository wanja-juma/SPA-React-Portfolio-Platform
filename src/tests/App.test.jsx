/* global test, expect, */

import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders initial projects", () => {
  render(<App />);

  expect(screen.getByText(/dynamic color clock/i)).toBeInTheDocument();
  expect(screen.getByText(/portfolio website/i)).toBeInTheDocument();
});

test("filters projects based on search", () => {
  render(<App />);

  const input = screen.getByPlaceholderText(/search projects/i);

  fireEvent.change(input, { target: { value: "weather" } });

  expect(screen.getByText(/weather app/i)).toBeInTheDocument();
  expect(screen.queryByText(/portfolio website/i)).not.toBeInTheDocument();
});

test("adds a new project", () => {
  render(<App />);

  fireEvent.change(screen.getByPlaceholderText(/project title/i), {
    target: { value: "New App" },
  });

  fireEvent.change(screen.getByPlaceholderText(/description/i), {
    target: { value: "Cool project" },
  });

  fireEvent.click(screen.getByRole("button", { name: /add project/i }));

  expect(screen.getByText(/new app/i)).toBeInTheDocument();
});