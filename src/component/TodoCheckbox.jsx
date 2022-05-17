import React from "react";
import { checkedTodoItem } from "../store/action";
import { useTodo } from "../core/providers/TodoProvider";

export default function InputCheckbox({ todo }) {
  const { dispatch } = useTodo();
  const onChangeChecked = (item) => {
    dispatch(checkedTodoItem({ item: item }));
  };
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
