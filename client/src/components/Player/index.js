import {useState, useEffect, useRef} from "react";
import Progress from "../Progress";
import "./style.css";

const Player = () => {

    const playerRef = useRef(null);
    const [time, setTime] = useState(100);
    const togglePlay = () => playerRef.current.paused ? playerRef.current.play() : playerRef.current.pause();
    const [controlVisibility, setControlVisibility] = useState(false);
    const updateTime = (time) => {
        try {
            playerRef.current.currentTime = time;
        }
        catch (error) {
            console.log(error);
            console.log(time);
        }
    }

    return (
        <div id = "player" onMouseEnter={() => setControlVisibility(true)} >
            <video onClick = {togglePlay} muted onTimeUpdate = {() => setTime(playerRef.current.currentTime)} ref = {playerRef} id = "mainvid">
                <source src = {require("../../assets/videos/Wheat Crunchies.mov").default} type = "video/mp4"/>
            </video>
            <section id = "controls" style = {{display: controlVisibility ? "block" : "none"}}>
                <button onClick = {togglePlay}>PAUSE</button>
                <Progress time = {time} playerRef = {playerRef} onTimeChange = {(newTime) => updateTime(newTime)}/>
            </section>
        </div>
    )
}

export default Player;