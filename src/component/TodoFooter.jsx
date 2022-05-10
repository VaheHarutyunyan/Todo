import React from "react";

const TodoFooter = ({ isChecked, searchQueryData, onClearCompleted }) => {
  return (
    <>
      {isChecked.length} / {searchQueryData.length} completed
      <span>
        <button
          onClick={() => onClearCompleted()}
          // onClick={() => {
          //   setTodos(searchQueryData.filter((todo) => !todo.completed));
          // }}
        >
          Clear Completed
        </button>
      </span>
    </>
  );
};

export default TodoFooter;
