import React, { useContext, createContext, useReducer, useState } from "react";
import reducer from "../../store/reducer";
import data from "../../data/data";

export const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

const initialState = data;

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [editItem, setEditItem] = useState({});

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        editItem,
        setEditItem,
      }}
    >
      <div>{children}</div>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
