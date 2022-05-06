import React, { useState } from "react";

const TodoEditItem = ({ newEdit, setNewEdit, onSaveItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="todo-edit-row">
      <form action="">
        <input
          placeholder="Edit name"
          type="text"
          value={newEdit.title}
          onChange={(e) => setNewEdit({ ...newEdit, title: e.target.value })}
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
  );
};

export default TodoEditItem;
