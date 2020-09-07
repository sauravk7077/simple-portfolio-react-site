import React from 'react';
import Card from "./InnerComponents/Card";

class Portfolio extends React.Component{
    constructor() {
        super()
        this.state = {
            data:[]
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch('https://raw.githubusercontent.com/sauravk7077/sauravk7077.github.io/master/portfolioData.json');
            let contents = await res.json();
            this.setState({data: contents.contents})
        } catch (error) {
            console.log("Some error occured")
        }
    }
    render() {
        const c = this.state.data.map(e=> (
            <Card key={e.id} title={e.title} src={`./images/${e.img}`} detail={e.detail} git={e.git}/>
        ))
        return (
            <section id="portfolio" className="flex">
                {c}
            </section>
        );
    }
}

export default Portfolio;