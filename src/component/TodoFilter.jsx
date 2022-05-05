import React from "react";

const TodoFilter = ({ filterQuery, setFilterQuery }) => {
  return (
    <>
      <input
        placeholder="Search..."
        type="search"
        value={filterQuery}
        onChange={(e) => setFilterQuery(e.target.value)}
      />
    </>
  );
};

export default TodoFilter;
