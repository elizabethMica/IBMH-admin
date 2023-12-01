import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { updateSermon } from '../../Redux/Actions';

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
    navigate(-1)
  }

  return (
    <div>UpdateSermon</div>
  )
}

export default UpdateSermon