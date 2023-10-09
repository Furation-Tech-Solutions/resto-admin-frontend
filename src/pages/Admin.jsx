import React, { useState } from "react";
import "../styles/Admin.css";
import logo from "../utils/Images/Admin/logo.svg";
import emoji from "../utils/Images/Admin/emoji.svg";
import closeicon from "../utils/Images/Admin/closeicon.png";
import calendar from "../utils/Images/Admin/Calendar.svg";
import checkcircle from '../utils/Images/Admin/checkcircle.svg'
import { AiOutlinePaperClip } from 'react-icons/ai';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
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

  const [ currentSubscriptionopen, setCurrentSubscriptionopen ]= useState(false);

  const [isSubscribed, setIsSubscribed]= useState(true);

  
  const [barnum, setBarnum] = useState(1);

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
        label: 'days left',
        data: [5, 25],
        backgroundColor: [
          '#CACACA',
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
                <p className={barnum===2 || barnum===3? "leftsendMessageAdmin" : "leftsendMessageAdminOff"} onClick={() => setBarnum(3)}>Send Messages</p><br/><br/>
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
                {/* <div className="countdownrightfirstRoundOuter">
                  <div className="countdownrightfirstRoundInner">
                    <p>25</p>
                  </div>
                </div> */}
                <div className="currentSubscriptionDoughnutOuterAdmin">
                  <div onClick={()=>setCurrentSubscriptionopen(true)} className="currentSubscriptionDoughnutInnerAdmin">
                    <Doughnut data={doughnutdata} /><br/>
                    <div className="currentSubscriptionDoughnutInnerAdminNumber">25</div>
                  </div>
                  <p>25/30 days left</p>
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
            <div className="sendMessageBoxAdminText">
              <p>Send Message</p>
            </div>
            <div className="sendMessageBoxAdminaddcontact">
              <input type="text" placeholder="Enter phone no" />
              <button>Add</button>
            </div>
            <div className="sendMessageBoxAdminmessagebox"></div>
            <div className="sendMessageBoxAdminkeyboard">
              <img src={emoji} alt="emoji face" />
              <div>
                <input type="text" placeholder="Type message here..." />
                <AiOutlinePaperClip size={"25px"} color="#878787"/>
              </div>
              <button>Send</button>
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
              <label class="fileinputwrapperAdmin">
                  <span class="file-input-textAdmin">Upload Excel file</span>
                  <input type="file" id="myfileAdmin" name="myfile" multiple />
                  <span class="file-input-buttonAdmin">Choose File</span>
              </label>
            </div>
            <div className="sendBulkMessageBoxAdminmessagebox"></div>
            <div className="sendBulkMessageBoxAdminkeyboard">
              <img src={emoji} alt="emoji face" />
              <div>
                <input type="text" placeholder="Type message here..." />
                <AiOutlinePaperClip size={"25px"} color="#878787"/>
              </div>
              <button>Send</button>
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
      {isSubscribed===true && <div className={ currentSubscriptionopen? "currentSubscriptionAdmin" : "currentSubscriptionAdminOff"}>
          <div className="currentSubscriptionCloseAdmin">
            <img onClick={()=>setCurrentSubscriptionopen(false)} src={closeicon} alt="" />
          </div>
          <p className="currentSubscriptionTextAdmin">Current Subscription</p>
          <div className="currentSubscriptionInnerBoxAdmin">
            <div className="currentSubscriptionDoughnutOuterAdmin">
              <div className="currentSubscriptionDoughnutInnerAdmin">
                <Doughnut data={doughnutdata} /><br/>
                <div className="currentSubscriptionDoughnutInnerAdminNumber">25</div>
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
    </div>
  );
};

export default Admin;
