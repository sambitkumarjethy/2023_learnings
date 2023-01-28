import "./App.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(2);
  function inc() {
    setNum(num + 1);
  }
  function dec() {
    setNum(num - 1);
  }
  return (
    <div className="App">
      <h3> React Hooks --useState</h3>
      <h1 className="heading">{num}</h1>
      <div className="main">
        <button className="btn" onClick={inc}>
          Increment
        </button>
        <button className="btndec" onClick={dec}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
