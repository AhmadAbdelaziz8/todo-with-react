import Todo from "./todo";
import TodoForm from "./todoForm";
import { useState } from "react";

const Content = ({ project, setSelectedProject, projects, setProjects }) => {
  const [showForm, setShowForm] = useState(false);

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setProjects(
      projects.map((p) => {
        // find the project that matches the current project
        if (p.id === project.id) {
          // Add the new todo to the project
          return {
            ...p,
            todoList: [...p.todoList, newTodo],
          };
        }
        return p;
      })
    );
    // setSelectedProject(project);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return project !== null ? (
    <>
      <div>
        <h1>{project.title}</h1>
        <button onClick={toggleForm}>
          {showForm ? "Close Form" : "Add Todo"}
        </button>
        {showForm && <TodoForm addTodo={addTodo} />}
        <Todo todoList={project.todoList} />
      </div>
    </>
  ) : (
    <h1>No project selected</h1>
  );
};

export default Content;
