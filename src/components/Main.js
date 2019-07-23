import React, {Component} from 'react';
import Header from './Header'
import AddSigns from './AddSigns'
import AllSigns from './AllSigns'
import '../styles/Main.css';

class Main extends Component {

  render(){
      return (
        <div className="App">
          <Header/>
          <AddSigns />
          <AllSigns />
            
          { /* */}
        </div>
      );
  }
}

export default Main;