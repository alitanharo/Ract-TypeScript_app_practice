import React, { useState, Dispatch, SetStateAction, FC } from 'react';
import "./assets/style.css"
import List from "./components/List";

import AddPeople from './components/AddPeople';



 export interface Ipeoples {
 
    id: number;
    name: string;
    age: number;
    info: string;
    imgUrl: string | undefined;


}




function App() {






const [peoples,SetPeaples]=useState<Ipeoples[]>([{
  id:1,
  name:"Pofen",
  age:3,
  info:"Pofen is a dog",
  imgUrl:""
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
