import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";

const store = configureStore({
    reducer:{
        // login:loginSlice,
        list:listSlice
    }
});

export default store;