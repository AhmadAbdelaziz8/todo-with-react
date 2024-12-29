import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    id: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      ...todo,
      id: crypto.randomUUID(), 
      status: "pending",
    };

    addTodo(newTodo);

    setTodo({
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      id: "",
      status: "",
    });
  };

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={todo.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={todo.dueDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="priority">Priority</label>
        <input
          type="text"
          id="priority"
          name="priority"
          value={todo.priority}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
