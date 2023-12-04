import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { paginado } from '../../Redux/Actions'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function Paginate() {
    
  const dispatch = useDispatch()
  const pages = useSelector(state => state.pages)
  const currentPage = useSelector(state => state.currentPage)


  const handleValue =(value)=>{
    dispatch(paginado(value)) 
  }

  return (
    <div>
      <div className='flex flex-row justify-center items-center my-6'>
        <button onClick={()=> handleValue("start")}  onAuxClick={window.scrollTo(0, 0)}><MdKeyboardDoubleArrowLeft size={30}/></button>
        <button onClick={()=> handleValue("prev")}  onAuxClick={window.scrollTo(0, 0)}><MdKeyboardArrowLeft size={30}/></button>

        {
          pages.map((n)=>{
            return ( 
              <button className='text-center font-bold gap-2 rounded-full px-3 py-1'
                 style={{color: currentPage === n? "red": "black"}}
                 onClick={()=> handleValue(n)}
                 onAuxClick={window.scrollTo(0, 0)}
                 >{n}
              </button> 
            )
          })
        }

        <button onClick={()=> handleValue("next")}  onAuxClick={window.scrollTo(0, 0)}><MdKeyboardArrowRight size={30}/></button>
        <button onClick={()=> handleValue("end")}  onAuxClick={window.scrollTo(0, 0)}><MdKeyboardDoubleArrowRight size={30}/></button>

      </div>
    </div>
  )
}

export default Paginate