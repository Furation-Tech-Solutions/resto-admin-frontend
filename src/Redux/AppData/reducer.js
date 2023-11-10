import * as types from "./actionTypes"

const initialState= {
    paymentHistory: [],
    isLoadingpayment: false,
    isErrorpayment: false,
    userFeedback: [],
    supportrequest: [],
    uniqueUser: [],
    adminData: [],
    totalUniqueUser: [],
    weeklyuniqueUser: [],
    monthlyuniqueUser: [],
    searchUser: [],
    searchUserLoading: false,
    searchUserError: false,
    addAdminLoading: false,
    addAdminError: false,
    sendMessageLoading: false,
    sendMessageError: false
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
        case types.GET_USERSEARCH_REQUEST: 
            return {
                ...oldState, searchUserLoading:true
            }
        case types.GET_USERSEARCH_SUCCESS: 
            return {
                ...oldState, searchUserLoading:false, searchUser:payload
            }
        case types.GET_USERSEARCH_ERROR: 
            return {
                ...oldState, searchUserLoading:false, searchUserError:true
            }
        case types.GET_USERFEEDBACK_SUCCESS: 
            return {
                ...oldState, userFeedback:payload
            }
        case types.GET_USERFEEDBACK_ERROR: 
            return {
                ...oldState, userFeedback: []
            }
        case types.GET_ADMINDATA_SUCCESS: 
            return {
                ...oldState, adminData:payload
            }
        case types.GET_ADMINDATA_ERROR: 
            return {
                ...oldState, adminData: []
            }
        case types.GET_SUPPORTREQUEST_SUCCESS: 
            return {
                ...oldState, supportrequest:payload
            }
        case types.GET_SUPPORTREQUEST_ERROR: 
            return {
                ...oldState, supportrequest: []
            }
        case types.POST_SENDMESSAGE_REQUEST: 
            return {
                ...oldState, sendMessageLoading:true
            }
        case types.POST_SENDMESSAGE_SUCCESS: 
            return {
                ...oldState, sendMessageLoading:false
            }
        case types.POST_SENDMESSAGE_ERROR: 
            return {
                ...oldState, sendMessageLoading:false, sendMessageError:true
            }
        case types.POST_ADDADMIN_REQUEST: 
            return {
                ...oldState, addAdminLoading:true
            }
        case types.POST_ADDADMIN_SUCCESS: 
            return {
                ...oldState, addAdminLoading:false
            }
        case types.POST_ADDADMIN_ERROR: 
            return {
                ...oldState, addAdminLoading:false, addAdminError:true
            }
        case types.GET_UNIQUEUSER_SUCCESS: 
            return {
                ...oldState, uniqueUser:payload
            }
        case types.GET_UNIQUEUSER_ERROR: 
            return {
                ...oldState, uniqueUser:[]
            }
        case types.GET_TOTALUNIQUEUSER_SUCCESS: 
            return {
                ...oldState, totalUniqueUser:payload
            }
        case types.GET_TOTALUNIQUEUSER_ERROR: 
            return {
                ...oldState, totalUniqueUser:[]
            }
        case types.GET_WEEKLYUNIQUEUSER_SUCCESS: 
            return {
                ...oldState, weeklyuniqueUser:payload
            }
        case types.GET_WEEKLYUNIQUEUSER_ERROR: 
            return {
                ...oldState, weeklyuniqueUser:[]
            }
        case types.GET_MONTHLYUNIQUEUSER_SUCCESS: 
            return {
                ...oldState, monthlyuniqueUser:payload
            }
        case types.GET_MONTHLYUNIQUEUSER_ERROR: 
            return {
                ...oldState, monthlyuniqueUser:[]
            }
        default : return oldState
    }
}

export {reducer};