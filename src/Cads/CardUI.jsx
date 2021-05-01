import React from "react";
import "./card-style.css";

const Card = (props) => {
  const text =
    "Labore velit ullamco in dolor cupidatat. Nostrud nostrud aute pariatur duis voluptate aute consequat et sunt commodo dolor officia cupidatat nulla.Commodo cillum proident labore exercitation aliqua nostrud commodo quis.";

  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgSrc} alt={props.altText} className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          {text.substr(0, 100) + "..."}
        </p>
        <button className="btn btn-outline-success">Go anywhere</button>
      </div>
    </div>
  );
};

export default Card;
