/* global test, expect, */

import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

test("renders project title and description", () => {
  const project = {
    title: "Test Project",
    description: "Test Description",
  };

  render(<ProjectCard project={project} />);

  expect(screen.getByText(/test project/i)).toBeInTheDocument();
  expect(screen.getByText(/test description/i)).toBeInTheDocument();
});