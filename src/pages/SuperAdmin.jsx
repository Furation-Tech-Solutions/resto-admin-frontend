import React, { useState } from 'react'
import "../styles/SuperAdmin.css"
import logo from "../utils/Images/Superadmin/logo.svg";

const SuperAdmin = () => {

    const [barnum, setBarnum]= useState(1);

    const date= new Date();
    const day= date.getDate();
    console.log(day);

  return (
    <div className='outerBoxSuperAdmin'>
      <div className='innerBoxSuperAdmin'>
        <div className='leftBoxSuperAdmin'>
            <div className='leftfirstBoxSuperAdmin'>
                <img src={logo} alt="logo" />
                <p>Furation Tech</p>
            </div>
            <div className='leftsecondBoxSuperAdmin'>
                <div onClick={()=>setBarnum(1)} className={barnum===1? 'leftsecondfirstSuperAdminOn' : 'leftsecondfirstSuperAdmin'}>Dashboard</div>
                <div onClick={()=>setBarnum(2)} className={barnum===2? 'leftsecondsecondSuperAdminOn' : 'leftsecondsecondSuperAdmin'}>Support</div>
            </div>
            <div className='leftthirdBoxSuperAdmin'>Logout</div>
        </div>
        <div className='rightBoxSuperAdmin'>
            <div className={barnum===1? 'rightDashboardBoxSuperAdmin' : 'rightDashboardBoxSuperAdminOff'}>
                <div className='rightfirstBoxSuperAdmin'>
                    <div className='textrightfirstBoxSuperAdmin'>
                        <h2>Hello, Super Admin!</h2>
                        <p>Users Overview</p>
                        <p>0</p>
                    </div>
                    <div className='countdownrightfirstBoxSuperAdmin'></div>
                </div>
                <div className='rightsecondBoxSuperAdmin'></div>
            </div>
            <div className={barnum===2? 'rightSupportBoxSuperAdmin' : 'rightSupportBoxSuperAdminOff'}></div>
        </div>
      </div>
    </div>
  )
}

export default SuperAdmin
