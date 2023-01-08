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

    const [playIconVisibility, setPlayIconVisibility] = useState("play");

    const togglePlayIcons = () => {
        if (!playerRef.current.paused) {
            setPlayIconVisibility("paused");
        }
        else {
            setPlayIconVisibility("play");
        }
    }

    return (
        <div id = "player"  onMouseEnter={() => setControlVisibility(true)} onMouseLeave={() => {setControlVisibility(false); setPlayIconVisibility(null)}}>
            <video onClick = {togglePlay} muted onTimeUpdate = {() => setTime(playerRef.current.currentTime)} ref = {playerRef} id = "mainvid">
                <source src = {require("../../assets/videos/Wheat Crunchies.mov").default} type = "video/mp4"/>
            </video>
            <section onClick = {() => {togglePlay(); togglePlayIcons()}} id = "controls" style = {{display: controlVisibility ? "flex" : "none"}}>
                <img id = "pause-overlay" style = {{display: playIconVisibility === "paused" || !playIconVisibility ? "none" : "block"}} src = {require("../../assets/images/pause placeholder.png").default} />
                <img id = "play-overlay" style = {{display: playIconVisibility  === "play" || !playIconVisibility ? "none" : "block"}} src = {require("../../assets/images/play placeholder.png").default} />
                <Progress time = {time} playerRef = {playerRef} onTimeChange = {(newTime) => updateTime(newTime)}/>
            </section>
        </div>
    )
}

export default Player;