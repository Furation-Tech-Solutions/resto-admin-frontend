
import axios from "axios";
import * as types from"./actionTypes";

const login= (payload) => (dispatch) => {
    dispatch({type: types.USER_LOGIN_REQUEST});
    return axios.post("https://restaurant-bot-admin.onrender.com/api/v1/user/login", payload)
    .then((r)=>{dispatch({type: types.USER_LOGIN_SUCCESS, payload: {token: r.data.token,role: r.data.role}})})
    .catch((e)=>{dispatch({type: types.USER_LOGIN_ERROR})})
}

const logout= () => (dispatch) => {
    return dispatch({type: types.USER_LOGOUT_SUCCESS});
}

export { login, logout };