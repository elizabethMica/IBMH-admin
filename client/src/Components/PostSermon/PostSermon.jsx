import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getAllSermon, postSermon } from '../../Redux/Actions'
import {books} from './arrayBooks'
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

function PostSermon() {

    const dispatch =useDispatch()
    const [value, setValue] = useState({
        title: "",
        description: "",
        cover: "",
        date: "",
        videoYT: "",
        verse: "",
        book: "",
        preacher: "",
        verseText: "",
        keywords: "",
        spotifyLink: ""
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
        dispatch(postSermon(value))
        alert("Sermon subido con éxito")
        dispatch(getAllSermon())
        setValue("")
    }

  return (
    <div className='flex flex-col md:flex-row py-24 md:gap-2'>
        <div className='md:w-1/2 flex flex-col justify-center md:justify-start items-center'>
        <h1 className='text-lg font-semibold underline decoration-gray-500'>Subir sermón</h1>

        <form onSubmit={(event)=>handleSubmit(event)} className='w-[300px] md:w-full md:px-6 flex flex-col'>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Titulo</label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Titulo de la predica"
                name="title"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Imagen de portada (Link)</label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="URL de la imagen para la portada"
                name="cover"
                onChange={handleChange}/>

            </div>

            

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Fecha </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Fecha de la predicación"
                name="date"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Video </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="URL del video de YouTube"
                name="videoYT"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Cita </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Ej: Romanos 5:8"
                name="verse"
                onChange={handleChange}/>
            </div>

           
            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Libro </label>
                <select onChange={(event)=> handleChange(event)} name="book" className='bg-gray-300 rounded-md'>
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
                type="text" 
                placeholder="Nombre y Apellido"
                name="preacher"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Versiculo </label>
                <textarea
                className='w-full min-h-[150px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Texto del versiculo (sin números)"
                name="verseText"
                onChange={handleChange}/>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-gray-500'> Descripción (Opcional) </label>
                <textarea 
                className='w-full min-h-[150px] border-2  rounded-md text-start'
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
                type="text" 
                placeholder="Link del audio de Spotify"
                name="spotifyLink"
                onChange={handleChange}/>
            </div>

            <div className='flex justify-center items-center '>
                <button type="submit" className='mt-4 bg-green-500 px-2 rounded-md' >Actualizar</button>
            </div>
        </form>
        </div>


        <div className='md:w-1/2 flex flex-col justify-start items-center pt-8 md:pt-0'>

            {
                value.cover ? (
                  <div className=' flex flex-col justify-start items-center mb-8'>
                     <h3 className='text-lg font-semibold underline decoration-gray-500 mb-4'>Portada</h3>
                     <img src={value.cover} className='rounded-lg w-[300px] h-[200px] md:w-[480px] md:h-[300px]'/>
                  </div>
                ) : null
            }
            

            <h3 className='text-lg font-semibold underline decoration-gray-500'>Preview</h3>
            <h3 className="text-lg font-bold text-center md:text-3xl">{value.title}</h3>
            {
                value.verse ? (<div>
                  <h5 className="text-sm md:text-lg text-center mb-2 w-full text-gray-500">{value.verse} | {value.preacher}</h5>
                  </div>
                ): null
            }
           

        <section className="mx-8">
            <div >
                {value.videoYT? (
                        <iframe
                        key={value.verse}
                        src={embed + videoLink }
                        className="w-80 h-48 m-auto md:w-9/12 md:h-[260px]"
                    />    
                    ) : null
                }
            </div>
            
            <div className="mb-10 mt-4 border-t-2 md:mx-28 md:min-w-[300px] flex flex-col justify-center items-center">
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

export default PostSermon