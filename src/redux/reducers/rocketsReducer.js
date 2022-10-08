import { GET_ROCKETS, ADD_ROCKET_TO_FAVORITE } from '../types';

const initialState = {
  rockets: [],
};

export const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_ROCKETS:
    return {
      ...state,
      rockets: action.data,
    };
  case ADD_ROCKET_TO_FAVORITE:
    return {
      ...state,
      info: action.data,
    };

  default:
    return state;
  }
};
