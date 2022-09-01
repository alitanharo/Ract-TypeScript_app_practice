import React, { FC } from 'react'

import { Ipeoples } from '../App'
import { AiOutlineUsergroupDelete } from 'react-icons/ai'
import  { Dispatch, SetStateAction } from 'react'




interface Iprops {
    peoples: Ipeoples[]
    setPeoples:  Dispatch<SetStateAction<Ipeoples[]>>

}



const List: FC<Iprops> = ({ peoples,setPeoples }) => {

    // const people = (id:number) :Ipeoples[]=>{
    //    peoples.find(p => p.id === id)

    // }

const handelDelete= (id:number):void=>{
    const persons: Ipeoples[]= [...peoples]
    const filteredPersons:Ipeoples[]=  persons.filter(p=>p.id!==id)


    setPeoples(filteredPersons)

}





    const card: JSX.Element[] = peoples.map(p => {
        return <div className='card mb-3 ' key={p.id}>
            <img className='w-25 h-25 align-middle' src={p.imgUrl} alt="" />
            <h1> {p.name}</h1>
            <h2>{p.age}</h2>
            <article>{p.info}</article>
            <AiOutlineUsergroupDelete className='text-danger m-1 ' size={30} 
             onClick = {()=>handelDelete(p.id)}/>

        </div>
    })







    return (
        <div className='container'>

            {card}

        </div>
    )
}


export default List