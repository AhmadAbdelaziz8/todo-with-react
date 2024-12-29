const Todo = ({ todoList, handleEditTodo, handleDeleteTodo }) => {
  if (!todoList) {
    return <h1>No Todos yet</h1>;
  }
  return (
    <div>
      {todoList &&
        todoList.map((todo) => (
          <div
            key={todo.id}
            className="bg-neutral shadow-md rounded p-4 m-2 border border-base-content"
          >
            <h3 className="text-lg font-bold mb-2 text-base-content">
              {todo.title}
            </h3>
            <p className="text-base-content mb-2">{todo.description}</p>
            <p className="text-base-content mb-2">
              Due Date: {todo.dueDate}
            </p>
            <p className="text-base-content mb-2">
              Priority: {todo.priority}
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditTodo(todo.id)}
                className="bg-secondary hover:bg-secondary-focus text-secondary-content font-bold py-1 px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="bg-error hover:bg-error-focus text-error-content font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Todo;
