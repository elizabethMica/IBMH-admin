import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getAllSermon } from '../../Redux/Actions'

function GetSermon() {

    const dispatch =useDispatch()
    const sermones = useSelector(state => state.sermons)
     useEffect(()=>{
      dispatch(getAllSermon())
     },[dispatch])

  return (
    <div>
        <h1>Sermones</h1>
        {sermones?.map(s => {
            return <div>{s.title}</div>
        })}
    </div>
  )
}

export default GetSermon