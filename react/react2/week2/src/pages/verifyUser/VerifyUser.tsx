import React, { useState, useLayoutEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function VerifyUser() {
  const { state } = useLocation();
  const email: string = state.email;
  const codeRef = React.useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    codeRef.current?.focus();
  }, []);
  const navigate = useNavigate();
  const [code, setCode] = useState<string>("");
  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 6) {
      console.log("not valid");
      return;
    } else {
      try {
        const response = await axios({
          method: "post",
          url: "http://byrdbox-env.eba-4kxk4yka.eu-north-1.elasticbeanstalk.com/auth/verify-user",
          data: {
            email,
            code,
          },
        });
        if (response.status === 200 && response.statusText === "OK") {
          console.log(response.data);
          navigate("/login");
        }
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <div className="layout">
      <form action="" className="form">
        <Typography variant="h5" component="h2">
          Verify Email
        </Typography>
        <TextField
          inputRef={codeRef}
          value={code}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCode(event.target.value);
          }}
          id="code"
          label="code"
          variant="outlined"
          type="number"
          inputProps={{
            maxLength: 6,
            autoComplete: "off",
          }}
        />

        <Button variant="contained" onClick={submitForm}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default VerifyUser;
