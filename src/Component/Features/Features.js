import React from "react";
import "./Features.css";
import Image from "../../assets/image-k-3.jpg";
import gift from "../../assets/gift.svg";
import Idea from "../../assets/Idea.svg";
import laugh from "../../assets/laugh.svg";

const Features = () => {
  return (
    <div className="features">
      <div className="visible">
        <img src={gift} alt="img" />
        <p className="features-heading">Gifts of Happiness</p>
        <p className="features-content">
          Unleashing pure happiness in children with delightful surprise gifts
        </p>
      </div>
      <div className="visible">
        <img src={Idea} alt="img" />
        <p className="features-heading">Creative Exploration</p>
        <p className="features-content">
          {" "}
          Enhancing the creative potential of children
        </p>
      </div>
      <div className="visible">
        <img src={laugh} alt="img" />
        <p className="features-heading">Recreational events</p>
        <p className="features-content">
          Engaging and connecting children with each other through fun events
        </p>
      </div>
    </div>
  );
};

export default Features;
