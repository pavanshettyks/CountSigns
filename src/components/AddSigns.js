import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class AddSigns extends Component {

    onSubmit = (e) => {
        
        e.preventDefault();
        //console.log("ddd",this.props.title)
        if(this.props.title !== ''){
          //  this.props.addNewSigns(this.props.title)  
           // let data = this.props.title ;
            //console.log(this.props.title)
             let new_id = uuid.v4();
             console.log(new_id)
              this.props.firestore.add(
                { collection: 'allSigns',
                 //doc:'ssss'
                },
                {
                 
                  name: this.props.title,
                  count:1,
                  //id: new_id
                }
              ) ;

              this.props.firestore.update(
                { collection: 'Counts',
                  doc:'all' },
                {
                  Count:  this.props.count+1,
                  CategoriesCount:  this.props.CategoriesCount+1,

                }
              )
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
    let count = 0;
    let categoriesCount = 0;
   if(state.firestore.ordered.Counts != null ){
    count = state.firestore.ordered.Counts[0].Count;
    categoriesCount = state.firestore.ordered.Counts[0].CategoriesCount;
   }
    return{
        count: count,
        CategoriesCount : categoriesCount,
            title: state.local.title,
            
    }
}

const mapDispatchToProps = dispatcher => {
    return{
        changeText: (text) => dispatcher({type: 'changeText', title:text}),
        addNewSigns: (text) => dispatcher({type: 'addNewSigns', title:text})
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect(
    (props) => {
        return [
          {
            collection: 'Counts',
            doc:'all'
          }
        ]
      }
))(AddSigns)