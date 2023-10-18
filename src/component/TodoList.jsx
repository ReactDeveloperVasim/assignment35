import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, {  useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  // console.log("--------", data); 
  const handleAdd = () => {
    setData([...data, text]);
    setText("");
  };

  const handleDelete = (item) => {
    const result = data.filter((elem) => elem !== item);
    setData(result);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              label="Enter Thoughts of the day!!!"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              sx={{ height: 55 }}
              fullWidth
              onClick={handleAdd}
              variant="contained"
            >
              Add thoughts
            </Button>
          </Grid>

          {data.map((item) => (
            <React.Fragment>
              <Grid item xs={3}></Grid>
              <Grid item xs={6}>
                <Card
                  sx={{
                    display: "flex",
                    bgcolor: "black",
                    position: "relative",
                  }}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={11} fullWidth>
                        <span
                          style={{
                            color: "white",
                            cursor: "pointer",
                            width: "20px",
                          }}
                          color="white"
                        >
                          
                          {item}
                        </span>
                      </Grid>
                      <Grid item xs={1}>
                        <DeleteIcon
                          onClick={() => handleDelete(item)}
                          sx={{
                            color: "white",
                            position: "absolute",
                            right: 15,
                            bottom: 35,
                            top:15,
                            cursor: "pointer",
                          }}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={2}></Grid>
            </React.Fragment>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
