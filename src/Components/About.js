import React from "react";
import {contents} from "./Data/aboutData";

class About extends React.Component{
    render() {
        const data = contents.map(e=>(
            <div className="flex column">
                <div className="heading">
                    <h2>{e.heading}</h2>
                </div>
                <div className="content flex">
                    <p>
                        {e.content}
                    </p>
                </div>
            </div>
        ))
        return (
            <section id="about">
                {data}
            </section>
        )
    }
}

export default About;