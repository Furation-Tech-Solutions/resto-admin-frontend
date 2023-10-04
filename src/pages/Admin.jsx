import React, { useState } from "react";
import "../styles/Admin.css";
import logo from "../utils/Images/Admin/logo.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line,  Bar  } from 'react-chartjs-2';


const Admin = () => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const [barnum, setBarnum] = useState(1);

  // const date = new Date();

  const weeklylabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
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
              Dashboard
            </div>
            <div
              onClick={() => setBarnum(2)}
              className={
                barnum === 2
                  ? "leftsecondsecondAdminOn"
                  : "leftsecondsecondAdmin"
              }
            >
              Message
            </div>
            <div
              onClick={() => setBarnum(3)}
              className={
                barnum === 3 ? "leftsecondthirdAdminOn" : "leftsecondthirdAdmin"
              }
            >
              Feedback
            </div>
            <div
              onClick={() => setBarnum(4)}
              className={
                barnum === 4
                  ? "leftsecondfourthAdminOn"
                  : "leftsecondfourthAdmin"
              }
            >
              Subscription History
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
          ></div>
          <div
            className={
              barnum === 3
                ? "rightFeedbackBoxAdmin"
                : "rightFeedbackBoxAdminOff"
            }
          ></div>
          <div
            className={
              barnum === 4
                ? "rightSubscriptionBoxAdmin"
                : "rightSubscriptionBoxAdminOff"
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
