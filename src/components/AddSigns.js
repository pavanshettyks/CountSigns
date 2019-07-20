import React, {Component} from 'react'

export default class AddSigns extends Component {
    state ={
        value:''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.setState( {title: '' });
    
    }
    onChange =(e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
  render(){
    return (
        <form style ={{display:'flex', padding: '5px'}} onSubmit = {this.onSubmit} > 
                <input type='input' placeholder ='Type Sign Name' onChangeT={this.onChange}
                value = {this.state.title} style ={{flex:5}}/>
                <input type="submit" value= "Add / update Signs" className = "btn" style={{flex:'2'}} />
                
        </form>
       
    )
 }
}
