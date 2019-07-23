import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
//import { firebaseConnect } from 'react-redux-firebase'
import { firestoreConnect } from 'react-redux-firebase'

//<button onClick = {() => {window.print() }}>Print</button>
function Header(props){
 
  return (
    <header style={headerStyle}>
      <h1>Signs Inventory dxfghjk </h1>
      <h4>Total Signs:  {props.Count} | Categories: { props.CategoriesCount} </h4>
      <button onClick = {() => { window.print()
    }}>Print</button>
      
    </header>
  )
}
const mapStateToProps = state => {
  let categoriesCount = 0;
  let count = 0;
  if(state.firestore.ordered.Counts != null ){
    count = state.firestore.ordered.Counts[0].Count;
    categoriesCount = state.firestore.ordered.Counts[0].CategoriesCount;
  }
  return {
    Count:  count,
    CategoriesCount : categoriesCount,
  //  Test:state.firestore
  }
}

export default compose(connect(mapStateToProps),
firestoreConnect((props) => {
    return [
      {
        collection: 'Counts',
        doc:'all'
      }
    ]
  })
)(Header)


const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}
