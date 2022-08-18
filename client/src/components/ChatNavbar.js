import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import dp from "../images/profile.png";
import OnlineBadge from "./OnlineBadge";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, deletUser } from "../firebase";
import { useSelector } from "react-redux";

const ChatNavbar = () => {
  const navigate = useNavigate();
const {userName,profileUrl, uuid} = useSelector(state=> state.auth);


  const handleLogOut = () => {

    deletUser(uuid)
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems="center" 
    sx ={{
        backgroundColor: "#222E35",
        padding: 2
    }}
    >
      <Box display={"flex"} >
        <OnlineBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >

          
          <Avatar alt="Remy Sharp" src={profileUrl ? profileUrl: dp}  />
        </OnlineBadge>

        <Typography variant="h6" sx ={{ml: 1}}>

    {userName? userName : "user name"}

        </Typography>
      </Box>
      <Button
        variant="contained"
        color="error"
        size="small"
        ml="auto"
        onClick={handleLogOut}
      >
        Log out
      </Button>
    </Box>
  );
};

export default ChatNavbar;
