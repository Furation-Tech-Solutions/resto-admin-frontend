// import axios from "axios"
import { GET_MONTHLYUNIQUEUSER_ERROR, GET_MONTHLYUNIQUEUSER_SUCCESS, GET_PAYMENTHISTORY_ERROR, GET_PAYMENTHISTORY_REQUEST, GET_PAYMENTHISTORY_SUCCESS, GET_SUPPORTREQUEST_ERROR, GET_SUPPORTREQUEST_SUCCESS, GET_TOTALUNIQUEUSER_ERROR, GET_TOTALUNIQUEUSER_SUCCESS, GET_UNIQUEUSER_ERROR, GET_UNIQUEUSER_SUCCESS, GET_USERFEEDBACK_ERROR, GET_USERFEEDBACK_REQUEST, GET_USERFEEDBACK_SUCCESS, GET_WEEKLYUNIQUEUSER_ERROR, GET_WEEKLYUNIQUEUSER_SUCCESS, POST_ADDADMIN_ERROR, POST_ADDADMIN_REQUEST, POST_ADDADMIN_SUCCESS, POST_SUPPORTREQUEST_ERROR, POST_SUPPORTREQUEST_SUCCESS } from "./actionTypes"
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



const getUserFeedbackRequest= ()=>{
    return {
        type: GET_USERFEEDBACK_REQUEST
    }
}
const getUserFeedbackSuccess= (payload)=>{
    return {
        type: GET_USERFEEDBACK_SUCCESS,
        payload
    }
}
const getUserFeedbackError= ()=>{
    return {
        type: GET_USERFEEDBACK_ERROR
    }
}




const getSupportRequestSuccess= (payload)=>{
    return {
        type: GET_SUPPORTREQUEST_SUCCESS,
        payload
    }
}
const getSupportRequestError= ()=>{
    return {
        type: GET_SUPPORTREQUEST_ERROR
    }
}

const postSupportRequestSuccess= (payload)=>{
    return {
        type: POST_SUPPORTREQUEST_SUCCESS,
        payload
    }
}
const postSupportRequestError= ()=>{
    return {
        type: POST_SUPPORTREQUEST_ERROR
    }
}



const postAddAdminRequest= ()=>{
    return {
        type: POST_ADDADMIN_REQUEST
    }
}
const postAddAdminSuccess= (payload)=>{
    return {
        type: POST_ADDADMIN_SUCCESS,
        payload
    }
}
const postAddAdminError= ()=>{
    return {
        type: POST_ADDADMIN_ERROR
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

const getUserFeedback= (params)=>(dispatch)=>{
    dispatch(getUserFeedbackRequest());
    return axios.get(`https://what-bot.furation.tech/feedback`, params)
    .then((res)=>{
        dispatch(getUserFeedbackSuccess(res.data))
    })
    .catch((error)=>{
        dispatch(getUserFeedbackError())
    })
}

const getSupportRequest= (params)=>(dispatch)=>{
    return axios.get(`https://what-bot.furation.tech/requestsupport`, params)
    .then((res)=>{
        dispatch(getSupportRequestSuccess(res.data.data))
    })
    .catch((error)=>{
        dispatch(getSupportRequestError())
    })
}

const postSupportRequest= (payload)=>(dispatch)=>{
    return axios.post("https://what-bot.furation.tech/requestsupport", payload)
    .then((r)=>{dispatch(postSupportRequestSuccess())})
    .catch((e)=>{dispatch(postSupportRequestError())})
}

const postAddAdmin= (payload)=>(dispatch)=>{
    dispatch(postAddAdminRequest());
    return axios.post("https://restaurant-bot-admin.onrender.com/api/v1/admin/new", payload)
    .then((r)=>{dispatch(postAddAdminSuccess())})
    .catch((e)=>{dispatch(postAddAdminError())})
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

export {getPaymentHistory, getUserFeedback, getSupportRequest, postSupportRequest, postAddAdmin, getUniqueUser, getTotalUniqueUser, getWeeklyUniqueUser, getMonthlyUniqueUser};