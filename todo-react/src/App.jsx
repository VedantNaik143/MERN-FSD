import { useState } from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {todo}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>
  );
}

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function addTodo() {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  }

  function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>My To-Do List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTodo}>Add</button>

      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;