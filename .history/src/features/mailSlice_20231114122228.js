import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMail: null,
  sendMessage: false,
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { sendMail, openSendMessage, closeSendMessage } =
  mailSlice.actions;
export const selectOpenMail = (state) => state.mail.selectedMail;
