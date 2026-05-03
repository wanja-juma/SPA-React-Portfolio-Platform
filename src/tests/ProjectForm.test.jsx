/* global test, expect, vi */

import { render, screen, fireEvent } from "@testing-library/react";
import ProjectForm from "../components/ProjectForm";

test("submits new project", () => {
  const addProject = vi.fn();

  render(<ProjectForm addProject={addProject} />);

  fireEvent.change(screen.getByPlaceholderText(/project title/i), {
    target: { value: "New Project" },
  });

  fireEvent.change(screen.getByPlaceholderText(/description/i), {
    target: { value: "New Description" },
  });

  fireEvent.click(screen.getByRole("button", { name: /add project/i }));

  expect(addProject).toHaveBeenCalledWith({
    title: "New Project",
    description: "New Description",
  });
});