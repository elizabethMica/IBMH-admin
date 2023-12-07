import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateSermon, getAllSermon } from '../../Redux/Actions';
import {books} from '../PostSermon/arrayBooks'
import { GoDotFill } from "react-icons/go";

function UpdateSermon() {

  const dispatch = useDispatch();
  const detail = useSelector(state => state.sermonDetail)
  const {id} = useParams();
  const navigate = useNavigate();

  
  const [value, setValue] = useState({
      title: detail.title,
      description: detail.description,
      cover: detail.cover,
      date: detail.date,
      videoYT: detail.videoYT,
      verse: detail.verse,
      book: detail.book,
      preacher: detail.preacher,
      verseText: detail.verseText,
      keywords: detail.keywords,
      spotifyLink: detail.spotifyLink
    })
    
    const embed = "https://www.youtube.com/embed/"
    const videoLink = value?.videoYT?.split("/")[3]


  const handleChange =(event)=>{
    event.preventDefault();
     setValue({
      ...value,
      [event.target.name] : event.target.value
     })
  }

 

  const handleSubmit =(event)=>{
    event.preventDefault();
    dispatch(updateSermon(value, id))
    alert("Sermon actualizado con éxito")
    dispatch(getAllSermon())
    navigate("/sermones")
  }

  return (
    <div className='flex flex-col md:flex-row py-24 md:gap-2'>
        <div className='md:w-1/2 flex flex-col justify-center md:justify-start items-center'>
        <h1 className='text-lg font-semibold underline decoration-gray-500'>ACTUALIZAR SERMÓN</h1>

        <form onSubmit={(event)=>handleSubmit(event)} className='w-[300px] md:w-full md:px-6 flex flex-col'>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Titulo</label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                value={value.title}
                type="text" 
                placeholder="Titulo de la predica"
                name="title"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Imagen de portada (Link)</label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                value={value.cover}
                type="text" 
                placeholder="URL de la imagen para la portada"
                name="cover"
                onChange={handleChange}/>

            </div>

            

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Fecha </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                value={value.date}
                type="text" 
                placeholder="Fecha de la predicación"
                name="date"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Video </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                value={value.videoYT}
                type="text" 
                placeholder="URL del video de YouTube"
                name="videoYT"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Cita </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                value={value.verse}
                type="text" 
                placeholder="Ej: Romanos 5:8"
                name="verse"
                onChange={handleChange}/>
            </div>

           
            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Libro </label>
                <select onClick={(event)=> handleChange(event)} name="book" className='bg-gray-300 rounded-md'>
                    {
                        books?.map(b =>{
                            return <option value={b?.name}>{b?.name}</option>
                        })
                    }
                </select>
                <div className='flex justify-start items-center my-2'>
                <GoDotFill size={10}/>
                <p className=''>{value?.book}</p>
                </div>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Predicador </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                value={value.preacher}
                type="text" 
                placeholder="Nombre y Apellido"
                name="preacher"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Versiculo </label>
                <textarea
                className='w-full min-h-[150px] border-2  rounded-md text-start'
                value={value.verseText}
                type="text" 
                placeholder="Texto del versiculo (sin números)"
                name="verseText"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Descripción (Opcional) </label>
                <textarea 
                className='w-full min-h-[150px] border-2  rounded-md text-start'
                value={value.description}
                type="text" 
                placeholder="Descripción (No versiculo)"
                name="description"
                onChange={handleChange}/>
            </div>

        {/* //manejar distinto, es un array
            <div>
                <label> Palabras claves (Opcional) </label>
                <input 
                type="text" 
                placeholder="Ej: Atributos de Dios"
                name="keywords"
                onChange={handleChange}/>
            </div> */}

            <div className='w-[300px] md:w-full md:px-6 flex flex-col'>
                <label className='text-sm md:text-lg text-gray-500'> Audio de Spotify (Opcional) </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                value={value.spotifyLink}
                type="text" 
                placeholder="Link del audio de Spotify"
                name="spotifyLink"
                onChange={handleChange}/>
            </div>

            <div className='flex justify-center items-center '>
                <button type="submit" className='mt-4 bg-green-500 px-2 rounded-md' >Actualizar</button>
            </div>
        </form>
                <NavLink to={`/sermon/${id}`}><button  className='mt-4 bg-gray-300 px-2 rounded-md' >Cancelar</button></NavLink>
        </div>


        <div className='md:w-1/2 flex flex-col justify-start items-center pt-8 md:pt-0'>

        <div className=' flex flex-col justify-start items-center mb-8'>
            <h3 className='text-lg font-semibold underline decoration-gray-500 mb-4'>Portada</h3>
            <img src={value.cover} className='rounded-lg w-[300px] h-[200px] md:w-[480px] md:h-[300px]'/>
        </div>

            <h3 className='text-lg font-semibold underline decoration-gray-500'>Preview</h3>
            <h3 className="text-lg font-bold text-center md:text-3xl">{value.title}</h3>
            <h5 className="text-sm md:text-lg text-center mb-2 w-full text-gray-500">{value.verse} | {value.preacher}</h5>

        <section className="mx-8">
            <div >
                {value.videoYT? (
                        <iframe
                        key={detail?.id}
                        src={embed + videoLink }
                        className="w-80 h-48 m-auto md:w-9/12 md:h-[260px]"
                    />    
                    ) : <p>El video no es compatible con el celular. Por favor visita el canal de Youtube <Link target="_blank" to="https://www.youtube.com/@ibmhurlingham879" style={{color:"blue"}}>IBM Hurlingham</Link></p> 
                }
            </div>
            <div className="mb-10 mt-4 border-t-2 md:mx-28">
            <p className="mt-2 font-semibold text-sm md:text-lg ">Versículo</p>
            <p className="mt-2 text-justify md:text-start md:text-xl">{value.verseText}</p>
            </div>
            {
            value.description ? ( <div className="mb-10 mt-4 border-t-2 md:mx-28">
            <p className="mt-2 font-semibold text-sm md:text-lg ">Descripción</p>
            <p className="mt-2 text-justify md:text-start md:text-xl">{value.description}</p>
            </div>) : null
            }
        </section>
        
        </div>
    </div>
  )
}

export default UpdateSermon