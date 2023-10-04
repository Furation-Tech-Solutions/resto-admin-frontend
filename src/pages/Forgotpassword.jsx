import React, { useState } from 'react'
import "../styles/Forgotpassword.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "../Redux/AuthData/action";
import furationlogo from "../utils/Images/login/furationlogo.svg";

const Forgotpassword = () => {

    const [ email, setEmail ]= useState("");
    const dispatch= useDispatch();
    const navigate= useNavigate();

    const handleLogin = () =>{
        if(email){
        dispatch(login({email})).then((r)=>{
            navigate("/");
        })
        }
    }

  return (
    <div className='outerBoxForgotPassword'>
      <div className='innerBoxForgotPassword'>
        <img className='ForgotPasswordlogo' src={furationlogo} alt="furationlogo" />
        <div className='formboxForgotPassword'>
          <h2 className='ForgotPasswordheading'>Forgot Password?</h2>
          <label className='ForgotPasswordlabels'>Enter your email</label><br/>
          <input className='inputForgotPassword' onChange={(e)=>{if(e.target.value.length<=10){(setEmail(e.target.value))}}} type="text" value={email} placeholder='Enter Email' /><br/>
          <button onClick={()=>handleLogin()} className='ForgotPasswordButton'>Send Email</button>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword
