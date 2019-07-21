import React, { Component } from 'react'
import Sign from './Sign'
import { connect } from 'react-redux'

class Allsigns extends Component {

    incrementCount = (id) =>{
        this.props.incrementCount(id)
    }
    decrementCount = (id) =>{
        this.props.decrementCount(id)
    }


    render() {
        return (

            this.props.Signs.map((sign) => 
                (sign.name.includes(this.props.filterValue)) ? (<Sign sign = {sign}  key={sign.id} incrementCount={this.incrementCount} decrementCount={this.decrementCount} />)
                : null
             )
        );
    }
}

const mapStateToProps = state => {
    return {
        Signs: state.signs,
        filterValue: state.title
    }
  }

const mapDispatchToProps = dispatcher => {
    return{
        incrementCount: (id) => dispatcher({type: 'incrementCount', id:id}),
        decrementCount: (id) => dispatcher({type: 'decrementCount', id:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Allsigns);