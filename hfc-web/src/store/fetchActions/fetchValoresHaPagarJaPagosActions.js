import { http } from '../../services/axios';
import { startLoading, endLoading } from '../ducks/loadingDucks';
import {fetchValoresHaPagarJaPagos} from '../ducks/valoresHaPagarJaPagos';


export const fetchPostValoresHaPagarJaPagosActions = (values) => {
  return dispatch => {
    http
      .post(`/valoresHaPagarJaPagos`, values)
      .then(res => {
        if (res.status === 200) {
          console.log("Dado cadastro com sucesso")
        }
      })
      .catch(err => {
        console.log(err.response);
      })
  };
};

export const fetchGetListaDeValoresJaPagos = (id) => {
  const LOADING_IDENTIFICATOR = 'loadingDefault';

  return dispatch => {
    dispatch(startLoading(LOADING_IDENTIFICATOR));
    http
    .get(`/valoresHaPagarJaPagos/${id}`)
    .then(res => {
      dispatch(fetchValoresHaPagarJaPagos(res.data));
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      dispatch(endLoading(LOADING_IDENTIFICATOR));
    });
  }
}

export const fetchDeleteValorHaPagarJaPagoActions = (id) => {
  return dispatch => {
    http
      .delete(`/valoresHaPagarJaPagos/${id}`)
      .then(res => {
        if (res.statos === 200) {
          console.log("Dado deletado com sucesso")
        };
      })
      .catch(err => {
        console.log(err.response);
      })
  }
};

export const fetchPutValoresHaPagarActions = (id, values) => {
  return dispatch => {
    http
      .put(`/valoresHaPagarJaPagos/${id}`, values)
      .then(res => {
        if (res.status === 200) {
          console.log("Dado cadastro com sucesso")
        }
      })
      .catch(err => {
        console.log(err.response);
      })
  }
}

