import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import dp from "../images/profile.png";
import SearchIcon from "@mui/icons-material/Search";
const NavGroup = () => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"space-between"}
      sx={{
        backgroundColor: "#222E35",
        padding: 2,
      }}
    >
      <Box display={"flex"} alignItems="center">
        <Avatar alt="group icon" src={dp} />

        <Typography variant="h6" ml={4}>
          Group name
        </Typography>
      </Box>

      <SearchIcon sx ={{
        color: '#ccc',
        
      }}
      fontSize = "large"
      />
    </Box>
  );
};

export default NavGroup;
