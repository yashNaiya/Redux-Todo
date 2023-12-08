import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        add(state,action){

        },
        remove(state,action){

        }
    }
})

export const {add,remove} = listSlice.actions 
export default listSlice.reducer;