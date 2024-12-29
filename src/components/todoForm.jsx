import { useState } from "react";

const TodoForm = ({ addTodo, setShowForm }) => {
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

    setShowForm(false);
  };

  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-neutral p-4 rounded shadow-md w-96 text-base-content"
    >
      <div className="mb-2">
        <label htmlFor="title" className="block font-bold mb-1">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={todo.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-base-200 rounded focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="block font-bold mb-1">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={todo.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-base-200 rounded focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="dueDate" className="block font-bold mb-1">
          Due Date
        </label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          value={todo.dueDate}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-base-200 rounded focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Priority</label>
        <div className="flex space-x-4">
          <div>
            <input
              type="radio"
              id="priority-low"
              name="priority"
              value="low"
              checked={todo.priority === "low"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="priority-low">Low</label>
          </div>
          <div>
            <input
              type="radio"
              id="priority-mid"
              name="priority"
              value="mid"
              checked={todo.priority === "mid"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="priority-mid">Mid</label>
          </div>
          <div>
            <input
              type="radio"
              id="priority-high"
              name="priority"
              value="high"
              checked={todo.priority === "high"}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="priority-high">High</label>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary hover:bg-primary-focus text-primary-content font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default TodoForm;
