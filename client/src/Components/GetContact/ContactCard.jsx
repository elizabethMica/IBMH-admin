import React from 'react'

function ContactCard(Props) {

  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:items-center mx-8 my-4 border-2  rounded-md p-2'>
      <p>{Props.name}</p>
      <p>{Props.lastName}</p>
      <p>{Props.phone}</p>
      <p>{Props.email}</p>
      <p>{Props.message}</p>
    </div>
  )
}

export default ContactCard