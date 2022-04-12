import React from "react";

export default function CurrentDate(props){
    let days = ["Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"]
    let day = days[props.value.getDay()];
    let hour = props.value.getHours();
    if (hour < 10){
        hour = `0${hour}`;
    }
    let date = props.value.getDate();
    let year = props.value.getFullYear();
    let minutes = props.value.getMinutes();

    return(
        <div>{day} {date},{year}  {hour}:{minutes} </div>
    )

}