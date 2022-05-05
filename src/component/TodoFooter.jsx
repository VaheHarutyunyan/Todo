import React from 'react';

const TodoFooter = ({ isChecked, searchQueryData, setTodos }) => {
  return (
    <div>
      {isChecked.length} / {searchQueryData.length} completed
      <span>
        <button
          onClick={() => {
            setTodos(searchQueryData.filter((todo) => !todo.completed));
          }}
        >
          Clear Completed
        </button>
      </span>
    </div>
  );
};

export default TodoFooter;
