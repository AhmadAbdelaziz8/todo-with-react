import Todo from "./todo";
import TodoForm from "./todoForm";
import { useState } from "react";

const Content = ({ project }) => {
  const [showForm, setShowForm] = useState(true);
  // function addTodo(title, description, dueDate, priority) {
  //   project.todoList.push({
  //     title,  });
  // }
  return project !== null ? (
    <div>
      <>
        <Todo todoList={project.todoList} />
        {showForm && <TodoForm />}
      </>
    </div>
  ) : (
    <h1>No project selected</h1>
  );
};

export default Content;
