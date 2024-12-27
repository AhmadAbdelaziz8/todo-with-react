// eslint-disable-next-line react/prop-types
const Content = ({ project }) => {
  return project !== null ? (
    <div>
      <h1>{project.title}</h1>
    </div>
  ) : (
    <h1>No project selected</h1>
  );
};

export default Content;
