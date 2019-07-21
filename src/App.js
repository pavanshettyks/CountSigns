import React from 'react';
import Main from './components/Main'
import store from './reducer/store'
import { Provider } from 'react-redux';


import './App.css';


function App() {
  return (
    <Provider store={store}>
            <Main />
    </Provider>
  );
}

export default App;
