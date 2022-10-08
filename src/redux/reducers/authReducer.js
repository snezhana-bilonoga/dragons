import { SET_USER, REMOVE_USER } from '../types';

const initialState = {
  name: null,
  email: null,
  lastSignInTime: null,
  creationTime: null,
  token: null,
  id: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_USER:
    return {
      ...state,
      ...action.data,
    };

  case REMOVE_USER:
    return {
      ...state,
      name: null,
      email: null,
      lastSignInTime: null,
      token: null,
      id: null,
    };

  default:
    return state;
  }
};
