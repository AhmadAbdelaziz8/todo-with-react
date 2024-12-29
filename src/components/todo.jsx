const Todo = ({ todoList }) => {
  if (!todoList) {
    return <h1>No Todos yet</h1>;
  }
  return (
    <div>
      {todoList &&
        todoList.map((todo) => (
          <div key={todo.id} className="bg-black text-200 p-2 m-2">
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>{todo.dueDate}</p>
          </div>
        ))}
    </div>
  );
};

export default Todo;
