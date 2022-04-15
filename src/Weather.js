import React from "react";
import "./App.css";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import DisplayWeather from "./DisplayWeather";
import WeatherForecast from "./WeatherForecast";

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
            <li><strong>Feels-like{" "}:</strong>{" "}{props.data.feels}°C</li>
            <li><strong>Humidity{" "}:</strong><span className="Humidity">{props.data.humidity}</span>%</li>
            <li><strong>Wind{" "}:</strong><span className="Wind">{props.data.wind}</span>km/hr</li>
          </ul>
        </div>
        <WeatherForecast value ={props.data.coordinates}/>
      </div>
    </div>
  );
}