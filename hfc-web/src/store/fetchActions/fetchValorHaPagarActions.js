import { http } from '../../services/axios';
import { fetchValorHaPagar, fetchValorHaPagarById } from '../ducks/valorHaPagarDucks';
import { getAllValorHaPagar } from '../ducks/valorHaPagarDucks';
import { startLoading, endLoading } from '../ducks/loadingDucks';


export const fetchGetValorHaPagar = () => {
  return dispatch => {
    http
      .get(`/valoresHaPagar`)
      .then(res => {
        dispatch(fetchValorHaPagar(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  };
};

export const fetchPostValorHaPagarActions = (values) => {
  return dispatch => {
    http
      .post(`/valoresHaPagar`, values)
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

export const fetchDeleteValorHaPagarActions = (id) => {
  return dispatch => {
    http
      .delete(`/valoresHaPagar/${id}`)
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

// export const fetchGetByIdValorHaPagarActions = (id) => {
//   // return new Promise(resolve => {
//   return async dispatch => {
//     http
//       .get(`/valoresHaPagar/${id}`)
//       .then(async res => {
//         await dispatch(fetchValorHaPagarById(res.data));
//         // resolve(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   };
// };

// export function fetchGetByIdValorHaPagarActions (id) {
//   return async function (dispatch) {
//     await http
//       .get(`/valoresHaPagar/${id}`)
//       .then(res => {
//         dispatch(fetchValorHaPagarById(res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
// };

export const fetchGetByIdValorHaPagarActions = (id) => async dispatch => {
  return new Promise(resolve => {
    http
     .get(`/valoresHaPagar/${id}`)
      .then(res => {
        dispatch(fetchValorHaPagarById(res?.data));
        resolve(res?.data);
      })
      .catch(err => {
        console.log(err);
      })
  });
};


export const fetchPutValorHaPagarActions = (id, values) => {
  return dispatch => {
    http
      .put(`/valoresHaPagar/${id}`, values)
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

export const fetchPutValoresHaPagarInativacoaActions = (id, values) => {
  return dispatch => {
    http
      .put(`/valoresHaPagarInativacao/${id}`, values)
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


//------------------------------------------
// export const fetchGetAccreditation = object => {
//   return dispatch => {
//     const LOADING_IDENTIFICATOR = 'loadingDefault';
//     dispatch(startLoading(LOADING_IDENTIFICATOR));
//     api
//       .get(
//         `/Credenciamento/credenciados/page=${page}&itemsByPage=${itemsByPage}`
//       )
//       .then(res => {
//         dispatch(getAllAccreditation(res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//       .finally(() => {
//         dispatch(endLoading(LOADING_IDENTIFICATOR));
//       });
//   };
// };

// export const fetchGetValorHaPagarTeteState = () => {
//   const LOADING_IDENTIFICATOR = 'loadingDefault';

//   return dispatch => {
//     dispatch(startLoading(LOADING_IDENTIFICATOR));
//     http
//       .get(`/valoresHaPagar`)
//       .then(res => {
//         // console.log('Reducer na services: ', res);
//         dispatch(getAllValorHaPagar(res.data));
//       })
//       .catch(err => {
//         console.log(err);
//       })
//       .finally(() => {
//         dispatch(endLoading(LOADING_IDENTIFICATOR));
//       });
//   };
// };