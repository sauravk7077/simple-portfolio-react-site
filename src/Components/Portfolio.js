import React from 'react';
import {contents} from "./portfolioData";
import Card from "./InnerComponents/Card";

class Portfolio extends React.Component{
    constructor() {
        super();
        this.state = {
            items:[]
        }
    }

    render() {
        const c = contents.map(e=> (
            <Card key={e.id} title={e.title} src={e.img} detail={e.detail} />
        ))
        return (
            <section id="portfolio" className="flex">{c}</section>
        );
    }
}

export default Portfolio;