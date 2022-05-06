import React, { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const TodoFilter = ({ filterQuery, setFilterQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

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
        <button onClick={() => setIsOpen(false)}>
          <VscClose />
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
