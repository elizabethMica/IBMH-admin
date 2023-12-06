import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllSermon, postSermon, clearErrors, setNewErrors } from '../../Redux/Actions'
import {books} from './arrayBooks'
import { GoDotFill } from "react-icons/go";
import { Link, useNavigate } from 'react-router-dom';
import validation from './validation';

function PostSermon() {
    const globalErrors = useSelector(state => state.errors)
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()
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
        setErrors(validation({
            ...value,
            [event.target.name]: event.target.value
        }));
    }

    

    const isSubmitDisabled = Object.keys(errors).length > 0;

    const handleSubmit =(event)=>{
        event.preventDefault();

        dispatch(postSermon(value)).then((postError)=>{
            console.log(postError)
            if(!postError){
                setValue({
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
                dispatch(getAllSermon())
                alert("Sermón subido con éxito")
                navigate("/sermones")
               
            }else{
                dispatch(setNewErrors({type:"postSermon", error: postError?.response?.data}))
                console.log("global", globalErrors)
            }
        });
    };

  return (
    <div className='flex flex-col md:flex-row py-24 md:gap-2'>
        <div className='md:w-1/2 flex flex-col justify-center md:justify-start items-center'>
        <h1 className='text-lg font-semibold underline decoration-gray-500'>SUBIR SERMÓN</h1>

        <form onSubmit={(event)=>handleSubmit(event)} className='w-[300px] md:w-full md:px-6 flex flex-col'>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Titulo</label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Titulo de la predica"
                name="title"
                onChange={handleChange}/>
                <p className="text-red-600" style={{ visibility: errors?.title ? 'visible' : 'hidden' }}>{errors?.title}</p>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Imagen de portada (Link)</label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="URL de la imagen para la portada"
                name="cover"
                onChange={handleChange}/>
                <p className="text-red-600" style={{ visibility: errors?.cover ? 'visible' : 'hidden' }}>{errors?.cover}</p>
            </div>

            

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Fecha </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Fecha de la predicación"
                name="date"
                onChange={handleChange}/>
                <p className="text-red-600" style={{ visibility: errors?.date ? 'visible' : 'hidden' }}>{errors?.date}</p>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Video </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="URL del video de YouTube"
                name="videoYT"
                onChange={handleChange}/>
                <p className="text-red-600" style={{ visibility: errors?.videoYT ? 'visible' : 'hidden' }}>{errors?.videoYT}</p>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Cita </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Ej: Romanos 5:8"
                name="verse"
                onChange={handleChange}/>
                <p className="text-red-600" style={{ visibility: errors?.verse ? 'visible' : 'hidden' }}>{errors?.verse}</p>
            </div>

           
            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Libro </label>
                <select onChange={(event)=> handleChange(event)} name="book" className='bg-gray-300 rounded-md'>
                    {
                        books?.map(b =>{
                            return <option value={b?.name}>{b?.name}</option>
                        })
                    }
                </select>
                <p className="text-red-600" style={{ visibility: errors?.book ? 'visible' : 'hidden' }}>{errors?.book}</p>
                <div className='flex justify-start items-center my-2'>
                <GoDotFill size={10}/>
                <p className=''>{value?.book}</p>
                </div>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Predicador </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Nombre y Apellido"
                name="preacher"
                onChange={handleChange}/>
                <p className="text-red-600" style={{ visibility: errors?.preacher ? 'visible' : 'hidden' }}>{errors?.preacher}</p>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Versiculo </label>
                <textarea
                className='w-full min-h-[150px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Texto del versiculo (sin números)"
                name="verseText"
                onChange={handleChange}/>
                <p className="text-red-600" style={{ visibility: errors?.verseText ? 'visible' : 'hidden' }}>{errors?.verseText}</p>
            </div>

            <div className='w-[300px] md:w-full md:px-6 flex flex-col mb-4'>
                <label className='text-sm md:text-lg text-black'> Descripción (Opcional) </label>
                <textarea 
                className='w-full min-h-[150px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Descripción que no sea el versiculo"
                name="description"
                onChange={handleChange}/>
            </div>


            <div className='w-[300px] md:w-full md:px-6 flex flex-col'>
                <label className='text-sm md:text-lg text-black'> Audio de Spotify (Opcional) </label>
                <input 
                className='w-full h-[45px] border-2  rounded-md text-start'
                type="text" 
                placeholder="Link del audio de Spotify"
                name="spotifyLink"
                onChange={handleChange}/>
            </div>

            <div className='flex justify-center items-center '>
                <button type="submit" className='mt-4 bg-green-500 px-2 rounded-md text-white' disabled={isSubmitDisabled} style={isSubmitDisabled ? {opacity: "0.6", cursor: "not-allowed"}:null}>Subir</button>
            </div>
            <p className="text-red-600" style={{ visibility: globalErrors?.postSermon?.error ? 'visible' : 'hidden' }}>{globalErrors?.postSermon?.error}</p>
        </form>
        </div>


        <div className='md:w-1/2 flex flex-col justify-start items-center pt-8 md:pt-0'>

            {
                value?.cover ? (
                  <div className=' flex flex-col justify-start items-center mb-8'>
                     <h3 className='text-lg font-semibold underline decoration-gray-500 mb-4'>Portada</h3>
                     <img src={value?.cover} className='rounded-lg w-[300px] h-[200px] md:w-[480px] md:h-[300px]'/>
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