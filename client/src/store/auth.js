import {createSlice } from "@reduxjs/toolkit"



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogging : false
    },
    reducers: {
        login(state){
            state.isLogging = true;
        },
        logout(state){
            state.isLogging = false;
        }
    }
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;