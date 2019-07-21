import React, { Component } from 'react'
import Sign from './Sign'

export default class Allsigns extends Component {

    render() {
        return (

            this.props.signs.map((sign) => 
                (sign.name.includes(this.props.filterValue)) ? (<Sign sign = {sign} decrementCount={this.props.decrementCount} incrementCount={this.props.incrementCount}/>)
                : null
             
             )
        );
    }
}
