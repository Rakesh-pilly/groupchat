import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Login = () => {

    const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const {isLogging} = useSelector(state => state.auth)

  if(isLogging){
    navigate("/")
  }

  const handleInputs = (e) => {

    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = ()=> {
    if (inputs.email === "" || inputs.password === "") return;

    signInWithEmailAndPassword(auth, inputs.email, inputs.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

        navigate("/")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
    });
    }

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
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Card>
    </Box>
  );
};

export default Login;
