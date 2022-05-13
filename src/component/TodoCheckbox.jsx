import React, { useContext } from "react";
import { TodoListContext } from "../context/context";

export default function InputCheckbox({ todo }) {
  const { onChangeChecked } = useContext(TodoListContext);
  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => {
        onChangeChecked({ ...todo, completed: !todo.completed });
      }}
    />
  );
}
