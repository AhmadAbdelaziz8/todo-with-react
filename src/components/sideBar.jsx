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
    <div className="bg-base-300 text-base-content p-4">
      {/* Navigation Section */}
      <div className="space-y-2">
        <button className="flex w-full items-center gap-2 p-2 rounded hover:bg-neutral">
          <i className="fas fa-inbox"></i> Inbox
        </button>
        <button className="flex w-full items-center gap-2 p-2 rounded hover:bg-neutral">
          <i className="fas fa-calendar-day"></i> Today
        </button>
        <button className="flex w-full items-center gap-2 p-2 rounded hover:bg-neutral">
          <i className="fas fa-calendar-week"></i> This Week
        </button>
      </div>

      {/* Projects Section */}
      <div className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-center">Your Projects</h2>
        <button
          className="flex items-center justify-center gap-2 p-2 bg-secondary text-secondary-content rounded hover:bg-secondary-focus"
          onClick={toggleProjectForm}
        >
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
