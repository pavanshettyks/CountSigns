import React, {Component} from 'react'
import {connect} from 'react-redux'

class AddSigns extends Component {

    onSubmit = (e) => {
        
        e.preventDefault();
        if(this.props.title !== ''){
            this.props.addNewSigns(this.props.title)      
            this.props.changeText('')  
       }

        
    }
    onChange =(e) => {
        this.props.changeText(e.target.value.toUpperCase())
    }
  render(){
    return (
        <form style ={{display:'flex', padding: '7px',height:'45px'}} onSubmit = {this.onSubmit} > 
                <input type='input' placeholder ='Type Sign Name' onChange={this.onChange}
                name ='title' value = {this.props.title} style ={{flex:5}}/>
                <input type="submit" value= "Add / update Signs" className = "btn" style={{flex:'2'}} />
                
        </form>
       
    )
 }
}
const mapStateToProps = state => {
    return{
            title: state.title,
    }
}

const mapDispatchToProps = dispatcher => {
    return{
        changeText: (text) => dispatcher({type: 'changeText', title:text}),
        addNewSigns: (text) => dispatcher({type: 'addNewSigns', title:text})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddSigns)