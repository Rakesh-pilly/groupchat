import {createSlice } from "@reduxjs/toolkit"



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogging : false,
        userName: "",
        profileUrl: "",
        uuid: "",
    },
    reducers: {
        login(state,action){
            state.isLogging = true;
            state.userName = action.payload.userName;
            state.profileUrl = action.payload.profileUrl;
            state.uuid = action.payload.uuid;
        },
        logout(state){
            state.isLogging = false;
            state.userName = "";
            state.profileUrl = "";
            state.uuid = "";
        },
        updateUser(state,action){
            state.userName = action.payload.userName;
            state.profileUrl = action.payload.profileUrl;
            state.uuid = action.payload.uuid;
        }
    }
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;