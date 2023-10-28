import React, { useState } from 'react'
import "../styles/Feedback.css"
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "../Redux/AuthData/action";
import furationlogo from "../utils/Images/login/furationlogo.svg";


const Feedback = () => {

    const [ispassword, setispassword] = useState(false);
  
    const [ name, setName ]= useState("");
    const [ email, setEmail ]= useState("");
    const [ phone, setPhone ]= useState("");
    const [ password, setPassword ]= useState("");
    const dispatch= useDispatch();
    const navigate= useNavigate();
  
    const handleLogin = () =>{
      if(name && email && phone && password){
        dispatch(login({phone, password})).then((r)=>{
          navigate("/");
        })
      }
    }

  return (
    <div className='outerBoxFeedback'>
      <div className='innerBoxFeedback'>
        <img className='feedbacklogo' src={furationlogo} alt="furationlogo" />
        <div className='formboxfeedback'>
          <h2 className='feedbackheading'>Feedback form Pritam da dhaba</h2>
          <label className='feedbacklabels'>Name</label><br/>
          <input className='inputfeedback' onChange={(e)=>setName(e.target.value)} type="text" value={name} placeholder='Enter your Name' /><br/>
          <label className='feedbacklabels'>Phone number</label><br/>
          <input className='inputfeedback' onChange={(e)=>{if(e.target.value.length<=10){(setPhone(e.target.value))}}} type="text" value={phone} placeholder='Enter your Number' /><br/>
          <label className='feedbacklabels'>Email</label><br/>
          <input className='inputfeedback' onChange={(e)=>setEmail(e.target.value)} type="text" value={email} placeholder='Enter your Email' /><br/>
          <label className='feedbacklabels'>Message</label><br/>
          <input className='inputfeedback' onChange={(e)=>setPassword(e.target.value)} type="text" value={password} placeholder='Enter your Message' /><br/>
          <button onClick={()=>handleLogin()} className='submitButton'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Feedback
