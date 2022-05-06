import React from "react";
import { VscAdd } from "react-icons/vsc";

const TodoAddItem = ({ newItem, setNewItem, onAddNewItem }) => {
  return (
    <div className="todo-add-card">
      <form action="">
        <input
          placeholder="Type new todo"
          type="text"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        />
        <button
          disabled={newItem.title.length === 0 && "disabled"}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onAddNewItem();
          }}
        >
          <VscAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoAddItem;
