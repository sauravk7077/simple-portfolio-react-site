import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTwitter, faFreeCodeCamp} from "@fortawesome/free-brands-svg-icons"

function ContactButton(props) {
    let icon, url;
    switch(props.num){
        case 0:
            icon = faGithub
            url = "https://github.com/";
            break;
        case 1:
            icon = faTwitter
            url = "https://twitter.com/"
            break;
        case 2:
            icon = faFreeCodeCamp;
            url = "https://www.freecodecamp.org/";
            break;
    }
    return(
        <a className='contact-btn flex' href={url + props.href} target="blank">
            <FontAwesomeIcon icon={icon}/>
        </a>
    )
}

export default ContactButton;