import { Box } from "@mui/material";
import React from "react";
import bg from "../images/chatbg.jpg"
const ChatBox = () => {
  return <Box flexGrow={1}
  sx ={{
    backgroundImage: `url(${bg})`
  }}
  >

  </Box>;
};

export default ChatBox;
