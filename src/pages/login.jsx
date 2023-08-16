import { Box, Button, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormInvalid] = useState(false);
  const textFieldStyle = {
    input: { color: "white" },
  };

  const handleSubmit = () => {
    const configuration = {
      method: "post",
      // url: "/api/login",
      url: "http://localhost:8000/login",
      data: {
        username,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });

        window.location.href = "/auth";
      })
      .catch((error) => {
        console.log(error);
        error = new Error();
        setIsFormInvalid(true);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          color: "white",
        }}
      >
        <TextField
          sx={textFieldStyle}
          required
          label="Username"
          error={isFormValid}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          sx={textFieldStyle}
          required
          error={isFormValid}
          label="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          LOGIN
        </Button>
      </Box>
    </>
  );
}
