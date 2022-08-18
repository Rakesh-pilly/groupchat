import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { isLogging } = useSelector((state) => state.auth);

  if (isLogging) {
    navigate("/");
  }

  const handleInputs = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (inputs.email === "" || inputs.password === "") return;

    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;


        dispatch(
          authActions.updateUser({
            userName: user.displayName,
            profileUrl: user.photoURL,
            uuid: user.uid,
          })
        );

        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const hanleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          authActions.updateUser({
            userName: user.displayName,
            profileUrl: user.photoURL,
            uuid: user.uid,
          })
        );

        navigate("/");

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        // ...
      });
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
        <Typography variant="h4">Login</Typography>

        <TextField
          type="text"
          label="Email"
          margin="normal"
          size="small"
          value={inputs.email}
          name="email"
          onChange={handleInputs}
        />
        <TextField
          type="text"
          label="Password"
          margin="normal"
          size="small"
          value={inputs.password}
          name="password"
          onChange={handleInputs}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>

        <Button variant="contained" onClick={() => navigate("/signup")
      }
      color = "warning"  
        sx ={{
          my:1
        }}
        >
          Sing up{" "}
        </Button>

        <Button variant="contained" onClick={hanleSignIn}>
          Google signin
        </Button>
      </Card>
    </Box>
  );
};

export default Login;
