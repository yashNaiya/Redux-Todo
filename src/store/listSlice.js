import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const listSlice = createSlice({
    name:'list',
    initialState,
    reducers:{
        set(state,action){
            console.log(action.payload);
           action.payload.forEach(item => {
            state.push(item);
           });
        },
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter(item => item.detail !==action.payload)
        }
    }
})

export const {add,remove,set} = listSlice.actions 
export default listSlice.reducer;