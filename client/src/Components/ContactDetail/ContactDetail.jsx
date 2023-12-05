import React, {useEffect} from 'react'
import { useNavigate, NavLink, useParams} from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiDeleteBin2Fill} from 'react-icons/ri'
import { useDispatch, useSelector} from 'react-redux';
import { deleteContact, getAllContact, getContactDetail } from '../../Redux/Actions';
function ContactDetail() {
const {id} = useParams()
const dispatch = useDispatch()
const navigate = useNavigate()

useEffect(()=>{
    dispatch(getContactDetail(id))
},[])

const handleDelete =(event)=>{
     event.preventDefault()
     let confirmación = confirm("Desea borrar este contacto?")
     if(confirmación === true){
            dispatch(deleteContact(id))
            dispatch(getAllContact())
            navigate("/contacts")
     }
};

const goBack =()=>{
    navigate(-1)
}

const detail = useSelector(state => state.contactDetail)

return (
<div className='pt-32 md:mx-16 max-h-screen'> 
    <div className='flex flex-col  justify-center items-start md:items-center mx-8 my-4 border-2  rounded-md p-2'>
    
        <div className='flex gap-2 justify-center items-center border-b-2  w-full'>
        <p className='text-lg md:text-2xl'>{detail.name}</p>
        <p className='text-lg md:text-2xl'>{detail.lastName}</p>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:justify-center md:gap-4 text-sm justify-start items-start w-full rounded-md my-2 md:my-4 md:text-lg'>
            <div  className='flex gap-2 md:items-center'>
                <FaPhone size={17}/>
                <p> {detail.phone} </p>
            </div>
            <div  className='flex gap-2 md:items-center'>
                <MdEmail size={17}/>
                <p> {detail.email} </p>
            </div>
        </div>
        <div className='flex gap-2 bg-gray-300 w-full h-full py-2 px-4'>
            <p>{detail.message}</p>
        </div>
        
    </div>
    <div className='flex justify-center items-center mb-20 gap-2 '>
        <button onClick={goBack} className='bg-gray-300 rounded-md px-2 py-1'>Volver</button>
        <button onClick={(event)=>handleDelete(event)} className='hover:bg-red-600 px-2 py-1  rounded-md border-2 hover:border-red-600'>Borrar</button>
    </div>
</div>
  )
}

export default ContactDetail