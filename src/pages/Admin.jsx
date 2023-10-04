import React, { useState } from "react";
import "../styles/Admin.css";
import logo from "../utils/Images/Admin/logo.svg";
import closeicon from "../utils/Images/Admin/closeicon.png"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line,  Bar, Doughnut } from 'react-chartjs-2';


const Admin = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  
  const [barnum, setBarnum] = useState(0);

  // const date = new Date();

  const weeklylabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
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
  ];

  const doughnutdata = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [5, 25],
        backgroundColor: [
          'white',
          '#7200FF'
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="outerBoxAdmin">
      <div className="innerBoxAdmin">
        <div className="leftBoxAdmin">
          <div className="leftfirstBoxAdmin">
            <img src={logo} alt="applogo" />
            <p>Furation Tech</p>
          </div>
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
              onClick={() => {
                if(barnum===2){
                  setBarnum(1);
                }else{
                  setBarnum(2);
                }
              }}
              className={
                barnum === 2
                  ? "leftsecondsecondAdminOn"
                  : "leftsecondsecondAdmin"
              }
            >
              <p>Message</p>
              <div className={barnum===2? "leftsecondseconddivAdmin" : "leftsecondseconddivAdminOff"}>
                <p className={barnum===3? "leftsendMessageAdmin" : "leftsendMessageAdminOff"} onClick={() => setBarnum(3)}>Send Messages</p><br/><br/>
                <p className={barnum===4? "leftsendBulkMessageAdmin" : "leftsendBulkMessageAdminOff"} onClick={() => setBarnum(4)}>Send Bulk messages</p><br/><br/>
                <p className={barnum===5? "leftannouncementAdmin" : "leftannouncementAdminOff"} onClick={() => setBarnum(5)}>Announcement</p><br/><br/>
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
            <div className="leftthirdBoxfirstAdmin">Request Support</div>
            <div className="leftthirdBoxsecondAdmin">Logout</div>
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
                <div className="countdownrightfirstRoundOuter">
                  <div className="countdownrightfirstRoundInner">
                    <p>25</p>
                  </div>
                </div>
                <p>25/30 days left of Plan A</p>
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
              <div className="weeklyChartAdmin">
                <div className="weeklyChartAdminText">
                  <p>last 7 days</p>
                </div>
                <Bar data={weeklydata} options={barOptions} />
              </div>
              <div className="monthlyChartAdmin">
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
            </div>
            <div className="rightthirdBoxAdmin">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by name or phone number"
              />
              <select name="" id="">
                <option value="">Today</option>
                <option value="">Last 7 Days</option>
                <option value="">Last 30 days</option>
                <option value="">Total</option>
              </select>
            </div>
            <div className="rightfourthBoxAdmin">
              <table className="userTableAdmin">
                <tr>
                  <th className="userTableAdminHead">Sr.No.</th>
                  <th className="userTableAdminHead">Name</th>
                  <th className="userTableAdminHead">Phone Number</th>
                  <th className="userTableAdminHead">Message Count</th>
                </tr>
                {userData &&
                  userData.map((user, i) => {
                    return (
                      <tr>
                        <td className="userTableAdminBody">{i + 1}</td>
                        <td className="userTableAdminBody">{user.name}</td>
                        <td className="userTableAdminBody">{user.phone}</td>
                        <td className="userTableAdminBody">{user.messeage_count}</td>
                      </tr>
                    );
                  })}
              </table>
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
              barnum === 3 ? "sendMessageBoxAdmin" : "sendMessageBoxAdminOff"
            }
          >
            <div>
              <p>Send Message</p>
            </div>
            <div>
              <input type="text" placeholder="Enter phone no" />
              <button>Add</button>
            </div>
            <div></div>
            <div>
              <button></button>
              <input type="text" />
              <button>Send</button>
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
              <table className="FeedbackTableAdmin">
                <tr>
                  <th className="FeedbackTableHeadAdmin">Sr. No.</th>
                  <th className="FeedbackTableHeadAdmin">Name</th>
                  <th className="FeedbackTableHeadAdmin">Phone Number</th>
                  <th className="FeedbackTableHeadAdmin">Feedback</th>
                  <th className="FeedbackTableHeadAdmin">Date</th>
                </tr>
                {feedbackData && feedbackData.map((feed, i)=>{
                  return <tr>
                    <td className="FeedbackTableBodyAdmin">{i+1}</td>
                    <td className="FeedbackTableBodyAdmin">{feed.name}</td>
                    <td className="FeedbackTableBodyAdmin">{feed.phone}</td>
                    <td className="FeedbackTableBodyAdmin">{feed.message}</td>
                    <td className="FeedbackTableBodyAdmin">{feed.date}</td>
                  </tr>
                })}
              </table>
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
              <table className="SubscriptionTableAdmin">
                <tr>
                  <th className="SubscriptionTableHeadAdmin">Sr. No.</th>
                  <th className="SubscriptionTableHeadAdmin">Plan</th>
                  <th className="SubscriptionTableHeadAdmin">Type</th>
                  <th className="SubscriptionTableHeadAdmin">Price</th>
                  <th className="SubscriptionTableHeadAdmin">Invoice</th>
                  <th className="SubscriptionTableHeadAdmin">Start Date</th>
                  <th className="SubscriptionTableHeadAdmin">End Date</th>
                  <th className="SubscriptionTableHeadAdmin">Status</th>
                </tr>
                {subscriptionData && subscriptionData.map((subscription, i)=>{
                  return <tr>
                    <td className="SubscriptionTableBodyAdmin">{i+1}</td>
                    <td className="SubscriptionTableBodyAdmin">{subscription.plan}</td>
                    <td className="SubscriptionTableBodyAdmin">{subscription.type}</td>
                    <td className="SubscriptionTableBodyAdmin">{subscription.price}</td>
                    <td className="SubscriptionTableBodyAdmin">{subscription.invoice}</td>
                    <td className="SubscriptionTableBodyAdmin">{subscription.startdate}</td>
                    <td className="SubscriptionTableBodyAdmin">{subscription.enddate}</td>
                    <td className={subscription.status?"SubscriptionTableBodyAdmintrue" : "SubscriptionTableBodyAdmin"}>{subscription.status? "Active" : "Expired"}</td>
                  </tr>
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="currentSubscriptionAdmin">
        <div className="currentSubscriptionCloseAdmin">
          <img src={closeicon} alt="" />
        </div>
        <p className="currentSubscriptionTextAdmin">Current Subscription</p>
        <div className="currentSubscriptionInnerBoxAdmin">
          <div className="currentSubscriptionDoughnutOuterAdmin">
            <div className="currentSubscriptionDoughnutInnerAdmin">
              <Doughnut data={doughnutdata} /><br/>
            </div>
            <p>25/30 days left</p>
          </div>
          <div className="currentSubscriptionTextBoxAdmin">
            <p>Plan :- Plan A</p>
            <p>Status :- Active</p>
            <p>Start Date :- 01/10/2023</p>
            <p>End Date :- 30/10/2023</p>
          </div>
          <div className="currentSubscriptionviewallAdmin" onClick={()=>setBarnum(7)}>View all subscriptions</div>
        </div>
      </div>
      <div className="newSubscriptionAdmin">
        <div className="newSubscriptionCloseAdmin">
          <img src={closeicon} alt="" />
        </div>
        <p className="newSubscriptionTextAdmin">Current Subscription</p>
        <div className="newSubscriptionInnerBoxAdmin">
          <div className="newSubscriptionDoughnutOuterAdmin">
            <div className="newSubscriptionDoughnutInnerAdmin">
              <Doughnut data={doughnutdata} /><br/>
            </div>
            <p>25/30 days left</p>
          </div>
          <div className="newSubscriptionTextBoxAdmin">
            <p>Plan :- Plan A</p>
            <p>Status :- Active</p>
            <p>Start Date :- 01/10/2023</p>
            <p>End Date :- 30/10/2023</p>
          </div>
          <div className="newSubscriptionviewallAdmin" onClick={()=>setBarnum(7)}>View all subscriptions</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
