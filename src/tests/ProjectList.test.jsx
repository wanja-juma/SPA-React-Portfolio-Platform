/* global test, expect,  */

import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

test("renders list of projects", () => {
  const projects = [
    { id: 1, title: "Project A", description: "Desc A" },
    { id: 2, title: "Project B", description: "Desc B" },
  ];

  render(<ProjectList projects={projects} />);

  expect(screen.getByText(/project a/i)).toBeInTheDocument();
  expect(screen.getByText(/project b/i)).toBeInTheDocument();
});

test("shows message when no projects", () => {
  render(<ProjectList projects={[]} />);

  expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
});