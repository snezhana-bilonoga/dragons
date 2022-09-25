import { GET_ROCKET, GET_ROCKETS, LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF, SET_USER, REMOVE_USER } from "./types";

const rocketDetailsUrl = "https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f";
const rocketsUrl = "https://api.spacexdata.com/v4/dragons";

export function loaderOn() {
    return {
      type: LOADER_DISPLAY_ON
    }
}

export function loaderOff() {
    return {
      type: LOADER_DISPLAY_OFF
    }
}

export function getRockets() {
    return async dispatch => {
        dispatch(loaderOn());

        const response = await fetch(rocketsUrl);
        const jsonData = await response.json();
        
        dispatch({
            type: GET_ROCKETS,
            data: jsonData
        });
        
        dispatch(loaderOff());
    }
}

export function getRocket() {
    return async dispatch => {
        dispatch(loaderOn());

        const response = await fetch(rocketDetailsUrl);
        const jsonData = await response.json();
        
        dispatch({
            type: GET_ROCKET,
            data: jsonData
        });
        
        dispatch(loaderOff());
    }
}

export function setUser(userData) {
    return async dispatch => 
        dispatch({
            type: SET_USER,
            data: userData
        });
}

export function removeUser() {
    return async dispatch => 
        dispatch({
            type: REMOVE_USER,
        });
}

