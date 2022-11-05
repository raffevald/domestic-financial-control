import { createSlice } from '@reduxjs/toolkit';

export const ValoresHaPagarJaPagos = createSlice({
  name: "ValoresHaPagarJaPagos",
  initialState: {
    dados: null,
    modalControllerValoresHaPagarJaPagos: false,
    idDoValoresHaPagarJaPagos: null,
    modalAmountsPayableAlreadyPaid: false,
    modalExcluirValorJaPago: false,
    modalEdicaoValorJaPago: false,
  },
  reducers: {
    fetchValoresHaPagarJaPagos: (state, action) => {
      state.dados = action.payload
    },
    fetchModalControllerValoresHaPagarJaPagos: (state, action) => {
      state.modalControllerValoresHaPagarJaPagos = action.payload
    },
    fetchIdValoresHaPagarJaPagos: (state, action) => {
      state.idDoValoresHaPagarJaPagos = action.payload
    },
    fetchValoresHaPagarJaPagosModal: (state, action) => {
      state.modalAmountsPayableAlreadyPaid = action.payload
    },
    fetchValorHaPagarJaPagoModalExclusao: (state, action) => {
      state.modalExcluirValorJaPago = action.payload
    },
    fetchValorHaPagarJaPagoModalEdicao: (state, action) => {
      state.modalEdicaoValorJaPago = action.payload
    },
  }
});

export const {
  fetchValoresHaPagarJaPagos,
  fetchModalControllerValoresHaPagarJaPagos,
  fetchIdValoresHaPagarJaPagos,
  fetchValoresHaPagarJaPagosModal,
  fetchValorHaPagarJaPagoModalExclusao,
  fetchValorHaPagarJaPagoModalEdicao
} = ValoresHaPagarJaPagos.actions;
