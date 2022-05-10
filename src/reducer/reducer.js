export default function reducer(state, action) {
  switch (action.type) {
    case "filter":
      return state.filter((todo) => todo.title.includes(action.payload.search));
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          completed: false,
        },
      ];
    case "delete":
      return state.filter((item) => item.id !== action.payload.id);
    case "checked":
      return state.map((todo) => {
        if (todo.id === action.payload.item.id) {
          return action.payload.item;
        }
        return todo;
      });
    case "clear_copleted":
      return state.filter((todo) => !todo.completed);
    default:
      throw new Error();
  }
}
