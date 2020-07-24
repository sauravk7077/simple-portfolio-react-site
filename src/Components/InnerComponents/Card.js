import React from "react";

function Card(props) {
    return(
        <div className="card flex">
            <div className="card-wrapper flex">
                <div className="main-card flex">
                    <div className="card-title">{props.title}</div>
                    <div className="card-image"><img src={props.src}/></div>
                </div>
                <div className="card-detail">
                    {props.detail}
                </div>
            </div>
        </div>
    )
}

export default Card;