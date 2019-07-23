import firebase from 'firebase'
import uuid from 'uuid/v4'



var firebaseConfig = {
    apiKey: "AIzaSyCwTimQLdqmQv72yp-ZS42Kh1RHcHmtjXE",
    authDomain: "client123-673fc.firebaseapp.com",
    databaseURL: "https://client123-673fc.firebaseio.com",
    projectId: "client123-673fc",
    storageBucket: "client123-673fc.appspot.com",
    messagingSenderId: "702860724566",
    appId: "1:702860724566:web:66b356175fa5d04d"
  };
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore()

export const addTaskToFirebase = (task) => {
  //this will give us a unique id for our tasks

            const id = uuid()
            database.ref(`/${id}`).set({
                task, id
            })
}
export const UpdateSign = (signs,count,categoriesCount) => {
            database.collection("count-signs").doc("all_data").set({
                Count: count,
                CategoriesCount: categoriesCount,
                signs :  signs
            });
           
}



export const  getSigns  = async () => {
    var docRef = database.collection("count-signs").doc("all_data");
   // console.log(docRef)
    let initialState = {        
       }  

        let data = await docRef.get()
        
         /*.then(function(doc) {
        if (doc.exists) {
          //  console.log("Document data:", doc.data());
          let data = doc.data()
          //initialState = data;
          return data
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    })
   */
   
    console.log("dddd",data.data())
    //initialState =  data.data()
    
    //console.log("data:",initialState)
    return  await data.data();
    //return initialState;
  /*  database.collection("count-signs").add({
        Count: count,
        CategoriesCount: categoriesCount,
        signs :  signs
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    }); */
}




export default database