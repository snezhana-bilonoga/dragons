import { GET_ROCKET } from '../types';

const initialState = {
  rockets: null,
};

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_ROCKET:
    return {
      ...state,
      info: action.data,
    };
  default:
    return state;
  }
};
