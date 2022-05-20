import Todo from "./component/Todo";
import "./App.css";
import TodoProvider from "./core/providers/TodoProvider";
import Reflearning from "./component/reflearning";
import TodoFilterProvider from "./core/providers/TodoFilterProvider";
import TodoModalProvider from "./core/providers/TodoModalProvider";

function App() {
  return (
    <div className="App">
      <Reflearning />
      <TodoProvider>
        <TodoFilterProvider>
          <TodoModalProvider>
            <Todo />
          </TodoModalProvider>
        </TodoFilterProvider>
      </TodoProvider>
    </div>
  );
}

export default App;
