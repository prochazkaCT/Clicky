import React from "react";
import "./PikachuCard.css";

const PikachuCard = props => (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.src}/>
      </div>
    </div>
);

export default PikachuCard;