import { useState } from "react";
import "../styles/sideBar.css";
import { ProjectForm } from "./projectForm";
import { ProjectContainer } from "./projects";

const Sidebar = () => {
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleAddProject = (title) => {
    const newProject = { title, id: crypto.randomUUID() }; // Or use uuid
    setProjects([...projects, newProject]);
    console.log(projects);
  };

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col bg-gray-800 text-white p-4">
      {/* Navigation Section */}
      <div className="navigation-section">
        <button className="nav-button">
          <i className="fas fa-inbox"></i> Inbox
        </button>
        <button className="nav-button">
          <i className="fas fa-calendar-day"></i> Today
        </button>
        <button className="nav-button">
          <i className="fas fa-calendar-week"></i> This Week
        </button>
      </div>

      {/* Projects Section */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-bold text-slate-200">Your Projects</h2>
        <button className="add-project-button" onClick={toggleProjectForm}>
          <i className="fas fa-plus"></i> Add Project
        </button>
        {showProjectForm && (
          <ProjectForm
            onSubmit={handleAddProject}
            onClose={toggleProjectForm}
          />
        )}
        <ProjectContainer projects={projects} />
      </div>
    </div>
  );
};

export default Sidebar;
