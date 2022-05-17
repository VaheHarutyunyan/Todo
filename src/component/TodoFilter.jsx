import React, { useState, useMemo } from "react";
import { VscSearch } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { useTodo } from "../core/providers/TodoProvider";
import { filterTodoItem } from "../store/action";

const TodoFilter = () => {
  const { dispatch } = useTodo();
  const [filterQuery, setFilterQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useMemo(() => {
    dispatch(filterTodoItem({ search: filterQuery }));
  }, [dispatch, filterQuery]);

  return (
    <div className="todo-search">
      <button className="todo-search-btn" onClick={() => setIsOpen(true)}>
        <VscSearch />
      </button>
      <div
        className={`todo-search-input ${isOpen ? "show-input" : "hide-input"}`}
      >
        <input
          placeholder="Search..."
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
        <button
          onClick={() => {
            setIsOpen(false);
            setFilterQuery("");
          }}
        >
          <VscClose />
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
