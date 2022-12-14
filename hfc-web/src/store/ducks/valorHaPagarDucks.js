import { createSlice } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';

export const ValorHaPagar = createSlice({
  name: "valorHaPagar",
  initialState: {
    dados: [],
    dadosAtivos: [],
    dadosById: {
      data_vencimento : "",
      valor_total: "",
      descricao: "",
      data_cadastro: "",
      parcelas_totais: "",
      parcelas_pagas: "",
    },
    idValorHaPagarEditando: null,
    valorHaPagarIsEditando: false,

    valoresAPagarByUser: [],
    valoresAPagarByUserAtivos:[],
    
  },
  reducers: {
    fetchValorHaPagar: (state, action) => {
      state.dados = action.payload
    },
    fetchValorHaPagarAtivos: (state, action) => {
      state.dadosAtivos = action.payload
    },
    fetchValorHaPagarById: (state, action) => {
      state.dadosById = action.payload
    },
    fetchModalControllerValorHaPagarByIdEditando: (state, action) => {
      state.idValorHaPagarEditando = action.payload
    },
    fetchModalControllerValorHaPagarIsEditando: (state, action) => {
      state.valorHaPagarIsEditando = action.payload
    },

    fetchValorHaPagarByUser: (state, action) => {
      state.valoresAPagarByUser = action.payload
    },
    fetchValorHaPagarAtivosByUser: (state, action) => {
      state.valoresAPagarByUserAtivos = action.payload
    },
  }
});

export const {
  fetchValorHaPagar,
  fetchValorHaPagarById,
  fetchModalControllerValorHaPagarByIdEditando,
  fetchModalControllerValorHaPagarIsEditando,
  fetchValorHaPagarAtivos,
  fetchValorHaPagarByUser,
  fetchValorHaPagarAtivosByUser
} = ValorHaPagar.actions;


// //------------------------------------------------------------------------
// export const INITIAL_STATE = {
//   dadosValorHaPagar: null,
// };

// export const getAllValorHaPagar = createAction('GET_ALL_VALOR_HA_PAGAR');
// export const ValorHaPagarTesteState = createReducer(INITIAL_STATE, {
//   [getAllValorHaPagar.type]: (state, action) => ({
//     ...state,
//     dadosValorHaPagar: action.payload,
//   }),
// });
// //-------------------------------------------------------------------------
