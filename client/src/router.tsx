import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react"
import Home from "./pages/Home/index.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
