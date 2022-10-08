import { ADD_ROCKET_TO_FAVORITE, REMOVE_ROCKET_FROM_FAVORITE } from '../types';

const initialState = {
  favorites: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_ROCKET_TO_FAVORITE:
    return {
      ...state,
      favorites: [...state.favorites, action.data],
    };
  case REMOVE_ROCKET_FROM_FAVORITE:
    return {
      ...state,
      favorites: [...state.favorites.filter(rocket => rocket.id !== action.data.id)],
    };

  default:
    return state;
  }
};
