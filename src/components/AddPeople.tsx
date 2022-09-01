import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { Ipeoples } from '../App';

interface Iprops {
    peoples: Ipeoples[],
    setPeoples: Dispatch<SetStateAction<Ipeoples[]>>
}



const AddPeople: FC<Iprops> = ({ peoples, setPeoples }) => {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<string>("");
    const [info, setInfo] = useState<string>("");
    const [imgUrl, setImgUrl] = useState<string>("");
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!name) {
            return alert("name is requaired!")
        }
        if (!age) {
            return alert("age is requaired!")
        }
        if (!info) {
            return alert("bio is requaired!")
        }
        setPeoples(
            [...peoples, {
                id: Math.floor(Math.random()*1000000),
                name,
                age: Number(age),
                imgUrl,
                info

            }]
        )
        console.log(peoples)


        setName("")
        setAge("")
        setImgUrl("")
        setInfo("")
    }



    return (
        <div className='col-md-6 col-lg-6 mx-aouto   '>
            <label htmlFor='form' className="form-label text-aling-left mt-6 "><h4>Add a new person</h4></label>
            <form id='form' className='mb-3' onSubmit={(e) => handleSubmit(e)} >
                <div className="mb-3">

                    <input
                        value={name}
                        placeholder='Name'
                        type="text"
                        className="form-control"
                        id="name"

                        onChange={e => setName(e.target.value)}

                    />


                </div>
                <div className="mb-3">

                    <input
                        value={age}
                        placeholder='Age'
                        type="text"
                        className="form-control"
                        id="age"

                        onChange={e => setAge(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input
                        placeholder='photo address'
                        value={imgUrl}
                        type="text"
                        className="form-control"
                        id="img"
                        onChange={e => setImgUrl(e.target.value)}
                    />

                </div>
                <div className="mb-3">

                    < textarea
                        value={info}
                        className="form-control"
                        id="info"
                        placeholder="Bio"
                        onChange={e => setInfo(e.target.value)}
                    />

                </div>



                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}



export default AddPeople;