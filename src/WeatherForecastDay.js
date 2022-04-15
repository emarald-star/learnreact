import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./App.css";

export default function WeatherForecastDay(props){

    let Days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    let date = new Date(props.value.dt * 1000);
    let day = Days[date.getDay()];

    return(
        <ul className="Forecastdetails">
            <li>
                {day}
            </li>
            <li>
                <WeatherIcon icon = {props.value.weather[0].icon}/>
            </li>
            <li>
                <span><strong>{Math.round(props.value.temp.max)}°</strong></span>{" "}<span>{Math.round(props.value.temp.min)}°</span>
            </li>
        </ul>
    )


}