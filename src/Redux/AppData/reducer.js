import * as types from "./actionTypes"

const initialState= {
    paymentHistory: [],
    uniqueUser: [],
    totalUniqueUser: [],
    weeklyuniqueUser: [],
    monthlyuniqueUser: [],
    isLoadingpayment: false,
    isErrorpayment: false
}

const reducer= (oldState= initialState, action)=>{
    const {type, payload}= action;
    switch(type){
        case types.GET_PAYMENTHISTORY_REQUEST: 
            return {
                ...oldState, isLoadingpayment:true
            }
        case types.GET_PAYMENTHISTORY_SUCCESS: 
            return {
                ...oldState, isLoadingpayment:false, paymentHistory:payload
            }
        case types.GET_PAYMENTHISTORY_ERROR: 
            return {
                ...oldState, isLoadingpayment:false, isError:true
            }
        case types.GET_UNIQUEUSER_SUCCESS: 
            return {
                ...oldState, uniqueUser:payload
            }
        case types.GET_UNIQUEUSER_ERROR: 
            return {
                ...oldState, uniqueUser:0
            }
        case types.GET_TOTALUNIQUEUSER_SUCCESS: 
            return {
                ...oldState, totalUniqueUser:payload
            }
        case types.GET_TOTALUNIQUEUSER_ERROR: 
            return {
                ...oldState, totalUniqueUser:0
            }
        case types.GET_WEEKLYUNIQUEUSER_SUCCESS: 
            return {
                ...oldState, weeklyniqueUser:payload
            }
        case types.GET_WEEKLYUNIQUEUSER_ERROR: 
            return {
                ...oldState, weeklyniqueUser:0
            }
        case types.GET_MONTHLYUNIQUEUSER_SUCCESS: 
            return {
                ...oldState, monthlyniqueUser:payload
            }
        case types.GET_MONTHLYUNIQUEUSER_ERROR: 
            return {
                ...oldState, monthlyniqueUser:0
            }
        default : return oldState
    }
}

export {reducer};