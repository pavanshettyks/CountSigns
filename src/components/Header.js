import React from 'react'
import { connect } from 'react-redux'

function Header(props){
  return (
    <header style={headerStyle}>
      <h1>Signs Inventory </h1>
      <h4>Total Signs: {props.Count} | Categories: {props.CategoriesCount} </h4>
      
    </header>
  )
}
const mapStateToProps = state => {
  return {
    Count: state.Count,
    CategoriesCount:state.CategoriesCount
  }
}

export default connect(
  mapStateToProps,
)(Header)



const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}
