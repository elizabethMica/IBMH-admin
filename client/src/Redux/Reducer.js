import {
    GET_CONTACT,
    GET_CONTACT_DETAIL,
    GET_SERMONS,
    GET_SERMON_DETAIL,
    DELETE_CONTACT,
    DELETE_SERMON,
    UPDATE_SERMON,
    POST_SERMON,
    PAGINADO,
    GET_LAST_THREE
} from './Action-types'

let initialState ={
    sermons: [],
    sermonDetail: [],
    contacts: [],
    contactDetail: {},
    lastThree: [],
    //paginado
    pageNumbers:[],
    paginado:[],
    currentPage: 1,
    pages:[],
    filteredPaginate:[]
}

function rootReducer(state = initialState, {type, payload}){
    const ITEMS_PER_PAGE = 10;

    switch (type) {
        case POST_SERMON:
            return{
                ...state
            }
        case GET_LAST_THREE:
                let aux = payload.slice(-3)
                let lastFirst = aux.toReversed()
                return{
                    ...state,
                    lastThree: lastFirst
        }    
        case GET_SERMONS:
            const reorderSermons = payload.toReversed()
            const totalPagesGet = Math.ceil(reorderSermons.length / ITEMS_PER_PAGE)
            const pagesGet = [...Array(totalPagesGet + 1).keys()].slice(1)

            const indexOfLastP = state.currentPage * ITEMS_PER_PAGE
            const indexOfFirstP = indexOfLastP - ITEMS_PER_PAGE

            const sermonRenderGet = reorderSermons.slice(indexOfFirstP, indexOfLastP)

            return{
                ...state,
                sermons: reorderSermons,
                pages: pagesGet,
                paginado: sermonRenderGet,
                filteredPaginate: reorderSermons
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
        case PAGINADO:
            var current;
            if(isNaN(payload)){
                if(payload === "next"){
                    if(state.currentPage !== state.pages.lenght){ current = state.currentPage +1}
                    else{
                        return {...state}
                    }
                }else if(payload == "end"){
                    if(state.currentPage !== state.pages.length){
                        current = state.pages.length;
                    }else{
                        return{...state}
                    }
                }else if(payload === "prev"){
                    if(state.currentPage !== 1){
                        current = state.currentPage -1
                      }else{
                            return{...state}
                        }
                }else if(payload === "start"){
                    if(state.currentPage !== 1){
                        current = 1
                     }else{
                        return{...state}
                     }
                }
            }else{
                current = payload
            }
            const totalPages = Math.ceil(state.filteredPaginate.length / ITEMS_PER_PAGE)
            const pages = [...Array(totalPages + 1).keys()].slice(1)

            const indexOfLastPage = current * ITEMS_PER_PAGE
            const indexOfFirstPage = indexOfLastPage - ITEMS_PER_PAGE

            const sermonRender = state.filteredPaginate.slice(indexOfFirstPage, indexOfLastPage)
            return{
                ...state,
                currentPage: current,
                paginado: sermonRender,
                pages: pages
            }    
    
        default:
            return{
                ...state
            }
    }
};

export default rootReducer;