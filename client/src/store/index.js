import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { messageReducer } from "./message";
import { onlineUserReducer } from "./onlineUsers";


 const store = configureStore({
    reducer: {
        auth: authReducer,
        msg : messageReducer,
        onlineuser: onlineUserReducer
    }
 })

 export default store;