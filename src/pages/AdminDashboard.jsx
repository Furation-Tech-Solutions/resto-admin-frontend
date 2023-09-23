import React, { useState, useEffect } from 'react'
import "../styles/AdminDashboard.css"
import { TextareaAutosize } from '@material-ui/core';

const AdminDashboard = () => {

  const [boxnum, setBoxnum]= useState("firstbox");


  return (
    <div className='outerBoxAdminDashboard'>
      <div className='innerBoxAdminDashboard'>
        <div className='leftBoxAdminDashboard'>
          <div className='profileBoxAdminDashboard'>
            <img className='profileImageAdminDashboard' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvF37XDW8sPb3POWtfHxVNCqeH_Baj2fMzA&usqp=CAU" alt="user" />
            <h3>Pritam da dhaba</h3>
          </div>
          <div className='titleBoxAdminDashboard'>
            <div onClick={(e)=>setBoxnum("firstbox")} name="firstbox" className='leftInnerBoxAdminDashboard'>
              <h4>Interactions</h4>
            </div>
            <div onClick={(e)=>setBoxnum("secondbox")} name="secondbox" className='leftInnerBoxAdminDashboard'>
              <h4>Send message</h4>
            </div>
            <div onClick={(e)=>setBoxnum("thirdbox")} name="thirdbox" className='leftInnerBoxAdminDashboard'>
              <h4>Send Bulk Message</h4>
            </div>
            <div onClick={(e)=>setBoxnum("fourthbox")} name="fourthbox" className='leftInnerBoxAdminDashboard'>
              <h4>Festive Wishes</h4>
            </div>
          </div>
        </div>
        <div className='rightBoxAdminDashboard'>
          <div className={boxnum==="firstbox"? "firstrightboxon" : "firstrightboxoff" }>
            <div className='secondInnerboxAdminDashboard'>
              <div>
                <h3>Daily Interactions:- </h3>
                <h3>Total Interactions:- </h3>
              </div>
              <div>Weekly Interactions</div>
            </div>
          </div>
          <div className={boxnum==="secondbox"? "secondrightboxon" : "secondrightboxoff" }>
            <div className='secondInnerboxAdminDashboard' >
              <h2>Send message to Client</h2>
              <input className='inputSecondboxAdminDashboard' type="number" name="" placeholder="Enter client's number" /><br/>
              <TextareaAutosize className='inputSecondboxAdminDashboard' /><br/>
              <button className='buttonSecondboxAdminDashboard'>Send Message</button>
            </div>
          </div>
          <div className={boxnum==="thirdbox"? "thirdrightboxon" : "thirdrightboxoff" }>
            <div className='secondInnerboxAdminDashboard' >
                <h2>Send Bulk message to Client</h2>
                <input className='inputSecondboxAdminDashboard' type="number" name="" placeholder="Enter client's number" /><br/>
                <TextareaAutosize className='inputSecondboxAdminDashboard' /><br/>
                <button className='buttonSecondboxAdminDashboard'>Send Bulk Message</button>
            </div>
          </div>
          <div className={boxnum==="fourthbox"? "fourthrightboxon" : "fourthrightboxoff" }>
            <div className='secondInnerboxAdminDashboard' >
                <h2>Festive Wish</h2>
                <input className='inputSecondboxAdminDashboard' type="number" name="" placeholder="Enter client's number" /><br/>
                <TextareaAutosize className='inputSecondboxAdminDashboard' /><br/>
                <button className='buttonSecondboxAdminDashboard'>Festive Wish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
