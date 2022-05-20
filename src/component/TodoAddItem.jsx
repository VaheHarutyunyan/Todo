import React, { useState } from "react";
import { useTodo } from "../core/providers/TodoProvider";
import { addTodoItem } from "../store/action";
import { VscAdd } from "react-icons/vsc";

const TodoAddItem = () => {
  const { dispatch } = useTodo();
  const [addItem, setAddItem] = useState({ title: "" });
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
          disabled={addItem.title?.length === 0 && "disabled"}
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch(addTodoItem({ title: addItem.title }));
            setAddItem({ title: "" });
          }}
        >
          <VscAdd />
        </button>
      </form>
    </div>
  );
};

export default TodoAddItem;
