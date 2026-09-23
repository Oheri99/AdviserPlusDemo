import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [todoType, setTodoType] = useState("Task");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, type: todoType }]);
      setNewTodo("");
    }
  };

  return (
    <div id="todo-container">
      <div id="todo-form-container">
        <h1 id="todo-header">Todo List</h1>
        <form onSubmit={addTodo} id="todo-form">
          <select
            id="todo-type-select"
            value={todoType}
            onChange={(e) => setTodoType(e.target.value)}
            style={{
              marginBottom: "10px",
              width: "100%",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <option value="Task">Task</option>
            <option value="Reminder">Reminder</option>
          </select>
          <input
            id="new-todo-input"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter a new todo"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              boxSizing: "border-box",
            }}
          />
          <button
            id="add-todo-button"
            type="submit"
            style={{ width: "100%", padding: "10px" }}
          >
            Add Todo
          </button>
        </form>
        <a
          id="back-to-home-link"
          href="/"
          style={{ display: "block", marginTop: "10px", textAlign: "center" }}
        >
          Back to Home
        </a>
        <ul id="todo-list">
          {todos.map((todo, index) => (
            <li key={index} id={`todo-item-${index}`}>
              {todo.text} - {todo.type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
