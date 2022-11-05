import { createSlice } from '@reduxjs/toolkit';

export const MeioDePagamento = createSlice({
  name: "MeioDePagamento",
  initialState: {
    dadosCartao: [],
    dadosTipoCartao: [],
    dadosMeioDePagamento: [],
    modalCadrastraCartoa: false,
    modalCadrastraTipoCartoa: false,
    modalMeioDePagamento: false
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
    fetchModalCadrastraCartoa: (state, action) => {
      state.modalCadrastraCartoa = action.payload
    },
    fetchModalCadrastraTipoCartoa: (state, action) => {
      state.modalCadrastraTipoCartoa = action.payload
    },
    fetchModalMeioDePagamento: (state, action) => {
      state.modalMeioDePagamento = action.payload
    },
  }
});

export const {
  fetchMeioDePagamentoCartao,
  fetchMeioDePagamentoTipoCartao,
  fetchMeioDePagamento,
  fetchModalCadrastraCartoa,
  fetchModalCadrastraTipoCartoa,
  fetchModalMeioDePagamento
} = MeioDePagamento.actions;
