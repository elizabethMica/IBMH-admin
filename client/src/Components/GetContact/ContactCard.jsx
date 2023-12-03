import React from 'react'
import { useNavigate, NavLink} from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiDeleteBin2Fill} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/Actions';

function ContactCard(Props) {

    const dispatch = useDispatch();
    // const id = Props.id
    // const handleDelete =(event)=>{
    //     event.preventDefault()
    //     let confirmación = confirm("Desea borrar este contacto?")
    //     if(confirmación === true){
    //         dispatch(deleteContact(id))
    //     }
    //   };

  return (
        <div className='flex flex-col md:flex-row justify-center items-start md:items-center mx-8 my-4 border-2  rounded-md p-2'>
        <div className='flex gap-2 justify-center items-center border-b-2 w-full'>
            <p className='text-lg'>{Props.name}</p>
            <p className='text-lg'>{Props.lastName}</p>
        </div>
        <div className='flex flex-col text-sm justify-start items-start w-full rounded-md'>
            <div className='flex gap-2'>
                <FaPhone/>
                <p> {Props.phone} </p>
            </div>
            <div className='flex gap-2'>
                <MdEmail/>
                <p> {Props.email} </p>
            </div>
        </div>
        <div className='flex gap-2 bg-gray-300 w-full h-full'>
            <p>{Props.message}</p>
        </div>
        {/* <div className='flex justify-center self-center mt-2'>
            <button onClick={(event)=>handleDelete(event)}><RiDeleteBin2Fill/></button>
        </div> */}
    </div>
  )
}

export default ContactCard