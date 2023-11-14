import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMail: null,
  sendMessage: false,
};

export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers:{
        selectMail:(state,action)=>{
            state.selectedMail=action.payload;
        }
    }
});
