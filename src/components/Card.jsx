import React from "react";

function Card(props) {
    const {location, current} = props.data;

    return(
        <div className="flex flex-col text-center bg-white p-8 rounded-lg justify-center shadow-md">
            <div>
                <span className="block text-xl font-bold text-slate-700 ">{location.name}</span>
                <span className="text-sm text-slate-500">{location.region}, {location.country}</span>
            </div>
            
            <div className="flex text-center font-bold  text-slate-700 mt-5">
                <span className="text-6xl">{current.temp_c}</span>
                <span className="text-2xl mt-1">°C</span>
            </div>

            <div className="flex flex-col items-center justify-center">
                <img className="block" src={current.condition.icon} alt="weather_icon" />
                <span className="font-bold  text-slate-700">{current.condition.text}</span>
            </div>

        </div>
    );
}


export default Card;