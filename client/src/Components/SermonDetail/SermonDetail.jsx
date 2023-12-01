import React from 'react'
import {getSermonDetail} from '../../Redux/Actions'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import { NavLink, Link, useParams } from 'react-router-dom';

function SermonDetail() {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        window.scrollTo(0, 0)
        dispatch(getSermonDetail(id))
      },[id])

      const detail = useSelector(state => state.sermonDetail)
  
      const embed = "https://www.youtube.com/embed/"
      const videoLink = detail?.videoYT?.split("/")[3]
  return (
    <div className="pt-24" >
      <div className=" ">
        <h3 className="text-lg font-bold text-center md:text-3xl">{detail?.title}</h3>
        <h5 className="text-sm md:text-lg text-center mb-2 w-full text-red-700">{detail?.verse}</h5>
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