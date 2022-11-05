import { createSlice } from '@reduxjs/toolkit';

export const ModalController = createSlice({
  name: "modalController",
  initialState: {
    modalIsOpen: false,
  },
  reducers: {
    fetchModalController: (state, action) => {
      state.modalIsOpen = action.payload
    },
  },
});

export const { fetchModalController } = ModalController.actions;
