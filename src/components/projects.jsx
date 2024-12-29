/* eslint-disable react/prop-types */
const ProjectContainer = ({ projectState, setProjectState }) => {
  if (!projectState.projects || projectState.projects.length === 0) {
    return (
      <div className="project-container">
        <p>No projects yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {projectState.projects.map((project) => (
        <button
          key={project.id}
          onClick={() => {
            setProjectState({ ...projectState, selectedProject: project });
          }}
          className="flex items-center justify-between w-full p-2 bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          <span>{project.title}</span>
          <i className="fas fa-chevron-right"></i>
        </button>
      ))}
    </div>
  );
};

export { ProjectContainer };
