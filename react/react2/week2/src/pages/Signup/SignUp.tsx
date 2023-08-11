import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";
import "./signup.css";

interface Iuser {
  name: string;
  familyName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

const SignUpPage = () => {
  const [newUser, setNewUser] = useState<Iuser>({
    name: "",
    familyName: "",
    email: "",
    password: "",
    phoneNumber: "+45",
  });
  const [isvalid, setIsValid] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setIsValid(false);
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };
  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };
  console.log(newUser);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, familyName, email, password } = newUser;
    validatePassword(password);

    if (!name || !familyName || !email || !password) {
      setIsValid(true);
    } else {
      try {
        const response = await axios.post(
          "http://byrdbox-env.eba-4kxk4yka.eu-north-1.elasticbeanstalk.com/auth/signup",
          newUser
        );
        if (response.status === 200 && response.statusText === "OK") {
          console.log(response.data);
          navigate("/verify-user", { state: { email } });
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <div className="layout">
      <form className="form">
        {isvalid ? <p className="err">check the form</p> : null}
        <TextField
          name="name"
          value={newUser.name}
          required
          id="outlined-required"
          label="First Name"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          name="familyName"
          value={newUser.familyName}
          required
          id="outlined-required"
          label="family name"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          name="phoneNumber"
          value={newUser.phoneNumber}
          required
          id="outlined-required"
          label="phone Number"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          name="email"
          value={newUser.email}
          required
          id="outlined-required"
          label="Email"
          variant="filled"
          onChange={handleChange}
        />
        {isvalid ? (
          <p className="err">
            should contain letters, digits, symbols, capital letters. A minimum
            password length is 8 characters
          </p>
        ) : null}
        <TextField
          name="password"
          value={newUser.password}
          required
          id="filled-password-input"
          label="Password"
          type={isvalid ? "text" : "password"}
          variant="filled"
          onChange={handleChange}
        />

        <Button variant="contained" onClick={submitForm}>
          Submit
        </Button>
        <div className="link">
          <Link to={"/login"}> Navigate to Login </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
