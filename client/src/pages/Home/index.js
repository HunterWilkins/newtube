import {useState, useEffect} from "react";
import Nav from "../../components/Nav"; 
import Sidebar from "../../components/Sidebar";
const Home = () => {
    return (
        <div id = "home">
            <Nav />
            <div className = "row flex-1">
                <div id = "vid" className = "flex-2">
                    <video controls autoPlay muted id = "mainvid">
                        <source src = {require("../../images/Wheat Crunchies.mov").default} type = "video/mp4"/>
                    </video>
                    <span className = "row">
                        <h3>Jim Sterling eating Wheat Crunchies, surrounded by Boglins</h3>
                        <span id = "ratio" className = "row">
                            <p>+</p>
                            <p>-</p>
                            <p>90%</p>
                        </span>
                    </span>
                </div>
                <Sidebar className = "flex-1"/>
            </div>

        </div>
    );
}

export default Home;