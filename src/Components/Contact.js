import React from "react";
import ContactButton from "./InnerComponents/ContactButton";

class Contact extends React.Component{
    render() {
        return (
            <section id="contact" className="flex">
                <ContactButton href="sauravk7077" num={0}/>
                <ContactButton href="sauravk7077" num={1}/>
                <ContactButton href="sauravk7077" num={2}/>
            </section>
        )
    }
}

export default Contact;