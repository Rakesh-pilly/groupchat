import { createSlice } from "@reduxjs/toolkit";


const messageSlice = createSlice({
    name:"message",
    initialState: {
        messages: []
    },
    reducers:{
        addMessage(state,action){
            state.messages = [...state.messages, action.payload]
        },
    
    }   
})


export const messageAction = messageSlice.actions;

export const messageReducer = messageSlice.reducer;

