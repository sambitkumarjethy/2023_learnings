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
  function inccallback(n) {
    setNum(num + n);
  }
  function deccallback(n) {
    setNum(num - n);
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
      <h6>Call Back Function</h6>
      <div className="main">
        <button className="btn" onClick={() => inccallback(2)}>
          Increment
        </button>
        <button className="btndec" onClick={() => deccallback(1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
