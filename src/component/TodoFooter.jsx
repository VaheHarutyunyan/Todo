import React, { useContext } from "react";
import { FooterContext } from "../context/context";

const TodoFooter = () => {
  const { DATA, isChecked, onClearCompleted } = useContext(FooterContext);
  return (
    <>
      {isChecked.length} / {DATA.length} completed
      <span>
        <button
          disabled={isChecked.length === 0 && "disabled"}
          onClick={() => onClearCompleted()}
        >
          Clear Completed
        </button>
      </span>
    </>
  );
};

export default TodoFooter;
