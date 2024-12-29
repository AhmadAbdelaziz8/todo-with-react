const Todo = ({ todoList }) => {
  if (!todoList) {
    return <h1>No Todos yet</h1>;
  }
  return (
    <div>
      {todoList &&
        todoList.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Todo;
