import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getAllSermon } from '../../Redux/Actions'
import SermonCard from './SermonCard'
import Paginate from '../Paginate/Paginate'
import { NavLink } from 'react-router-dom'
import { FaPlus} from "react-icons/fa6";

function GetSermon() {

    const dispatch =useDispatch()
    const sermones = useSelector(state => state.paginado)

    

     useEffect(()=>{
      window.scrollTo(0,0)
      dispatch(getAllSermon())
     },[dispatch])

  return (
    <div className='py-24 flex flex-col justify-center items-center'>
        <h1 className='text-2xl md:text-3xl font-semibold border-b-2 '>SERMONES</h1>
        <div className='mx-8 pt-4 gap-4 flex flex-col md:flex-row md:flex-wrap md:justify-center md:items-start'>
          <div className='flex self-start mt-4'>
        <NavLink to="/post-sermon"> 
          <div  className='flex justify-center items-center bg-gray-100  md:my-0 w-72 md:w-64 md:h-70 h-72 border-dashed border-2 border-gray-400 rounded-lg '>
            <button className='text-center'><FaPlus size={30}className='text-gray-400'/></button>
          </div>
        </NavLink>
        </div>
        {sermones?.map(s => {
             return(
              <div className=' flex justify-center items-center md:my-4'>
                <SermonCard
                 key={s.id}
                 id={s.id}
                 title={s.title}
                 verse={s.verse}
                 verseText={s.verseText}
                 preacher={s.preacher}
                 book={s.book}
                 keywords={s.keywords}
                 description={s.description}
                 cover={s.cover}
                 videoYT={s.videoYT}
                 date={s.date} 
                />
                </div>
            )
        })}
        </div>
        <Paginate/>
    </div>
  )
}

export default GetSermon