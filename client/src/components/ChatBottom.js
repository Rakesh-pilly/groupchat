import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import io from "socket.io-client"
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux";
import { messageAction } from "../store/message";



const socket = io.connect("https://groupchat-project.herokuapp.com")

const ChatBottom = () => {

  const dispatch = useDispatch();
  const {auth, msg} = useSelector(state => state);



const [inputs,setInputs] = useState("")

  const hanldesent = ()=> {

    if(inputs === "") return 
    setInputs("")
    dispatch(messageAction.addMessage({
      message: inputs,
      userName : auth.userName,
      photoUrl : auth.profileUrl,
      uid: auth.uuid
    }))

    socket.emit("send_message", {
      message: inputs,
      userName : auth.userName,
      photoUrl : auth.profileUrl,
      uid: auth.uuid
    })
  }

 

  useEffect(()=> {
    socket.on("receive_message", (data)=> {

      dispatch(messageAction.addMessage(data))
    })
  },[socket])

  

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
        {/* <TextField fullWidth placeholder="enter text" size="small" 
        sx ={{
          backgroundColor:"#7B8B95",
          color: "#fff"
        }}
        /> */}

        <input type = "text" style={{
          border: "none",
          width: "100%",
          borderRadius: "10px",
          background: "#7B8B95",
          color: "#fff",
          "&::placeholder": {
            color: "#fff"
          }
          ,
          "input:focus": {
            outline: "none",
            border: "none",
          }
        }}
          placeholder = "Enter text"
          value = {inputs}
          onChange = {(e)=> setInputs(e.target.value)}
        />

        <Button
          sx={{ ml: 3, background: "#7B8B95", 
        '&:hover': {
            background: "#ccc"
        }
        }}
          variant="contained"
          endIcon={<SendIcon />}
          onClick = {hanldesent}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatBottom;
