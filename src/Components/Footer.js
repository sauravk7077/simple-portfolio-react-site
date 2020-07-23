import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCopyright} from "@fortawesome/free-regular-svg-icons";

function Footer(props) {
    return (
        <footer className="flex">
            <FontAwesomeIcon icon={faCopyright}/> Me
        </footer>
    )
}

export default Footer;