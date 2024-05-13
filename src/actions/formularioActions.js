import {SET_FILE, RESET_FORM} from "../types";

export const setFile = (file) => ({type: SET_FILE, payload: file});
export const resetForm = () => ({type: RESET_FORM}); 