import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  status: {},
};

export const startLoading = createAction('START_LOADING');
export const endLoading = createAction('END_LOADING');

export default createReducer(INITIAL_STATE, {
  [startLoading.type]: (state, action) => ({
    ...state,
    status: {
      ...state.status,
      [action.payload]: true,
    },
  }),
  [endLoading.type]: (state, action) => ({
    ...state,
    status: {
      ...state.status,
      [action.payload]: false,
    },
  }),
});
