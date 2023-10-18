import React, { useState, useEffect } from 'react'
import "../styles/Superadmin.css"
import logo from "../utils/Images/Admin/logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import menu from "../utils/Images/Admin/menu.svg";

const Superadmin = () => {

  const [userData, setUserData] = useState([]);

  const navigate= useNavigate();

  const [ isPopup, setIsPopup ]= useState(false);

  const [ isSidebarPhone, setIsSidebarPhone ]= useState(false);

  useEffect(()=>{
    axios.get(`https://restaurant-bot-admin.onrender.com/api/v1/admin`)
    .then((r)=>setUserData(r.data));
  }, [])

  console.log(userData);

  const [barnum, setBarnum]= useState(1);
  const dispatch= useDispatch();

  const [ isAddAdmin, setIsAddAdmin ] = useState(false);
  const [ istoggle, setIstoggle ] = useState(false);

  const userDataa= [
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    },
    {
      businessname: 'abcd',
      email :'abc@gmail.com',
      phone: 1234567890,
      subsciption:'9days left'
    }
  ]

  const feedbackData = [
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "04/10/2023"
    }
  ];

  return (
    <div className="outerBoxSuperAdmin">
      <div className={isPopup || isAddAdmin? "innerBoxPhoneAdminOverlay" : "innerBoxPhoneAdmin"}>
        <div onClick={()=>isSidebarPhone===true && setIsSidebarPhone(!isSidebarPhone)} className="innerBoxPhoneAdminContent">
          <div className="navPhoneAdmin">
            <div className="menuIconAdminBox">
              <img onClick={()=>setIsSidebarPhone(!isSidebarPhone)} src={menu} alt="menu" />
            </div>
            <div className="logoAdminBox">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div></div>
        </div>

        <div className={isSidebarPhone? "sideBarPhoneAdmin" : "sideBarPhoneAdminOff"}>
          <div className="menudivsidePhone">
            <div className="menudivsidePhoneBox">
              <img onClick={()=>setIsSidebarPhone(!isSidebarPhone)} src={menu} alt="menu" />
            </div>
          </div>
          <div className="ContentBoxSideBarrPhoneAdmin">
            <div className="SecondBoxsideBarPhoneAdmin">
                <div
                  onClick={() => {
                    setBarnum(1)
                    setIsSidebarPhone(!isSidebarPhone)
                  }}
                  className={
                    barnum === 1 ? "sidesecondfirstPhoneAdminOn" : "sidesecondfirstPhoneAdmin"
                  }
                >
                  <p>Dashboard</p>
                </div>
                <div
                  onClick={() => {
                    setBarnum(2)
                    setIsSidebarPhone(!isSidebarPhone)
                  }}
                  className={
                    barnum === 2
                      ? "sidesecondsecondPhoneSuperAdminOn"
                      : "sidesecondsecondPhoneAdmin"
                  }
                >
                  <p>Support</p>
                </div>
            </div>
            <div className="ThirdBoxsideBarPhoneAdmin">
              <div className="ThirdBoxsideBarSecondPhoneAdmin">Logout</div>
            </div>
          </div>
        </div>
      
      </div>
      <div className={isPopup || isAddAdmin? "innerBoxSuperAdminOverlay" : "innerBoxSuperAdmin"}>
        <div className="leftBoxSuperAdmin">
          <div className="leftfirstBoxSuperAdmin">
            <img src={logo} alt="applogo" />
            <p>Furation Tech</p>
          </div>
          <div className="ContentBoxSideBarrPhoneAdmin">
            <div className="leftsecondBoxSuperAdmin">
              <div
                onClick={() => setBarnum(1)}
                className={
                  barnum === 1 ? "leftsecondfirstSuperAdminOn" : "leftsecondfirstSuperAdmin"
                }
              >
                <p>Dashboard</p>
              </div>
              <div
                onClick={() => setBarnum(2)}
                className={
                  barnum === 2 ? "leftsecondsecondSuperAdminOn" : "leftsecondsecondSuperAdmin"
                }
              >
                <p>Support</p>
              </div>
            </div>
            <div className="leftthirdBoxSuperAdmin">
              <div className="leftthirdBoxfirstSuperAdmin">Logout</div>
            </div>
          </div>
        </div>
        <div className='rightBoxSuperAdmin'>
          <div className={barnum===1 ? 'rightBoxSuperAdminDashboard' : 'rightBoxSuperAdminDashboardOff'}>
            <div className='rightfirstBoxSuperadmin'>
              <div className='rightfirstBoxSuperadminText'>
                <p>Hello, Super Admin!</p>
                <p>13 June, 2023 Tuesday</p>
              </div>
              <div className="addadminbuttonSuperadminBox">
                <button onClick={()=>setIsAddAdmin(true)} className="addadminbuttonSuperadmin"><AiOutlinePlus/>Add Admin</button>
              </div>
            </div>
            <div className='rightsecondBoxSuperadmin'>
              <div className="rightsecondBoxSuperadminInputBox">
                <AiOutlineSearch />
                <input className="rightsecondBoxSuperadminInput" type="text" placeholder='Search by email or phone number' />
              </div>
              <select className="rightsecondBoxSuperadminSelect" name="" id="">
                <option value="">Filter By</option>
                <option value="">Akina</option>
                <option value="">Pritam da dhaba</option>
              </select>
            </div>
            <div className='rightthirdBoxSuperadmin'>
              <div className='userTableSuperAdminHolder'>
                <table className="userTableSuperAdmin">
                  <thead>
                    <tr>
                      <th className="userTableHeadSuperAdmin">Sr. No.</th>
                      <th className="userTableHeadSuperAdmin">Business Name</th>
                      <th className="userTableHeadSuperAdmin">Email Address</th>
                      <th className="userTableHeadSuperAdmin">Phone Number</th>
                      <th className="userTableHeadSuperAdmin">Subscription</th>
                      <th className="userTableHeadSuperAdmin">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData && userData.map((user, i)=>{
                      return <tr key={user.id} onClick={()=>navigate(`/superadmin/:${user.id}`)}>
                        <td className="userTableBodySuperAdmin">{i+1}</td>
                        <td className="userTableBodySuperAdmin">{user.businessName}</td>
                        <td className="userTableBodySuperAdmin">{user.email}</td>
                        <td className="userTableBodySuperAdmin">{user.phone}</td>
                        <td className="userTableBodySuperAdmin">{user.botrunning? '9days left' : 'Renewal pending'}</td>
                        <td className="userTableBodySuperAdmin">Edit</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className={barnum===2 ? 'rightBoxSuperAdminSupport' : 'rightBoxSuperAdminSupportOff'}>
            <div className='rightBoxSuperAdminSupportText'><p>Support</p></div>
            <div className='rightsecondBoxSuperadmin'>
              <div className="rightsecondBoxSuperadminInputBox">
                <AiOutlineSearch size={"20px"} />
                <input className="rightsecondBoxSuperadminInput" type="text" placeholder='Search by email or phone number' />
              </div>
              <select className="rightsecondBoxSuperadminSelect" name="" id="">
                <option value="">Filter By</option>
                <option value="">Akina</option>
                <option value="">Pritam da dhaba</option>
              </select>
            </div>
            <div className='rightthirdBoxSuperadminSupport'>
              <div className='userTableSuperAdminHolder'>
                <table className="feedbackTableSuperAdmin">
                  <thead>
                    <tr>
                      <th className="feedbackTableHeadSuperAdmin">Sr. No.</th>
                      <th className="feedbackTableHeadSuperAdmin">Name</th>
                      <th className="feedbackTableHeadSuperAdmin">Phone Number</th>
                      <th className="feedbackTableHeadSuperAdmin">Feedback</th>
                      <th className="feedbackTableHeadSuperAdmin">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackData && feedbackData.map((feedback, i)=>{
                      return <tr key={feedback.id}>
                        <td className="feedbackTableBodySuperAdmin">{i+1}</td>
                        <td className="feedbackTableBodySuperAdmin">{feedback.name}</td>
                        <td className="feedbackTableBodySuperAdmin">{feedback.phone}</td>
                        <td className="feedbackTableBodySuperAdmin">{feedback.message}</td>
                        <td className="feedbackTableBodySuperAdmin">{feedback.date}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={ isAddAdmin? "addadmin" : "addadminOff"}>
        <p className='addadmintext'>Add a new admin</p>
        <div>
          <label className='addadminlabel'>Business Name</label><br/>
          <input className='addadmininput' type="text" placeholder='Name a business' /><br/>
          <label className='addadminlabel'>Email</label><br/>
          <input className='addadmininput' type="email" placeholder='Enter email' /><br/>
          <label className='addadminlabel'>Phone</label><br/>
          <input className='addadmininput' type="number" placeholder='Enter phone number' /><br/>
          <label className='addadminlabel'>Set a password</label><br/>
          <input className='addadmininput' type="text" placeholder='Enter password' /><br/>
        </div>
        <button className='addadminbutton'>Add Admin</button><br/>
        <button onClick={()=>setIsAddAdmin(false)} className='addadmincancelbutton'>Cancel</button>
      </div>
      <div className={ istoggle? "togglesubscription" : "togglesubscriptionOff"}>
        <p className='togglesubscriptiontext'>Are you sure you want to deactivate the subsciption?</p>
        <div>
          <label className='togglesubscriptionlabel'>Type DEACTIVATE to confirm</label><br/>
          <input className='togglesubscriptioninput' type="text" /><br/>
          <p className='togglesubscriptionerror'>Sorry, please enter the text exactly as displayed to confirm.</p>
        </div>
        <div className='togglesubscriptionbuttonBox'>
          <button className='togglesubscriptionbutton'>Deactivate</button><br/>
          <button onClick={()=>setIstoggle(false)} className='togglesubscriptioncancelbutton'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default Superadmin
