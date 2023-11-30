import React, { useState } from 'react'
import "../styles/Login.css"
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../Redux/AuthData/action";
import furationlogo from "../utils/Images/login/furationlogo.svg";

const Login = () => {

  const [ispassword, setispassword] = useState(false);

  const [ phone, setPhone ]= useState("");
  const [ password, setPassword ]= useState("");
  const dispatch= useDispatch();
  const navigate= useNavigate();

  // const role= useSelector((store)=>store.AuthReducer.role);
  const isAuthLoading= useSelector((store)=>store.AuthReducer.isAuthLoading);
  // const isError= useSelector((store)=>store.AuthReducer.isAuthError);


  const handleLogin = () =>{
    if(phone && password){
      dispatch(login({phone, password})).then((r)=>{
        const role= JSON.parse(localStorage.getItem("admin")).role;
        // const isError= !JSON.parse(localStorage.getItem("admin")).role;
        // console.log({isError, role})
        const isError=false;
        if(isError){
          alert("Invalid Number or Password")
        }else{
          role==="superadmin" ? navigate("/superadmin") : navigate("/");
        }
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
        <img className='loginlogo' src={furationlogo} alt="furationlogo" />
        <div className='formbox'>
          <h2 className='loginheading'>Welcome!</h2>
          <label className='loginlabels'>Enter your email or  phone number</label><br/>
          <input className='inputlogin' onChange={(e)=>{if(e.target.value.length<=10){(setPhone(e.target.value))}}} type="text" value={phone} placeholder='Enter your Email or Number' /><br/>
          <label className='loginlabels'>Enter your password</label><br/>
          {/* <input className='inputlogin' onChange={(e)=>setPassword(e.target.value)} label="Outlined" value={password} type={ispassword? 'text' : 'password'} placeholder='Enter password'
            {ispassword ? <Visibility onClick={()=>handleClickShowPassword()} onMouseDown={(event)=>handleMouseDownPassword(event)} /> : <VisibilityOff />}
                        
                /><br/> */}
          <div className='inputlogindiv'>
            <input onChange={(e)=>setPassword(e.target.value)} label="Outlined" value={password} type={ispassword? 'text' : 'password'} placeholder='Enter password' />
            {ispassword ? <Visibility onClick={()=>handleClickShowPassword()} onMouseDown={(event)=>handleMouseDownPassword(event)} /> : <VisibilityOff onClick={()=>handleClickShowPassword()} onMouseDown={(event)=>handleMouseDownPassword(event)} />}
          </div>
          <div className='loginforgotpassword'>
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>
          <button onClick={()=>handleLogin()} className='loginButton'><i className={isAuthLoading? "fa fa-spinner fa-spin" : ""}></i>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login
