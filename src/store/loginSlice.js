import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    _id:"",
    name:"",
    number:"",
    email:"",
    passowrd:"",
    list:[]
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        add(state,action){
            const {name,number,email,passowrd,_id,list} = action.payload
           state._id = _id;
           state.name = name;
           state.email = email;
           state.number = number;
           state.passowrd = passowrd;
           state.list = list
        },
        addtoList(state,action){
            state.list.push(action.payload)
        }
    }
})
export const {add,addtoList,remove} = userSlice.actions
export default userSlice.reducer;