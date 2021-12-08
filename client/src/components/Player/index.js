import {useState, useEffect, useRef} from "react";
import Progress from "../Progress";

const Player = () => {

    const playerRef = useRef(null);
    const [time, setTime] = useState(100);
    const togglePlay = () => playerRef.current.paused ? playerRef.current.play() : playerRef.current.pause();
   
    return (
        <div id = "player">
            <video onClick = {togglePlay} muted onTimeUpdate = {() => setTime(playerRef.current.currentTime)} ref = {playerRef} id = "mainvid">
                <source src = {require("../../assets/videos/Wheat Crunchies.mov").default} type = "video/mp4"/>
            </video>
            <section id = "controls">
                <button onClick = {togglePlay}>PAUSE</button>
                <Progress time = {time} playerRef = {playerRef}/>

            </section>
        </div>
    )
}

export default Player;