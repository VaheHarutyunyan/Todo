import React, {
  useCallback,
  useMemo,
  useState,
  useReducer,
  // useEffect,
  // useContext,
} from "react";
import data from "../data/data";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import TodoAddItem from "./TodoAddItem";
import TodoEditItem from "./TodoEditItem";
import TodoFooter from "./TodoFooter";
import reducer from "../reducer/reducer";
import {
  FooterContext,
  TodoAddContext,
  TodoEditContext,
  TodoFilterContext,
  TodoListContext,
} from "../context/context";
// import {useTodo } from "../core/providers/TodoProvider";

const Todo = () => {
  // const todos = useTodo();

  const [todos, dispatch] = useReducer(reducer, data);
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
          <TodoFilterContext.Provider value={{ filterQuery, setFilterQuery }}>
            <TodoFilter />
          </TodoFilterContext.Provider>
        </div>
        <div className="todo-add">
          <TodoAddContext.Provider
            value={{
              addItem,
              setAddItem,
              onAddNewItem,
            }}
          >
            <TodoAddItem />
          </TodoAddContext.Provider>
        </div>
      </div>
      <div className="todo-edit">
        {isShow && (
          <TodoEditContext.Provider
            value={{ editItem, setEditItem, onSaveItem }}
          >
            <TodoEditItem />
          </TodoEditContext.Provider>
        )}
      </div>
      <div className="todo-body">
        <TodoListContext.Provider
          value={{ DATA, onDeleteItem, onEditItem, onChangeChecked }}
        >
          <TodoList/>
        </TodoListContext.Provider>
      </div>
      <div className="todo-footer">
        <FooterContext.Provider value={{ DATA, isChecked, onClearCompleted }}>
          <TodoFooter />
        </FooterContext.Provider>
      </div>
    </div>
  );
};

export default Todo;
