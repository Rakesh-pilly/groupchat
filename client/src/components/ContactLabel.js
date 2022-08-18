import { Avatar, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OnlineBadge from "./OnlineBadge";
import dp from "../images/profile.png";

const ContactLabel = ({username,photoUrl}) => {
  return (
    <Box my={2} display ="flex" flexDirection={"row"} alignItems ={"center"}>
      <OnlineBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={photoUrl? photoUrl :dp} />
      </OnlineBadge>

      <Box flexGrow={1} ml = {2}>

        <Typography variant="h6" m={0} padding = {0} fontSize = {16} lineHeight = {1}> {username}</Typography>
        <Typography variant="p" color={"#ccc"} fontSize  ={14}>Online</Typography>
        <Divider
          sx={{
           mt: 2,
            backgroundColor: "#ccc"
          }}
        />
      </Box>
    </Box>
  );
};

export default ContactLabel;
