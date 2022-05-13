import React, { useState, useContext } from "react";
import { TodoListContext } from "../context/context";
import InputCheckbox from "./TodoCheckbox";
import { VscEdit } from "react-icons/vsc";
import { VscArchive } from "react-icons/vsc";

const TodoList = () => {
  const { DATA, onDeleteItem, onEditItem } = useContext(TodoListContext);

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
      {DATA.length === 0 ? (
        <h2>Not found</h2>
      ) : (
        <ul>
          {DATA.map((item) => {
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
