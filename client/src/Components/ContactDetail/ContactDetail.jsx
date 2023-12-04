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
<div className='pt-24'> 
    <div className='flex flex-col md:flex-row justify-center items-start md:items-center mx-8 my-4 border-2  rounded-md p-2'>
    
        <div className='flex gap-2 justify-center items-center border-b-2 w-full'>
        <p className='text-lg'>{detail.name}</p>
        <p className='text-lg'>{detail.lastName}</p>
        </div>
        <div className='flex flex-col text-sm justify-start items-start w-full rounded-md'>
            <div className='flex gap-2'>
                <FaPhone/>
                <p> {detail.phone} </p>
            </div>
            <div className='flex gap-2'>
                <MdEmail/>
                <p> {detail.email} </p>
            </div>
        </div>
        <div className='flex gap-2 bg-gray-300 w-full h-full'>
            <p>{detail.message}</p>
        </div>
        <div className='flex justify-center self-center mt-2'>
            <button onClick={(event)=>handleDelete(event)}><RiDeleteBin2Fill/></button>
        </div>
    </div>
    <div className='flex justify-center items-center mb-20'>
        <button onClick={goBack} className='bg-gray-300 rounded-md px-2 py-1'>Volver</button>
    </div>
</div>
  )
}

export default ContactDetail