import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherAPP(){
    const [weatherInfo,setWeatherInfo]=useState({
        feelsLike:24.84,
        temp:25.05,
        tempMin:89,
        tempMax:28,
        humidity:27,
        city:"delhi",
        weather:"haze",
    });
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather APP by Gopal</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/> 
        </div>
    )
}