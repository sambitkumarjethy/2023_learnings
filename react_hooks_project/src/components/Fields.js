import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const removeItem = (index, data, setData) => {
  console.log(index);
  let arr = data;
  arr.splice(index, 1);
  setData([...arr]);
};
const Fields = ({ name, email, key, index, data, setData }) => {
  return (
    <div key={index} className="data_val">
      <h4>Test{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button
          onClick={() => removeItem(index, data, setData)}
          variant="outlined"
          color="error"
        >
          <RemoveCircleOutlineIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
