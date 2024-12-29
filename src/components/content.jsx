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

  const handleEditTodo = (todoId) => {
    // Implement edit functionality here.  This will likely involve opening a modal or form to edit the todo item.
  };

  const handleDeleteTodo = (todoId) => {
    setProjectState((prevProjectState) => {
      const updatedProjects = prevProjectState.projects.map((p) =>
        p.id === projectState.selectedProject.id
          ? {
              ...p,
              todoList: p.todoList.filter((todo) => todo.id !== todoId),
            }
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

  return projectState.selectedProject !== null ? (
    <div className="p-4 bg-base-100">
      <h1 className="text-3xl font-bold mb-4 text-base-content">
        {projectState.selectedProject.title}
      </h1>
      <div className="mb-4">
        <button
          onClick={toggleForm}
          className="bg-secondary hover:bg-secondary-focus text-secondary-content font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          <span className="transition duration-300 ease-in-out">
            {showForm ? "Close Form" : "Add Todo"}
          </span>
        </button>
      </div>
      {showForm && (
        <TodoForm addTodo={addTodo} setShowForm={setShowForm} />
      )}
      <Todo
        todoList={projectState.selectedProject.todoList}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  ) : (
    <h1 className="text-center text-2xl mt-10 text-base-content">
      No project selected
    </h1>
  );
};

export default Content;
