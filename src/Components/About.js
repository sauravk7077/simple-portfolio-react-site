import React from "react";

class About extends React.Component{
    constructor() {
        super()
        this.state = {
            data:[]
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://raw.githubusercontent.com/sauravk7077/sauravk7077.github.io/master/aboutData.json');
            let contents = await res.json();
            this.setState({data: contents.contents})
        } catch (error) {
            console.log("Some error occured")
        }
    }

    render() {
        const data = this.state.data.map(e=>(
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