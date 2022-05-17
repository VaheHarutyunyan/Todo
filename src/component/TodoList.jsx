import React, { useState, useCallback } from "react";
import InputCheckbox from "./TodoCheckbox";
import TodoEditItem from "./TodoEditItem";
import { VscEdit } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { useTodo } from "../core/providers/TodoProvider";
import { deleteTodoItem } from "../store/action";

const TodoList = () => {
  const { todos, dispatch } = useTodo();
  const [isShow, setIsShow] = useState(false);
  const [editItem, setEditItem] = useState({});

  const onEditItem = useCallback((item) => {
    setIsShow((e) => !e);
    setEditItem(item);
  }, []);

  const onDeleteItem = useCallback(
    (id) => {
      dispatch(deleteTodoItem({ id: id }));
    },
    [dispatch]
  );

  const [isDelete, setIsDelete] = useState({ show: false, id: "" });
  return (
    <>
      <div className="todo-edit">
        {isShow && (
          <TodoEditItem editItem={editItem} setEditItem={setEditItem} />
        )}
      </div>
      {isDelete.show && (
        <div className="modal">
          <h4>Are you sure you wont to delete</h4>
          <div className="modal-btn">
            <button
              onClick={() => {
                onDeleteItem(isDelete.id);
                setIsDelete({ show: false });
              }}
            >
              Yes
            </button>
            <button onClick={() => setIsDelete(isDelete.show)}>No</button>
          </div>
        </div>
      )}
      {todos.length === 0 ? (
        <h2>Not found</h2>
      ) : (
        <ul>
          {todos.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <li>
                  <div className="todo-name">
                    <div>
                      <InputCheckbox todo={item} />
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <div className="todo-buttons">
                    <button onClick={() => onEditItem(item)}>
                      <VscEdit />
                    </button>
                    <button
                      onClick={() => setIsDelete({ show: true, id: item.id })}
                    >
                      <VscArchive />
                    </button>
                  </div>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default TodoList;
