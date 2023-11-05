import { Component } from 'react';
import moment from 'moment-timezone';
import './Countdown.css';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    // Set the target date and time in UK timezone
    this.targetDate = moment.tz('2024-10-31 12:0:0', 'Europe/London');

    this.state = {
      timeRemaining: this.calculateTimeRemaining(),
    };
  }

  componentDidMount() {
    // Update the timer every second
    this.interval = setInterval(() => {
      this.setState({
        timeRemaining: this.calculateTimeRemaining(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  calculateTimeRemaining() {
    const now = moment.tz('Europe/London');
    const diff = this.targetDate.diff(now);

    const duration = moment.duration(diff);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="countdown-timer">
        <h1>Countdown Timer</h1>
        <div className="timer">
          <div className="time-block">
            <span className="time">{days}</span>
            <span className="unit">Days</span>
          </div>
          <div className="time-block">
            <span className="time">{hours}</span>
            <span className="unit">Hours</span>
          </div>
          <div className="time-block">
            <span className="time">{minutes}</span>
            <span className="unit">Minutes</span>
          </div>
          <div className="time-block">
            <span className="time">{seconds}</span>
            <span className="unit">Seconds</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
