import React from 'react'
import logo from '/logoBlack.png'
import { NavLink } from 'react-router-dom'

function Landing() {
  return (
    <div className='md:pt-14 pt-24 flex justify-center items-center flex-col '>
        <img src={logo} alt="" className='w-1/2 md:w-[450px] h-full'/>
        <div className='flex flex-col justify-center items-center md:flex-row gap-2 flex-wrap mt-4'>
        <NavLink to="/sermones"><button className='bg-[#be8552] my-4 rounded-lg text-lg font-semibold px-2 py-1'>Sermones</button></NavLink>
        <NavLink to="/post-sermon"><button className='bg-[#be8552] my-4 rounded-lg text-lg font-semibold px-2 py-1'>Subir sermón</button></NavLink>
        <NavLink to="/contacts"><button className='bg-[#be8552] my-4 rounded-lg text-lg font-semibold px-2 py-1'>Contactos</button></NavLink>
        </div>
       
    </div>
  )
}

export default Landing