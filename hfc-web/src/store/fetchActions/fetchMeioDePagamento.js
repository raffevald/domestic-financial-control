import { http } from '../../services/axios';
import {
  fetchMeioDePagamentoCartao,
  fetchMeioDePagamentoTipoCartao,
  fetchMeioDePagamento
} from '../ducks/meioDePagamentoDucks';


// export const fetchGetMeioDePagamentoCartao = () => {
//   return dispatch => {
//     http
//       .get(`/cartao`)
//       .then(res => {
//         dispatch(fetchMeioDePagamentoCartao(res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   };
// };
export const fetchGetMeioDePagamentoCartao = (userId) => {
  return dispatch => {
    http
      .get(`/cartaoByUser/${userId}`)
      .then(res => {
        dispatch(fetchMeioDePagamentoCartao(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  };
};

// export const fetchGetMeioDePagamentoTipoCartao = () => {
//   return dispatch => {
//     http
//       .get(`/cartao/tipo`)
//       .then(res => {
//         dispatch(fetchMeioDePagamentoTipoCartao(res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   };
// };
export const fetchGetMeioDePagamentoTipoCartao = (userId) => {
  return dispatch => {
    http
      .get(`/cartao/tipoByUser/${userId}`)
      .then(res => {
        dispatch(fetchMeioDePagamentoTipoCartao(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  };
};

// export const fetchGetMeioDePagamento = () => {
//   return dispatch => {
//     http
//       .get(`/cartao/tipo/meioDePagamento`)
//       .then(res => {
//         dispatch(fetchMeioDePagamento(res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   };
// };
export const fetchGetMeioDePagamento = (userCodigo) => {
  console.log('User filtro no serviecs: ',userCodigo);
  return dispatch => {
    http
      .post(`/cartao/tipo/meioDePagamentoByUser`, {userCodigo} )
      .then(res => {
        dispatch(fetchMeioDePagamento(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  };
};


export const fetchPostMeioDePagamentoCartao = (values) => {
  return dispatch => {
    http
      .post(`/cartao`, values)
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

export const fetchPostMeioDePagamentoTipoDeCartao = (values) => {
  return dispatch => {
    http
      .post(`/cartao/tipo`, values)
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

export const fetchPostMeioDePagamento = (values) => {
  return dispatch => {
    http
      .post(`/cartao/tipo/meioDePagamento`, values)
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

export const fetchDeleteMeioDePagamento = (id) => {
  return dispatch => {
    http
      .delete(`/cartao/tipo/meioDePagamento/${id}`)
      .then(res => {
        if (res.statos === 200) {
          console.log("Dado deletado com sucesso")
        };
      })
      .catch(err => {
        console.log(err.response);
      })
  }
}

export const fetchPutMeioDePagamentoActions = (id, values) => {
  return dispatch => {
    http
      .put(`/cartao/tipo/meioDePagamento/${id}`, values)
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
