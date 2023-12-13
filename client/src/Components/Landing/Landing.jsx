import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import logo from '/logoBlack.png'
import { NavLink } from 'react-router-dom'
import {getAllContact, getAllSermon, getLastThree} from '../../Redux/Actions'
import SermonCard from '../GetSermon/SermonCard'
import { FaPlus} from "react-icons/fa6";
import ContactCard from '../GetContact/ContactCard'

function Landing() {

  const dispatch = useDispatch()

  useEffect(()=>{
   window.scrollTo(0,0)
   dispatch(getLastThree())
   dispatch(getAllContact())
  },[])

  const lastThree = useSelector(state => state.lastThree)
  const contacts = useSelector(state => state.contactFour)
  const contactFour = contacts.toReversed()

  return (
    <div className='pt-24 md:mx-14 mx-8 pb-16'>
        <div className='flex justify-between items-center mb-4 '>
          <h3 className='text-xl font-semibold '>SERMONES</h3>
          <NavLink to="/sermones"><button className=' rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4 hover:text-white'>Ver más sermones</button></NavLink>
        </div>
        <div  className='flex flex-col justify-center items-center md:items-start md:flex-row md:flex-wrap md:gap-10'>
          <NavLink to="/post-sermon"> <div  className='flex justify-center items-center bg-gray-100 text-center my-6 md:my-0 w-72 md:w-64 md:h-70 h-72 border-dashed border-2 border-gray-400 rounded-lg'><button className='text-center'><FaPlus size={30}className='text-gray-400'/></button></div></NavLink>
          {lastThree?.map(s =>{
            return(
              <SermonCard
                key={s.id}
                id={s.id}
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
          contactFour.length > 0 ? (
        <div className='mt-6'>
          <div className='flex justify-between items-center mb-4'>
            <h3 className='text-xl font-semibold '>CONTACTOS</h3>
            <NavLink to="/contacts"><button className=' rounded-lg bg-[#be8552] border-2 border-[#be8552] px-4 my-4 hover:text-white'>Ver más contactos</button></NavLink>
          </div>
          <div>
          {contactFour?.map(s =>{
            return(
              <ContactCard
                key={s.id}
                id={s.id}
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