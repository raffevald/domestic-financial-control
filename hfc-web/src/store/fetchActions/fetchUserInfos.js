import { http } from '../../services/axios';

import {
  fecthUserInfosAction
} from '../ducks/userDucks';

export const fetchGetUserInfos = (email) => {
  return dispatch => {
    http
      .post(`/users/infos`, {email} )
      .then(res => {
        dispatch(fecthUserInfosAction(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  };
};