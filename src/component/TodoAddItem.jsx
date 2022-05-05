import React from "react";

const TodoAddItem = ({newItem, setNewItem, onAddNewItem }) => {
  return (
    <>
      <form action="">
        <input
          placeholder="Type new todo"
          type="text"
          value={newItem.title}
          onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onAddNewItem();
          }}
        >
          ADD
        </button>
      </form>
    </>
  );
};

export default TodoAddItem;
