import React, { useState } from 'react'
import "../styles/Register.css"
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/Register/action';


const Register = () => {

  const [ispassword, setispassword] = useState(false);

  const [ name, setName ]= useState("");
  const [ email, setEmail ]= useState("");
  const [ phone, setPhone ]= useState("");
  const [ password, setPassword ]= useState("");
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handleRegister = () =>{
    if(name && email && phone && password){
      dispatch(register({name, email, phone, password})).then((r)=>{
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
    <div className='outerBoxRegister'>
      <div className='innerBoxRegister'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbECbhYiXFmPbfgIayn2StJjfmLf03mW4tvX7tFtZM0NGz3GUKgXsoNKcuMLzRo3GKWss&usqp=CAU" alt="" />
        <div>
          <Input className='inputregister' onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder='Enter your name' />
          <Input className='inputregister' onChange={(e)=>setPhone(e.target.value)} type="number" value={phone} placeholder='Enter your number' /><br/>
          <Input className='inputregister' onChange={(e)=>setEmail(e.target.value)} type="email" value={email} placeholder='Enter your email' />
          <Input className='inputregister' onChange={(e)=>setPassword(e.target.value)} value={password} type={ispassword? 'text' : 'password'} placeholder='Enter password' endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {ispassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                } /><br/>
          <p>Already registered? <span><Link to="/login">Login</Link></span> here</p>
          <button onClick={()=>handleRegister()} className='registerButton'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register
