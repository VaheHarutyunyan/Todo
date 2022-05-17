import React, { useMemo } from "react";
import { useTodo } from "../core/providers/TodoProvider";
import { clearCompletedTodoItem } from "../store/action";

const TodoFooter = () => {
  const { todos, dispatch } = useTodo();
  const isChecked = useMemo(() => {
    return todos.filter((item) => item.completed);
  }, [todos]);
  const onClearCompleted = () => {
    dispatch(clearCompletedTodoItem());
  };

  return (
    <>
      {isChecked?.length} / {todos?.length} completed
      <span>
        <button
          disabled={isChecked.length === 0 && "disabled"}
          onClick={() => onClearCompleted()}
        >
          Clear Completed
        </button>
      </span>
    </>
  );
};

export default TodoFooter;
