import { Avatar, Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import dp from "../images/profile.png";


const MessageBuddle = ({ isUser, profileImg, userName, message }, ref) => {
console.log(ref)

    const style = {
        
            maxWidth: "40%",
            display: "inline-block",
            paddingX: 2,
            borderRadius: "50px",
            paddingY: 2,
            marginLeft:  isUser  ? "auto" : "0",
            marginRight:  !isUser  ? "auto" : "0",
            backgroundColor:  isUser  ? "#005C4B" : "#202C33",
            marginY: 1
          
    }
  return (
    <Card
      sx={style}

      ref = {ref}
    >
      <Box display={"flex"}>
        <Avatar alt="iosjdif" src = {profileImg? profileImg: dp} />

        <Box display={"flex"} ml={2} flexDirection={"column"}>
          <Typography
            variant="p"
            fontWeight={700}
            sx={{
              color: "#fff",
            }}
          >
            {userName}
          </Typography>

          <Typography
            variant="p"
            sx={{
              color: "#fff",
            }}
          >
            {message}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default React.forwardRef(MessageBuddle);
