import React from "react";
import "./App.css"
import Navbar from "./components/Navbar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"

const App = () => {
    return(
    <div className="Container">
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        
    </div>
    )
}
export default App