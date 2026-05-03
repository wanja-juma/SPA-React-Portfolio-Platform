/* global test, expect, vi */

import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("updates search term on input change", () => {
  const setSearchTerm = vi.fn();

  render(<SearchBar setSearchTerm={setSearchTerm} />);

  const input = screen.getByPlaceholderText(/search projects/i);

  fireEvent.change(input, { target: { value: "React" } });

  expect(setSearchTerm).toHaveBeenCalledWith("React");
});