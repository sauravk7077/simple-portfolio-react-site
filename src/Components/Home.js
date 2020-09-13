import React from "react";
import Pulse from "react-reveal/Pulse"

function Home() {
    return(
        <section id="home" className="flex column">
            <div>
                <Pulse duration={1500} delay={2000} forever><h1>My Portfolio Page</h1></Pulse>
                <h2 className="homeText">
                    <span>Web Developer</span><span>Javascript, Python </span>Frontend, Backend.
                </h2>
            </div>
            <div className="flex">
                <a href="#portfolio" className='button btn-outline wide'>My Portfolio</a>
                <a href="#contact" className='button btn-solid wide'>Contact Me</a>
            </div>
        </section>
    )
}


export default Home;