import {
    GET_CONTACT,
    GET_CONTACT_DETAIL,
    GET_SERMONS,
    GET_SERMON_DETAIL,
    DELETE_CONTACT,
    DELETE_SERMON,
    UPDATE_SERMON,
    POST_SERMON,
} from './Action-types'

let initialState ={
    sermons: [],
    sermonDetail: [],
    contacts: [],
    contactDetail: {}
}

function rootReducer(state = initialState, {type, payload}){
    switch (type) {
        case POST_SERMON:
            return{
                ...state
            }
        case GET_SERMONS:
            return{
                ...state,
                sermons: payload.toReversed()
            }
        case GET_CONTACT:
            return{
                ...state,
                contacts: payload.toReversed()
            }
        case GET_SERMON_DETAIL:
            return{
                ...state,
                sermonDetail: payload
            }
        case GET_CONTACT_DETAIL: 
            return{
                ...state,
                contactDetail: payload
            }               
    
        default:
            return{
                ...state
            }
    }
};

export default rootReducer;