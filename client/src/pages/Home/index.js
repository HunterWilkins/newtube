import {useState, useEffect} from "react";
import Nav from "../../components/Nav"; 
import Player from "../../components/Player";
const Home = () => {
    return (
        <div id = "home">
            <Nav />
            <Player />
        </div>
    );
}

export default Home;