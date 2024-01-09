import { useState } from "react";
import "./App.css";

const App = ()=>{

const [count, setCount] = useState(10);

  const handleAdd = () =>{
    setCount(count + 1);
  }

  const handleSubstract = () =>{
    setCount(count - 1);
  }

  const handleReset = () =>{
    setCount(10);
  }

  return (
  <div className="container">
      <h1>Counter: {count}</h1>
      <hr></hr>
      <button onClick={handleSubstract}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAdd}>+</button>
      

  </div>)
};

export default App; //exporta app