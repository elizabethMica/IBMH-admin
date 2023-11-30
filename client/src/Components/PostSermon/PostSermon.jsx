import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { postSermon } from '../../Redux/Actions'

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
        setValue("")
    }

  return (
    <div>
        <h1>PostSermon</h1>

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
                <label> Descripción (Opcional) </label>
                <textarea 
                type="text" 
                placeholder="Descripción (No versiculo)"
                name="description"
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

           //hacer select
            <div>
                <label> Libro </label>
                <input 
                type="text" 
                placeholder="Libro"
                name="book"
                onChange={handleChange}/>
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

        //manejar distinto, es un array
            <div>
                <label> Palabras claves (Opcional) </label>
                <input 
                type="text" 
                placeholder="Ej: Atributos de Dios"
                name="keywords"
                onChange={handleChange}/>
            </div>

            <div>
                <label> Audio de Spotify (Opcional) </label>
                <input 
                type="text" 
                placeholder="Link del audio de Spotify"
                name="spotifyLink"
                onChange={handleChange}/>
            </div>
        </form>
    </div>
  )
}

export default PostSermon