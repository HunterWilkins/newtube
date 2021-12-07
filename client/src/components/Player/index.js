import {useState, useEffect, useRef} from "react";

const Player = () => {

    const playerRef = useRef(null);
    const [time, setTime] = useState(100);
    const togglePlay = () => playerRef.current.paused ? playerRef.current.play() : playerRef.current.pause();
    const cleanUpSeconds = (value) => value.toFixed(0);
    useEffect(() => {
        setTime(playerRef.current.currentTime);
    }, [time]);

    const durationStyle = {
        background: `linear-gradient(to right, red ${(time / playerRef?.current?.duration) * 100}%, red ${(time / playerRef?.current?.duration) * 100 + 1}%, green ${(time / playerRef?.current?.duration) * 100 + 1}%, green ${100}%)`,
        width: "100px",
        height: "30px"
    }

    return (
        <div id = "player">
            <button onClick = {togglePlay}>PAUSE</button>
            <video onTimeUpdate = {() => setTime(playerRef.current.currentTime)} ref = {playerRef} id = "mainvid">
                <source src = {require("../../assets/videos/Wheat Crunchies.mov").default} type = "video/mp4"/>
            </video>
            <p>{cleanUpSeconds(time)} / {0}</p>
            <input id = "duration" style = {durationStyle} type = "range" value = {time} min = "0" max = {playerRef ? playerRef?.current?.duration : 0}/>
        </div>
    )
}

export default Player;