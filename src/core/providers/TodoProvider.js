import React, { useContext, useState } from "react";

export const TodoContext = React.createContext();

export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
