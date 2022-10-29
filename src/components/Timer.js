import React from "react";
import { useState } from "react";
const Timer = () => {
  const [day, setDay] = useState(new Date());
  const [weekDay, setWeekDay] = useState(new Date());
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getWeekDay = weekdays[weekDay.getDay()];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const getMonth = months[month.getMonth()];

  const getDay = day.getDate();
  const getYear = day.getFullYear();
  return (
    <div className="timer">
      <h2 className="timer-week-day">{getWeekDay}</h2>
      <span className="timer-item">{getMonth}</span>
      <span className="timer-item">{getDay},</span>
      <span className="timer-item">{getYear}</span>
    </div>
  );
};

export default Timer;
