import {useState, useEffect} from "react";
import Nav from "../../components/Nav"; 
const Home = () => {
    return (
        <div id = "home">
            <Nav />
            <div id = "vid">
                <video controls id = "mainvid">
                    <source src = {require("../../images/Wheat Crunchies.mov").default} type = "video/mp4"/>
                </video>
            </div>
        </div>
    );
}

export default Home;