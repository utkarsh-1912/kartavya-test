import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card" style={{ background: props.bg, borderRadius: "0" }}>
      <img className="card-img" src={props.image} alt="img1" />
      <p>{props.title}</p>
      <Link to="/donate">
        <button className="blue-btn">Support Us</button>
      </Link>
    </div>
  );
};

export default Card;
