import {useState, useEffect} from "react";

const Progress = ({time, playerRef}) => {

    const cleanUpSeconds = (value) => {
        try {
            return value.toFixed(0);
        }
        catch(error) {
            console.log(error);
        }
    };

    const durationStyle = {
        background: `linear-gradient(to right, transparent 10px, red ${(cleanUpSeconds(time) / cleanUpSeconds(playerRef?.current?.duration)) * 100}%, red ${(cleanUpSeconds(time) / cleanUpSeconds(playerRef?.current?.duration)) * 100}%, transparent ${(cleanUpSeconds(time) / cleanUpSeconds(playerRef?.current?.duration)) * 100 + 1}%, transparent ${100}%)`,
        width: "100px",
        position: "absolute"
    };

    return (
        <div id = "progressbar">
            <p>{cleanUpSeconds(time)} / {playerRef ? cleanUpSeconds(playerRef?.current?.duration) : 0}</p>
            <span style = {{position: "relative", display: "flex"}}>
                <input id = "duration" style = {{width: "100px", background: "transparent", position: "absolute", zIndex: "5"}} type = "range" value = {time} min = "0" max = {playerRef ? cleanUpSeconds(playerRef?.current?.duration) : 0}/>
                <progress style = {{...durationStyle, width: "70px", height: "20px"}} min = "0" value = {cleanUpSeconds(time)} max = {playerRef ? cleanUpSeconds(playerRef?.current?.duration) : 0}/>
            </span>
            
        </div>
    );    
}

export default Progress
