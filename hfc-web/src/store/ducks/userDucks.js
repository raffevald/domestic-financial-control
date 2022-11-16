import { createSlice } from  '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "userDados",
  initialState: {
    values: {
      codigo: 2,
      perfilUser: "Usuario",
      firstName: "Rafael",
      lastName: "Evald",
      avatarUrl: "https://github.com/raffevald.png",
      dataNascimento: new Date(new Date().getFullYear(), 0),
    },
    userInfos: {
      codigo: '',
      email: '',
      perfil_do_usuario: '',
      primeiro_nome: '',
      sobrenome: '',
      vatar_url: '',
    },
  },
  reducers: {
    fecthUserInfosAction: (state, action) => {
      state.userInfos = action.payload
    }
  }
});

export const {
  fecthUserInfosAction
} = userSlice.actions;
