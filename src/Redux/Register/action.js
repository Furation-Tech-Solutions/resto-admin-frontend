
// import axios from "axios";
import * as types from"./actionTypes";

const register= (payload) => (dispatch) => {
    dispatch({type: types.USER_REGISTER_REQUEST});
    // return axios.post("https://reqres.in/api/register", payload)
    // .then((r)=>{dispatch({type: types.USER_REGISTER_SUCCESS})})
    // .catch((e)=>{dispatch({type: types.USER_REGISTER_ERROR})})
}

export { register };