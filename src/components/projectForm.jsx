import { useState } from "react";

/* eslint-disable */
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
    <div className="bg-slate-600 p-4 rounded flex flex-col gap-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="form-group">
          <input
            className="p-4 border border-gray-300 rounded mt-2"
            type="text"
            id="projectTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            autoFocus
          />
        </div>
        <div className="flex justify-between">
          <button type="submit">Add Project</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
/* eslint-enable */

export { ProjectForm };
