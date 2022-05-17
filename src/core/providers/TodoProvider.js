import React, { useContext, createContext, useReducer } from "react";
import reducer from "../../store/reducer";
import data from "../../data/data";

export const TodoContext = createContext();

export const useTodo = () => useContext(TodoContext);

const initialState = data;

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
      }}
    >
      <div>{children}</div>
    </TodoContext.Provider>
  );
};

export default TodoProvider;
