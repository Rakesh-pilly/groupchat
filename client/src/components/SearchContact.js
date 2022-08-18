import {
  Box,
 
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";



const SearchContact = () => {


  return (
    <Box >
      <TextField
        type="text"
        placeholder="Search for Contact"
        size="small"
        margin="normal"
        fullWidth
        
        sx={{
          backgroundColor: "#222E35",
          border: "0",
          outline: "none"
        }}

        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),

              style: {
                outline:"none"
              }

            


        }}
      />
    </Box>
  );
};

export default SearchContact;
