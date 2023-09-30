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
import furationlogo from "../utils/Images/furationlogo.svg";

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
        <img className='loginlogo' src={furationlogo} alt="" />
        <div className='formbox'>
          <h2 className='loginheading'>Welcome!</h2>
          <label className='loginlabels'>Enter your email or  phone number</label><br/>
          <Input className='inputlogin' label="Outlined" onChange={(e)=>{if(e.target.value.length<=10){(setPhone(e.target.value))}}} type="text" value={phone} placeholder='Enter your Email or Number' /><br/>
          <label className='loginlabels'>Enter your password</label><br/>
          <Input className='inputlogin' onChange={(e)=>setPassword(e.target.value)} label="Outlined" value={password} type={ispassword? 'text' : 'password'} placeholder='Enter password' endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={()=>handleClickShowPassword()}
                            onMouseDown={(event)=>handleMouseDownPassword(event)}
                        >
                            {ispassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                } /><br/>
          <div className='loginforgotpassword'>
            <Link to="/register">Forgot password?</Link>
          </div>
          <button onClick={()=>handleLogin()} className='loginButton'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
