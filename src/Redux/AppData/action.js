// import axios from "axios"
import { GET_BOOKS_ERROR, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "./actionTypes"


const getBooksRequest= ()=>{
    return {
        type: GET_BOOKS_REQUEST
    }
}
const getBooksSuccess= (payload)=>{
    return {
        type: GET_BOOKS_SUCCESS,
        payload
    }
}
const getBooksError= ()=>{
    return {
        type: GET_BOOKS_ERROR
    }
}

const getBooks= (params)=>(dispatch)=>{
    dispatch(getBooksRequest());
    // return axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`, params)
    // .then((res)=>{
    //     dispatch(getBooksSuccess(res.data))
    // })
    // .catch((error)=>{
    //     dispatch(getBooksError())
    // })
}

export {getBooks};