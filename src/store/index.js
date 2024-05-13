import {createStore} from 'redux';
import reducer from '../reducers';

// Crea el store de la aplicación
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Se suscribe a los cambios del store
store.subscribe(() => console.log(store));

export default store; 