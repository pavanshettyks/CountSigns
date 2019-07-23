import { createStore, combineReducers, compose } from 'redux'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCwTimQLdqmQv72yp-ZS42Kh1RHcHmtjXE",
    authDomain: "client123-673fc.firebaseapp.com",
    databaseURL: "https://client123-673fc.firebaseio.com",
    projectId: "client123-673fc",
    storageBucket: "client123-673fc.appspot.com",
    messagingSenderId: "702860724566",
    appId: "1:702860724566:web:66b356175fa5d04d"
  }; // from Firebase Console

const rfConfig = {} // optional redux-firestore Config Options

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize Cloud Firestore through Firebase
firebase.firestore();

const createStoreWithFirebase = compose(
    reduxFirestore(firebase, rfConfig), // firebase instance as first argument, rfConfig as optional second
  )(createStore)
  
  // Add Firebase to reducers
  const rootReducer = combineReducers({
    firestore: firestoreReducer
  })
  