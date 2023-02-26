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
  const [empleeList, setEmpleeList] = useState([]);
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
        // console.log("success");
        setEmpleeList([
          ...empleeList,
          {
            name,
            age,
            gender,
            country,
            position,
            wage,
          },
        ]);
      });
  };
  const getEmployees = () => {
    axios.get("http://localhost:3001/employees").then((res) => {
      setEmpleeList(res.data);
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
      </div>
      <hr />
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>
        {empleeList.map((val, key) => {
          return (
            <div className="employee">
              <h3>{val.name}</h3>
              <h3>{val.age}</h3>
              <h3>{val.country}</h3>
              <h3>{val.position}</h3>
              <h3>{val.wage}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
