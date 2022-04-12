import React, { useState } from "react";
import Weather from "./Weather";
// import { Button } from 'react-bootstrap';
import "./App.css";
import axios from "axios";

export default function Form() {
  let [city, setcity] = useState("Paris");
  let [weather, setweather] = useState({ ready: false ,datestamp:1649739149});

  function displayWeather(response) {
    setweather({
      ready: true,
      city: response.data.name,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      feels: Math.round(response.data.main.feels_like),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed * 3.6),
      datestamp:new Date(response.data.dt * 1000),
      country:response.data.sys.country
      
    });
    console.log(response.data);
    console.log(`Weather: ${weather.datestamp}`);
    console.log(response.data.dt)
  }

  function OnSubmit(event) {
    event.preventDefault();
    let apiKey = "63f25e89554621908d6cac57d52fdced";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(displayWeather);

    event.target.reset()
  }

  function UpdateCity(event) {
    let fieldvalue = event.target.value;
    setcity(fieldvalue);
  }

  if (weather.ready) {
    return (
      <div className="City-Form">
        <form onSubmit={OnSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="text"
                placeholder="Enter the Cityname.."
                onChange={UpdateCity}
                autoComplete="on"
              />
            </div>
            <div className="col-sm-3">
              <button className="btn btn-primary"> Submit</button>
            </div>
          </div>
        </form>

        <div>
          <Weather data={weather} />
        </div>
      </div>
    );
  } else {
    let apiKey = "63f25e89554621908d6cac57d52fdced";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(displayWeather);
    return "Loading...";
  }
}