import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

import './Countdown.css';

function CountdownTimer() {
  const targetDate = moment.tz('2024-06-14 00:00:00', 'Europe/London'); // Set your target date and timezone

  const [countdown, setCountdown] = useState({
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // This function sets up an interval to update the countdown
    const updateCountdown = () => {
      const now = moment.tz('Europe/London');
      const duration = moment.duration(targetDate.diff(now));

      setCountdown({
        years: duration.years(),
        months: duration.months(),
        weeks: duration.weeks(),
        days: duration.days(),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    };

    updateCountdown(); // Update immediately on effect run
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount or before re-running the effect
  }, [targetDate]); // Include targetDate in the dependency array
  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div>
      </div>
      <div className="timer">
      <div className="time-block">
          <span className="time">{countdown.years}</span>
          <span className="unit">Years</span>
        </div> 
      <div className="time-block">
          <span className="time">{countdown.months}</span>
          <span className="unit">Months</span>
        </div>
      <div className="time-block">
          <span className="time">{countdown.weeks}</span>
          <span className="unit">Weeks</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.days}</span>
          <span className="unit">Days</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.hours}</span>
          <span className="unit">Hours</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.minutes}</span>
          <span className="unit">Minutes</span>
        </div>
        <div className="time-block">
          <span className="time">{countdown.seconds}</span>
          <span className="unit">Seconds</span>
        </div>
      </div>
    </div>
  )
  }
export default CountdownTimer

