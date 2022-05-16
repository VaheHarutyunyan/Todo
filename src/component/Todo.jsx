import React, { useCallback, useMemo, useState } from "react";

import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoAddItem from "./TodoAddItem";
import TodoEditItem from "./TodoEditItem";
import TodoFooter from "./TodoFooter";

import { useTodo } from "../core/providers/TodoProvider";

const Todo = () => {
  const [todos, dispatch] = useTodo();

  const [filterQuery, setFilterQuery] = useState("");
  const [editItem, setEditItem] = useState({});
  const [addItem, setAddItem] = useState({ title: "" });
  const [isShow, setIsShow] = useState(false);

  const DATA = useMemo(() => {
    return todos.filter((todo) => todo.title.includes(filterQuery));
  }, [filterQuery, todos]);

  const onAddNewItem = () => {
    dispatch({
      type: "add",
      payload: {
        title: addItem.title,
      },
    });
    setAddItem({ title: "" });
  };

  const onDeleteItem = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  };

  const onEditItem = useCallback((item) => {
    setIsShow((e) => !e);
    setEditItem(item);
  }, []);

  const onSaveItem = () => {
    dispatch({
      type: "edit",
      payload: {
        editID: editItem.id,
        editTitle: editItem.title,
      },
    });
    setIsShow(false);
  };

  const onChangeChecked = (item) => {
    dispatch({
      type: "checked",
      payload: {
        item: item,
      },
    });
  };
  const onClearCompleted = () => {
    dispatch({
      type: "clear_copleted",
    });
  };

  const isChecked = useMemo(() => {
    return todos.filter((item) => item.completed);
  }, [todos]);

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
      <div className="todo-edit">{isShow && <TodoEditItem />}</div>
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
