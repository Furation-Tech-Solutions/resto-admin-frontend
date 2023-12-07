import React, { useState } from 'react'
import closeicon from "../utils/Images/Admin/closeicon.png";
import { Doughnut } from 'react-chartjs-2';
import "../styles/Admin.css";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Filler, LineElement, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

const CurrentSubscripton = ({props}) => {
  
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

    
  const [ currentSubscriptionopen, setCurrentSubscriptionopen ]= useState(props.currentSubscriptionopen);

  return (
    <div className={ currentSubscriptionopen? "currentSubscriptionAdmin" : "currentSubscriptionAdminOff"}>
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
            <div className="currentSubscriptionviewallAdmin" onClick={()=>{
                // setBarnum(7)
                setCurrentSubscriptionopen(false)
            }}>View all subscriptions</div>
        </div>
    </div>
  )
}

export default CurrentSubscripton
