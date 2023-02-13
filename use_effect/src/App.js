import "./App.css";
import Header from "./component/Header";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(2);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const empData = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await empData.json();
      setData(res);
      console.log(res);
    }
    getData();
    document.title = `(${state}) employees `;
  }, [state]);
  return (
    <div>
      <Header />
      <button onClick={() => setState(state + 1)}>Click me -- {state}</button>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
