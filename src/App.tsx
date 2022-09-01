import React, { useState } from 'react';
import "./assets/style.css"
import List from "./components/List";
import "./assets/2.jpg"
import AddPeople from './components/AddPeople';



 export interface Ipeoples {
 
    id: number;
    name: string;
    age: number;
    info: string;
    imgUrl: string;


}



function App() {






const [peoples,SetPeaples]=useState<Ipeoples[]>([{
  id:1,
  name:"Pofen",
  age:3,
  info:"Pofen is a dog",
  imgUrl:"src/assets/2.jpg"
}])




  return (
    <div  className ="container " >
      <h3 className= "alert alert-info "> Profiles</h3>
      <List peoples={peoples} setPeoples={SetPeaples}/>
<AddPeople peoples= {peoples} setPeoples = {SetPeaples}  />
     
    </div>
  );
}

export default App;
