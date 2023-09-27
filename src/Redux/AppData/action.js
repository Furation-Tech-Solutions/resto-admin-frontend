// import axios from "axios"
import { GET_PAYMENTHISTORY_ERROR, GET_PAYMENTHISTORY_REQUEST, GET_PAYMENTHISTORY_SUCCESS, GET_TOTALUNIQUEUSER_ERROR, GET_TOTALUNIQUEUSER_SUCCESS, GET_UNIQUEUSER_ERROR, GET_UNIQUEUSER_SUCCESS, GET_WEEKLYUNIQUEUSER_ERROR, GET_WEEKLYUNIQUEUSER_SUCCESS } from "./actionTypes"


const getPaymentHistoryRequest= ()=>{
    return {
        type: GET_PAYMENTHISTORY_REQUEST
    }
}
const getPaymentHistorySuccess= (payload)=>{
    return {
        type: GET_PAYMENTHISTORY_SUCCESS,
        payload
    }
}
const getPaymentHistoryError= ()=>{
    return {
        type: GET_PAYMENTHISTORY_ERROR
    }
}

const getUniqueUserSuccess= ()=>{
    return {
        type: GET_UNIQUEUSER_SUCCESS
    }
}
const getUniqueUserError= ()=>{
    return {
        type: GET_UNIQUEUSER_ERROR
    }
}

const getTotalUniqueUserSuccess= ()=>{
    return {
        type: GET_TOTALUNIQUEUSER_SUCCESS
    }
}
const getTotalUniqueUserError= ()=>{
    return {
        type: GET_TOTALUNIQUEUSER_ERROR
    }
}

const getWeeklyUniqueUserSuccess= ()=>{
    return {
        type: GET_WEEKLYUNIQUEUSER_SUCCESS
    }
}
const getWeeklyUniqueUserError= ()=>{
    return {
        type: GET_WEEKLYUNIQUEUSER_ERROR
    }
}

const getPaymentHistory= (params)=>(dispatch)=>{
    dispatch(getPaymentHistoryRequest());
    return axios.get(`https://restaurant-bot-admin.onrender.com/api/v1/payment`, params)
    .then((res)=>{
        dispatch(getPaymentHistorySuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getPaymentHistoryError())
    })
}

const getUniqueUser= ()=>(dispatch)=>{
    return axios.get(`https://restaurant-bot-admin.onrender.com/api/v1/payment`)
    .then((res)=>{
        dispatch(getUniqueUserSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getUniqueUserError())
    })
}

const getTotalUniqueUser= ()=>(dispatch)=>{
    return axios.get(`https://restaurant-bot-admin.onrender.com/api/v1/payment`)
    .then((res)=>{
        dispatch(getTotalUniqueUserSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getTotalUniqueUserError())
    })
}

const getWeeklyUniqueUser= ()=>(dispatch)=>{
    return axios.get(`https://restaurant-bot-admin.onrender.com/api/v1/payment`)
    .then((res)=>{
        dispatch(getWeeklyUniqueUserSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getWeeklyUniqueUserError())
    })
}

export {getPaymentHistory, getUniqueUser, getTotalUniqueUser, getWeeklyUniqueUser};