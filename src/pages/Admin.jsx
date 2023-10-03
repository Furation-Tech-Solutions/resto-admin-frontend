import React, { useState } from 'react'
import "../styles/Admin.css"
import logo from "../utils/Images/Admin/logo.svg";
import { Bar } from "react-chartjs-2";

const Admin = () => {
  
  const [barnum, setBarnum]= useState(1);
  
  const date= new Date();
  const day= date.getDate();
  
  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Unique users this week",
        backgroundColor: "teal",
        borderColor: "white",
        data: [45, 10, 5, 26, 20, 30, 45, 56]
      },
    ],
  }

  return (
    <div className='outerBoxAdmin'>
      <div className='innerBoxAdmin'>
        <div className='leftBoxAdmin'>
            <div className='leftfirstBoxAdmin'>
                <img src={logo} alt="applogo" />
                <p>Furation Tech</p>
            </div>
            <div className='leftsecondBoxAdmin'>
                <div onClick={()=>setBarnum(1)} className={barnum===1? 'leftsecondfirstAdminOn' : 'leftsecondfirstAdmin'}>Dashboard</div>
                <div onClick={()=>setBarnum(2)} className={barnum===2? 'leftsecondsecondAdminOn' : 'leftsecondsecondAdmin'}>Message</div>
                <div onClick={()=>setBarnum(3)} className={barnum===3? 'leftsecondthirdAdminOn' : 'leftsecondthirdAdmin'}>Feedback</div>
                <div onClick={()=>setBarnum(4)} className={barnum===4? 'leftsecondfourthAdminOn' : 'leftsecondfourthAdmin'}>Subscription History</div>
            </div>
            <div className='leftthirdBoxAdmin'>
              <div className='leftthirdBoxfirstAdmin'>Request Support</div>
              <div className='leftthirdBoxsecondAdmin'>Logout</div>
            </div>
        </div>
        <div className='rightBoxAdmin'>
            <div className={barnum===1? 'rightDashboardBoxAdmin' : 'rightDashboardBoxAdminOff'}>
                <div className='rightfirstBoxAdmin'>
                    <div className='textrightfirstBoxAdmin'>
                        <p>Hello, Admin!</p>
                        <p>Users Overview</p>
                        <p>13 June, 2023 Tuesday</p>
                    </div>
                    <div className='countdownrightfirstBoxAdmin'>
                      <div className='countdownrightfirstRoundOuter'>
                        <div className='countdownrightfirstRoundInner'><p>28</p></div>
                      </div>
                      <p>25/30 days left of Plan A</p>
                    </div>
                </div>
                <div className='rightsecondBoxAdmin'>
                  <div>
                    <div>
                      <p>Today</p>
                      <p>12</p>
                    </div>
                    <div>
                      <p>Today</p>
                      <p>42</p>
                    </div>
                  </div>
                  <div>
                    {/* <Bar data={data} /> */}
                  </div>
                  <div></div>
                </div>
            </div>
            <div className={barnum===2? 'rightMessageBoxAdmin' : 'rightMessageBoxAdminOff'}></div>
            <div className={barnum===3? 'rightFeedbackBoxAdmin' : 'rightFeedbackBoxAdminOff'}></div>
            <div className={barnum===4? 'rightSubscriptionBoxAdmin' : 'rightSubscriptionBoxAdminOff'}></div>
        </div>
      </div>
    </div>
  )
}

export default Admin
