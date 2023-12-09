import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
           
        },
        remove(state,action){
            return state.filter(item => item.detail !==action.payload)
        }
    }
})

export const {add,remove} = listSlice.actions 
export default listSlice.reducer;