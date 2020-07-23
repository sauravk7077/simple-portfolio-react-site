import React from "react";

function Card(props) {
    return(
        <div className="card flex">
            <div>
                <div className="card-title">{props.title}</div>
                <div className="card-image"><img src={props.src}/></div>
            </div>
            <div className="card-detail">
                {props.detail}
            </div>
        </div>
    )
}

export default Card;