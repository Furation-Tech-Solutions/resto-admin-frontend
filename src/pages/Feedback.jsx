import React, { useState } from "react";
import "../styles/Feedback.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import furationlogo from "../utils/Images/login/furationlogo.svg";
import { postUserFeedback } from "../Redux/AppData/action";

const Feedback = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[1].split(":")[1];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleFeedback = () => {
    if (name && email && phone && message) {
      dispatch(
        postUserFeedback({
          name,
          recipient: phone,
          mail: email,
          message,
          adminId: id,
        })
      ).then((r) => {
        alert("Feedback Submitted Successfully.");
      });
    }
  };

  return (
    <div className="outerBoxFeedback">
      <div className="innerBoxFeedback">
        <img className="feedbacklogo" src={furationlogo} alt="furationlogo" />
        <div className="formboxfeedback">
          <h2 className="feedbackheading">Feedback form Pritam da dhaba</h2>
          <label className="feedbacklabels">Name</label>
          <br />
          <input
            className="inputfeedback"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Enter your Name"
          />
          <br />
          <label className="feedbacklabels">Phone number</label>
          <br />
          <input
            className="inputfeedback"
            onChange={(e) => {
              if (e.target.value.length <= 10) {
                setPhone(e.target.value);
              }
            }}
            type="text"
            value={phone}
            placeholder="Enter your Number"
          />
          <br />
          <label className="feedbacklabels">Email</label>
          <br />
          <input
            className="inputfeedback"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Enter your Email"
          />
          <br />
          <label className="feedbacklabels">Message</label>
          <br />
          <input
            className="inputfeedback"
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            value={message}
            placeholder="Enter your Message"
          />
          <br />
          <button onClick={() => handleFeedback()} className="submitButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;