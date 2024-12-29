import Todo from "./todo";
import TodoForm from "./todoForm";
import { useState } from "react";

const Content = ({ projectState, setProjectState }) => {
  const [showForm, setShowForm] = useState(false);

  const addTodo = (newTodo) => {
    setProjectState((prevProjectState) => {
      const updatedProjects = prevProjectState.projects.map((p) =>
        p.id === projectState.selectedProject.id
          ? { ...p, todoList: [...p.todoList, newTodo] }
          : p
      );
      const updatedSelectedProject = updatedProjects.find(
        (p) => p.id === projectState.selectedProject.id
      );
      return {
        ...prevProjectState,
        projects: updatedProjects,
        selectedProject: updatedSelectedProject,
      };
    });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return projectState.selectedProject !== null ? (
    <>
      <div>
        <h1>{projectState.selectedProject.title}</h1>
        <button onClick={toggleForm}>
          {showForm ? "Close Form" : "Add Todo"}
        </button>
        {showForm && <TodoForm addTodo={addTodo} setShowForm={setShowForm} />}
        <Todo todoList={projectState.selectedProject.todoList} />
      </div>
    </>
  ) : (
    <h1>No project selected</h1>
  );
};

export default Content;