import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({});
  };
  const removeItem = (index) => {
    console.log(index);
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />
      {/* Form */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button
            onClick={(event) => addData()}
            color="success"
            variant="contained"
          >
            <AddCircleOutlineIcon />
          </Button>
        </Stack>
      </div>
      {/* Data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeItem(index)}
                  variant="outlined"
                  color="error"
                >
                  <RemoveCircleOutlineIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
