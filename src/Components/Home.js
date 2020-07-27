import React from "react";


function Home() {
    return(
        <section id="home" className="flex column">
            <div>
                <h1>My Portfolio Page</h1>
                <h2 className="homeText">
                    <span>Duis egestas</span><span>augue at malesuada </span>convallis.
                </h2>
            </div>
            <div className="flex">
                <div className='button btn-outline wide'>
                    <a href="#portfolio">My Portfolio</a>
                </div>
                <div className='button btn-solid wide'>
                <a href="#portfolio">Contact Me</a>
            </div>
            </div>
        </section>
    )
}


export default Home;