import axios from "axios";
import { POST_SERMON, 
    UPDATE_SERMON, 
    DELETE_SERMON, 
    DELETE_CONTACT, 
    GET_CONTACT, 
    GET_SERMONS,
    GET_SERMON_DETAIL, 
    GET_CONTACT_DETAIL, 
    PAGINADO,
    GET_LAST_THREE,
    ERRORS,
    CLEAR_ERRORS 
 } from "./Action-types";

export function getAllSermon (){
    return async function(dispatch){
        try {
            const response = (await axios.get('https://ibmhurlingham.onrender.com/sermon')).data
            dispatch({
                type: GET_SERMONS,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function postSermon (value){
    console.log(value)
    return async function(dispatch){
        try {
            const headers = {'Content-Type':'application/json'}
            const response = (await axios.post("https://ibmhurlingham.onrender.com/sermon-post", value, {headers})).data
            dispatch({
               type: POST_SERMON,
               payload: response
            })
        } catch (error) {
            console.log("action", error.message)
            throw Error(error.message)
        }
    }
};

export function updateSermon (values, id){
    return async function(dispatch){
        try {
            const headers = {'Content-Type':'application/json'}
            const response = (await axios.patch(`https://ibmhurlingham.onrender.com/sermon-update/${id}` , values, {headers})).data
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
            const response = (await axios.delete(`https://ibmhurlingham.onrender.com/sermon-delete/${id}`)).data
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
         const response = (await axios.delete(`https://ibmhurlingham.onrender.com/contact-delete/${id}`)).data
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
        const response = (await axios.get("https://ibmhurlingham.onrender.com/contact")).data
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
            const response = (await axios.get(`https://ibmhurlingham.onrender.com/sermon/${id}`)).data
            dispatch({
                type: GET_SERMON_DETAIL,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function getContactDetail (id){
    return async function(dispatch){
        try {
            const response = (await axios.get(`https://ibmhurlingham.onrender.com/contact/${id}`)).data
            dispatch({
                type: GET_CONTACT_DETAIL,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function paginado(value){
    return async function(dispatch){
     dispatch({
         type: PAGINADO,
         payload: value
     })
    }
 };

 export function getLastThree (){
    return async function(dispatch){
        try{
            const response =(await axios.get('https://ibmhurlingham.onrender.com/sermon')).data
            dispatch({
                type: GET_LAST_THREE,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
          }
    }
};


export function setNewErrors(obj){
    return async function(dispatch){
        dispatch({
            type: ERRORS,
            payload: obj
        })
    }
};



export function clearErrors(){
    return async function(dispatch){
        dispatch({
            type: CLEAR_ERRORS
        })
    }
};