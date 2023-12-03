import axios from "axios";
import { POST_SERMON, UPDATE_SERMON, DELETE_SERMON, DELETE_CONTACT, GET_CONTACT, GET_SERMONS, GET_SERMON_DETAIL, GET_CONTACT_DETAIL } from "./Action-types";

export function getAllSermon (){
    return async function(dispatch){
        try {
            const response = (await axios.get('http://localhost:3001/sermon')).data
            dispatch({
                type: GET_SERMONS,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function postSermon (values){
    return async function(dispatch){
        try {
            const headers = {'Content-Type':'application/json'}
            const response = (await axios.post("http://localhost:3001/sermon-post", values, {headers})).data
            dispatch({
               type: POST_SERMON,
               payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function updateSermon (values, id){
    return async function(dispatch){
        try {
            const headers = {'Content-Type':'application/json'}
            const response = (await axios.patch(`http://localhost:3001/sermon-update/${id}` , values, {headers})).data
            dispatch({
                type: UPDATE_SERMON,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function deleteSermon (id){
    return async function(dispatch){
        try {
            const response = (await axios.delete(`http://localhost:3001/sermon-delete/${id}`)).data
            dispatch({
                type: DELETE_SERMON,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function deleteContact (id){
    return async function(dispatch){
     try {
         const response = (await axios.delete(`http://localhost:3001/contact-delete/${id}`)).data
         dispatch({
             type: DELETE_CONTACT,
             payload: response
         })
     } catch (error) {
         throw Error(error.message)
     }
    }
 };

 export function getAllContact (){
    return async function(dispatch){
      try {
        const response = (await axios.get("http://localhost:3001/contact")).data
        dispatch({
            type: GET_CONTACT,
            payload: response
        })
      } catch (error) {
        throw Error(error.message)
      }
    }
};

export function getSermonDetail (id){
    return async function(dispatch){
        try {
            const response = (await axios.get(`http://localhost:3001/sermon/${id}`)).data
            dispatch({
                type: GET_SERMON_DETAIL,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

// export function getContactDetail (id){
//     return async function(dispatch){
//         try {
//             const response = (await axios.get(`http://localhost:3001/contact/${id}`)).data
//             dispatch({
//                 type: GET_CONTACT_DETAIL,
//                 payload: response
//             })
//         } catch (error) {
//             throw Error(error.message)
//         }
//     }
// };