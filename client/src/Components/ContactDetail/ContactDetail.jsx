// import React, {useEffect} from 'react'
// import { useNavigate, NavLink, useParams} from 'react-router-dom';
// import { FaPhone } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { RiDeleteBin2Fill} from 'react-icons/ri'
// import { useDispatch, useSelector} from 'react-redux';
// import { deleteContact, getContactDetail } from '../../Redux/Actions';
// function ContactDetail() {
// const {id} = useParams()
// const detail = useSelector(state => state.contactDetail)
// const dispatch = useDispatch()

// useEffect(()=>{
//   dispatch(getContactDetail(id))
// },[])
// return (
//     <div> <div className='flex flex-col md:flex-row justify-center items-start md:items-center mx-8 my-4 border-2  rounded-md p-2'>
//     <div className='flex gap-2 justify-center items-center border-b-2 w-full'>
//         <p className='text-lg'>{detail.name}</p>
//         <p className='text-lg'>{detail.lastName}</p>
//     </div>
//     <div className='flex flex-col text-sm justify-start items-start w-full rounded-md'>
//         <div className='flex gap-2'>
//             <FaPhone/>
//             <p> {detail.phone} </p>
//         </div>
//         <div className='flex gap-2'>
//             <MdEmail/>
//             <p> {detail.email} </p>
//         </div>
//     </div>
//     <div className='flex gap-2 bg-gray-300 w-full h-full'>
//         <p>{detail.message}</p>
//     </div>
//     <div className='flex justify-center self-center mt-2'>
//         {/* <button onClick={(event)=>handleDelete(event)}><RiDeleteBin2Fill/></button> */}
//     </div>
// </div></div>
//   )
// }

// export default ContactDetail