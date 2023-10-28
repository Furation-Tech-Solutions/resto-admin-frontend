import * as types from "./actionTypes";

const initialState= {
    isAuth: false,
    token: "",
    isAuthLoading: false,
    isAuthError: false,
    role: ""
}

const reducer= (oldState= initialState, action) => {
    const {type, payload}= action;
    switch(type){
        case types.USER_LOGIN_REQUEST:
            return {...oldState, isAuthLoading:true}
        case types.USER_LOGIN_SUCCESS:
            return {...oldState, isAuthLoading:false, token:payload.token, role: payload.role, isAuth:true}
        case types.USER_LOGIN_ERROR:
            return {...oldState, isAuthLoading:false, token:"", isAuth:false, isAuthError:true}
        case types.USER_LOGOUT_SUCCESS:
            return {...oldState, token:"", role: "", isAuth:false}
        default:
            return oldState;
    }
}

export { reducer };