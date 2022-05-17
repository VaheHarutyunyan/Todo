import {
  FILTER_TODO,
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHECKED_TODO,
  CLEAR_COMPLETED,
} from "../store/constants";

export default function reducer(state, action) {
  switch (action.type) {
    case FILTER_TODO:
      return state.filter((todo) => todo.title.includes(action.payload.search));
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload?.title,
          completed: false,
        },
      ];
    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.editID) {
          todo.title = action.payload.editTitle;
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case CHECKED_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.item.id) {
          return action.payload.item;
        }
        return todo;
      });
    case CLEAR_COMPLETED:
      return state.filter((todo) => !todo.completed);
    default:
      throw new Error();
  }
}
