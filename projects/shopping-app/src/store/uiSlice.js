import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: {
      type: "info",
      message: "",
      open: false,
    },
  },
  reducers: {
    setNotification(state, action) {
      /*
      const { type, message = "" } = action.payload;
      state.notification.type = action.payload.type;
      state.notification.message = action.payload.message;
      state.notification.open = action.payload.open;
      */

      // state.notification = action.payload;

      state.notification.type = action.payload.type;
      state.notification.message = action.payload.message;
      state.notification.open = action.payload.open;
    },
  },
});

export const uiActions = uiSlice.actions;
