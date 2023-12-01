import React, { useEffect } from 'react'
import { getAllContact } from '../../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'

function GetContact() {
    const dispatch = useDispatch();
    

    useEffect(()=>{
     dispatch(getAllContact())
    },[dispatch])

    const contacts = useSelector(state => state.contacts);
    console.log(contacts)

  return (
    <div className='pt-24'>
        <h1>CONTACTOS</h1>
     {
        contacts.map(c => {
            return( <p>{c.name}</p>)
        })
     }
    </div>
  )
}

export default GetContact