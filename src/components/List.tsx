import React, { FC } from 'react'

import { Ipeoples } from '../App'
import { AiOutlineUsergroupDelete } from 'react-icons/ai'
import { Dispatch, SetStateAction } from 'react'
import Edit from './Edit'




interface Iprops {
    
    peoples: Ipeoples[]
    setPeoples: Dispatch<SetStateAction<Ipeoples[]>>

}



const List: FC<Iprops> = ({ peoples, setPeoples }) => {



    const handelDelete = (id: number): void => {
        const persons: Ipeoples[] = [...peoples]
        const filteredPersons: Ipeoples[] = persons.filter(p => p.id !== id)


        setPeoples(filteredPersons)

    }





    const card: JSX.Element[] = peoples.map(people => {
        return <div className='card mb-3 ' key={people.id}>
            <img className='w-25 h-25 align-middle' src={people.imgUrl} alt="" />
            <h1> {people.name}</h1>
            <h2>{people.age}</h2>
            <article>{people.info}</article>
            <AiOutlineUsergroupDelete className='text-danger m-1 ' size={30}
                onClick={() => handelDelete(people.id)} />
            <Edit people={people} peoples={peoples} setPeoples={setPeoples} />

        </div>
    })







    return (
        <div className='container'>

            {card}

        </div>
    )
}


export default List