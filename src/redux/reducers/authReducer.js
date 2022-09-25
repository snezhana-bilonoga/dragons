import { SET_USER, REMOVE_USER } from '../types';

const initialState = {
    name: null,
    phone: null,
    email: null,
    token: null,
    id: null,
};

export const authReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_USER:
            return {
                ...state,
                name: action.data.name,
                phone: action.data.phone,
                email: action.data.email,
                token: action.data.token,
                id: action.data.id,
            } 

        case REMOVE_USER :
            return {
                ...state,
                name: null,
                phone: null,
                email: null,
                token: null,
                id: null,
            }
    
        default: return state;  
    }
}