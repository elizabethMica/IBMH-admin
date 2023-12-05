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

  return (
    <div className='pt-24 flex flex-col '>
      <div className='flex justify-center items-center'>
        <h1 className='text-2xl font-semibold border-b-2'>CONTACTOS</h1>
      </div>
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
            id={c.id}
            />)
        })
     }
    </div>
  )
}

export default GetContact