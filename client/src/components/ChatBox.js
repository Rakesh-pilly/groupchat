import { Avatar, Box, Card, Paper, Typography } from "@mui/material";
import { borderRadius } from "@mui/system";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import bg from "../images/chatbg.jpg";
import MessageBuddle from "./MessageBuddle";
const ChatBox = () => {
  const { auth, msg } = useSelector((state) => state);

  const bottomRef = useRef(null);


  const messages = msg.messages;

  const messagesDivs = messages.map((i, index) => {

    if(index === messages.length-1){
      return <MessageBuddle ref={bottomRef} key = {index} message={i.message} userName = {i.userName} profileImg = {i.photoUrl} isUser = {i.uid === auth.uuid}/>
    }

    return <MessageBuddle key = {index} message={i.message} userName = {i.userName} profileImg = {i.photoUrl} isUser = {i.uid === auth.uuid}/>

  });


  useEffect(()=> {

    if(bottomRef.current){
      bottomRef.current?.scrollIntoView({behavior: 'smooth'});

    }



  },[msg.messages])
  return (
    <Box
      flexGrow={1}
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "#ccc",
        overflowY: 'scroll',
        maxHeight: "74vh"
      }}
      paddingX={4}
      paddingY={1}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
         

        }}
      >

        {messagesDivs}

        </Box>
        
    </Box>
  );
};

export default ChatBox;
