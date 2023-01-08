import {useState, useEffect} from "react";
import Nav from "../../components/Nav"; 
import Player from "../../components/Player";
import Vid_Details from "../../components/Vid-Details";
import Sidebar from "../../components/Sidebar";
const Home = () => {
    return (
        <div id = "home">
            <Nav />
            <main>
                <div id = "vid-and-comments" className = "flex-1">
                    <Player />
                    <h2 id = "title">Jim Eating a bag of Wheat Crunchies</h2>
                    <Vid_Details />
                    <div id="comments">
                        frog
                    </div>
                </div>
                
                <Sidebar />
            </main>
            
        </div>
    );
}

export default Home;