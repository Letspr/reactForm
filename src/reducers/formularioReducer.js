import {SET_FILE, RESET_FORM} from "../types";

const initialState = {
    file: null,
};

export default function formularioReducer(state = initialState, action){
    switch (action.type) {
        case SET_FILE:
            return {...state, file:action.payload};
        case RESET_FORM:
            return initialState;
        default:
            return state;
    }
} 