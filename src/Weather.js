import React, { useState } from "react";
import './App.css';
import axios from "axios";


export default function Weather(props){
    
    let [weather,setweather] = useState({ready:false}  );
    
    function displayWeather(response){
    setweather({ready:true,
                temp:Math.round(response.data.main.temp), 
                desc:(response.data.weather[0].description), 
                feels:Math.round(response.data.main.feels_like),
                humidity:Math.round(response.data.main.humidity),
                wind:Math.round((response.data.wind.speed)*3.6)})
    }
    
        let apiKey = "63f25e89554621908d6cac57d52fdced";
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city1}&appid=${apiKey}&units=metric`;
        axios.get(apiurl).then(displayWeather);
    
    if(weather.ready){
    return(
        <div className="Current-details">
            <h1>{props.city1} 
            </h1>
            <p>Saturday 17:0 minutes</p>
            <p>{weather.desc}</p>
            <div className="row">
                <div className="col-6">
                    <h1>{(weather.temp)}°C</h1>

                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Feels-like:{weather.feels}°C
                        </li>
                        <li>
                            Humidity:{weather.humidity}%
                        </li>
                        <li>
                            Wind:{weather.wind}km/hr
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }

    else {
        
        return "Loading..."
    }
    
    
}

