import React, { useState } from "react";

const ProjectForm = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle("");
    onClose();
  };

  return (
    <div className="project-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectTitle">Project Title:</label>
          <input
            type="text"
            id="projectTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            autoFocus
          />
        </div>
        <div className="form-actions">
          <button type="submit">Add Project</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
