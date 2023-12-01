import React, { useEffect, useState } from 'react'
import {deleteSermon, getSermonDetail, updateSermon } from '../../Redux/Actions'
import { useSelector, useDispatch } from "react-redux"
import { NavLink, Link, useParams, useNavigate } from 'react-router-dom';
import { RiEdit2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import {books} from '../PostSermon/arrayBooks'

function SermonDetail() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo(0, 0)
        dispatch(getSermonDetail(id))
      },[id])

      const detail = useSelector(state => state.sermonDetail)
  
      const embed = "https://www.youtube.com/embed/"
      const videoLink = detail?.videoYT?.split("/")[3]

      const handleDelete =(event)=>{
        event.preventDefault()
        let confirmación = confirm("Desea borrar este sermón?")
        if(confirmación === true){
            dispatch(deleteSermon(id))
            navigate('/sermones')
        }
      };


  return (
    <div className="pt-24" >
        <div className='flex justify-center items-center gap-2'>
         <NavLink to={`/update-sermon/${id}`}><button className='border-2 rounded-md p-1'><RiEdit2Fill size={20}/></button></NavLink>
         <button className='border-2  rounded-md p-1 hover:bg-red-500' onClick={handleDelete}><RiDeleteBin2Fill size={20}/></button>
        </div>
      <div>
        <h3 className="text-lg font-bold text-center md:text-3xl">{detail?.title}</h3>
        <h5 className="text-sm md:text-lg text-center mb-2 w-full text-gray-500">{detail?.verse} | {detail?.preacher}</h5>
      </div>
          
      <section className="mx-8">
        <div >
            {detail?.videoYT? (
                    <iframe
                    key={detail?.id}
                    src={embed + videoLink }
                    className="w-80 h-48 m-auto md:w-9/12 md:h-[560px]"
                  />    
                ) : <p>El video no es compatible con el celular. Por favor visita el canal de Youtube <Link target="_blank" to="https://www.youtube.com/@ibmhurlingham879" style={{color:"blue"}}>IBM Hurlingham</Link></p> 
            }
        </div>
        <div className="mb-10 mt-4 border-t-2 md:mx-28">
        <p className="mt-2 font-semibold text-sm md:text-lg ">Versículo</p>
        <p className="mt-2 text-justify md:text-start md:text-xl">{detail?.verseText}</p>
        </div>
        {
          detail?.description ? ( <div className="mb-10 mt-4 border-t-2 md:mx-28">
          <p className="mt-2 font-semibold text-sm md:text-lg ">Descripción</p>
          <p className="mt-2 text-justify md:text-start md:text-xl">{detail?.description}</p>
          </div>) : null
        }
        </section>
        </div>
  )
}

export default SermonDetail