import React from "react"

import Info from "./component/Info"
import About from "./component/About"
import Interests from "./component/Interests"
import Footer from "./component/Footer"
import "./style.css"


const App = () => {
    return (
        <div className="app--background-page">
            <div className="app--main_container">
                <Info/>
                <main className="main-container">
                    <About/>
                    <Interests/>
                </main>
                <Footer/>
            </div>
        </div>
        
    )
}

export default App