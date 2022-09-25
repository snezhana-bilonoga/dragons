import { GET_ROCKETS } from '../types';

const initialState = {
    rockets: []
}

export const rocketsReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_ROCKETS:
            return {
                ...state,
                rockets: action.data
            }
    
        default: return state;    
    }
}