import React from "react";
import "./App.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="header">
      <div>
        <h1>Welcome to Yurii project</h1>
      </div>
      <div className="buttons">
        <div>
          <Link to={"/login"}>
            <Button variant="contained">login</Button>
          </Link>
        </div>
        <div>
          <Link to={"/sign-up"}>
            <Button variant="contained">go to signup</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
