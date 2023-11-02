
import axios from "axios";
import * as types from"./actionTypes";

const login= (payload) => (dispatch) => {
    dispatch({type: types.USER_LOGIN_REQUEST});
    return axios.post("http://admin-bot.furation.tech/api/v1/admin/login", payload)
    .then((r)=>{
        localStorage.setItem("token", JSON.stringify(r.data.token));
        localStorage.setItem("admin", JSON.stringify({
            adminId : r.data.adminId,
            businessName : r.data.businessName,
            phone : r.data.phone,
            email : r.data.email
        }));
        dispatch({type: types.USER_LOGIN_SUCCESS, payload: {token: r.data.token,role: r.data.role}})
    })
    .catch((e)=>{dispatch({type: types.USER_LOGIN_ERROR})})
}

const logout= () => (dispatch) => {
    localStorage.setItem("token", JSON.stringify(""));
    return dispatch({type: types.USER_LOGOUT_SUCCESS});
}

export { login, logout };