import React, { useContext, useEffect, useState } from "react";
import { useCountdown } from '../Components/CountdownContext'; // Import the context
import moment from 'moment-timezone';
import './button.css'


function Button() {

    const [activeButton, setActiveButton] = React.useState(null); // State to track the active button

    const { setTargetDate, setActiveMode} = useCountdown(); // Use context to get setTargetDate


    const handleButtonClick = (buttonName, date) => {
        if (activeButton === buttonName) {
          setActiveButton(null);
          setActiveMode(null);
          // Optional: Reset the date to some default or clear it
          // setTargetDate(null); 
        } else {
          setTargetDate(moment.tz(date, 'Europe/London'));
          setActiveButton(buttonName);
          setActiveMode(buttonName);
        }
    };

  return (
    <>

        <div className="buttonArea">
            <a className={`buttonMode ${activeButton === "2024-06-14 00:00:00" ? "active" : ""}`} onClick={() => handleButtonClick("2024-06-14 00:00:00")}><span className="texts"> Final Bursary Date </span></a>
            <a className={`buttonMode ${activeButton === "2024-06-16 00:00:00" ? "active" : ""}`} onClick={() => handleButtonClick("2024-06-16 00:00:00")}><span className="texts"> Award Release Date </span></a>
            <a className={`buttonMode ${activeButton === "2024-06-18 00:00:00" ? "active" : ""}`} onClick={() => handleButtonClick("2024-06-18 00:00:00")}><span className="texts"> Grade Results Date </span></a>
            <a className={`buttonMode ${activeButton === "2024-06-19 00:00:00" ? "active" : ""}`} onClick={() => handleButtonClick("2024-06-19 00:00:00")}><span className="texts"> Invitation End Date </span></a>
            <a className={`buttonMode ${activeButton === "2024-07-16 00:00:00" ? "active" : ""}`} onClick={() => handleButtonClick("2024-07-16 00:00:00")}><span className="texts"> Graduation Ceremony Date </span></a>
        </div>

    </>
  )
}

export default Button
