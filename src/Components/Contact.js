import React from "react";
import FormGroup from "./InnerComponents/FormGroup"

class Contact extends React.Component{
    render() {
        return (
            <section id="contact" className="flex">
                <form className ="flex column">
                    <FormGroup type="text" label="Username"/>
                    <FormGroup type="email" label="Email"/>
                    <FormGroup type="text" label="Subject"/>
                    <FormGroup type="textarea" label="Message"/>
                    <button className="button btn-solid">Submit</button>
                </form>
            </section>
        )
    }
}

export default Contact;