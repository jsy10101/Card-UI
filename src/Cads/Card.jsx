import React from "react";
import Card from "./CardUI";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

const Cards = () => {
  return (
    <div>
      <h1 className="header">Cards Using React</h1>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgSrc={img1} altText={img1} title="Bulb" />
          </div>
          <div className="col-md-4">
            <Card imgSrc={img2} altText={img2} title="Joker" />
          </div>
          <div className="col-md-4">
            <Card imgSrc={img3} altText={img3} title="Cat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
