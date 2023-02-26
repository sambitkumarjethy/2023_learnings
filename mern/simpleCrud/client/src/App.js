import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState(" ");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(0);

  const [country, setCountry] = useState(" ");
  const [position, setPosition] = useState(" ");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    axios
      .post("http://localhost:3001/create", {
        name,
        age,
        gender,
        country,
        position,
        wage,
      })
      .then(() => {
        console.log("success");
      });
  };
  return (
    <div className="App">
      <div className="information">
        <label>Name :</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age :</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Gender :</label>
        <input
          type="text"
          onChange={(event) => {
            setGender(event.target.value);
          }}
        />
        <label>Country :</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position :</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage(per/year) :</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
        <br />
      </div>
    </div>
  );
}

export default App;
