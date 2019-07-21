import initialState from './initialState'
import uuid from 'uuid';

const MainReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'changeText':
       // console.log(action);
        return { ...state, title: action.title }

    case 'addNewSigns':
        let new_sign = { 
            name :action.title,
            count: 1,
            id :  uuid.v4()
         }
        let update_sign = state.signs.filter((signs)=> signs.name === action.title )
        if(!update_sign.length){
                //  setState({signs:[...this.state.signs,new_sign], Count:this.state.Count+1})
                  return { ...state,signs:[...state.signs,new_sign],Count:state.Count+1,  CategoriesCount: state.CategoriesCount+ 1  }
        }
        else{
            let updated_signs = state.signs.map((sign)=>{
                if(update_sign[0].id === sign.id){
                    sign.count = sign.count+1;
                }
                return sign;
             }
            )
            //console.log(updated_signs)
            
            return { ...state,signs:updated_signs, Count:state.Count+1 }
        }

    case 'deleteSign':
            let delete_signs = state.signs.filter((sign)=>(
                    action.id !== sign.id )
                     
                )
                //console.log(updated_signs)
                
        return { ...state,signs:delete_signs , Count:state.Count-action.count,CategoriesCount: state.CategoriesCount-1 }
                 

    case 'incrementCount':
        let updated_signs = state.signs.map((sign)=>{
            if(action.id === sign.id){
                sign.count = sign.count+1;
            }
            return sign;
         }
        )
        //console.log(updated_signs)
        
        return { ...state,signs:updated_signs, Count:state.Count+1 }
        
    case 'decrementCount':
        let Count = state.Count;
        let decremented_signs = state.signs.map((sign)=>{
            if(action.id === sign.id && sign.count >= 1 ){
                sign.count = sign.count-1;
                Count = Count - 1;
              }
                  return sign;
                }
            )
            
                
        return { ...state,signs:decremented_signs, Count:Count }
           
    default:
        return state
    }
}


export default MainReducer;