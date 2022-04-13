import React, { useState } from "react";

export default function DisplayWeather(props){
let[unit,setunit] = useState("Celsius");

function showFarhenite(event){
    event.preventDefault()
    setunit("Farhenite")
}

function showCelsius(event){
    event.preventDefault()
    setunit("Celsius")
}
function converFarhenite(){
   
    return (props.Cels * 9/5)+32
}

if (unit === "Celsius"){
    return(
        <span>{props.Cels}<span className="Cel">°C |<a href="/" onClick={showFarhenite}>°F</a></span></span>
    )
}
        else {
            return(
                <span>{Math.round(converFarhenite())}<span className="Cel"><a href="/" onClick={showCelsius}>°C</a> |°F</span></span>
            )
        }
        
    
}