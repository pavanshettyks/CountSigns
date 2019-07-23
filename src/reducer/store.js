
import MainReducer from './MainReducer'
import { createStore } from 'redux';

const store = createStore(MainReducer)

export default store;