/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/sideBar.css";
import { ProjectForm } from "./projectForm";
import { ProjectContainer } from "./projects";

const Sidebar = ({ projectState, setProjectState }) => {
  const [showProjectForm, setShowProjectForm] = useState(false);

const handleAddProject = (title) => {
    const newProject = { title, id: crypto.randomUUID(), todoList: [] };
    setProjectState((prevProjectState) => ({
      ...prevProjectState,
      projects: [...prevProjectState.projects, newProject],
    }));
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
        <ProjectContainer projectState={projectState} setProjectState={setProjectState} />
      </div>
    </div>
  );
};

export default Sidebar;
