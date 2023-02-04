import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Fields = ({ name, email, key }) => {
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button variant="outlined" color="error">
          <RemoveCircleOutlineIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
