import {
  GET_ROCKETS,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  SET_USER,
  REMOVE_USER,
  ADD_ROCKET_TO_FAVORITE,
  REMOVE_ROCKET_FROM_FAVORITE,
  REMOVE_FAVORITES,
} from './types';

const rocketsUrl = 'https://api.spacexdata.com/v4/dragons';

export function loaderOn () {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff () {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function getRockets () {
  return async dispatch => {
    dispatch(loaderOn());

    const response = await fetch(rocketsUrl);
    const jsonData = await response.json();

    dispatch({
      type: GET_ROCKETS,
      data: jsonData,
    });

    dispatch(loaderOff());
  };
}

export function setUser (userData) {
  return async dispatch =>
    dispatch({
      type: SET_USER,
      data: userData,
    });
}

export function removeUser () {
  return async dispatch =>
    dispatch({
      type: REMOVE_USER,
    });
}

export function addRocketToFavorite (rocketData) {
  return async dispatch =>
    dispatch({
      type: ADD_ROCKET_TO_FAVORITE,
      data: rocketData,
    });
}

export function removeFromFavorite (rocketData) {
  return async dispatch =>
    dispatch({
      type: REMOVE_ROCKET_FROM_FAVORITE,
      data: rocketData,
    });
}

export function removeFavorites () {
  return async dispatch =>
    dispatch({
      type: REMOVE_FAVORITES,
    });
}
