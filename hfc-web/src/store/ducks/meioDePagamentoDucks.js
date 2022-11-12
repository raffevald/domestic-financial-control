import { createSlice } from '@reduxjs/toolkit';

export const MeioDePagamento = createSlice({
  name: "MeioDePagamento",
  initialState: {
    dadosCartao: [],
    dadosTipoCartao: [],
    dadosMeioDePagamento: [],
    modalMeioDePagamento: false,
    modalRegistrationCartoesCategoriasCartao: false
  },
  reducers: {
    fetchMeioDePagamentoCartao: (state, action) => {
      state.dadosCartao = action.payload
    },
    fetchMeioDePagamentoTipoCartao: (state, action) => {
      state.dadosTipoCartao = action.payload
    },
    fetchMeioDePagamento: (state, action) => {
      state.dadosMeioDePagamento = action.payload
    },
    fetchModalMeioDePagamento: (state, action) => {
      state.modalMeioDePagamento = action.payload
    },
    fetchModalRegistrationCartoesCategoriasCartao: (state, action) => {
      state.modalRegistrationCartoesCategoriasCartao = action.payload
    },
  }
});

export const {
  fetchMeioDePagamentoCartao,
  fetchMeioDePagamentoTipoCartao,
  fetchMeioDePagamento,
  fetchModalMeioDePagamento,
  fetchModalRegistrationCartoesCategoriasCartao
} = MeioDePagamento.actions;
