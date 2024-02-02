import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: state => {
      state.isOpen = true;
    },
    closeModal: (state, payload) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export const selectModal = state => state.modal;
export const selectModalState = state => selectModal(state).isOpen;
