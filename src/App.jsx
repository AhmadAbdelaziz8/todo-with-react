import { useState } from "react";
import Sidebar from "./components/sideBar.jsx";
import Header from "./components/header.jsx";
import Content from "./components/content.jsx";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  return (
    <>
      <Header />
      <Sidebar
        setSelectedProject={setSelectedProject}
        projects={projects}
        setProjects={setProjects}
      />
      <Content
        project={selectedProject}
        setSelectedProject={setSelectedProject}
        projects={projects}
        setProjects={setProjects}
      />
    </>
  );
}

export default App;
