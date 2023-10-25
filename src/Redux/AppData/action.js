// import axios from "axios"
import { GET_MONTHLYUNIQUEUSER_ERROR, GET_MONTHLYUNIQUEUSER_SUCCESS, GET_PAYMENTHISTORY_ERROR, GET_PAYMENTHISTORY_REQUEST, GET_PAYMENTHISTORY_SUCCESS, GET_TOTALUNIQUEUSER_ERROR, GET_TOTALUNIQUEUSER_SUCCESS, GET_UNIQUEUSER_ERROR, GET_UNIQUEUSER_SUCCESS, GET_WEEKLYUNIQUEUSER_ERROR, GET_WEEKLYUNIQUEUSER_SUCCESS } from "./actionTypes"
import axios from "axios";

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

const getUniqueUserSuccess= (payload)=>{
    return {
        type: GET_UNIQUEUSER_SUCCESS,
        payload
    }
}
const getUniqueUserError= ()=>{
    return {
        type: GET_UNIQUEUSER_ERROR
    }
}

const getTotalUniqueUserSuccess= (payload)=>{
    return {
        type: GET_TOTALUNIQUEUSER_SUCCESS,
        payload
    }
}
const getTotalUniqueUserError= ()=>{
    return {
        type: GET_TOTALUNIQUEUSER_ERROR
    }
}

const getWeeklyUniqueUserSuccess= (payload)=>{
    return {
        type: GET_WEEKLYUNIQUEUSER_SUCCESS,
        payload
    }
}
const getWeeklyUniqueUserError= ()=>{
    return {
        type: GET_WEEKLYUNIQUEUSER_ERROR
    }
}

const getMonthlyUniqueUserSuccess= (payload)=>{
    return {
        type: GET_MONTHLYUNIQUEUSER_SUCCESS,
        payload
    }
}
const getMonthlyUniqueUserError= ()=>{
    return {
        type: GET_MONTHLYUNIQUEUSER_ERROR
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
    return axios.get(`https://what-bot.furation.tech/dailyuser`)
    .then((res)=>{
        dispatch(getUniqueUserSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getUniqueUserError())
    })
}

const getTotalUniqueUser= ()=>(dispatch)=>{
    return axios.get(`https://what-bot.furation.tech/totaluser`)
    .then((res)=>{
        dispatch(getTotalUniqueUserSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getTotalUniqueUserError())
    })
}

const getWeeklyUniqueUser= ()=>(dispatch)=>{
    return axios.get(`https://what-bot.furation.tech/weeklyuser`)
    .then((res)=>{
        dispatch(getWeeklyUniqueUserSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getWeeklyUniqueUserError())
    })
}

const getMonthlyUniqueUser= ()=>(dispatch)=>{
    return axios.get(`https://what-bot.furation.tech/monthlyuser`)
    .then((res)=>{
        dispatch(getMonthlyUniqueUserSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getMonthlyUniqueUserError())
    })
}

export {getPaymentHistory, getUniqueUser, getTotalUniqueUser, getWeeklyUniqueUser, getMonthlyUniqueUser};