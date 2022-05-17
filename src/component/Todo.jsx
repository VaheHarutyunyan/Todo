import React from "react";

import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoAddItem from "./TodoAddItem";
import TodoFooter from "./TodoFooter";

const Todo = () => {
  return (
    <div className="todo-card">
      <div className="todo-header">
        <div className="todo-filter">
          <TodoFilter />
        </div>
        <div className="todo-add">
          <TodoAddItem />
        </div>
      </div>

      <div className="todo-body">
        <TodoList />
      </div>
      <div className="todo-footer">
        <TodoFooter />
      </div>
    </div>
  );
};

export default Todo;
