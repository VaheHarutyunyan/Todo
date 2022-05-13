import Todo from "./component/Todo";
import "./App.css";
import TodoProvider from "./core/providers/TodoProvider";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;
