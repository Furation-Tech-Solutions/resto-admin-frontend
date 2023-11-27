import React, { useState, useEffect } from 'react'
import "../styles/Superadmin.css"
import logo from "../utils/Images/Admin/logo.svg";
import support from "../utils/Images/Admin/support.svg";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';
import menu from "../utils/Images/Admin/menu.svg";
import noadmin from "../utils/Images/Admin/noadmin.svg";
import { getAdminData, getAdminSearchInput, getSupportRequest, postAddAdmin } from '../Redux/AppData/action';

const Superadmin = () => {
  
  const dispatch= useDispatch();

  const navigate= useNavigate();

  const [ isPopup, setIsPopup ]= useState(false);

  const [ isSidebarPhone, setIsSidebarPhone ]= useState(false);

  const [ addbusinessName, setAddbusinessName ]= useState("");
  const [ addemail, setAddemail ]= useState("");
  const [ addphone, setAddphone ]= useState("");
  const [ addpassword, setAddpassword ]= useState("");

  const [ filterValue, setFilterValue ] = useState("");

  const [ adminSearchInput, setAdminSearchInput ] = useState("");

  const [ requestSupportInput, setRequestSupportInput ] = useState("");

  const handleAddAdmin= () => {
    if(addbusinessName!=="" && addemail!=="" && addphone!=="" && addpassword!==""){
      const data= {
        "name" : "Business",
        "businessName": addbusinessName,
        "email": addemail,
        "phone": addphone,
        "password": addpassword
      };
      dispatch(postAddAdmin(data)).then((r)=>{
        alert("Admin added successfully");
        setIsAddAdmin(false);
        dispatch(getAdminData());
        setAddbusinessName("");
        setAddemail("");
        setAddphone("");
        setAddpassword("");
      })
    }else {
      alert("Please fill all the fields.")
    }
    
    setUserData(userrawData);
  }

  
  const handleAdminSearchInput= (value) => {
    setAdminSearchInput(value);
    dispatch(getAdminSearchInput({"input" : value}));
  }

  const handleRequestSupportInput= (value) => {
    setRequestSupportInput(value);
    console.log(value);
    dispatch(getSupportRequest({"input" : value}));
  }


  const [barnum, setBarnum]= useState(1);

  const [ isAddAdmin, setIsAddAdmin ] = useState(false);
  const [ istoggle, setIstoggle ] = useState(false);

  useEffect(()=>{
    dispatch(getAdminData());
    dispatch(getSupportRequest({"input" : requestSupportInput}));
    dispatch(getAdminSearchInput({"input" : adminSearchInput}));
  }, [filterValue, isAddAdmin, adminSearchInput, requestSupportInput]);

  const date= new Date();

  const currentDate= date.toLocaleDateString();
  
  const requestsupportrawdata= useSelector((store)=>store.AppReducer.supportrequest);
  
  const userrawData= useSelector((store)=>store.AppReducer.adminData);

  const userSearchData= useSelector((store)=>store.AppReducer.searchAdmin);

  const [ requestsupportdata, setRequestsupportdata ]= useState(requestsupportrawdata);

  const [ userData, setUserData ] = useState(userrawData);

  useEffect(()=>{
    const date= new Date();
    const newDate2= new Date(date);
    if(filterValue==="week"){
      const returnData= requestsupportrawdata?.filter((el)=>{
        const newDate1= new Date(el.createdAt);
        return Math.floor((newDate2- newDate1)/(1000*60*60*24))<7
      })
      setRequestsupportdata(returnData);
    }else if(filterValue==="month"){
      const returnData= requestsupportrawdata?.filter((el)=>{
        const newDate1= new Date(el.createdAt);
        return Math.floor((newDate2- newDate1)/(1000*60*60*24))<30
      })
      setRequestsupportdata(returnData);
    }else{
      setRequestsupportdata(requestsupportrawdata);
    }
    if(adminSearchInput===""){
      setUserData(userrawData);
    }else {
      setUserData(userSearchData);
    }
  }, [requestsupportrawdata, adminSearchInput]);

  console.log({userData});

  // const filterData= () => {
  //   const date= new Date();
  //   const newDate2= new Date(date);
  //   if(filterValue==="week"){
  //     const returnData= requestsupportrawdata?.filter((el)=>{
  //       const newDate1= new Date(el.createdAt);
  //       return Math.floor((newDate2- newDate1)/(1000*60*60*24))<7
  //     })
  //     setRequestsupportdata(returnData);
  //   }else if(filterValue==="month"){
  //     const returnData= requestsupportrawdata?.filter((el)=>{
  //       const newDate1= new Date(el.createdAt);
  //       return Math.floor((newDate2- newDate1)/(1000*60*60*24))<30
  //     })
  //     setRequestsupportdata(returnData);
  //   }else{
  //     setRequestsupportdata(requestsupportrawdata);
  //   }
  // }


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

  // const feedbackData = [
  //   {
  //     phone: "123456789",
  //     name: "User name",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     date: "04/10/2023"
  //   },
  //   {
  //     phone: "123456789",
  //     name: "User name",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     date: "04/10/2023"
  //   },
  //   {
  //     phone: "123456789",
  //     name: "User name",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     date: "04/10/2023"
  //   },
  //   {
  //     phone: "123456789",
  //     name: "User name",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     date: "04/10/2023"
  //   },
  //   {
  //     phone: "123456789",
  //     name: "User name",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     date: "04/10/2023"
  //   },
  //   {
  //     phone: "123456789",
  //     name: "User name",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     date: "04/10/2023"
  //   },
  //   {
  //     phone: "123456789",
  //     name: "User name",
  //     message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  //     date: "04/10/2023"
  //   }
  // ];

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
                <p>{currentDate}</p>
              </div>
              <div className="addadminbuttonSuperadminBox">
                <button onClick={()=>setIsAddAdmin(true)} className="addadminbuttonSuperadmin"><AiOutlinePlus/>Add Admin</button>
              </div>
            </div>
            <div className='rightsecondBoxSuperadmin'>
              <div className="rightsecondBoxSuperadminInputBox">
                <AiOutlineSearch />
                <input className="rightsecondBoxSuperadminInput" 
                  onChange={(e)=>handleAdminSearchInput(e.target.value)}
                  value={adminSearchInput} type="text" placeholder='Search by email or phone number' />
              </div>
              {/* <select className="rightsecondBoxSuperadminSelect" name="" id="">
                <option value="">Filter By</option>
                <option value="">Last 7 days</option>
                <option value="">Last 30 days</option>
                <option value="">Total</option>
              </select> */}
            </div>
            <div className='rightthirdBoxSuperadmin'>
              <div className='userTableSuperAdminHolder'>
                {userData.length > 0 ? 
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
                        return <tr key={i} onClick={()=>navigate(`/superadmin/:${user.id}`)}>
                          <td className="userTableBodySuperAdmin">{i+1}</td>
                          <td className="userTableBodySuperAdmin">{user.businessName}</td>
                          <td className="userTableBodySuperAdmin">{user.email}</td>
                          <td className="userTableBodySuperAdmin">{user.phone}</td>
                          <td className="userTableBodySuperAdmin">{user.subscriptionend!==""? Math.floor((new Date(user.subscriptionend) - new Date(date)) / (1000*60*60*24)) + " days left" : 'Renewal pending'}</td>
                          <td className="userTableBodySuperAdmin">Edit</td>
                        </tr>
                      })}
                    </tbody>
                  </table> 
                  : 
                  <div className="notfounddiv">
                    <img src={noadmin} alt="feedback" />
                    <p>No admin found</p>
                  </div>
                }
              </div>
            </div>
          </div>
          <div className={barnum===2 ? 'rightBoxSuperAdminSupport' : 'rightBoxSuperAdminSupportOff'}>
            <div className='rightBoxSuperAdminSupportText'><p>Support</p></div>
           <div className='rightsecondBoxSuperadmin'>
              <div className="rightsecondBoxSuperadminInputWithSelect">
                <AiOutlineSearch size={"20px"} />
                <input onChange={(e)=>handleRequestSupportInput(e.target.value)} value={requestSupportInput} className="rightsecondBoxSuperadminInput" type="text" placeholder='Search by email or phone number' />
              </div>
              <select onChange={(e)=>setFilterValue(e.target.value)} value={filterValue} className="rightsecondBoxSuperadminSelect" name="" id="">
                <option value="">All time</option>
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
              </select>
            </div>
            <div className='rightthirdBoxSuperadminSupport'>
            {requestsupportdata.length>0 ? <div className='userTableSuperAdminHolder'>
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
                    {requestsupportdata && requestsupportdata.map((feedback, i)=>{
                      return <tr key={i}>
                        <td className="feedbackTableBodySuperAdmin">{i+1}</td>
                        <td className="feedbackTableBodySuperAdmin">{feedback.businessName}</td>
                        <td className="feedbackTableBodySuperAdmin">{feedback.phone}</td>
                        <td className="feedbackTableBodySuperAdmin">{feedback.message}</td>
                        <td className="feedbackTableBodySuperAdmin">{new Date(feedback.createdAt).toLocaleString()}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div> : 
              <div className="notfounddiv">
                <img src={support} alt="support" />
                <p>No record found</p>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
      <div className={ isAddAdmin? "addadmin" : "addadminOff"}>
        <p className='addadmintext'>Add a new admin</p>
        <div>
          <label className='addadminlabel'>Business Name</label><br/>
          <input onChange={(e)=>setAddbusinessName(e.target.value)} value={addbusinessName} className='addadmininput' type="text" placeholder='Name a business' /><br/>
          <label className='addadminlabel'>Email</label><br/>
          <input onChange={(e)=>setAddemail(e.target.value)} value={addemail} className='addadmininput' type="email" placeholder='Enter email' /><br/>
          <label className='addadminlabel'>Phone</label><br/>
          <input onChange={(e)=>setAddphone(e.target.value)} value={addphone} className='addadmininput' type="number" placeholder='Enter phone number' /><br/>
          <label className='addadminlabel'>Set a password</label><br/>
          <input onChange={(e)=>setAddpassword(e.target.value)} value={addpassword} className='addadmininput' type="text" placeholder='Enter password' /><br/>
        </div>
        <button onClick={()=>handleAddAdmin()} className='addadminbutton'>Add Admin</button><br/>
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
