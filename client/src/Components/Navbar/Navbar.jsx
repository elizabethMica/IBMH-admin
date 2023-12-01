import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import bookLogo from '/logoBlack.png'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaXmark} from 'react-icons/fa6'

function Navbar() {

    let Links =[
        {name: 'Ver sermones', link: "/sermones"},
        {name: 'Subir sermón', link: "/post-sermon"},
        {name: 'Ver contactos', link: "/contacts"},
    ]

    const [isOpen, setIsOpen] = useState(false)
  return (
    
        <nav className='w-full fixed z-10 top-0 left-0'>
          <div className='md:px-10 px-7 md:flex justify-between items-center bg-[#ffffff]'>
             {/* logo section */}
            <div className='flex flex-row cursor-pointer items-center gap-1'>
              <NavLink to="/sermones">
                <img
                  src={bookLogo}
                  width="50"
                  height="50"
                  title="Iglesia Bautista Misionera Hurlingham"
                  alt="Iglesia Bautista Misionera Hurlingham"
                  className='w-20 h-w-20'
                  /> 
              </NavLink>
              <NavLink to="/sermones"><h3 className='font-semibold text-xl'>Administration</h3></NavLink>
              </div>
    
                <div onClick={()=> setIsOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                      isOpen ? 
                      <FaXmark size={20} color={'#000'}/>
                      :
                      <AiOutlineMenu size={20} color={'#000'}/>
                    }
                 </div>
    
                  <ul className={`md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-[#fff] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-14' : 'top-[-490px]'}`}>
                  {
                    Links.map(l =>(
                      
                      <li key={l.name} className=' my-7 md:my-0 md:ml-8 text-[#000000]' onClick={()=> setIsOpen(!isOpen)} ><NavLink className='hover:border-b-2 hover:border-[#000000] text-lg' to={l.link}>{l.name}</NavLink></li>
                    ))
                  }
                  </ul>
            </div>
        </nav>
  )
}

export default Navbar