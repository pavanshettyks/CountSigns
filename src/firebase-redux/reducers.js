import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import MainReducer from './MainReducer'
export const initialState = {}


export const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  local:MainReducer,
})
