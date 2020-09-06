import React, { useState } from "react";
import axios from "axios";
import ShowWeather from "./ShowWeather";

function Weather() {
  const [inputLocation, setInputLocation] = useState("");
  const [forecast, setForecast] = useState([]);
  const [currentDate, setCurrentDate] = useState({ fulldate: "", currentTime: "" });

  const d = new Date();
  const date = d.getDate();
  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  //get date
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const fullDate = `${month} ${date}, ${year}`;

  //get time
  const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

  const handleChange = (e) => {
    setInputLocation(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();

    setCurrentDate({ fulldate: fullDate, currentDate: time });

    axios.get(`/weather?q=${inputLocation}`).then((res) => {
      const weatherData = res.data;
      setForecast([weatherData]);
    });
  };

  return (
    <div>
      <div className="weather-container">
        <h1 className="weather-title">Weather App</h1>
        <input
          placeholder="enter location here"
          type="text"
          name="inputLocation"
          onChange={handleChange}
          value={inputLocation || ""}
          className="weather-input"
        />
        <button onClick={handleClick} className="weather-submit-btn">
          Submit
        </button>
      </div>
      <ShowWeather forecast={forecast} currentDate={currentDate} />
    </div>
  );
}

export default Weather;
