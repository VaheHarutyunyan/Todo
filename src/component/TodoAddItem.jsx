import React from "react";

const TodoAddItem = ({newItem, setNewItem, onAddNewItem}) => {
  return (
    <div className="todo-add-card">
      <form action="">
        <input
          placeholder="Type new todo"
          type="text"
          value={newItem.title}
          onChange={e => setNewItem({...newItem, title: e.target.value})}
        />
        <button
          type="submit"
          onClick={e => {
            e.preventDefault();
            newItem.title.length !== 0 && onAddNewItem();
          }}
        >
          ADD
        </button>
      </form>
      <span>{newItem.title.length !== 0 ? "" : "please feel empty field"}</span>
    </div>
  );
};

export default TodoAddItem;
