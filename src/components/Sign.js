import React, { Component } from 'react'

import './Sign.css';

export default class Sign extends Component {

    incrementCount = (e) => {
       // console.log(this.props.sign.count)
        this.props.incrementCount(this.props.sign.id);
    }

    decrementCount = (e) => {
        this.props.decrementCount(this.props.sign.id);
       // this.props.decrementCount(e.sign.id);
    }
    deleteSign = (e) => {
        this.props.deleteSign(this.props.sign.id);
       // this.props.decrementCount(e.sign.id);
    }

    render() {
        return (
        <div style ={{padding:'5px',display:'flex'}}>
            <div style ={{flex:1,}} id='delete'>
                    <button style ={btnStyle}
                            onClick = {this.deleteSign}
                    > x </button>  
            </div>
            <div style ={{flex:5}}>{this.props.sign.name}</div>
            <div style ={{flex:2}} id='delete'>
                    <button style ={{padding:'5px',marginRight:'10px'}} onClick = {this.incrementCount}> + </button>
                    {this.props.sign.count}
                    <button style = {{padding:'5px',marginRight:'5px',marginLeft:'10px'}}
                            onClick = {this.decrementCount}
                    > - </button>
            </div>

        </div>
        )
    }
}

/*
const mapDispatchToProps = dispatcher => {
    return{
        incrementCount: (id) => dispatcher({type: 'incrementCount', id:id}),
        decrementCount: (id) => dispatcher({type: 'decrementCount', id:id})
    }
}

export default connect(null,mapDispatchToProps)(Sign)
*/

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    marginRight:'15px',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }