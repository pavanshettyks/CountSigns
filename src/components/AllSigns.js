import React, { Component } from 'react'
import Sign from './Sign'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Allsigns extends Component {

    incrementCount = (id,count) =>{
        this.props.incrementCount(id)
        this.props.firestore.update(
        {  collection: 'allSigns',
            doc:id },
        {   
            count:  count+1,
            //  CategoriesCount:  this.props.CategoriesCount-1,
        })
                
        this.props.firestore.update(
                { collection: 'Counts',
                doc:'all' },
                {
                Count:  this.props.Count+1,
            //      CategoriesCount:  this.props.CategoriesCount,
        })
    }
    decrementCount = (id,count) =>{
       // this.props.decrementCount(id)
      // console.log(id,count)
       if(count>0){
                    this.props.firestore.update(
                        {  collection: 'allSigns',
                        doc:id },
                        { 
                        
                        count:  count-1,
                        //  CategoriesCount:  this.props.CategoriesCount-1,

                        })
                        
               this.props.firestore.update(
                { collection: 'Counts',
                  doc:'all' },
                {
                  Count:  this.props.Count-1,
            //      CategoriesCount:  this.props.CategoriesCount,

                })
        }
    }
    deleteSign = (id,count) =>{
        const confirmation = window.confirm("This will permanently delete the entry. \n Are you sure?");
        if(confirmation){
               // this.props.deleteSign(id,count)
              // console.log(id)
               this.props.firestore.delete( { collection: 'allSigns',
               doc:id
               })

               this.props.firestore.update(
                { collection: 'Counts',
                  doc:'all' },
                {
                  Count:  this.props.Count-count,
                  CategoriesCount:  this.props.CategoriesCount-1,

                })
        }
    }


    render() {
        //console.log(this.props.Loading);
       // console.log(this.props.test.ordered.allSigns);
        //console.log("orig",this.props.Signs);
        if(this.props.Loading){
            return <h3>Loading....</h3>
        }
        else{
        return (
                
                //this.props.Loading &&
                    this.props.Signs.map((sign) => 
                        (sign.name.includes(this.props.filterValue)) ? (<Sign sign = {sign}  key={sign.id} incrementCount={this.incrementCount} decrementCount={this.decrementCount} 
                            deleteSign={this.deleteSign}/>)
                        : null
                    )
                     
                );
        }
    }
}

const mapStateToProps = state => {
    let data = [ ];
    let loading = true;
    let categoriesCount = 0;
    let count = 0;

    if(state.firestore.ordered.allSigns != null ){
        data = state.firestore.ordered.allSigns;
        count = state.firestore.ordered.Counts[0].Count;
        categoriesCount = state.firestore.ordered.Counts[0].CategoriesCount;
        loading = false ;
        
    }
    return {
       // Signs: state.local.signs,
        Signs: data,
        Loading: loading,
        filterValue: state.local.title,
        Count:  count,
        CategoriesCount : categoriesCount,
        test:state.firestore
    }
  }

const mapDispatchToProps = dispatcher => {
    return{
        incrementCount: (id) => dispatcher({type: 'incrementCount', id:id}),
        decrementCount: (id) => dispatcher({type: 'decrementCount', id:id}),
        deleteSign: (id,count) =>      dispatcher({type: 'deleteSign', id:id,count:count})
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),firestoreConnect(
    (props) => {
        return [
          {
            collection: 'allSigns',
            
          }
        ]
      }
))(Allsigns);