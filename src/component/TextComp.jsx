import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const TextComp = () => {
  const [val, setVal] = useState("Enter the text to Preview");

  const handleUppercase = () => {
    setVal(val.toUpperCase());
  };

  const handleLowercase = () => {
    setVal(val.toLowerCase());
  };

  const handleClear = () => {
    setVal("Enter the text to Preview");
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: 2 }}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <TextField
          onChange={(e) => setVal(e.target.value)}
          fullWidth
          variant="outlined"
          label="Enter the text here"
        />
        <Button
          color="success"
          sx={{ margin: 2 }}
          onClick={handleUppercase}
          variant="contained"
        >
          UPPERCASE
        </Button>
        <Button
          color="success"
          sx={{ margin: 2 }}
          onClick={handleLowercase}
          variant="contained"
        >
          lowercase
        </Button>
        <Button
          color="error"
          sx={{ margin: 2 }}
          onClick={handleClear}
          variant="contained"
        >
          clear
        </Button>

        <h3>Preview Your text here</h3>
        <h3 style={{ fontWeight: "normal" }}>{val}</h3>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default TextComp;