import { createSlice } from '@reduxjs/toolkit';

export const ModalController = createSlice({
  name: "modalController",
  initialState: {
    modalIsOpen: false,
    modalRegistration: false,
  },
  reducers: {
    fetchModalController: (state, action) => {
      state.modalIsOpen = action.payload
    },
    fetchModalRegistrationController: (state, action) => {
      state.modalRegistration = action.payload
    }
  },
});

export const {
  fetchModalController,
  fetchModalRegistrationController
} = ModalController.actions;
