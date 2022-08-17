import { Box, Grid } from "@mui/material";
import React from "react";
import ChatBottom from "../components/ChatBottom";
import ChatBox from "../components/ChatBox";
import Contacts from "../components/Contacts";
import NavGroup from "../components/NavGroup";

const Home = () => {
  return (
    <Box>

      <Grid
        container
        sx={{
          color: "#ffff",
          my: 1,
        }}
      >
        <Grid item xs={3}>
          <Box
            sx={{
              backgroundColor: "#111B21",
              ml: 1,
              minHeight: "96vh",
              borderRight: "1px solid #8FBC8F",
            }}
          >
            <Contacts />
          </Box>
        </Grid>

        <Grid item xs={9}>
          <Box
            sx={{
              mr: 1,
              minHeight: "96vh",
              display: "flex",
              flexDirection: "column"

            }}
          >

            <NavGroup/>
            <ChatBox/>
            <ChatBottom/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
