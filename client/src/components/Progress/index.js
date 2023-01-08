import {useState, useEffect} from "react";

const Progress = ({time, playerRef, onTimeChange}) => {

    const cleanUpSeconds = (value) => {
        try {
            return value.toFixed(0);
        }
        catch(error) {
            console.log(value);
        }
    };

    const durationStyle = {
        background: `linear-gradient(to right, transparent 10px, red ${(cleanUpSeconds(time) / cleanUpSeconds(playerRef?.current?.duration)) * 100}%, red ${(cleanUpSeconds(time) / cleanUpSeconds(playerRef?.current?.duration)) * 100}%, transparent ${(cleanUpSeconds(time) / cleanUpSeconds(playerRef?.current?.duration)) * 100 + 1}%, transparent ${100}%)`,   
        width: "100%",
        height: "10px"
    };

    const timeChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <div id = "progressbar" onClick = {(event) => {event.preventDefault(); event.stopPropagation();}}>
            <p>{cleanUpSeconds(time)} / {playerRef ? cleanUpSeconds(playerRef?.current?.duration) : 0}</p>
            <span style = {{position: "relative", display: "flex"}}>
                <input id = "duration" type = "range" onChange = {(event) => onTimeChange(event.target.value)} value = {time} min = "0" max = {playerRef ? cleanUpSeconds(playerRef?.current?.duration) : 0}/>
                <progress style = {durationStyle} min = "0" value = {cleanUpSeconds(time)} max = {playerRef ? cleanUpSeconds(playerRef?.current?.duration) : 0}/>
            </span>
            
        </div>
    );    
}

export default Progress
