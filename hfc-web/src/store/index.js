import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from './ducks/userDucks';
import { ValorHaPagar } from './ducks/valorHaPagarDucks';
import { ModalController } from './ducks/modalControlerDucks';
import { ValoresHaPagarJaPagos } from './ducks/valoresHaPagarJaPagos';
import { MeioDePagamento } from './ducks/meioDePagamentoDucks';
// import { ValorHaPagarTesteState } from './ducks/valorHaPagarDucks';
import loadingReducer from './ducks/loadingDucks';

export const Store = configureStore({
  reducer: {
    loading: loadingReducer,
    userDatas: userSlice.reducer,
    valorHaPagarDatas: ValorHaPagar.reducer,
    valoresHaPagarJaPagos: ValoresHaPagarJaPagos.reducer,
    modalController: ModalController.reducer,
    meioDePagamento: MeioDePagamento.reducer,

    // valorHaPagarReducerTeste: ValorHaPagarTesteState,
  }
});
