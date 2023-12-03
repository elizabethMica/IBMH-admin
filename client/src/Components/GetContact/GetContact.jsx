import React, { useEffect } from 'react'
import { getAllContact } from '../../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux'
import ContactCard from './ContactCard';

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
            return( 
            <ContactCard
            name={c.name}
            lastName={c.lastName}
            message={c.message}
            phone={c.phone}
            email={c.email}
            key={c.id}
            
            />)
        })
     }
    </div>
  )
}

export default GetContact