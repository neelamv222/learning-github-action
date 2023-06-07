import React, {useState} from "react";
import './App.css';


function App() {
  const [count, setCount] = useState(1);

  let onClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
    <h1>React github action learning</h1>
    <span>{count}</span>
    <button type="button" className="btn btn-dark" onClick={onClick}>Dark</button>
    </div>
  );
}

export default App;
