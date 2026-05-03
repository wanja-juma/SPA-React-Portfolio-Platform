
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Dynamic Color Clock", description: "React + Npm" },
    { id: 2, title: "Portfolio Website", description: "React + Tailwind" },
    { id: 3, title: "E-commerce App", description: "Full-stack project" },
    { id: 4, title: "Weather App", description: "API integration" },

  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects((prev) => [...prev, { ...project, id: Date.now() }]);
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <SearchBar setSearchTerm={setSearchTerm} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
