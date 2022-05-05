import React, { useState } from "react";

const TodoEditItem = ({ newEdit, setNewEdit, onSaveItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
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
        <div className="save-modal">
          <h6>Do you want save todo</h6>
          <div>
            <button onClick={() => onSaveItem()}>Yes</button>
            <button onClick={() => setIsOpen(false)}>No</button>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoEditItem;
