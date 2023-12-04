import React from 'react'
import { NavLink} from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactCard(Props) {

  

  return (
       
        <div className='flex flex-col md:flex-row md:gap-4 justify-center items-center  mx-8 my-4 border-2  rounded-md p-2'>
        <div className='flex gap-2 justify-center items-center border-b-2 md:border-r-2 md:border-b-0 md:justify-start md:mx-2 w-full'>
            <p className='text-lg md:text-2xl font-semibold text-gray-500'>{Props.name}</p>
            <p className='text-lg md:text-2xl font-semibold text-gray-500'>{Props.lastName}</p>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:justify-center md:gap-10 text-sm md:text-lg justify-start items-start w-full rounded-md my-2'>
            <div className='flex gap-2 md:items-center md:border-r-2 w-full'>
                <FaPhone size={17}/>
                <p> {Props.phone} </p>
            </div>
            <div className='flex gap-2 md:items-center md:border-r-2 w-full'>
                <MdEmail size={17}/>
                <p> {Props.email} </p>
            </div>
        </div>
        {/* <div className='flex gap-2 bg-gray-300 w-full h-full p-2'>
            <p>{Props.message}</p>
        </div> */}
        <div className='flex md:w-[400px] justify-end md:justify-center items-center md:mr-2  '>
        <NavLink to={`/contact/${Props.id}`}><button className='bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-400'>Ver detalle</button></NavLink>
        </div>
    </div>
    
  )
}

export default ContactCard