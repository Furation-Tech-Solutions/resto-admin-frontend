import React, { useState, useEffect } from 'react'
import "../styles/AdminDashboard.css"
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from 'react-redux';

const AdminDashboard = () => {

  const [boxnum, setBoxnum]= useState("firstbox");
  const dispatch= useDispatch();

  const [sendMessage, setSendMessage]= useState({
    number: "",
    messsage: "",
    image: ""
  });

  const [bulkMessage, setBulkMessage]= useState({
    excel: "",
    messsage: "",
    image: ""
  });

  const [announcement, setAnnouncement]= useState({
    messsage: "",
    image: ""
  });

  const dailyInteraction= useSelector((store)=>store.AppReducer.uniqueUser);
  console.log(dailyInteraction);
  const totalInteraction= useSelector((store)=>store.AppReducer.totalUniqueUser);
  console.log(totalInteraction);
  const weeklyInteraction= useSelector((store)=>store.AppReducer.monthlyniqueUser);
  const monthlyInteraction= useSelector((store)=>store.AppReducer.uniqueUser);

  const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Unique users this week",
        backgroundColor: "teal",
        borderColor: "white",
        data: [45, 10, 5, 26, 20, 30, 45, 56]
      },
    ],
  }

  // useEffect(()=>{
  //   dispatch(getUniqueUser()).then((r)=>{
  //     console.log(r);
  //     setDailyInteraction(r)
  //   });
  // }, [])


  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default AdminDashboard
