import React, { useState, useEffect } from 'react'
import "../styles/Superadmin.css"
import logo from "../utils/Images/Admin/logo.svg";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Superadmin = () => {

  const [userData, setUserData] = useState([]);

  const navigate= useNavigate();

  useEffect(()=>{
    axios.get(`https://restaurant-bot-admin.onrender.com/api/v1/admin`)
    .then((r)=>setUserData(r.data));
  }, [])
  console.log(userData);

  const [barnum, setBarnum]= useState(1);
  const dispatch= useDispatch();

  const [ isAddAdmin, setIsAddAdmin ] = useState(false);
  const [ istoggle, setIstoggle ] = useState(false);

  // const userData= [
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   },
  //   {
  //     businessname: 'abcd',
  //     email :'abc@gmail.com',
  //     phone: 1234567890,
  //     subsciption:'9days left'
  //   }
  // ]

  const feedbackData = [
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.2",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.2",
      date: "04/10/2023"
    },
    {
      phone: "123456789",
      name: "User name",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "04/10/2023"
    }
  ];

  return (
    <div className="outerBoxSuperAdmin">
      <div className="innerBoxSuperAdmin">
        <div className="leftBoxSuperAdmin">
          <div className="leftfirstBoxSuperAdmin">
            <img src={logo} alt="applogo" />
            <p>Furation Tech</p>
          </div>
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
                barnum === 2 ? "leftsecondthirdSuperAdminOn" : "leftsecondthirdSuperAdmin"
              }
            >
              <p>Support</p>
            </div>
          </div>
          <div className="leftthirdBoxSuperAdmin">
            <div className="leftthirdBoxfirstSuperAdmin">Logout</div>
          </div>
        </div>
        <div className='rightBoxSuperAdmin'>
          <div className={barnum===1 ? 'rightBoxSuperAdminDashboard' : 'rightBoxSuperAdminDashboardOff'}>
            <div className='rightfirstBoxSuperadmin'>
              <div className='rightfirstBoxSuperadminText'>
                <p>Hello, Super Admin!</p>
                <p>13 June, 2023 Tuesday</p>
              </div>
              <div>
                <button onClick={()=>setIsAddAdmin(true)} className="addadminbuttonSuperadmin"><AiOutlinePlus/>Add Admin</button>
              </div>
            </div>
            <div className='rightsecondBoxSuperadmin'>
              <div className="rightsecondBoxSuperadminInputBox">
                <AiOutlineSearch size={"20px"} />
                <input className="rightsecondBoxSuperadminInput" type="text" placeholder='Search by business name, email or phone number' />
              </div>
              <select className="rightsecondBoxSuperadminSelect" name="" id="">
                <option value="">Filter By</option>
                <option value="">Akina</option>
                <option value="">Pritam da dhaba</option>
              </select>
            </div>
            <div className='rightthirdBoxSuperadmin'>
              <table className="userTableSuperAdmin">
                <tr>
                  <th className="userTableHeadSuperAdmin">Sr. No.</th>
                  <th className="userTableHeadSuperAdmin">Business Name</th>
                  <th className="userTableHeadSuperAdmin">Email Address</th>
                  <th className="userTableHeadSuperAdmin">Phone Number</th>
                  <th className="userTableHeadSuperAdmin">Subscription</th>
                  <th className="userTableHeadSuperAdmin">Action</th>
                </tr>
                {userData && userData.map((user, i)=>{
                  return <tr onClick={()=>navigate(`/:${user._id}`)}>
                    <td className="userTableBodySuperAdmin">{i+1}</td>
                    <td className="userTableBodySuperAdmin">{user.businessName}</td>
                    <td className="userTableBodySuperAdmin">{user.email}</td>
                    <td className="userTableBodySuperAdmin">{user.phone}</td>
                    <td className="userTableBodySuperAdmin">{user.botrunning? '9days left' : 'Renewal pending'}</td>
                    <td className="userTableBodySuperAdmin">Edit</td>
                  </tr>
                })}
              </table>
            </div>
          </div>
          <div className={barnum===2 ? 'rightBoxSuperAdminSupport' : 'rightBoxSuperAdminSupportOff'}>
            <div className='rightBoxSuperAdminSupportText'><p>Support</p></div>
            <div className='rightsecondBoxSuperadmin'>
              <div className="rightsecondBoxSuperadminInputBox">
                <AiOutlineSearch size={"20px"} />
                <input className="rightsecondBoxSuperadminInput" type="text" placeholder='Search by business name, email or phone number' />
              </div>
              <select className="rightsecondBoxSuperadminSelect" name="" id="">
                <option value="">Filter By</option>
                <option value="">Akina</option>
                <option value="">Pritam da dhaba</option>
              </select>
            </div>
            <div className='rightthirdBoxSuperadmin'>
              <table className="feedbackTableSuperAdmin">
                <tr>
                  <th className="feedbackTableHeadSuperAdmin">Sr. No.</th>
                  <th className="feedbackTableHeadSuperAdmin">Name</th>
                  <th className="feedbackTableHeadSuperAdmin">Phone Number</th>
                  <th className="feedbackTableHeadSuperAdmin">Feedback</th>
                  <th className="feedbackTableHeadSuperAdmin">Date</th>
                </tr>
                {feedbackData && feedbackData.map((feedback, i)=>{
                  return <tr>
                    <td className="feedbackTableBodySuperAdmin">{i+1}</td>
                    <td className="feedbackTableBodySuperAdmin">{feedback.name}</td>
                    <td className="feedbackTableBodySuperAdmin">{feedback.phone}</td>
                    <td className="feedbackTableBodySuperAdmin">{feedback.message}</td>
                    <td className="feedbackTableBodySuperAdmin">{feedback.date}</td>
                  </tr>
                })}
              </table>
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
