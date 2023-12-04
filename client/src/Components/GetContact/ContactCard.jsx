import React from 'react'
import { useNavigate, NavLink, useParams} from 'react-router-dom';
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
        <NavLink to={`/contact/${Props.id}`}>
        <div className='flex flex-col md:flex-row md:gap-4 justify-center items-start md:items-center mx-8 my-4 border-2  rounded-md p-2'>
        <div className='flex gap-2 justify-center items-center border-b-2 md:border-r-2 md:border-b-0 md:justify-start md:mx-2 w-full'>
            <p className='text-lg'>{Props.name}</p>
            <p className='text-lg'>{Props.lastName}</p>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:justify-center md:gap-4 text-sm justify-start items-start w-full rounded-md my-2'>
            <div className='flex gap-2 md:items-center'>
                <FaPhone size={17}/>
                <p> {Props.phone} </p>
            </div>
            <div className='flex gap-2 md:items-center'>
                <MdEmail size={17}/>
                <p> {Props.email} </p>
            </div>
        </div>
        <div className='flex gap-2 bg-gray-300 w-full h-full p-2'>
            <p>{Props.message}</p>
        </div>
        {/* <div className='flex justify-center self-center mt-2'>
            <button onClick={(event)=>handleDelete(event)}><RiDeleteBin2Fill/></button>
        </div> */}
    </div>
    </NavLink>
  )
}

export default ContactCard