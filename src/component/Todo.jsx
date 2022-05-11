import React, { useCallback, useMemo, useState, useReducer } from "react";
import data from "../data/data";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoAddItem from "./TodoAddItem";
import TodoEditItem from "./TodoEditItem";
import TodoFooter from "./TodoFooter";
import reducer from "../reducer/reducer";

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, data);
  const [filterQuery, setFilterQuery] = useState("");
  const [newEdit, setNewEdit] = useState({});
  const [newItem, setNewItem] = useState({ title: "" });
  const [isShow, setIsShow] = useState(false);

  const filtredData = useMemo(() => {
    return todos.filter((todo) => todo.title.includes(filterQuery));
  }, [filterQuery, todos]);

  const onAddNewItem = () => {
    dispatch({
      type: "add",
      payload: {
        title: newItem.title,
      },
    });
    setNewItem({ title: "" });
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
    setNewEdit(item);
  }, []);

  const onSaveItem = () => {
    dispatch({
      type: "edit",
      payload: {
        editID: newEdit.id,
        editTitle: newEdit.title,
      },
    });
    setIsShow(false);
  }

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
          <TodoFilter
            filterQuery={filterQuery}
            setFilterQuery={setFilterQuery}
          />
        </div>
        <div className="todo-add">
          <TodoAddItem
            newItem={newItem}
            setNewItem={setNewItem}
            onAddNewItem={onAddNewItem}
          />
        </div>
      </div>
      <div className="todo-edit">
        {isShow && (
          <TodoEditItem
            newEdit={newEdit}
            setNewEdit={setNewEdit}
            onSaveItem={onSaveItem}
          />
        )}
      </div>
      <div className="todo-body">
        <TodoList
          searchQueryData={filtredData}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
          onChangeChecked={onChangeChecked}
        />
      </div>
      <div className="todo-footer">
        <TodoFooter
          isChecked={isChecked}
          searchQueryData={filtredData}
          onClearCompleted={onClearCompleted}
        />
      </div>
    </div>
  );
};

export default Todo;
