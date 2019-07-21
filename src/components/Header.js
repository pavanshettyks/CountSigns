import React from 'react'


function Header(props){
  return (
    <header style={headerStyle}>
      <h1>Signs Inventory </h1>
      <h4>Total Signs: {props.Count}</h4>
      
    </header>
  )
}



const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}

export default Header
