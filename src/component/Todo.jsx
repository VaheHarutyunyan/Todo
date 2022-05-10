import React, { useCallback, useMemo, useState, useReducer } from "react";
import data from "../data/data";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoAddItem from "./TodoAddItem";
import TodoEditItem from "./TodoEditItem";
import TodoFooter from "./TodoFooter";
import reducer from "../reducer/reducer";

const Todo = () => {
  const [states, dispatch] = useReducer(reducer, data);
  // const [todos, setTodos] = useState(data);
  const [filterQuery, setFilterQuery] = useState("");
  // const [edit, setEdit] = useState({ title: "" });
  const [newEdit, setNewEdit] = useState({});
  const [newItem, setNewItem] = useState({ title: "" });
  // const [checked, setChecked] = useState(false);
  const [isShow, setIsShow] = useState(false);

  // const searchQueryData = useMemo(() => {
  //   return states.filter((item) => item.title.includes(filterQuery));
  // }, [filterQuery, states]);
  const filtredData = useMemo(() => {
    return states.filter((todo) => todo.title.includes(filterQuery));
  }, [filterQuery, states]);

  const onAddNewItem = () => {
    dispatch({
      type: "add",
      payload: {
        title: newItem.title,
      },
    });
    setNewItem({ title: "" });
  };
  // const onAddNewItem = useCallback(() => {
  //   setTodos([
  //     ...searchQueryData,
  //     { userId: 1, id: Date.now(), completed: false, title: newItem.title },
  //   ]);
  //   setNewItem({ title: "" });
  // }, [newItem.title, searchQueryData]);

  const onDeleteItem = (id) => {
    dispatch({
      type: "delete",
      payload: {
        id: id,
      },
    });
  };

  // const onDeleteItem = useCallback(
  //   (id) => {
  //     setTodos(searchQueryData.filter((item) => item.id !== id));
  //   },
  //   [searchQueryData]
  // );

  // const onEditItem = (item) => {
  //   setIsShow((e) => !e);
  //   dispatch({
  //       type: "edit",
  //       item: item,
  //   })
  // };

  const onEditItem = useCallback((item) => {
    setIsShow((e) => !e);
    // setEdit(item);
    setNewEdit(item);
  }, []);

  const onSaveItem = useCallback(() => {
    // setEdit((edit.title = newEdit.title));
    states.map((todo) => {
      if (todo.id === newEdit.id) {
        return (todo = newEdit);
      }
      return todo;
    });
    setNewEdit({ title: "" });
    setIsShow(false);
  }, [states, newEdit]);

  // const onChecked = useCallback(
  //   (value) => {
  //     setChecked(!value);
  //     console.log(checked);
  //   },
  //   [checked]
  // );

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
  // const onChangeChecked = useCallback(
  //   (newTodo) => {
  //     setTodos(
  //       searchQueryData.map((todo) => {
  //         if (todo.id === newTodo.id) {
  //           return newTodo;
  //         }
  //         return todo;
  //       })
  //     );
  //   },
  //   [searchQueryData]
  // );

  const isChecked = useMemo(() => {
    return states.filter((item) => item.completed);
  }, [states]);

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
          // onChecked={onChecked}
          onChangeChecked={onChangeChecked}
        />
      </div>
      <div className="todo-footer">
        <TodoFooter
          isChecked={isChecked}
          searchQueryData={filtredData}
          onClearCompleted={onClearCompleted}
          // setTodos={setTodos}
        />
      </div>
    </div>
  );
};

export default Todo;
