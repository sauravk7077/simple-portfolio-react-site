import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
function Card(props) {
    return(
        <div className="card flex">
            <div className="card-wrapper flex">
                <div className="main-card flex">
                    <h2 className="card-title">{props.title}</h2>
                    <div className="card-image"><img src={props.src}/></div>
                </div>
                <div className="card-detail">
                    {props.detail}
                </div>
                <div>
                    <a href={props.git} className="button btn-solid">Check it out! &nbsp;<FontAwesomeIcon icon={faGithub}/></a>
                </div>
            </div>
        </div>
    )
}

export default Card;