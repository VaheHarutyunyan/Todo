import React, { useContext } from "react";
import { TodoAddContext } from "../context/context";
import { VscAdd } from "react-icons/vsc";

const TodoAddItem = () => {
  const { addItem, setAddItem, onAddNewItem } = useContext(TodoAddContext);
  return (
    <div className="todo-add-card">
      <form action="">
        <input
          placeholder="Type new todo"
          type="text"
          value={addItem.title}
          onChange={(e) => setAddItem({ ...addItem, title: e.target.value })}
        />
        <button
          disabled={addItem.title.length === 0 && "disabled"}
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
