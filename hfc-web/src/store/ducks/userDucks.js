import { createSlice } from  '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "userDados",
  initialState: {
    values: {
      codigo: 1,
      perfilUser: "Usuario",
      firstName: "Rafael",
      lastName: "Evald",
      avatarUrl: "https://github.com/raffevald.png",
      dataNascimento: new Date(new Date().getFullYear(), 0),
    }},
  reducers: {
    fecthUserData: (state, action) => {
      state.values = action.payload
    }
  }
});

export const { fecthUserData } = userSlice.actions;
