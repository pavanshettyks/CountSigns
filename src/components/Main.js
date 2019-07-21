import React, {Component} from 'react';
import Header from './Header'
import AddSigns from './AddSigns'
import AllSigns from './AllSigns'
import '../styles/Main.css';

class Main extends Component {
  state = {
    Value: '',
    Count: 14,
    signs : [ 
      {
        name:"EVENT PARKING",
        count:8,
        id:1
      },
      {
        name:"EVENT PARKING RIGHT",
        count:1,
        id:2
      },
      {
        name:"EVENT PARKING LEFT",
        count:5,
        id:3
      }
    ] 
  } 
  addSigns = (title) => {

   let new_sign = { 
      name :title,
      count: 1,
      id : 4
    }
    //this.state.signs.map
    this.setState({signs:[...this.state.signs,new_sign], Count:this.state.Count+1})
  }
  incrementCount = (id) => {
      let updated_signs = this.state.signs.map((sign)=>{
        if(id === sign.id){
          sign.count = sign.count+1;
        }
        return sign;
      }
      )
      this.setState({signs:updated_signs,Count:this.state.Count+1})
    
  }
  decrementCount = (id) => {
    let Count = this.state.Count;
    let updated_signs = this.state.signs.map((sign)=>{
      if(id === sign.id && sign.count >= 1 ){
        sign.count = sign.count-1;
        Count = Count - 1;
      }
      return sign;
    }
    )
    this.setState({signs:updated_signs,Count:Count})
  }
  filterValue = (value) =>{
    this.setState({Value:value})
  }


  render(){
      return (
        <div className="App">
          <Header Count={this.state.Count}/>
          <AddSigns addSigns = {this.addSigns} filterValue = {this.filterValue} />
          <AllSigns signs = {this.state.signs} filterValue = {this.state.Value} 
                    incrementCount={this.incrementCount} decrementCount={this.decrementCount}/>
            


        </div>
      );
  }
}

export default Main;