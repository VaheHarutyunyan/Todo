import React, { useCallback, useState } from "react";
import { useModalContext } from "../core/providers/TodoModalProvider";
import { useTodo } from "../core/providers/TodoProvider";
import { editTodoItem } from "../store/action";

const TodoEditItem = () => {
  const { dispatch, editItem, setEditItem } = useTodo();
  const { modal } = useModalContext();
  console.log(modal);

  const [isOpen, setIsOpen] = useState(false);
  const onSaveItem = useCallback(() => {
    dispatch(editTodoItem({ editID: editItem.id, editTitle: editItem.title }));

    setIsOpen(false);
  }, [dispatch, editItem.id, editItem.title]);
  return (
    <>
      {modal.edit ? (
        <div className="todo-edit-row">
          <form action="">
            <input
              placeholder="Edit name"
              type="text"
              value={editItem.title}
              onChange={(e) =>
                setEditItem({ ...editItem, title: e.target.value })
              }
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
            >
              Save
            </button>
          </form>
          {isOpen && (
            <div className="modal">
              <h4>Do you want save todo</h4>
              <div className="modal-btn">
                <button onClick={() => onSaveItem()}>Yes</button>
                <button onClick={() => setIsOpen(false)}>No</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TodoEditItem;
