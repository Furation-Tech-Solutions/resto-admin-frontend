import React, { useState } from 'react'
import "../styles/Login.css"
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "../Redux/AuthData/action";

const Login = () => {

  const [ispassword, setispassword] = useState(false);

  const [ phone, setPhone ]= useState("");
  const [ password, setPassword ]= useState("");
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handleLogin = () =>{
    if(phone && password){
      dispatch(login({phone, password})).then((r)=>{
        navigate("/");
      })
    }
  }

  const handleClickShowPassword = () => {
    setispassword((prev)=>!prev);
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

  return (
    <div className='outerBoxLogin'>
      <div className='innerBoxLogin'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbECbhYiXFmPbfgIayn2StJjfmLf03mW4tvX7tFtZM0NGz3GUKgXsoNKcuMLzRo3GKWss&usqp=CAU" alt="" />
        <div>
          <Input className='inputlogin' label="Number" onChange={(e)=>{if(e.target.value.length<=10){(setPhone(e.target.value))}}} type="text" value={phone} placeholder='Enter your Number' /><br/>
          <Input className='inputlogin' onChange={(e)=>setPassword(e.target.value)} value={password} type={ispassword? 'text' : 'password'} placeholder='Enter password' endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={()=>handleClickShowPassword()}
                            onMouseDown={()=>handleMouseDownPassword()}
                        >
                            {ispassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                } /><br/>
          <Link to="/register">Forgot password?</Link>
          <p>Not registered yet? <span><Link to="/register">Register</Link></span> here</p>
          <button onClick={()=>handleLogin()} className='loginButton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
