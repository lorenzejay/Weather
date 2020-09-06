import React, { useState } from "react";
import sun from "./Images/sun.png";
import moon from "./Images/moon.png";
import cloudy from "./Images/cloudy.png";
import haze from "./Images/sunrise.png";
import solar from "./Images/solar.png";
import rain from "./Images/rain.png";

function ShowWeather(props) {
  const [showWeatherIcon, setShowWeatherIcon] = useState();
  const forecast = props.forecast.map((item, i) => {
    const weatherDescription = item.temperature.data[0].main;

    let icon;

    switch (weatherDescription) {
      case "Clouds":
        icon = cloudy;
        break;
      case "Haze":
        icon = haze;
        break;
      case "Clear":
        icon = sun;
        break;
      case "Rain":
        icon = rain;
    }

    return (
      <div key={i} className="showWeather-card">
        <div className="showWeather-location-and-date">
          <h1>{item.location}</h1>
          <div style={{ color: "white" }}>
            <p>{props.currentDate.fulldate}</p>
            <p>As of {props.currentDate.currentDate}</p>
            <p>Currently : {item.temperature.data[0].main}</p>
          </div>
        </div>
        <div className="showWeather-high-low">
          <div className="showWeather-morning">
            <p>Low</p>
            <img src={icon} />
            <p>{item.temperature.low} °F </p>
          </div>

          <div className="showWeather-current">
            <p>Current</p>
            <img src={icon} />
            <p>{item.temperature.temperature} °F </p>
          </div>

          <div className="showWeather-night">
            <p>High</p>
            <img src={icon} />
            <p>{item.temperature.high} °F </p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="showWeather-container">{forecast}</div>;
}

export default ShowWeather;
