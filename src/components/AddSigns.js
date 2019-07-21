import React, {Component} from 'react'

export default class AddSigns extends Component {
    state ={
        title:''
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title !== ''){
            this.props.addSigns(this.state.title)
       }
       this.props.filterValue('');
        this.setState( {title: '' });
        
    }
    onChange =(e) => {
        this.setState({ [e.target.name]: e.target.value.toUpperCase()})
        this.props.filterValue(e.target.value.toUpperCase());
    }
  render(){
    return (
        <form style ={{display:'flex', padding: '5px'}} onSubmit = {this.onSubmit} > 
                <input type='input' placeholder ='Type Sign Name' onChange={this.onChange}
                name ='title' value = {this.state.title} style ={{flex:5}}/>
                <input type="submit" value= "Add / update Signs" className = "btn" style={{flex:'2'}} />
                
        </form>
       
    )
 }
}
