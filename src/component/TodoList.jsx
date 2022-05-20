import React, { useState, useCallback } from "react";
import InputCheckbox from "./TodoCheckbox";
// import TodoEditItem from "./TodoEditItem";
import { VscEdit } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";
import { useTodo } from "../core/providers/TodoProvider";
import { deleteTodoItem } from "../store/action";
import { useFilter } from "../core/providers/TodoFilterProvider";
import { useModalContext } from "../core/providers/TodoModalProvider";

const TodoList = () => {
  const { dispatch, setEditItem } = useTodo();
  const { handleClickEdit } = useModalContext();
  const { updateSate } = useFilter();

  const onEditItem = useCallback(
    (item) => {
      handleClickEdit();
      setEditItem(item);
    },
    [handleClickEdit, setEditItem]
  );

  const onDeleteItem = useCallback(
    (id) => {
      dispatch(deleteTodoItem({ id: id }));
    },
    [dispatch]
  );

  const [isDelete, setIsDelete] = useState({ show: false, id: "" });
  return (
    <>
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
      {updateSate.length === 0 ? (
        <h2>Not found</h2>
      ) : (
        <ul>
          {updateSate.map((item) => {
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
