import React from 'react';
import {contents} from "./Data/portfolioData";
import Card from "./InnerComponents/Card";

class Portfolio extends React.Component{

    render() {
        const c = contents.map(e=> (
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