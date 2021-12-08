import {useState, useEffect} from "react";
import Nav from "../../components/Nav"; 
import Player from "../../components/Player";
import Sidebar from "../../components/Sidebar";
const Home = () => {
    return (
        <div id = "home">
            <Nav />
            <Player />
            <Sidebar />
        </div>
    );
}

export default Home;