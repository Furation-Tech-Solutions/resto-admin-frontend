import React, { useEffect, useState } from "react";
import "../styles/Admin.css";
import logo from "../utils/Images/Admin/logo.svg";
import emoji from "../utils/Images/Admin/emoji.svg";
import closeicon from "../utils/Images/Admin/closeicon.png";
import menu from "../utils/Images/Admin/menu.svg";
import feedback from "../utils/Images/Admin/feedback.svg";
import subscriptionandpayment from "../utils/Images/Admin/subscriptionandpayment.svg";
import send from "../utils/Images/Admin/Send.svg";
import calendar from "../utils/Images/Admin/Calendar.svg";
import checkcircle from '../utils/Images/Admin/checkcircle.svg'
import { AiOutlinePaperClip, AiOutlineCheck } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyUniqueUser, getPaymentHistory, getTotalUniqueUser, getUniqueUser, getUserFeedback, getUserSearchInput, getWeeklyUniqueUser, postImageSendMessage, postSendMessage, postSupportRequest } from "../Redux/AppData/action";
import { logout } from "../Redux/AuthData/action";
import { useNavigate } from "react-router-dom";
import GraphOuter from "../components/GraphOuter";
import GraphWrapperPhone from "../components/GraphWrapperPhone";
import UserTable from "../components/UserTable";
import UserTablePhone from "../components/UserTablePhone";


const Admin = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Filler,
    Title,
    Tooltip,
    Legend
  );

  const dispatch= useDispatch();

  const adminDetails= JSON.parse(localStorage.getItem("admin"));

  const date= new Date();
  const currentDate= date.toLocaleDateString();

  const subscriptionend= new Date(JSON.parse(localStorage.getItem("admin")).subscriptionend);
  const piechartDate= Math.floor((subscriptionend-date)/(1000*60*60*24)) || 0;
  const currentMonth= date.getMonth();
  
  const [ currentSubscriptionopen, setCurrentSubscriptionopen ]= useState(false);
   
  const isAuthLoading= useSelector((store)=>store.AuthReducer.isAuthLoading);

  const [ requestSupportValue, setRequestSupportValue]= useState("");

  const [ userSearchInput, setUserSearchInput ] = useState("");

  const [isSubscribed, setIsSubscribed]= useState(piechartDate!=0);

  const [ isSidebarPhone, setIsSidebarPhone ]= useState(false);

  const [ isrequestAdmin, setIsRequestAdmin ]= useState(false);

  const [panelUserList, setPanelUserList]= useState("total");
  
  const [barnum, setBarnum] = useState(1);

  const [ sendMessagePhoneNumber, setSendMessagePhoneNumber ] = useState("");

  const [ sendMessagePostData, setSendMessagePostData ]= useState({
    adminId: adminDetails?.adminId || "",
    recipient: "",
    phone_number_id: 121686631017880,
    message: "",
    image: ""
  })

  const handleSendMessageAddButton= () => {
    if(sendMessagePhoneNumber.length===10){
      setSendMessagePostData({...sendMessagePostData, "recipient": sendMessagePhoneNumber})
    }else{
      alert("Please enter 10 digits phone number");
    }
  }


  const handleSendMessageFile = (e) => {

    const file = e.target.files[0];

    if (file) {
      setSendMessagePostData({...sendMessagePostData, "image": file});
    }
  }

  const handleSendMessageSendButton= () => {
    if(sendMessagePostData.recipient.length!==10){
      alert("Please enter a valid phone number");
    }else if(sendMessagePostData.message===""){
      alert("Please enter your message");
    }else {
      if(sendMessagePostData.image===""){
        dispatch(postSendMessage(sendMessagePostData));
      }else {
        dispatch(postImageSendMessage(sendMessagePostData));
      }
    }
  }

  const [ chooseMonth, setChooseMonth ] = useState(currentMonth);

  useEffect(()=>{
    dispatch(getUniqueUser());
    dispatch(getTotalUniqueUser({"input" : userSearchInput}));
    dispatch(getWeeklyUniqueUser());
    dispatch(getMonthlyUniqueUser({"month" : chooseMonth}));
    dispatch(getPaymentHistory({"adminId" : adminDetails.adminId}));
    dispatch(getUserFeedback({"adminId" : adminDetails.adminId}));
  }, [chooseMonth, userSearchInput])

  const handleRequestSupport= ()=>{
    const data= {
      message: requestSupportValue,
      adminId: adminDetails.adminId,
      businessName: adminDetails.businessName,
      email: adminDetails.email,
      phone: adminDetails.phone
    }
    dispatch(postSupportRequest(data)).then(()=>{
      setIsRequestAdmin(false);
      alert("Feedback submitted successfully")
    });
  }

  const uniqueData= useSelector((store)=>store.AppReducer.uniqueUser);
  const totalUniqueData= useSelector((store)=>store.AppReducer.totalUniqueUser);
  const weekData= useSelector((store)=>store.AppReducer.weeklyuniqueUser);
  const monthData= useSelector((store)=>store.AppReducer.monthlyuniqueUser);
  const subscriptionData= useSelector((store)=>store.AppReducer.paymentHistory).reverse();
  const feedbackData= useSelector((store)=>store.AppReducer.userFeedback);




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
    <div className="outerBoxAdmin">
      <div className={currentSubscriptionopen || isrequestAdmin ? "innerBoxAdminOverlay" : "innerBoxAdmin" }>
        <div className="leftBoxAdmin">
          <div className="leftfirstBoxAdmin">
            <img src={logo} alt="applogo" />
            <p>Furation Tech</p>
          </div> 
          <div className="ContentBoxSideBarrPhoneAdmin">
            <div className="leftsecondBoxAdmin">
              <div
                onClick={() => setBarnum(1)}
                className={
                  barnum === 1 ? "leftsecondfirstAdminOn" : "leftsecondfirstAdmin"
                }
              >
                <p>Dashboard</p>
              </div>
              <div
                className={
                  barnum === 2 || barnum===3 || barnum===4 || barnum===5
                    ? "leftsecondsecondAdminOn"
                    : "leftsecondsecondAdmin"
                }
              >
                <p onClick={() => {
                  if(barnum===2 || barnum===3 ||barnum===4 ||barnum===5){
                    setBarnum(1);
                  }else{
                    setBarnum(2);
                  }
                }}
                >Message</p>
                <div className={barnum===2 || barnum===3 || barnum===4 || barnum===5? "leftsecondseconddivAdmin" : "leftsecondseconddivAdminOff"}>
                  <p className={barnum===2 || barnum===3? "leftsendMessageAdmin" : "leftsendMessageAdminOff"} onClick={() => setBarnum(3)}>Send Message{(barnum === 2 || barnum === 3) &&<AiOutlineCheck/>} </p><br/><br/>
                  <p className={barnum===4? "leftsendBulkMessageAdmin" : "leftsendBulkMessageAdminOff"} onClick={() => setBarnum(4)}>Bulk message{barnum ===4 && <AiOutlineCheck/>}</p><br/><br/>
                  <p className={barnum===5? "leftannouncementAdmin" : "leftannouncementAdminOff"} onClick={() => setBarnum(5)}>Announcement{barnum ===5 && <AiOutlineCheck/>}</p><br/><br/>
                </div>
              </div>
              <div
                onClick={() => setBarnum(6)}
                className={
                  barnum === 6 ? "leftsecondthirdAdminOn" : "leftsecondthirdAdmin"
                }
              >
                <p>Feedback</p>
              </div>
              <div
                onClick={() => setBarnum(7)}
                className={
                  barnum === 7
                    ? "leftsecondfourthAdminOn"
                    : "leftsecondfourthAdmin"
                }
              >
                <p>Subscription History</p>
              </div>
            </div>
            <div className="leftthirdBoxAdmin">
              <div onClick={()=>setIsRequestAdmin(true)} className="leftthirdBoxfirstAdmin">Request Support</div>
              <div onClick={()=>handleLogout()} className="leftthirdBoxsecondAdmin"><i className={isAuthLoading? "fa fa-spinner fa-spin" : ""}></i>Logout</div>
            </div>
          </div>
        </div>
        <div className="rightBoxAdmin">
          <div
            className={
              barnum === 1
                ? "rightDashboardBoxAdmin"
                : "rightDashboardBoxAdminOff"
            }
          >
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
                  <div onClick={()=>setCurrentSubscriptionopen(true)} className="countdownrightDoughnutInnerAdminFirstBox">
                    <Doughnut data={doughnutdata} /><br/>
                    <div className="countdownrightDoughnutInnerAdminNumberFirstBox">{piechartDate}</div>
                  </div>
                  <p className="countdownrightText">{piechartDate}/30 days left</p>
                </div>
              </div>
            </div>
            <GraphOuter />
            <UserTable />
          </div>
          <div
            className={
              barnum === 2 ? "rightMessageBoxAdmin" : "rightMessageBoxAdminOff"
            }
          >
            <div></div>
          </div>
          <div
            className={
              barnum === 2 || barnum === 3 ? "sendMessageBoxAdmin" : "sendMessageBoxAdminOff"
            }
          >
            <div className="sendMessageBoxAdminText">
              <p>Send Message</p>
            </div>
            <div className="sendMessageBoxAdminaddcontact">
              <input onChange={(e)=>{if(e.target.value.length<=10){setSendMessagePhoneNumber(e.target.value)}}} value={sendMessagePhoneNumber} type="text" placeholder="Enter phone no" />
              <button onClick={()=>handleSendMessageAddButton()}>Add</button>
            </div>
            <div className="sendMessageBoxAdminmessagebox"></div>
            <div className="sendMessageBoxAdminkeyboard">
              <img src={emoji} alt="emoji face" />
              <div>
                <input onChange={(e)=>setSendMessagePostData({...sendMessagePostData, "message": e.target.value})} value={sendMessagePostData.message} type="text" placeholder="Type message here..." />
                {/* <AiOutlinePaperClip size={"23px"} color="#878787"/> */}
                <div className="dropZoneContainer">
                    <input type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png" onChange={(e)=>handleSendMessageFile(e)} />
                    <AiOutlinePaperClip className="dropZoneOverlay" size={"23px"} color="#878787"/>
                </div>
              </div>
              <button onClick={()=>handleSendMessageSendButton()} className="sendMessageBoxAdminkeyboardButtonText">Send</button>
              <button onClick={()=>handleSendMessageSendButton()} className="sendMessageBoxAdminkeyboardButtonImg"><img src={send} alt="" /></button>
            </div>
          </div>
          <div
            className={
              barnum === 4 ? "sendBulkMessageBoxAdmin" : "sendBulkMessageBoxAdminOff"
            }
          >
            <div className="sendBulkMessageBoxAdminText">
              <p>Send Bulk Message</p>
            </div>
            <div className="sendBulkMessageBoxAdminaddcontact">
              {/* <input className="sendBulkMessageBoxAdminaddcontactInput" type="text" placeholder="Upload Excel file" />
              <input className="sendBulkMessageBoxAdminaddcontactFile" type="file" placeholder="Choose File" /> */}
              <label className="fileinputwrapperAdmin">
                  <span className="file-input-textAdmin">Upload Excel file</span>
                  <input type="file" id="myfileAdmin" name="myfile" multiple />
                  <span className="file-input-buttonAdmin">Choose File</span>
              </label>
            </div>
            <div className="sendBulkMessageBoxAdminmessagebox"></div>
            <div className="sendBulkMessageBoxAdminkeyboard">
              <img src={emoji} alt="emoji face" />
              <div>
                <input type="text" placeholder="Type message here..." />
                <div className="dropZoneContainer">
                    <input type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" />
                    <AiOutlinePaperClip className="dropZoneOverlay" size={"23px"} color="#878787"/>
                </div>
              </div>
              <button className="sendBulkMessageBoxAdminkeyboardButtonText">Send</button>
              <button className="sendBulkMessageBoxAdminkeyboardButtonImg"><img src={send} alt="" /></button>
            </div>
          </div>
          <div
            className={
              barnum === 5 ? "announcementBoxAdmin" : "announcementBoxAdminOff"
            }
          >
            <div className="announcementBoxAdminText">
              <p>Announcement</p>
            </div>
            <div className="announcementBoxAdminmessagebox"></div>
            <div className="announcementBoxAdminkeyboard">
              <img src={emoji} alt="emoji face" />
              <div>
                <input type="text" placeholder="Type message here..." />
                <div className="dropZoneContainer">
                    <input type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" />
                    <AiOutlinePaperClip className="dropZoneOverlay" size={"23px"} color="#878787"/>
                </div>
              </div>
              <button className="announcementBoxAdminkeyboardButtonText">Send</button>
              <button className="announcementBoxAdminkeyboardButtonImg"><img src={send} alt="" /></button>
            </div>
          </div>
          <div
            className={
              barnum === 6
                ? "rightFeedbackBoxAdmin"
                : "rightFeedbackBoxAdminOff"
            }
          >
            <div className="rightFeedbackBoxAdminInner">
              <p className="FeedbackTextAdmin">Feedback</p>
              {feedbackData.length>0 ? <div className="feedbacktableholder">
                <table className="FeedbackTableAdmin">
                  <thead>
                    <tr>
                      <th className="FeedbackTableHeadAdmin">Sr. No.</th>
                      <th className="FeedbackTableHeadAdmin">Name</th>
                      <th className="FeedbackTableHeadAdmin">Phone Number</th>
                      <th className="FeedbackTableHeadAdmin">Feedback</th>
                      <th className="FeedbackTableHeadAdmin">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackData && feedbackData.map((feed, i)=>{
                      return <tr key={i}>
                        <td className="FeedbackTableBodyAdmin">{i+1}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.name}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.recipient}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.message}</td>
                        <td className="FeedbackTableBodyAdmin">{new Date(feed.createdAt).toLocaleString()}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div> : 
              <div className="notfounddiv">
                <img src={feedback} alt="feedback" />
                <p>No feedback found</p>
              </div>
              }
            </div>
          </div>
          <div
            className={
              barnum === 7
                ? "rightSubscriptionBoxAdmin"
                : "rightSubscriptionBoxAdminOff"
            }
          >
            <div className="rightSubscriptionBoxAdminInner">
              <p className="SubscriptionTextAdmin">Subscription & Payment History</p>
              {subscriptionData.length>0 ? <div className="subscriptiontableholder">
                <table className="SubscriptionTableAdmin">
                  <thead>
                    <tr>
                      <th className="SubscriptionTableHeadAdmin">Sr. No.</th>
                      <th className="SubscriptionTableHeadAdmin">Plan</th>
                      <th className="SubscriptionTableHeadAdmin">Status</th>
                      <th className="SubscriptionTableHeadAdmin">Price</th>
                      <th className="SubscriptionTableHeadAdmin">Invoice</th>
                      <th className="SubscriptionTableHeadAdmin">Start Date</th>
                      <th className="SubscriptionTableHeadAdmin">End Date</th>
                      <th className="SubscriptionTableHeadAdmin">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionData && subscriptionData.map((subscription, i)=>{
                      return <tr key={i}>
                        <td className="SubscriptionTableBodyAdmin">{i+1}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.service}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.status}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.price}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.refno}</td>
                        <td className="SubscriptionTableBodyAdmin">{new Date(subscription.startdate).toLocaleString()}</td>
                        <td className="SubscriptionTableBodyAdmin">{new Date(subscription.enddate).toLocaleString()}</td>
                        <td className={i===0?"SubscriptionTableBodyAdmintrue" : "SubscriptionTableBodyAdmin"}>{i===0? "Active" : "Expired"}</td>
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
      </div>
      <div className={currentSubscriptionopen || isrequestAdmin ? "innerBoxPhoneAdminOverlay" : "innerBoxPhoneAdmin"}>
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
            <div className="firstBoxAdminPhone">
              <div className="firstBoxTextAdminPhone">
                <p>Hello, Admin!</p>
                <p>Users Overview</p>
                <p>{currentDate}</p>
              </div>
              <div onClick={()=>setCurrentSubscriptionopen(true)} className="countdownrAdminBoxPhone">
                <Doughnut data={doughnutdata} /><br/>
                <div className="countdownrAdminBoxPhoneNumber">{piechartDate}</div>
              </div>
            </div>
            <GraphWrapperPhone />
            <UserTablePhone />
          </div>
          <div
              className={
                barnum === 2 || barnum === 3 ? "sendMessageBoxAdmin" : "sendMessageBoxAdminOff"
              }
            >
              <div className="sendMessageBoxAdminText">
                <p>Send Message</p>
              </div>
              <div className="sendMessageBoxAdminaddcontact">
                <input onChange={(e)=>{if(e.target.value.length<=10){setSendMessagePhoneNumber(e.target.value)}}} value={sendMessagePhoneNumber} type="number" placeholder="Enter phone no" />
                <button onClick={()=>handleSendMessageAddButton()}>Add</button>
              </div>
              <div className="sendMessageBoxAdminmessagebox"></div>
              <div className="sendMessageBoxAdminkeyboard">
                <img src={emoji} alt="emoji face" />
                <div>
                  <input onChange={(e)=>setSendMessagePostData({...sendMessagePostData, "messsage": e.target.value})} value={sendMessagePostData.messsage} type="text" placeholder="Type message here..." />
                  {/* <AiOutlinePaperClip size={"23px"} color="#878787"/> */}
                  <div className="dropZoneContainer">
                    <input type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" />
                    <AiOutlinePaperClip className="dropZoneOverlay" size={"23px"} color="#878787"/>
                  </div>
                </div>
                <button onClick={()=>handleSendMessageSendButton()} className="sendMessageBoxAdminkeyboardButtonText">Send</button>
                <button onClick={()=>handleSendMessageSendButton()} className="sendMessageBoxAdminkeyboardButtonImg"><img src={send} alt="" /></button>
              </div>
          </div>
          <div
              className={
                barnum === 4 ? "sendBulkMessageBoxAdmin" : "sendBulkMessageBoxAdminOff"
              }
            >
              <div className="sendBulkMessageBoxAdminText">
                <p>Send Bulk Message</p>
              </div>
              <div className="sendBulkMessageBoxAdminaddcontact">
                {/* <input className="sendBulkMessageBoxAdminaddcontactInput" type="text" placeholder="Upload Excel file" />
                <input className="sendBulkMessageBoxAdminaddcontactFile" type="file" placeholder="Choose File" /> */}
                <label className="fileinputwrapperAdmin">
                    <span className="file-input-textAdmin">Upload Excel file</span>
                    <input type="file" id="myfileAdmin" name="myfile" multiple />
                    <span className="file-input-buttonAdmin">Choose File</span>
                </label>
              </div>
              <div className="sendBulkMessageBoxAdminmessagebox"></div>
              <div className="sendBulkMessageBoxAdminkeyboard">
                <img src={emoji} alt="emoji face" />
                <div>
                  <input type="text" placeholder="Type message here..." />
                  {/* <AiOutlinePaperClip size={"25px"} color="#878787"/> */}
                  <div className="dropZoneContainer">
                    <input type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" />
                    <AiOutlinePaperClip className="dropZoneOverlay" size={"23px"} color="#878787"/>
                  </div>
                </div>
                <button className="sendBulkMessageBoxAdminkeyboardButtonText">Send</button>
                <button className="sendBulkMessageBoxAdminkeyboardButtonImg"><img src={send} alt="" /></button>
              </div>
          </div>
          <div
              className={
                barnum === 5 ? "announcementBoxAdmin" : "announcementBoxAdminOff"
              }
            >
              <div className="announcementBoxAdminText">
                <p>Announcement</p>
              </div>
              <div className="announcementBoxAdminmessagebox"></div>
              <div className="announcementBoxAdminkeyboard">
                <img src={emoji} alt="emoji face" />
                <div>
                  <input type="text" placeholder="Type message here..." />
                  {/* <AiOutlinePaperClip size={"25px"} color="#878787"/> */}
                  <div className="dropZoneContainer">
                    <input type="file" id="drop_zone" className="FileUpload" accept=".jpg,.png,.gif" />
                    <AiOutlinePaperClip className="dropZoneOverlay" size={"23px"} color="#878787"/>
                  </div>
                </div>
                <button className="announcementBoxAdminkeyboardButtonText">Send</button>
                <button className="announcementBoxAdminkeyboardButtonImg"><img src={send} alt="" /></button>
              </div>
          </div>
          <div
            className={
              barnum === 6
                ? "rightFeedbackBoxAdmin"
                : "rightFeedbackBoxAdminOff"
            }
          >
            <div className="rightFeedbackBoxAdminInner">
              <p className="FeedbackTextAdmin">Feedback</p>
              {feedbackData.length>0 ? <div className="feedbacktableholder">
                <table className="FeedbackTableAdmin">
                  <thead>
                    <tr>
                      <th className="FeedbackTableHeadAdmin">Sr. No.</th>
                      <th className="FeedbackTableHeadAdmin">Name</th>
                      <th className="FeedbackTableHeadAdmin">Phone Number</th>
                      <th className="FeedbackTableHeadAdmin">Feedback</th>
                      <th className="FeedbackTableHeadAdmin">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackData && feedbackData.map((feed, i)=>{
                      return <tr key={i}>
                        <td className="FeedbackTableBodyAdmin">{i+1}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.name}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.recipient}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.message}</td>
                        <td className="FeedbackTableBodyAdmin">{new Date(feed.createdAt).toLocaleString()}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div> : 
                <div className="notfounddiv">
                  <img src={feedback} alt="feedback" />
                  <p>No subscription or payment history found</p>
                </div>
              }
            </div>
          </div>
          <div
            className={
              barnum === 7
                ? "rightSubscriptionBoxAdmin"
                : "rightSubscriptionBoxAdminOff"
            }
          >
            <div className="rightSubscriptionBoxAdminInner">
              <p className="SubscriptionTextAdmin">Subscription & Payment History</p>
              {subscriptionData.length>0 ? <div className="subscriptiontableholder">
                <table className="SubscriptionTableAdmin">
                  <thead>
                    <tr>
                      <th className="SubscriptionTableHeadAdmin">Sr. No.</th>
                      <th className="SubscriptionTableHeadAdmin">Plan</th>
                      <th className="SubscriptionTableHeadAdmin">Status</th>
                      <th className="SubscriptionTableHeadAdmin">Price</th>
                      <th className="SubscriptionTableHeadAdmin">Invoice</th>
                      <th className="SubscriptionTableHeadAdmin">Start Date</th>
                      <th className="SubscriptionTableHeadAdmin">End Date</th>
                      <th className="SubscriptionTableHeadAdmin">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionData && subscriptionData.map((subscription, i)=>{
                      return <tr key={i}>
                        <td className="SubscriptionTableBodyAdmin">{i+1}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.service}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.status}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.price}</td>
                        <td className="SubscriptionTableBodyAdmin">{subscription.refno}</td>
                        <td className="SubscriptionTableBodyAdmin">{new Date(subscription.startdate).toLocaleString()}</td>
                        <td className="SubscriptionTableBodyAdmin">{new Date(subscription.enddate).toLocaleString()}</td>
                        <td className={subscription.status?"SubscriptionTableBodyAdmintrue" : "SubscriptionTableBodyAdmin"}>{subscription.status? "Active" : "Expired"}</td>
                      </tr>
                    })}
                  </tbody>
                </table>
              </div> : 
                <div className="notfounddiv">
                  <img src={feedback} alt="feedback" />
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
          {/* <div className="FirstBoxsideBarPhoneAdmin">
              <img src={logo} alt="logo" />
              <p>Furation Tech</p>
          </div> */}
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
                  className={
                    barnum === 2 || barnum===3 || barnum===4 || barnum===5
                      ? "sidesecondsecondPhoneAdminOn"
                      : "sidesecondsecondPhoneAdmin"
                  }
                >
                  <p onClick={() => {
                    if(barnum===2 || barnum===3 ||barnum===4 ||barnum===5){
                      setBarnum(1);
                    }else{
                      setBarnum(2);
                    }
                  }}
                  >Message</p>
                  <div className={barnum===2 || barnum===3 || barnum===4 || barnum===5? "sidesecondseconddivPhoneAdmin" : "sidesecondseconddivPhoneAdminOff"}>
                    <p className={barnum===2 || barnum===3? "sidesendMessagePhoneAdmin" : "sidesendMessagePhoneAdminOff"} onClick={() => {
                      setBarnum(3)
                      setIsSidebarPhone(!isSidebarPhone)
                    }}>Send Message {(barnum === 2 || barnum === 3) && <AiOutlineCheck/>} </p><br/><br/>
                    <p className={barnum===4? "sidesendBulkMessagePhoneAdmin" : "sidesendBulkMessagePhoneAdminOff"} onClick={() => {
                      setBarnum(4)
                      setIsSidebarPhone(!isSidebarPhone)
                    }}>Bulk message {barnum ===4 && <AiOutlineCheck/>}</p><br/><br/>
                    <p className={barnum===5? "sideannouncementPhoneAdmin" : "sideannouncementPhoneAdminOff"} onClick={() => {
                      setBarnum(5)
                      setIsSidebarPhone(!isSidebarPhone)
                    }}>Announcement {barnum ===5 && <AiOutlineCheck/>}</p><br/><br/>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setBarnum(6)
                    setIsSidebarPhone(!isSidebarPhone)
                  }}
                  className={
                    barnum === 6 ? "sidesecondthirdPhoneAdminOn" : "sidesecondthirdPhoneAdmin"
                  }
                >
                  <p>Feedback</p>
                </div>
                <div
                  onClick={() => {
                    setBarnum(7)
                    setIsSidebarPhone(!isSidebarPhone)
                  }}
                  className={
                    barnum === 7
                      ? "sidesecondfourthPhoneAdminOn"
                      : "sidesecondfourthPhoneAdmin"
                  }
                >
                  <p>Subscription History</p>
                </div>
            </div>
            <div className="ThirdBoxsideBarPhoneAdmin">
              <div onClick={()=> {
                setIsRequestAdmin(true)
                setIsSidebarPhone(!isSidebarPhone)}
               } className="ThirdBoxsideBarFirstPhoneAdmin">Request Support</div>
              <div onClick={()=>handleLogout()} className="ThirdBoxsideBarSecondPhoneAdmin"><i className={isAuthLoading? "fa fa-spinner fa-spin" : ""}></i>Logout</div>
            </div>
          </div>
        </div>
      
      </div>
      {isSubscribed===true &&  <div className={ currentSubscriptionopen? "currentSubscriptionAdmin" : "currentSubscriptionAdminOff"}>
          <div className="currentSubscriptionCloseAdmin">
              <img onClick={()=>setCurrentSubscriptionopen(false)} src={closeicon} alt="" />
          </div>
          <p className="currentSubscriptionTextAdmin">Current Subscription</p>
          <div className="currentSubscriptionInnerBoxAdmin">                                                                                                                                                                                                                                                        
              <div className="currentSubscriptionDoughnutOuterAdmin">
                  <div className="currentSubscriptionDoughnutInnerAdmin">
                      <Doughnut data={doughnutdata} /><br/>
                      <div className="currentSubscriptionDoughnutInnerAdminNumber">{piechartDate}</div>
                  </div>
                  <p>{piechartDate}/30 days left</p>
              </div>
              <div className="currentSubscriptionTextBoxAdmin">
                  <p>Plan :- Plan A</p>
                  <p>Status :- Active</p>
                  <p>Start Date :- {adminDetails.startdate}</p>
                  <p>End Date :- {new Date(adminDetails.subscriptionend).toLocaleDateString()}</p>
              </div>
              <div className="currentSubscriptionviewallAdmin" onClick={()=>{
                  setBarnum(7)
                  setCurrentSubscriptionopen(false)
              }}>View all subscriptions</div>
          </div>
        </div>
      }
      {isSubscribed===false && <div className={ currentSubscriptionopen? "newSubscriptionAdmin" : "newSubscriptionAdminOff"}>
          <div className="newSubscriptionCloseAdmin">
            <img onClick={()=>setCurrentSubscriptionopen(false)} src={closeicon} alt="" />
          </div>
          <p className="newSubscriptionTextAdmin">Subscription plans & pricing</p>
          <div className="newSubscriptionInnerBoxAdmin">
            <div className="newSubscriptionDoughnutOuterAdmin">
              <p>Monthly Subscription</p>
              <div>
                <img src={calendar} alt="" />
              </div>
              <p>₹ 4000 <span>/ month</span></p>
            </div>
            <div className="newSubscriptionbenifitsBoxAdmin">
              <div>
                <img src={checkcircle} alt="" />
                <p>Premium Membership- <span>Unlock Exclusive Benefits Every Month</span></p>
              </div>
              <div>
                <img src={checkcircle} alt="" />
                <p>Monthly Subscription- <span>Your Gateway to Ongoing Rewards</span></p>
              </div>
              <div>
                <img src={checkcircle} alt="" />
                <p>Save with Our Monthly Membership</p>
              </div>
            </div>
            <button className="newSubscriptionsubscribebuttonAdmin">Subscribe</button>
          </div>
        </div>
      }
      <div className={ isrequestAdmin? "requestSupportAdmin" : "requestSupportAdminOff"}>
        <div className="requestSupportCloseAdmin">
          <img onClick={()=>setIsRequestAdmin(false)} src={closeicon} alt="" />
        </div>
        <p className="requestSupportTextAdmin">Feedback</p>
        <div className="requestSupporttextBox">
          <textarea onChange={(e)=>setRequestSupportValue(e.target.value)} value={requestSupportValue} className="requestSupportInput" type="text" placeholder="Write your feedback here" />
        </div>
        <button onClick={()=>handleRequestSupport()} className="requestSupportButton">Submit</button>
      </div>
    </div>
  );
};

export default Admin;