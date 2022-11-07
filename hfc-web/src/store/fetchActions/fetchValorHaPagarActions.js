import { http } from '../../services/axios';
import {
  fetchValorHaPagar,
  fetchValorHaPagarById,
  fetchValorHaPagarAtivos,
  fetchValorHaPagarByUser,
  fetchValorHaPagarAtivosByUser
} from '../ducks/valorHaPagarDucks';
import { startLoading, endLoading } from '../ducks/loadingDucks';


export const fetchGetValoresHaPagarByUserActions = (idUser) => {
  const LOADING_IDENTIFICATOR = 'loadingValoresAPagarByUser';

  return dispatch => {
    dispatch(startLoading(LOADING_IDENTIFICATOR));
    http
      .get(`/valoresHaPagarByUser/${idUser}`)
      .then(res => {
        dispatch(fetchValorHaPagarByUser(res.data));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch(endLoading(LOADING_IDENTIFICATOR));
      });
  };
};

export const fetchGetValoresHaPagarAtivosByUserActions = (idUser) => {
  const LOADING_IDENTIFICATOR = 'loadingValoresAPagarAtivosByUser';

  return dispatch => {
    dispatch(startLoading(LOADING_IDENTIFICATOR));
    http
      .get(`/valoresHaPagarAtivosByUser/${idUser}`)
      .then(res => {
        dispatch(fetchValorHaPagarAtivosByUser(res.data));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        dispatch(endLoading(LOADING_IDENTIFICATOR));
      });
  };
};

export const fetchDeleteValorHaPagarActions = (id) => {
  const LOADING_IDENTIFICATOR = 'loadingDeletarValoresAPagar';

  return dispatch => {
    dispatch(startLoading(LOADING_IDENTIFICATOR));
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
      .finally(() => {
        dispatch(endLoading(LOADING_IDENTIFICATOR));
      });
  };
};

export const fetchPutValoresHaPagarInativacoaActions = (id, values) => {
  const LOADING_IDENTIFICATOR = 'loadingEdicaoValoresAPagar';
  return dispatch => {
    dispatch(startLoading(LOADING_IDENTIFICATOR));
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
      .finally(() => {
        dispatch(endLoading(LOADING_IDENTIFICATOR));
      });
  };
};

//---------------------------------------------------------
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

export const fetchGetValorHaPagarAtivos = () => {
  return dispatch => {
    http
      .get(`/valoresHaPagarAtivos`)
      .then(res => {
        dispatch(fetchValorHaPagarAtivos(res.data));
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