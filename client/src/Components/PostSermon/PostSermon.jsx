import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { getAllSermon, postSermon } from '../../Redux/Actions'
import {books} from './arrayBooks'

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
    <div>
        <h1>Subir sermón</h1>

        <form onSubmit={(event)=>handleSubmit(event)}>
            <div>
                <label> Titulo </label>
                <input 
                type="text" 
                placeholder="Titulo de la predica"
                name="title"
                onChange={handleChange}/>
            </div>

            <div>
                <label> Imagen </label>
                <input 
                type="text" 
                placeholder="URL de la imagen para la portada"
                name="cover"
                onChange={handleChange}/>
            </div>

            <div>
                <label> Fecha </label>
                <input 
                type="text" 
                placeholder="Fecha de la predicación"
                name="date"
                onChange={handleChange}/>
            </div>

            <div>
                <label> Video </label>
                <input 
                type="text" 
                placeholder="URL del video de YouTube"
                name="videoYT"
                onChange={handleChange}/>
            </div>

            <div>
                <label> Cita </label>
                <input 
                type="text" 
                placeholder="Ej: Romanos 5:8"
                name="verse"
                onChange={handleChange}/>
            </div>

           
            <div>
                <label> Libro </label>
                <select onChange={(event)=> handleChange(event)} name="book">
                    {
                        books?.map(b =>{
                            return <option value={b?.name}>{b?.name}</option>
                        })
                    }
                </select>
                <p>{value?.book}</p>
            </div>

            <div>
                <label> Predicador </label>
                <input 
                type="text" 
                placeholder="Nombre y Apellido"
                name="preacher"
                onChange={handleChange}/>
            </div>

            <div>
                <label> Versiculo </label>
                <input 
                type="text" 
                placeholder="Texto del versiculo (sin números)"
                name="verseText"
                onChange={handleChange}/>
            </div>

            <div>
                <label> Descripción (Opcional) </label>
                <textarea 
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

            <div>
                <label> Audio de Spotify (Opcional) </label>
                <input 
                type="text" 
                placeholder="Link del audio de Spotify"
                name="spotifyLink"
                onChange={handleChange}/>
            </div>

            <div><button type="submit" >Subir</button></div>
        </form>
    </div>
  )
}

export default PostSermon