import React, { useState } from "react";
import "../styles/Admin.css";
import "../styles/Superadmin.css";
import "../styles/SingleAdmin.css";
import logo from "../utils/Images/Admin/logo.svg";
import { AiOutlineSearch } from 'react-icons/ai';
import menu from "../utils/Images/Admin/menu.svg";
import filter from "../utils/Images/Admin/filter.svg";
import chevronleft from "../utils/Images/Admin/chevron-right.svg";
import chevronrightdisable from "../utils/Images/Admin/chevron-right-disable.svg";
import chevronright from "../utils/Images/Admin/chevron-left.svg";
import chevronleftdisable from "../utils/Images/Admin/chevron-left-disable.svg";
import { FiSearch } from 'react-icons/fi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Line,  Bar, Doughnut } from 'react-chartjs-2';
import { useNavigate } from "react-router-dom";

const SingleAdmin = () => {

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

      const navigate= useNavigate();
      
      const [ currentSubscriptionopen, setCurrentSubscriptionopen ]= useState(false);
    
      const [isSubscribed, setIsSubscribed]= useState(true);
    
      const [ isSidebarPhone, setIsSidebarPhone ]= useState(true);
    
      const [ chartnumphone, setchartnumphone ]= useState(1);
    
      
      const [barnum, setBarnum] = useState(1);
    
      // const date = new Date();
    
    
      const weeklylabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const weeklydata = {
        labels: weeklylabels,
        datasets: [
          {
            label: "Unique users this week",
            backgroundColor: "#AF26FD",
            borderColor: "white",
            data: [35, 17, 12, 26, 20, 30, 45],
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
        "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
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
            data: [
              14, 42, 23, 64, 45, 16, 34, 58, 25, 44, 33, 24, 45, 24, 32, 21, 32, 54, 64, 22, 43, 75, 21, 54, 34, 23, 54, 13, 54, 34,
            ]
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
      ];
    
      const subscriptionData = [
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: true
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        },
        {
          plan: "123456789",
          type: "User name",
          price: 100,
          invoice: "1234",
          startdate: "05/09/2023",
          enddate: "04/10/2023",
          status: false
        }
      ];
    
      const doughnutdata = {
        labels: [],
        datasets: [
          {
            label: 'days left',
            data: [5, 25],
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
      <div className={currentSubscriptionopen? "innerBoxAdminOverlay" : "innerBoxAdmin" }>
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
                    <div className="countdownrightDoughnutInnerAdminNumberFirstBox">25</div>
                  </div>
                  <p className="countdownrightText">25/30 days left</p>
                </div>
              </div>
            </div>
            <div className="rightsecondBoxAdmin">
              <div className="rightsecondBoxCount">
                <div className="rightsecondBoxCountOuter">
                  <div className="rightsecondBoxCountText">
                    <p>Today</p>
                  </div>
                  <div className="rightsecondBoxCountNumber">12</div>
                </div>
                <div className="rightsecondBoxCountOuter">
                  <div className="rightsecondBoxCountText">
                    <p>Total</p>
                  </div>
                  <div className="rightsecondBoxCountNumber">42</div>
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
                    <select className="monthlyChartAdminSelect" name="" id="">
                      <option value="">Current month</option>
                      <option value="">Previous month</option>
                      <option value="">Last month</option>
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
              <select name="" id="">
                <option value="">Today</option>
                <option value="">Last 7 Days</option>
                <option value="">Last 30 days</option>
                <option value="">Total</option>
              </select>
            </div>
            <div className="rightfourthBoxAdmin">
              <table className="userTableAdmin">
                <thead>
                  <tr>
                    <th className="userTableAdminHead">Sr.No.</th>
                    <th className="userTableAdminHead">Name</th>
                    <th className="userTableAdminHead">Phone Number</th>
                    <th className="userTableAdminHead">Message Count</th>
                  </tr>
                </thead>
                <tbody>
                  {userData &&
                    userData.map((user, i) => {
                      return (
                        <tr key={user._id}>
                          <td className="userTableAdminBody">{i + 1}</td>
                          <td className="userTableAdminBody">{user.name}</td>
                          <td className="userTableAdminBody">{user.phone}</td>
                          <td className="userTableAdminBody">{user.messeage_count}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
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
      <div className={currentSubscriptionopen? "innerBoxPhoneAdminOverlay" : "innerBoxPhoneAdmin"}>
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
                <div className="countdownrAdminBoxPhoneNumber">25</div>
              </div>
            </div>
            <div className="GraphWrapperPhone">
              <div className="secondBoxAdminPhone">
                <div className="secondBoxInnerAdminPhone">
                  <div className="secondBoxInnerAdminPhoneText">Today</div>
                  <div className="secondBoxInnerAdminPhoneNumber">12</div>
                </div>
                <div className="secondBoxInnerAdminPhone">
                  <div className="secondBoxInnerAdminPhoneText">Total</div>
                  <div className="secondBoxInnerAdminPhoneNumber">42</div>
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
                <img src={filter} alt="filtericon" />
              </div>
            </div>
            <div className="fifthBoxAdminPhone">
              <table className="userTableAdminPhone">
                <thead>
                  <tr>
                    <th className="userTableAdminHeadPhone">Sr.No.</th>
                    <th className="userTableAdminHeadPhone">Name</th>
                    <th className="userTableAdminHeadPhone">Phone Number</th>
                    <th className="userTableAdminHeadPhone">Message Count</th>
                  </tr>
                </thead>
                <tbody>
                  {userData && userData.map((user, i) => {
                    return (
                      <tr key={user._id}>
                        <td className="userTableAdminBodyPhone">{i + 1}</td>
                        <td className="userTableAdminBodyPhone">{user.name}</td>
                        <td className="userTableAdminBodyPhone">{user.phone}</td>
                        <td className="userTableAdminBodyPhone">{user.messeage_count}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
