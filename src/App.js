import './App.css';
import Todo from "./components/Todo";

function App() {
  return (
    <div className="wrapper">
      <h1 style={{textAlign: "center"}}>Todo List</h1>
        <Todo />
    </div>
  );
}

export default App;
