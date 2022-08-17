import { AppBar, Button, Toolbar, Tooltip, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const NavBar = () => {

    const navigate = useNavigate()

    const handleLogOut = ()=> {
        signOut(auth).then(()=> {
            navigate("/login")
        }).catch((err)=> console.log(err))
    }
  return (
    <AppBar
      sx={{
        backgroundColor: "#128c7e",
      }}
      position = "sticky"
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h4">Group Chat</Typography>

        <Button variant="contained" color="error" onClick={handleLogOut}>
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
