import "./App.css";
import Header from "./component/Header";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(100);
  useEffect(() => {
    window.alert("Use effect called");
  }, [state]);
  console.log("Function Body");
  return (
    <div>
      <Header />
      <button onClick={() => setState(state + 1)}>Click me -- {state}</button>
      <button onClick={() => setState2(state2 + 5)}>Click me --{state2}</button>
    </div>
  );
}

export default App;
