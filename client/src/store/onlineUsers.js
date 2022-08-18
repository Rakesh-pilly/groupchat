import { createSlice } from "@reduxjs/toolkit";


const onliUserSlice = createSlice({
    name:"onlineUser",
    initialState: {
        users: []
    },
    reducers: {
        update(state, action){
            state.users = action.payload
        }
    }
})

export const onlineUserAction = onliUserSlice.actions;

export const onlineUserReducer = onliUserSlice.reducer;