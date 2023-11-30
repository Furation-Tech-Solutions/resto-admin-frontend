import React, { useEffect, useState } from "react";
import "../styles/Admin.css";
import "../styles/Superadmin.css";
import support from "../utils/Images/Admin/support.svg";
import subscriptionandpayment from "../utils/Images/Admin/subscriptionandpayment.svg";
import "../styles/SingleAdmin.css";
import { AiOutlineSearch } from 'react-icons/ai';
import chevronleft from "../utils/Images/Admin/chevronleft.svg";
import logo from "../utils/Images/Admin/logo.svg";
import menu from "../utils/Images/Admin/menu.svg";
import { Doughnut } from 'react-chartjs-2';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyUniqueUser, getPaymentHistory, getSingleAdminData, getSupportRequest, getTotalUniqueUser, getUniqueUser, getUserFeedback, getUserSearchInput, getWeeklyUniqueUser, postImageSendMessage, postSendMessage, postSupportRequest } from "../Redux/AppData/action";
import { logout } from "../Redux/AuthData/action";
import GraphOuter from "../components/GraphOuter";
import GraphWrapperPhone from "../components/GraphWrapperPhone";
import UserTable from "../components/UserTable";
import UserTablePhone from "../components/UserTablePhone";

const SingleAdmin = () => {

  const dispatch= useDispatch();

  const navigate = useNavigate();

  // const adminDetails= JSON.parse(localStorage.getItem("admin"));

  const date= new Date();
  const currentDate= date.toLocaleDateString();

  const location= useLocation();

  useEffect(()=>{
    dispatch(getSingleAdminData({adminId: location.pathname.split("/")[2].split(":")[1]}))
  }, [location])

  const adminDetails= useSelector((store)=>store.AppReducer.singleAdmin);

  const subscriptionend= new Date(JSON.parse(localStorage.getItem("admin")).subscriptionend);
  const piechartDate= Math.floor((subscriptionend-date)/(1000*60*60*24)) || 0;
  const currentMonth= date.getMonth();

  const requestsupportrawdata= useSelector((store)=>store.AppReducer.supportrequest);

  const [ requestsupportdata, setRequestsupportdata ]= useState(requestsupportrawdata);

  const [ currentSubscriptionopen, setCurrentSubscriptionopen ]= useState(false);

  const [ userSearchInput, setUserSearchInput ] = useState("");

  const [ requestSupportInput, setRequestSupportInput ] = useState("");

  const [ isSidebarPhone, setIsSidebarPhone ]= useState(false);

  const [panelUserList, setPanelUserList]= useState("total");

  const [barnum, setBarnum] = useState(1);

  const handleRequestSupportInput= (value) => {
    setRequestSupportInput(value);
    dispatch(getSupportRequest({"input" : value}));
  }

  const [ chooseMonth, setChooseMonth ] = useState(currentMonth);

  const [ filterValue, setFilterValue ] = useState("");

  useEffect(()=>{
    dispatch(getUniqueUser());
    dispatch(getTotalUniqueUser({"input" : userSearchInput}));
    dispatch(getWeeklyUniqueUser());
    dispatch(getMonthlyUniqueUser({"month" : chooseMonth}));
    dispatch(getPaymentHistory({"adminId" : adminDetails.adminId}));
    dispatch(getUserFeedback({"adminId" : adminDetails.adminId}));
  }, [chooseMonth, userSearchInput])

  const uniqueData= useSelector((store)=>store.AppReducer.uniqueUser);
  const totalUniqueData= useSelector((store)=>store.AppReducer.totalUniqueUser);
  const weekData= useSelector((store)=>store.AppReducer.weeklyuniqueUser);
  const monthData= useSelector((store)=>store.AppReducer.monthlyuniqueUser);
  const subscriptionData= useSelector((store)=>store.AppReducer.paymentHistory).reverse();




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
  }, [requestsupportrawdata, filterValue]);


  const monthlinedata= () => {
    const array= [];
    for(let i=1;i<=30;i++){
      const arr= monthData?.filter((el)=>{
        return new Date(el.createdAt).getDate()==i;
      })
      array.push(arr.length);
    }
    return array;
  }
  monthlinedata();

  const [ adminpanelInteractionUserData, setAdminpanelInteractionUserData]= useState(totalUniqueData);

  useEffect(()=>{
    if(panelUserList==="monthly"){
      setAdminpanelInteractionUserData(monthData);
    }else if(panelUserList==="weekly"){
      setAdminpanelInteractionUserData(weekData);
    }else if(panelUserList==="daily"){
      setAdminpanelInteractionUserData(uniqueData);
    }else {
      setAdminpanelInteractionUserData(totalUniqueData);
    }
  }, [adminpanelInteractionUserData, panelUserList, totalUniqueData, monthData, weekData, uniqueData, userSearchInput]);

  useEffect(()=>{
    monthlinedata();
  }, [chooseMonth])

  // const isAuth= useSelector((store)=>store.AuthReducer.isAuth);

  const handleLogout= () => {
    dispatch(logout());
  }

  const doughnutdata = {
    labels: [],
    datasets: [
      {
        label: 'days left',
        data: [30-piechartDate, piechartDate],
        backgroundColor: [
          '#CACACA',
          '#AF26FD'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {/* <div className={currentSubscriptionopen? "innerBoxAdminOverlay" : "innerBoxAdmin" }> */}
      <div className="innerBoxAdmin">
        <div className="leftBoxSuperAdmin">
          <div className="leftfirstBoxSuperAdmin">
            <img src={logo} alt="applogo" />
            <p>Furation Tech</p>
          </div>
          <div className="ContentBoxSideBarrPhoneAdmin">
            <div className="leftsecondBoxSuperAdmin">
              <div
                onClick={() => navigate("/superadmin")}
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
        <div className="rightBoxSingleAdmin">
          <div
            className={
              barnum === 1
                ? "rightDashboardBoxAdmin"
                : "rightDashboardBoxAdminOff"
            }
          >
            <div className="rightupperBoxAdmin">
              <div onClick={()=>navigate("/superadmin")}>
                <img src={chevronleft} alt="chevronleft" />
                <p>Back</p>
              </div>
              <div>
                <p>Edit</p>
              </div>
            </div>
            <div className="rightfirstBoxAdmin">
              <div className="textrightfirstBoxAdmin">
                <p>Hello, Admin!</p>
                <p>Users Overview</p>
                <p>{currentDate}</p>
              </div>
              <div className="countdownrightfirstBoxAdmin">
                {/* <div className="countdownrightfirstRoundOuter">
                  <div className="countdownrightfirstRoundInner">
                    <p>25</p>
                  </div>
                </div> */}
                <div className="countdownrightDoughnutOuterAdminFirstBox">
                  <div className="countdownrightDoughnutInnerAdminFirstBox">
                    <Doughnut data={doughnutdata} /><br/>
                    <div className="countdownrightDoughnutInnerAdminNumberFirstBox">{piechartDate}</div>
                  </div>
                  <p className="countdownrightText">{piechartDate}/30 days left</p>
                </div>
              </div>
            </div>
            <GraphOuter />
            <UserTable />
            <div className="rightSubscriptionBoxSingleAdminInner">
              <p className="SubscriptionTextSingleAdmin">Subscription & Payment History</p>
              {subscriptionData.length>0 ? <div className="subscriptiontableholderSingleAdmin">
                <table className="SubscriptionTableAdmin">
                  <thead>
                    <tr>
                      <th className="SubscriptionTableHeadSingleAdmin">Sr. No.</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Plan</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Status</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Price</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Invoice</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Start Date</th>
                      <th className="SubscriptionTableHeadSingleAdmin">End Date</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionData && subscriptionData.map((subscription, i)=>{
                      return <tr key={i}>
                        <td className="SubscriptionTableBodySingleAdmin">{i+1}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.service}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.status}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.price}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.refno}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{new Date(subscription.startdate).toLocaleString().split(",")[0]}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{new Date(subscription.enddate).toLocaleString().split(",")[0]}</td>
                        <td className={i===0?"SubscriptionTableBodySingleAdmintrue" : "SubscriptionTableBodySingleAdmin"}>{i===0? "Active" : "Expired"}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div> : 
              <div className="notfounddiv">
                <img src={subscriptionandpayment} alt="subscriptionandpayment" />
                <p>No subscription or payment history found</p>
              </div>
              }
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
      {/* <div className={currentSubscriptionopen? "innerBoxPhoneAdminOverlay" : "innerBoxPhoneAdmin"}> */}
      <div className="innerBoxPhoneAdmin">
      <div onClick={()=>isSidebarPhone===true && setIsSidebarPhone(!isSidebarPhone)} className="innerBoxPhoneAdminContent">
          <div className="navPhoneAdmin">
            <div className="menuIconAdminBox">
              <img onClick={()=>setIsSidebarPhone(!isSidebarPhone)} src={menu} alt="menu" />
            </div>
            <div className="logoAdminBox">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div
              className={
                barnum === 1 ? "interactionAdmin" : "interactionAdminOff"
              }>
            <div className="rightupperBoxAdmin">
              <div onClick={()=>navigate("/superadmin")}>
                <img src={chevronleft} alt="chevronleft" />
                <p>Back</p>
              </div>
              <div>
                <p>Edit</p>
              </div>
            </div>
            <div className="firstBoxAdminPhone">
              <div className="firstBoxTextAdminPhone">
                <p>Hello, Admin!</p>
                <p>Users Overview</p>
                <p>{currentDate}</p>
              </div>
              <div className="countdownrAdminBoxPhone">
                <Doughnut data={doughnutdata} /><br/>
                <div className="countdownrAdminBoxPhoneNumber">{piechartDate}</div>
              </div>
            </div>
            <GraphWrapperPhone />
            <UserTablePhone />
            <div className="rightSubscriptionBoxSingleAdminInner">
              <p className="SubscriptionTextSingleAdmin">Subscription & Payment History</p>
              {subscriptionData.length>0 ? <div className="subscriptiontableholderSingleAdmin">
                <table className="SubscriptionTableAdmin">
                  <thead>
                    <tr>
                      <th className="SubscriptionTableHeadSingleAdmin">Sr. No.</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Plan</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Status</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Price</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Invoice</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Start Date</th>
                      <th className="SubscriptionTableHeadSingleAdmin">End Date</th>
                      <th className="SubscriptionTableHeadSingleAdmin">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionData && subscriptionData.map((subscription, i)=>{
                      return <tr key={i}>
                        <td className="SubscriptionTableBodySingleAdmin">{i+1}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.service}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.status}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.price}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{subscription.refno}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{new Date(subscription.startdate).toLocaleString().split(",")[0]}</td>
                        <td className="SubscriptionTableBodySingleAdmin">{new Date(subscription.enddate).toLocaleString().split(",")[0]}</td>
                        <td className={i===0?"SubscriptionTableBodySingleAdmintrue" : "SubscriptionTableBodySingleAdmin"}>{i===0? "Active" : "Expired"}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div> : 
              <div className="notfounddiv">
                <img src={subscriptionandpayment} alt="subscriptionandpayment" />
                <p>No subscription or payment history found</p>
              </div>
              }
            </div>
          </div>
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
                    navigate("/superadmin")
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
                      ? "sidesecondsecondPhoneAdminOn"
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
    </div>
  )
}

export default SingleAdmin
