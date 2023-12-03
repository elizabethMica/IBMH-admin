import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactCard(Props) {

  return (
    <div className='flex flex-col md:flex-row justify-center items-start md:items-center mx-8 my-4 border-2  rounded-md p-2'>
        <div className='flex gap-2 border-b-2 w-full'>
            <p>{Props.name}</p>
            <p>{Props.lastName}</p>
        </div>
        <div className='flex flex-col text-sm justify-start items-start w-full rounded-md'>
            <div className='flex gap-2'>
                <FaPhone/>
                <p> {Props.phone} </p>
            </div>
            <div className='flex gap-2'>
                <MdEmail/>
                <p> {Props.email} </p>
            </div>
            
        </div>
      <p>{Props.message}</p>
    </div>
  )
}

export default ContactCard