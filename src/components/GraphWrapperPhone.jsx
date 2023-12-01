import React, { useEffect, useState } from "react";
import chevronleft from "../utils/Images/Admin/chevron-right.svg";
import chevronrightdisable from "../utils/Images/Admin/chevron-right-disable.svg";
import chevronright from "../utils/Images/Admin/chevron-left.svg";
import chevronleftdisable from "../utils/Images/Admin/chevron-left-disable.svg";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getMonthlyUniqueUser, getPaymentHistory, getTotalUniqueUser, getUniqueUser, getWeeklyUniqueUser } from "../Redux/AppData/action";

const GraphWrapperPhone = () => {

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

  const dispatch = useDispatch();

  const adminDetails = JSON.parse(localStorage.getItem("admin"));

  const date = new Date();

  const currentMonth = date.getMonth();

  const uniqueData = useSelector((store) => store.AppReducer.uniqueUser);
  const totalUniqueData = useSelector(
    (store) => store.AppReducer.totalUniqueUser
  );
  const weekData = useSelector((store) => store.AppReducer.weeklyuniqueUser);
  const monthData = useSelector((store) => store.AppReducer.monthlyuniqueUser);

  const [chartnumphone, setchartnumphone] = useState(1);

  const monthObj = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const [chooseMonth, setChooseMonth] = useState(currentMonth);

  useEffect(() => {
    dispatch(getUniqueUser());
    dispatch(getTotalUniqueUser());
    dispatch(getWeeklyUniqueUser());
    dispatch(getMonthlyUniqueUser({ month: chooseMonth }));
    dispatch(getPaymentHistory({ adminId: adminDetails.adminId }));
  }, [chooseMonth]);

  const weekBarLabels = () => {
    const weekObj = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
    };
    const date = new Date();
    const day0 = new Date(date);
    const day1 = new Date(date);
    day1.setDate(date.getDate() - 1);
    const day2 = new Date(day1);
    day2.setDate(day1.getDate() - 1);
    const day3 = new Date(day2);
    day3.setDate(day2.getDate() - 1);
    const day4 = new Date(day3);
    day4.setDate(day3.getDate() - 1);
    const day5 = new Date(day4);
    day5.setDate(day4.getDate() - 1);
    const day6 = new Date(day5);
    day6.setDate(day5.getDate() - 1);
    return [
      weekObj[day6.getDay()],
      weekObj[day5.getDay()],
      weekObj[day4.getDay()],
      weekObj[day3.getDay()],
      weekObj[day2.getDay()],
      weekObj[day1.getDay()],
      weekObj[day0.getDay()],
    ];
  };

  const weekbardata = () => {
    const date = new Date();
    const day0 = new Date(date);
    const day1 = new Date(date);
    day1.setDate(date.getDate() - 1);
    const day2 = new Date(day1);
    day2.setDate(day1.getDate() - 1);
    const day3 = new Date(day2);
    day3.setDate(day2.getDate() - 1);
    const day4 = new Date(day3);
    day4.setDate(day3.getDate() - 1);
    const day5 = new Date(day4);
    day5.setDate(day4.getDate() - 1);
    const day6 = new Date(day5);
    day6.setDate(day5.getDate() - 1);
    const day0data = weekData?.filter((day) => {
      return (
        new Date(day.createdAt).getDate() == new Date(day0).getDate() &&
        new Date(day.createdAt).getMonth() == new Date(day0).getMonth() &&
        new Date(day.createdAt).getFullYear() == new Date(day0).getFullYear()
      );
    });
    const day1data = weekData?.filter((day) => {
      return (
        new Date(day.createdAt).getDate() == new Date(day1).getDate() &&
        new Date(day.createdAt).getMonth() == new Date(day1).getMonth() &&
        new Date(day.createdAt).getFullYear() == new Date(day1).getFullYear()
      );
    });
    const day2data = weekData?.filter((day) => {
      return (
        new Date(day.createdAt).getDate() == new Date(day2).getDate() &&
        new Date(day.createdAt).getMonth() == new Date(day2).getMonth() &&
        new Date(day.createdAt).getFullYear() == new Date(day2).getFullYear()
      );
    });
    const day3data = weekData?.filter((day) => {
      return (
        new Date(day.createdAt).getDate() == new Date(day3).getDate() &&
        new Date(day.createdAt).getMonth() == new Date(day3).getMonth() &&
        new Date(day.createdAt).getFullYear() == new Date(day3).getFullYear()
      );
    });
    const day4data = weekData?.filter((day) => {
      return (
        new Date(day.createdAt).getDate() == new Date(day4).getDate() &&
        new Date(day.createdAt).getMonth() == new Date(day4).getMonth() &&
        new Date(day.createdAt).getFullYear() == new Date(day4).getFullYear()
      );
    });
    const day5data = weekData?.filter((day) => {
      return (
        new Date(day.createdAt).getDate() == new Date(day5).getDate() &&
        new Date(day.createdAt).getMonth() == new Date(day5).getMonth() &&
        new Date(day.createdAt).getFullYear() == new Date(day5).getFullYear()
      );
    });
    const day6data = weekData?.filter((day) => {
      return (
        new Date(day.createdAt).getDate() == new Date(day6).getDate() &&
        new Date(day.createdAt).getMonth() == new Date(day6).getMonth() &&
        new Date(day.createdAt).getFullYear() == new Date(day6).getFullYear()
      );
    });
    return [
      day6data.length,
      day5data.length,
      day4data.length,
      day3data.length,
      day2data.length,
      day1data.length,
      day0data.length,
    ];
  };

  const monthlinedata = () => {
    const array = [];
    for (let i = 1; i <= 30; i++) {
      const arr = monthData?.filter((el) => {
        return new Date(el.createdAt).getDate() == i;
      });
      array.push(arr.length);
    }
    return array;
  };
  monthlinedata();

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
        position: "top",
      },
      title: {
        display: true,
        text: "",
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
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  const monthlylabels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ];

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
        customCanvasBackgroundColor: "blue",
        fill: {
          target: "origin",
          opacity: 0.5,
          below: "#AF26FD",
        },
        data: monthlinedata(),
      },
    ],
  };

  return (
    <div className="GraphWrapperPhone">
      <div className="secondBoxAdminPhone">
        <div className="secondBoxInnerAdminPhone">
          <div className="secondBoxInnerAdminPhoneText">Today</div>
          <div className="secondBoxInnerAdminPhoneNumber">
            {uniqueData.length}
          </div>
        </div>
        <div className="secondBoxInnerAdminPhone">
          <div className="secondBoxInnerAdminPhoneText">Total</div>
          <div className="secondBoxInnerAdminPhoneNumber">
            {totalUniqueData.length}
          </div>
        </div>
      </div>
      <div className="thirdBoxAdminPhone">
        <div className="thirdBoxAdminChartBoxPhone">
          {chartnumphone === 1 && (
            <div className="thirdBoxAdminWeeklyBoxPhone">
              <p className="thirdBoxAdminWeeklyBoxPhoneText">Last 7 days</p>
              <Bar data={weeklydata} options={barOptions} />
            </div>
          )}
          {chartnumphone === 2 && (
            <div className="thirdBoxAdminMonthlyBoxPhone">
              <div className="thirdBoxAdminMonthlyBoxPhoneText">
                <p>Monthly Data</p>
                <select
                  onChange={(e) => setChooseMonth(e.target.value)}
                  value={chooseMonth}
                  className="monthlyChartAdminSelect"
                  name=""
                  id=""
                >
                  <option value={currentMonth}>Current month</option>
                  <option value={currentMonth - 1}>
                    {monthObj[currentMonth - 1]}
                  </option>
                  <option value={currentMonth - 2}>
                    {monthObj[currentMonth - 2]}
                  </option>
                  <option value={currentMonth - 3}>
                    {monthObj[currentMonth - 3]}
                  </option>
                </select>
              </div>
              <Line data={monthlydata} options={lineOptions} />
            </div>
          )}
        </div>
        <div className="thirdBoxAdminChartNavPhone">
          <img
            onClick={() => setchartnumphone(1)}
            src={chartnumphone === 1 ? chevronleftdisable : chevronright}
            alt="chevronleftright"
          />
          <div>
            <div
              onClick={() => setchartnumphone(1)}
              className={
                chartnumphone === 1
                  ? "weeklycirclephonediv"
                  : "weeklycirclephonedivOff"
              }
            ></div>
            <div
              onClick={() => setchartnumphone(2)}
              className={
                chartnumphone === 2
                  ? "monthlycirclephonediv"
                  : "monthlycirclephonedivOff"
              }
            ></div>
          </div>
          <img
            onClick={() => setchartnumphone(2)}
            src={chartnumphone === 1 ? chevronleft : chevronrightdisable}
            alt="chevronleftright"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphWrapperPhone;
