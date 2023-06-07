import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';


function App() {
  const [count, setCount] = useState(1);

  let onClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
    <span>{count}</span>
    <button type="button" className="btn btn-dark" onClick={onClick}>Dark</button>
    </div>
  );
}

export default App;
