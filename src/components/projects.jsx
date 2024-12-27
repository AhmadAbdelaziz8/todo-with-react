const ProjectContainer = ({ projects }) => {
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
        <div className="project" key={project.id}>
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
};

export { ProjectContainer };
