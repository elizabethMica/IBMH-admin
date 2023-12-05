import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import logo from '/logoBlack.png'
import { NavLink } from 'react-router-dom'
import {getAllContact, getAllSermon} from '../../Redux/Actions'
import SermonCard from '../GetSermon/SermonCard'
import { FaPlus} from "react-icons/fa6";
import ContactCard from '../GetContact/ContactCard'

function Landing() {

  const dispatch = useDispatch()

  useEffect(()=>{
   window.scrollTo(0,0)
   dispatch(getAllSermon())
   dispatch(getAllContact())
  },[])

  const sermons = useSelector(state => state.sermons)
  const contacts = useSelector(state => state.contacts)
  const lastFour = contacts.slice(-4)
  const lastThree = sermons.slice(-3)
  return (
    // <div className='md:pt-14 pt-24 pb-14 flex justify-center items-center flex-col '>
    //     <img src={logo} alt="" className='w-1/2 md:w-[450px] h-full'/>
    //     <div className='flex flex-col justify-center items-center md:flex-row gap-2 flex-wrap mt-4'>
    //     <NavLink to="/sermones"><button className='bg-[#be8552] my-4 rounded-lg text-lg font-semibold px-2 py-1'>Sermones</button></NavLink>
    //     <NavLink to="/post-sermon"><button className='bg-[#be8552] my-4 rounded-lg text-lg font-semibold px-2 py-1'>Subir sermón</button></NavLink>
    //     <NavLink to="/contacts"><button className='bg-[#be8552] my-4 rounded-lg text-lg font-semibold px-2 py-1'>Contactos</button></NavLink>
    //     </div>
       
    // </div>
    <div className='pt-24 md:mx-14 mx-8 pb-16'>
        <div className='flex justify-between items-center mb-4 '>
          <h3 className='text-xl font-semibold '>Sermones</h3>
          <NavLink><button className=' rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4'>Ver más sermones</button></NavLink>
        </div>
        <div  className='flex flex-col justify-center items-center md:items-start md:flex-row md:flex-wrap md:gap-10'>
          <NavLink to="/post-sermon"> <div  className='flex justify-center items-center bg-gray-100 text-center my-6 md:my-0 w-72 md:w-64 md:h-64 h-72 border-dashed border-2 border-gray-400 rounded-lg'><button className='text-center'><FaPlus size={30}className='text-gray-400'/></button></div></NavLink>
          {lastThree?.map(s =>{
            return(
              <SermonCard
                key={s.id}
                title={s.title}
                date={s.date}
                verse={s.verse}
                description={s.description}
                cover={s.cover}
              />
            )
          })}
        </div>
        {
          lastFour.length > 0 ? (
        <div className='mt-6'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-xl font-semibold '>Contactos</h3>
            <NavLink><button className=' rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4'>Ver más contactos</button></NavLink>
          </div>
          <div>
          {lastFour?.map(s =>{
            return(
              <ContactCard
                key={s.id}
                name={s.name}
                lastName={s.lastName}
                phone={s.phone}
                email={s.email}
                message={s.message}
              />
            )
          })}
          </div>
        </div>
          ) : null
        }
    </div>
  )
}

export default Landing