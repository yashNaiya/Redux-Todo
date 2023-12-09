import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import userSlice from './loginSlice'

const store = configureStore({
    reducer:{
        login:userSlice,
        list:listSlice
    }
});

export default store;