import React, { Component } from 'react'

export default class Sign extends Component {

    incrementCount = (e) => {
       // console.log(this.props.sign.count)
        this.props.incrementCount(this.props.sign.id);
    }
    decrementCount = (e) => {
        this.props.decrementCount(this.props.sign.id);
       // this.props.decrementCount(e.sign.id);
    }
    render() {
        return (
        <div style ={{padding:'5px',display:'flex'}}>
            <div style ={{flex:5}}>{this.props.sign.name}</div>
            <div style ={{flex:2}}>
                    <button style ={{padding:'5px', marginRight:7}} onClick = {this.incrementCount}> + </button>
                    {this.props.sign.count}
                    <button style = {{padding:'5px',marginRight:7,marginLeft:7}}
                            onClick = {this.decrementCount}
                    > - </button>
            </div>

        </div>
        )
    }
}
