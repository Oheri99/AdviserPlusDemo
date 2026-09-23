import PropTypes from 'prop-types';
import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [todoType, setTodoType] = useState("Task");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, type: todoType }]);
      setNewTodo("");
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        newTodo,
        setNewTodo,
        todoType,
        setTodoType,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
