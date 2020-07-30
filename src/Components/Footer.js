import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCopyright} from "@fortawesome/free-regular-svg-icons";

function Footer(props) {
    return (
        <footer className="flex">
            <p><FontAwesomeIcon icon={faCopyright}/> Me</p>
        </footer>
    )
}

export default Footer;