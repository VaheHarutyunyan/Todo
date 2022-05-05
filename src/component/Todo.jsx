import React, { useMemo, useState } from "react";
import data from "../data/data";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoAddItem from "./TodoAddItem";
import TodoEditItem from "./TodoEditItem";
import TodoFooter from "./TodoFooter";

const Todo = () => {
  const [todos, setTodos] = useState(data);
  const [filterQuery, setFilterQuery] = useState("");
  const [edit, setEdit] = useState({ title: "" });
  const [newEdit, setNewEdit] = useState({ title: edit.title });
  const [newItem, setNewItem] = useState({
    title: "",
  });
  const [checked, setChecked] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const searchQueryData = useMemo(() => {
    return todos.filter((item) => item.title.includes(filterQuery));
  }, [filterQuery, todos]);

  const onAddNewItem = () => {
    setTodos([
      ...searchQueryData,
      { userId: 1, id: Date.now(), completed: false, title: newItem.title },
    ]);
    setNewItem({ title: "" });
  };
  const onDeleteItem = (id) => {
    setTodos(searchQueryData.filter((item) => item.id !== id));
  };
  const onEditItem = (item) => {
    setIsShow((e) => !e);
    setEdit(item);
    setNewEdit(item);
  };
  const onSaveItem = () => {
    setEdit((edit.title = newEdit.title));
    setNewEdit({ title: "" });
    setIsShow(false);
  };
  const onChecked = (value) => {
    setChecked(!value);
    console.log(checked);
  };
  const onChangeChecked = (newTodo) => {
    setTodos(
      searchQueryData.map((todo) => {
        if (todo.id === newTodo.id) {
          return newTodo;
        }
        return todo;
      })
    );
  };
  const isChecked = useMemo(() => {
    return searchQueryData.filter((item) => item.completed);
  }, [searchQueryData]);

  return (
    <div>
      <div className="todo-filter">
        <TodoFilter filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
      </div>
      <div className="todo-add">
        <TodoAddItem
          newItem={newItem}
          setNewItem={setNewItem}
          onAddNewItem={onAddNewItem}
        />
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
          searchQueryData={searchQueryData}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
          onChecked={onChecked}
          onChangeChecked={onChangeChecked}
        />
      </div>
      <div className="todo-footer">
        <TodoFooter
          isChecked={isChecked}
          searchQueryData={searchQueryData}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default Todo;