import React, { useEffect, useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";

export default function WeatherForecast(props) {
    
    let [forecast, setforecast] = useState(" ");
    let [loaded, setload] = useState(false);

    useEffect(()=>{
        setload(false)
    },[props.value])

    function displayForecast(response){
        setforecast(response.data.daily);
        setload(true);
        
    }

    function forecastsearch(){
        let lat = props.value.lat;
        let lon = props.value.lon;
    
        let apikey = "63f25e89554621908d6cac57d52fdced";
        let apiurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apikey}&units=metric`;
         axios.get(apiurl).then(displayForecast);    
    }

    if(loaded){
        return (
        <div className="row">
            {forecast.map((displayweather, index) => {
                if (index < 5){
                    return (
                        <div className="col" key = {index}>
                        <WeatherForecastDay value={displayweather} />
                        </div>
                    );} else 
                    return null;
            })}
        </div>)
    }
    else {
        forecastsearch()

        return(
            <div className="m-5">
                Loading ...
            </div>
        )
    }
}