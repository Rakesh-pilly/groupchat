import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import SendIcon from "@mui/icons-material/Send";
const ChatBottom = () => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      sx={{
        backgroundColor: "#222E35",
        padding: 2,
      }}
    >
      <Box width={"80%"} display="flex">
        <TextField fullWidth placeholder="enter text" size="small" />

        <Button
          sx={{ ml: 3, background: "#7B8B95", 
        '&:hover': {
            background: "#ccc"
        }
        }}
          variant="contained"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBottom;
