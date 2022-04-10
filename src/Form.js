import React, {useState} from "react";
import Weather from "./Weather";
// import { Button } from 'react-bootstrap';
import './App.css';


export default function Form(){
    let [city,setcity] = useState("Paris");
    let [message,fullmessage] = useState(<Weather city1={city} />)
    
    function CityName(event){
        event.preventDefault();
        return fullmessage (<Weather city1={city} />)
        
    }
    
    function UpdateCity(event){
        setcity(event.target.value);
        
    }
    
    return(
        <div className="City-Form">
             <form onSubmit={CityName}>
                <div className="row">
                    <div className="col-sm-9">
                        <input type="text" placeholder="Enter the Cityname.." onChange={UpdateCity} autoComplete="off"/>
                    </div>
                    <div className="col-sm-3">
                        <button  className="btn btn-primary"> Submit
                        </button>
                    </div>
                
                </div>
            
            </form>
                        
            <div>{message} </div>
        </div>
                    
                
            

    

    )
}