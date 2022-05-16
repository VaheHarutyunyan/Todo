import React, { useContext, useReducer } from "react";
import reducer from "../../store/reducer";
import data from "../../data/data";

export const TodoContext = React.createContext();
const initialState = data;

export const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  // const [todo, setTodo] = useState([]);
  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
