import React, {useCallback, useMemo, useState} from "react";
import data from "../data/data";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoAddItem from "./TodoAddItem";
import TodoEditItem from "./TodoEditItem";
import TodoFooter from "./TodoFooter";

const Todo = () => {
  const [todos, setTodos] = useState(data);
  const [filterQuery, setFilterQuery] = useState("");
  const [edit, setEdit] = useState({title: ""});
  const [newEdit, setNewEdit] = useState({title: edit.title});
  const [newItem, setNewItem] = useState({title: ""});
  const [checked, setChecked] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const searchQueryData = useMemo(() => {
    return todos.filter(item => item.title.includes(filterQuery));
  }, [filterQuery, todos]);

  const onAddNewItem = useCallback(() => {
    setTodos([
      ...searchQueryData,
      {userId: 1, id: Date.now(), completed: false, title: newItem.title},
    ]);
    setNewItem({title: ""});
  }, [newItem.title, searchQueryData]);

  const onDeleteItem = useCallback(
    id => {
      setTodos(searchQueryData.filter(item => item.id !== id));
    },
    [searchQueryData]
  );

  const onEditItem = useCallback(item => {
    setIsShow(e => !e);
    setEdit(item);
    setNewEdit(item);
  }, []);

  const onSaveItem = useCallback(() => {
    setEdit((edit.title = newEdit.title));
    setNewEdit({title: ""});
    setIsShow(false);
  }, [edit, newEdit.title]);

  const onChecked = useCallback(
    value => {
      setChecked(!value);
      console.log(checked);
    },
    [checked]
  );

  const onChangeChecked = useCallback(
    newTodo => {
      setTodos(
        searchQueryData.map(todo => {
          if (todo.id === newTodo.id) {
            return newTodo;
          }
          return todo;
        })
      );
    },
    [searchQueryData]
  );

  const isChecked = useMemo(() => {
    return searchQueryData.filter(item => item.completed);
  }, [searchQueryData]);

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
