import React from "react";

export default function InputCheckbox({ todo, onChangeChecked }) {
  return (
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={(e) => {
        onChangeChecked({ ...todo, completed: !todo.completed });
      }}
    />
  );
}
