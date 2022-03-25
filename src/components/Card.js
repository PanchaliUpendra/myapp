import React from "react"

import image1 from "./images/star.png"
function Card(props) {
    return(
        <div className="card">
            <img src={props.image} className="card--image"/>
            <div className="card--stats">
                <img src={image1} className="card--star" />
                <span>{props.num}</span>
                <span className="gray">(6) • </span>
                <span className="gray">{props.con}</span>
            </div>
            <p>{props.para}</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )

}
export default Card;