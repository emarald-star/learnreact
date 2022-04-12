import React from "react";
import "./App.css";
import CurrentDate from "./CurrentDate";

export default function Weather(props) {
  return (
    <div className="Current-details">
      <h1>{props.data.city}, {props.data.country}</h1>
      <p><CurrentDate  value = {props.data.datestamp}/></p>
      <p>{props.data.desc}</p>
      <div className="row">
        <div className="col-6">
          <h1>{props.data.temp}°C</h1>
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