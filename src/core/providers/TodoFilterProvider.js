import React, { useState, createContext, useContext, useMemo } from "react";
import { useTodo } from "./TodoProvider";
const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);

const TodoFilterProvider = ({ children }) => {
  const { todos } = useTodo();
  const [filterQuery, setFilterQuery] = useState("");
  const updateSate = useMemo(() => {
    return todos.filter((item) => item.title.includes(filterQuery));
  }, [filterQuery, todos]);
  return (
    <FilterContext.Provider
      value={{ filterQuery, setFilterQuery, updateSate }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default TodoFilterProvider;
