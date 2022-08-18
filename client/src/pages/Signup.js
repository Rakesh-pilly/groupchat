import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignUp = () => {
    if (inputs.userName === "" || inputs.email === "" || inputs.password === "")
      return;

    createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredentail) => {
        const user = userCredentail.user;
      })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: inputs.userName,
          photoURL: inputs.photoURL,
        }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {});
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
      display="flex"
      alignItems={"center"}
      justifyContent="center"
    >
      <Card
        sx={{
          paddingX: "30px",
          paddingY: "40px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Sign up</Typography>

        <TextField
          type="text"
          label="User Name"
          margin="normal"
          size="small"
          name="userName"
          value={inputs.userName}
          onChange={handleInputs}
        />
        <TextField
          type="text"
          label="Email"
          margin="normal"
          size="small"
          name="email"
          value={inputs.email}
          onChange={handleInputs}
        />
        <TextField
          type="text"
          label="Password"
          margin="normal"
          size="small"
          name="password"
          value={inputs.password}
          onChange={handleInputs}
        />

        <TextField
          type="url"
          label="Url of profile dp"
          margin="normal"
          size="small"
          name="photoURL"
          value={inputs.photoURL}
          onChange={handleInputs}
        />
        <Button
          variant="contained"
          onClick={handleSignUp}
          color="warning"
          sx={{
            my: 1,
          }}
        >
          Submit
        </Button>

        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Card>
    </Box>
  );
};

export default SignUp;
