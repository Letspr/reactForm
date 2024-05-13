import {combineReducers} from 'redux';
import formularioReducer from './formularioReducer';

// Centraliza todos los reducers de la aplicación
const reducer = combineReducers({
    formulario:formularioReducer,
}); 

export default reducer;