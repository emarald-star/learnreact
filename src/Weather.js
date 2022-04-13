import React from "react";
import "./App.css";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import DisplayWeather from "./DisplayWeather";

export default function Weather(props) {
  return (
    <div className="Current-details">
      <h1 className="cityname">{props.data.city}, {props.data.country}</h1>
      <p><CurrentDate  value = {props.data.datestamp}/></p>
      <p>{props.data.desc}</p>
      <div className="row">
        <div className="col-6">
          <h1 className="temp">
            <WeatherIcon icon={props.data.icon} /><DisplayWeather Cels={props.data.temp} /></h1>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels-like:{props.data.feels}°C</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{props.data.wind}km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}