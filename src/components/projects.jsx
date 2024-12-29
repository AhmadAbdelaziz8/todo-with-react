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
    <div className="project-container">
      {projectState.projects.map((project) => (
        <div
          className="cursor-pointer bg-black text-200 p-2 m-2"
          key={project.id}
          onClick={() => {
            setProjectState({ ...projectState, selectedProject: project });
          }}
        >
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export { ProjectContainer };
