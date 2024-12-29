/* eslint-disable react/prop-types */
const ProjectContainer = ({ projects, setSelectedProject }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="project-container">
        <p>No projects yet</p>
      </div>
    );
  }

  return (
    <div className="project-container">
      {projects.map((project) => (
        <div
          className="cursor-pointer bg-black text-200 p-2 m-2"
          key={project.id}
          onClick={() => {
            console.log("test");
            setSelectedProject(project);
          }}
        >
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export { ProjectContainer };
