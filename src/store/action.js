export const filterTodoItem = (payload) => {
  return {
    type: "FILTER_TODO",
    payload,
  };
};
export const addTodoItem = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};
export const deleteTodoItem = (payload) => {
  return {
    type: "DELETE_TODO",
    payload,
  };
};
export const editTodoItem = (payload) => {
  return {
    type: "EDIT_TODO",
    payload,
  };
};

export const checkedTodoItem = (payload) => {
  return {
    type: "CHECKED_TODO",
    payload,
  };
};
export const clearCompletedTodoItem = (payload) => {
  return {
    type: "CLEAR_COMPLETED",
    payload,
  };
};
