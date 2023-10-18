import React from "react";
import { Landing } from "./component/Landing";
import { CardContent, Card } from "@mui/material";

function App() {
  return (
    <Card>
      <CardContent>
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
