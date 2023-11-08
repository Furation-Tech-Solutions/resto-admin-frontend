import React, { useEffect, useState } from "react";
import "../styles/Admin.css";
import logo from "../utils/Images/Admin/logo.svg";
import emoji from "../utils/Images/Admin/emoji.svg";
import closeicon from "../utils/Images/Admin/closeicon.png";
import menu from "../utils/Images/Admin/menu.svg";
import filter from "../utils/Images/Admin/filter.svg";
import feedback from "../utils/Images/Admin/feedback.svg";
import subscriptionandpayment from "../utils/Images/Admin/subscriptionandpayment.svg";
import send from "../utils/Images/Admin/Send.svg";
import calendar from "../utils/Images/Admin/Calendar.svg";
import chevronleft from "../utils/Images/Admin/chevron-right.svg";
import chevronrightdisable from "../utils/Images/Admin/chevron-right-disable.svg";
import chevronright from "../utils/Images/Admin/chevron-left.svg";
import chevronleftdisable from "../utils/Images/Admin/chevron-left-disable.svg";
import checkcircle from '../utils/Images/Admin/checkcircle.svg'
import { AiOutlinePaperClip, AiOutlineCheck } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Line,  Bar, Doughnut } from 'react-chartjs-2';
import CurrentSubscripton from "../components/CurrentSubscripton";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyUniqueUser, getPaymentHistory, getTotalUniqueUser, getUniqueUser, getUserFeedback, getWeeklyUniqueUser, postSendMessage, postSupportRequest } from "../Redux/AppData/action";
import { logout } from "../Redux/AuthData/action";
import { useNavigate } from "react-router-dom";


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

  const navigate= useNavigate();

  const adminDetails= JSON.parse(localStorage.getItem("admin"));

  // if(!adminDetails || adminDetails?.adminId){
  //   navigate("/login");
  // }
  
  const [ currentSubscriptionopen, setCurrentSubscriptionopen ]= useState(false);
  
  const isAuthLoading= useSelector((store)=>store.AuthReducer.isAuthLoading);

  const [ requestSupportValue, setRequestSupportValue]= useState("");

  const [isSubscribed, setIsSubscribed]= useState(false);

  const [ isSidebarPhone, setIsSidebarPhone ]= useState(false);

  const [ isrequestAdmin, setIsRequestAdmin ]= useState(false);

  const [ chartnumphone, setchartnumphone ]= useState(1);

  const [panelUserList, setPanelUserList]= useState("total");
  
  const [barnum, setBarnum] = useState(1);

  const [ sendMessagePhoneNumber, setSendMessagePhoneNumber ] = useState("");

  const [ sendMessagePostData, setSendMessagePostData ]= useState({
    adminId: adminDetails?.adminId || "",
    recipient: "",
    phone_number_id: "",
    messsage: "",
    image: ""
  })

  const handleSendMessageAddButton= () => {
    if(sendMessagePhoneNumber.length===10){
      setSendMessagePostData({...sendMessagePostData, "recipient": sendMessagePhoneNumber})
    }else{
      alert("Please enter 10 digits phone number");
    }
  }

  const handleSendMessageSendButton= () => {
    if(sendMessagePostData.recipient.length!==10){
      alert("Please enter a valid phone number");
    }else if(sendMessagePostData.messsage===""){
      alert("Please enter your message");
    }else {
      console.log(sendMessagePostData);
      dispatch(postSendMessage(sendMessagePostData));
    }
  }

  const date= new Date();

  const subscriptionend= new Date(JSON.parse(localStorage.getItem("admin")).subscriptionend);
  const piechartDate= Math.floor((subscriptionend-date)/(1000*60*60*24));
  const currentMonth= date.getMonth();

  const monthObj= {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December",
  }

  const [ chooseMonth, setChooseMonth ] = useState(currentMonth);


  useEffect(()=>{
    dispatch(getUniqueUser());
    dispatch(getTotalUniqueUser());
    dispatch(getWeeklyUniqueUser());
    dispatch(getMonthlyUniqueUser({"month" : chooseMonth}));
    dispatch(getPaymentHistory());
    dispatch(getUserFeedback());
  }, [chooseMonth])

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
  const subscriptionData= useSelector((store)=>store.AppReducer.paymentHistory);
  const feedbackData= useSelector((store)=>store.AppReducer.userFeedback);


  const weekBarLabels= () => {
    const weekObj= {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat"
    }
    const date= new Date();
    const day0= new Date(date);
    const day1= new Date(date);
    day1.setDate(date.getDate() - 1);
    const day2= new Date(day1);
    day2.setDate(day1.getDate() - 1);
    const day3= new Date(day2);
    day3.setDate(day2.getDate() - 1);
    const day4= new Date(day3);
    day4.setDate(day3.getDate() - 1);
    const day5= new Date(day4);
    day5.setDate(day4.getDate() - 1);
    const day6= new Date(day5);
    day6.setDate(day5.getDate() - 1);
    return [
      weekObj[day6.getDay()],
      weekObj[day5.getDay()],
      weekObj[day4.getDay()],
      weekObj[day3.getDay()],
      weekObj[day2.getDay()],
      weekObj[day1.getDay()],
      weekObj[day0.getDay()],
    ]
  }

  const weekbardata= () => {
    const date= new Date();
    const day0= new Date(date);
    const day1= new Date(date);
    day1.setDate(date.getDate() - 1);
    const day2= new Date(day1);
    day2.setDate(day1.getDate() - 1);
    const day3= new Date(day2);
    day3.setDate(day2.getDate() - 1);
    const day4= new Date(day3);
    day4.setDate(day3.getDate() - 1);
    const day5= new Date(day4);
    day5.setDate(day4.getDate() - 1);
    const day6= new Date(day5);
    day6.setDate(day5.getDate() - 1);
    const day0data= weekData?.filter((day)=>{
      return new Date(day.createdAt)===new Date(day0)
    })
    const day1data= weekData?.filter((day)=>{
      return new Date(day.createdAt)===new Date(day1)
    })
    const day2data= weekData?.filter((day)=>{
      return new Date(day.createdAt)===new Date(day2)
    })
    const day3data= weekData?.filter((day)=>{
      return new Date(day.createdAt)===new Date(day3)
    })
    const day4data= weekData?.filter((day)=>{
      return new Date(day.createdAt)===new Date(day4)
    })
    const day5data= weekData?.filter((day)=>{
      return new Date(day.createdAt)===new Date(day5)
    })
    const day6data= weekData?.filter((day)=>{
      return new Date(day.createdAt)===new Date(day6)
    })
    return [day0data.length, day1data.length, day2data.length, day3data.length, day4data.length, day5data.length, day6data.length];
  }

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
    // console.log(monthData);
  }, [adminpanelInteractionUserData, panelUserList, totalUniqueData, monthData, weekData, uniqueData]);

  useEffect(()=>{
    monthlinedata();
  }, [chooseMonth])

  // const isAuth= useSelector((store)=>store.AuthReducer.isAuth);

  const handleLogout= () => {
    dispatch(logout());
  }

  const weeklydata = {
    labels: weekBarLabels(),
    datasets: [
      {
        label: "Unique users this week",
        backgroundColor: "#AF26FD",
        borderColor: "white",
        data: weekbardata(),
      },
    ],
  };
  const lineOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: true, // Hide y-axis grid lines
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  const barOptions = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: true, // Hide y-axis grid lines
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '',
      },
    },
  };

  const monthlylabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
  
    const monthlydata = {
    labels: monthlylabels,
    datasets: [
      {
        label: "Unique users this month",
        backgroundColor: "#AF26FD",
        borderColor: "#AF26FD",
        borderWidth: 1.5,
        pointRadius: 0.5,
        pointHoverRadius: 5,
        customCanvasBackgroundColor: 'blue',
        fill: {
          target: 'origin',
          opacity: 0.5,
          below: '#AF26FD'
        },
        data: monthlinedata()
      },
    ],
  };

  const userData = [
    {
      phone: "123456789",
      name: "Sanghamitra",
      messeage_count: 12,
    },
    {
      phone: "123456789",
      name: "Sanghamitra",
      messeage_count: 12,
    },
    {
      phone: "123456789",
      name: "Sanghamitra",
      messeage_count: 12,
    },
    {
      phone: "123456789",
      name: "Sanghamitra",
      messeage_count: 12,
    },
  ];
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
  // ];

  // const subscriptionData = [
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: true
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   },
  //   {
  //     plan: "123456789",
  //     type: "Gold",
  //     price: 100,
  //     invoice: "1234",
  //     startdate: "05/09/2023",
  //     enddate: "04/10/2023",
  //     status: false
  //   }
  // ];

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
                <p>13 June, 2023 Tuesday</p>
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
            <div className="rightsecondBoxAdmin">
              <div className="rightsecondBoxCount">
                <div className="rightsecondBoxCountOuter">
                  <div className="rightsecondBoxCountText">
                    <p>Today</p>
                  </div>
                  <div className="rightsecondBoxCountNumber">{uniqueData.length}</div>
                </div>
                <div className="rightsecondBoxCountOuter">
                  <div className="rightsecondBoxCountText">
                    <p>Total</p>
                  </div>
                  <div className="rightsecondBoxCountNumber">{totalUniqueData.length}</div>
                </div>
              </div>
              <div className="AdminTabChartWrapper">
                <div className={chartnumphone===1? "weeklyChartAdmin" : "weeklyChartAdminHide"}>
                  <div className="weeklyChartAdminText">
                    <p>last 7 days</p>
                  </div>
                  <Bar data={weeklydata} options={barOptions} />
                </div>
                <div className={chartnumphone===2? "monthlyChartAdmin" : "monthlyChartAdminHide"}>
                  <div className="monthlyChartAdminText">
                    <p>last 30 days</p>
                    <select onChange={(e)=>setChooseMonth(e.target.value)} value={chooseMonth} className="monthlyChartAdminSelect" name="" id="">
                      <option value={currentMonth}>Current month</option>
                      <option value={currentMonth-1}>{monthObj[currentMonth-1]}</option>
                      <option value={currentMonth-2}>{monthObj[currentMonth-2]}</option>
                    </select>
                  </div>
                  <Line data={monthlydata} options={lineOptions} />
                </div>
                <div className="secondBoxAdminChartNav">
                  <img onClick={()=>setchartnumphone(1)} src={chartnumphone===1? chevronleftdisable : chevronright} alt="" />
                  <div>
                    <div onClick={()=>setchartnumphone(1)} className={chartnumphone===1? "weeklycirclephonediv" : "weeklycirclephonedivOff"}></div>
                    <div onClick={()=>setchartnumphone(2)} className={chartnumphone===2? "monthlycirclephonediv" : "monthlycirclephonedivOff"}></div>
                  </div>
                  <img onClick={()=>setchartnumphone(2)} src={chartnumphone===1? chevronleft : chevronrightdisable} alt="" />
              </div>
              </div>
            </div>
            <div className="rightthirdBoxAdmin">
              <div className="rightthirdBoxAdminSearchBox">
                <FiSearch />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search by name or phone number"
                />
              </div>
              <select name="" id="" onChange={(e)=>setPanelUserList(e.target.value)}>
                <option value="total">Total</option>
                <option value="monthly">This month</option>
                <option value="weekly">Last 7 days</option>
                <option value="daily">Today</option>
              </select>
            </div>
            <div className="rightfourthBoxAdmin">
              { adminpanelInteractionUserData.length > 0 ? <table className="userTableAdmin">
                <thead>
                  <tr>
                    <th className="userTableAdminHead">Sr.No.</th>
                    <th className="userTableAdminHead">Name</th>
                    <th className="userTableAdminHead">Phone Number</th>
                    <th className="userTableAdminHead">Message Count</th>
                  </tr>
                </thead>
                <tbody>
                  {adminpanelInteractionUserData &&
                    adminpanelInteractionUserData.map((user, i) => {
                      return (
                        <tr key={i}>
                          <td className="userTableAdminBody">{i + 1}</td>
                          <td className="userTableAdminBody">{user.name}</td>
                          <td className="userTableAdminBody">{user.recipient}</td>
                          <td className="userTableAdminBody">{user.message_count}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table> : <h2>No data found</h2> }
            </div>
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
                <input onChange={(e)=>setSendMessagePostData({...sendMessagePostData, "messsage": e.target.value})} value={sendMessagePostData.messsage} type="text" placeholder="Type message here..." />
                <AiOutlinePaperClip size={"23px"} color="#878787"/>
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
                <AiOutlinePaperClip size={"25px"} color="#878787"/>
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
                <AiOutlinePaperClip size={"25px"} color="#878787"/>
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
                        <td className="FeedbackTableBodyAdmin">{feed.phone}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.message}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.date}</td>
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
                        <td className={i===0?"SubscriptionTableBodyAdmintrue" : "SubscriptionTableBodyAdmin"}>{subscription.status? "Active" : "Expired"}</td>
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
                <p>13 June, 2023 Tuesday</p>
              </div>
              <div onClick={()=>setCurrentSubscriptionopen(true)} className="countdownrAdminBoxPhone">
                <Doughnut data={doughnutdata} /><br/>
                <div className="countdownrAdminBoxPhoneNumber">{piechartDate}</div>
              </div>
            </div>
            <div className="GraphWrapperPhone">
              <div className="secondBoxAdminPhone">
                <div className="secondBoxInnerAdminPhone">
                  <div className="secondBoxInnerAdminPhoneText">Today</div>
                  <div className="secondBoxInnerAdminPhoneNumber">{uniqueData.length}</div>
                </div>
                <div className="secondBoxInnerAdminPhone">
                  <div className="secondBoxInnerAdminPhoneText">Total</div>
                  <div className="secondBoxInnerAdminPhoneNumber">{totalUniqueData.length}</div>
                </div>
              </div>
              <div className="thirdBoxAdminPhone">
                <div className="thirdBoxAdminChartBoxPhone">
                  {chartnumphone===1 && <div className="thirdBoxAdminWeeklyBoxPhone">
                    <p className="thirdBoxAdminWeeklyBoxPhoneText">This Week</p>
                    <Bar data={weeklydata} options={barOptions} />
                  </div>}
                  {chartnumphone===2 && <div className="thirdBoxAdminMonthlyBoxPhone">
                    <div className="thirdBoxAdminMonthlyBoxPhoneText">
                      <p>last 30 days</p>
                      <select className="monthlyChartAdminSelect" name="" id="">
                        <option value="">Current month</option>
                        <option value="">Previous month</option>
                        <option value="">Last month</option>
                      </select>
                    </div>
                    <Line data={monthlydata} options={lineOptions} />
                  </div>}
                </div>
                <div className="thirdBoxAdminChartNavPhone">
                  <img onClick={()=>setchartnumphone(1)} src={chartnumphone===1? chevronleftdisable : chevronright} alt="" />
                  <div>
                    <div onClick={()=>setchartnumphone(1)} className={chartnumphone===1? "weeklycirclephonediv" : "weeklycirclephonedivOff"}></div>
                    <div onClick={()=>setchartnumphone(2)} className={chartnumphone===2? "monthlycirclephonediv" : "monthlycirclephonedivOff"}></div>
                  </div>
                  <img onClick={()=>setchartnumphone(2)} src={chartnumphone===1? chevronleft : chevronrightdisable} alt="" />
                </div>
              </div>
            </div>
            <div className="fourthBoxAdminPhone">
              <div className="fourthBoxAdminPhoneInputBox">
                <FiSearch />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search by name or phone number"
                />
              </div>
              <div className="fourthBoxAdminPhoneButton">
                {/* <img src={filter} alt="filtericon" /> */}
                <select name="" id="" onChange={(e)=>setPanelUserList(e.target.value)}>
                  {/* <option value="total"><img src={filter} alt="filtericon" /></option> */}
                  <option value="total">Total</option>
                  <option value="monthly">Last 30 Days</option>
                  <option value="weekly">Last 7 days</option>
                  <option value="daily">Today</option>
                </select>
              </div>
            </div>
            <div className="fifthBoxAdminPhone">
            { adminpanelInteractionUserData.length > 0 ? <table className="userTableAdminPhone">
                <thead>
                  <tr>
                    <th className="userTableAdminHeadPhone">Sr.No.</th>
                    <th className="userTableAdminHeadPhone">Name</th>
                    <th className="userTableAdminHeadPhone">Phone Number</th>
                    <th className="userTableAdminHeadPhone">Message Count</th>
                  </tr>
                </thead>
                <tbody>
                  {adminpanelInteractionUserData && adminpanelInteractionUserData.map((user, i) => {
                    return (
                      <tr key={i}>
                        <td className="userTableAdminBodyPhone">{i + 1}</td>
                        <td className="userTableAdminBodyPhone">{user.name}</td>
                        <td className="userTableAdminBodyPhone">{user.recipient}</td>
                        <td className="userTableAdminBodyPhone">{user.message_count}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table> : <h2>No data found</h2> }
            </div>
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
                  <AiOutlinePaperClip size={"23px"} color="#878787"/>
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
                  <AiOutlinePaperClip size={"25px"} color="#878787"/>
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
                  <AiOutlinePaperClip size={"25px"} color="#878787"/>
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
                        <td className="FeedbackTableBodyAdmin">{feed.phone}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.message}</td>
                        <td className="FeedbackTableBodyAdmin">{feed.date}</td>
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
                  <p>25/30 days left</p>
              </div>
              <div className="currentSubscriptionTextBoxAdmin">
                  <p>Plan :- Plan A</p>
                  <p>Status :- Active</p>
                  <p>Start Date :- 01/10/2023</p>
                  <p>End Date :- 30/10/2023</p>
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





{/* <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="currentSubscriptionTextAdmin">Current Subscription</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box className="currentSubscriptionInnerBoxAdmin">
              <Box className="currentSubscriptionDoughnutOuterAdmin">
                <Box className="currentSubscriptionDoughnutInnerAdmin">
                  <Doughnut data={doughnutdata} /><br/>
                  <Box className="currentSubscriptionDoughnutInnerAdminNumber">25</Box>
                </Box>
                <Text>25/30 days left</Text>
              </Box>
              <Box className="currentSubscriptionTextBoxAdmin">
                <Text>Plan :- Plan A</Text>
                <Text>Status :- Active</Text>
                <Text>Start Date :- 01/10/2023</Text>
                <Text>End Date :- 30/10/2023</Text>
              </Box>
              <Box className="currentSubscriptionviewallAdmin" onClick={()=>setBarnum(7)}>View all subscriptions</Box>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button display='none' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className="newSubscriptionTextAdmin">Subscription plans & pricing</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box border='1px solid black' className="newSubscriptionInnerBoxAdmin">
              <Box border='1px solid black' className="newSubscriptionDoughnutOuterAdmin">
                <Box border='1px solid black' className="newSubscriptionbenifitsBoxAdmin">
                  <Image border='1px solid black' src={calendar} alt="" />
                </Box>
                <Text border='1px solid black'>₹ 4000 <span>/ month</span></Text>
              </Box>
              <Box className="currentSubscriptionTextBoxAdmin">
                <Box>
                  <Image src={checkcircle} alt="" />
                  <Text>Premium Membership- <span>Unlock Exclusive Benefits Every Month</span></Text>
                </Box>
                <Box>
                  <Image src={checkcircle} alt="" />
                  <Text>Monthly Subscription- <span>Your Gateway to Ongoing Rewards</span></Text>
                </Box>
                <Box>
                  <Image src={checkcircle} alt="" />
                  <Text>Save with Our Monthly Membership</Text>
                </Box>
              </Box>
              <Button className="newSubscriptionsubscribebuttonAdmin">Subscribe</Button>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button display='none' onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
