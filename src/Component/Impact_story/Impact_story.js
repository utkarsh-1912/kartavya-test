import React from "react";
import logo from "../../assets/amreshmishra.webp";
import "./Impact_story.css";
import { Link } from "react-router-dom";

const Impact_story = () => {
  return (
    <div className="fStory">
      <p className="Istory">FOUNDING STORY</p>
      <p className="green-text">The mission that leads to New Begining</p>
      <div className="Impact_story-class">
        <div className="is-img">
          <img src={logo} alt="impact story" />
        </div>
        <div className="IS-text">
          <p className="gray">
            Kartavya was founded by a 1999 cohort of students of IIT ISM Dhanbad
            led by <b>Mr. Amresh Mishra</b>, who is an Indian Police Service
            (IPS) officer. IIT(ISM) Dhanbad is surrounded by slums. The children
            there used to gather around the hostels on campus and collect stale
            food. They loitered in and around campus to collect garbage. Mr.
            Amresh Mishra, along with some students of IIT(ISM) Dhanbad, decided
            to start educating these children. Initially, its classes were held
            in a temple in Lahbani Basti, Dhaiya. Later, it got its own
            building. This was christened Centre 1 Dhanbad. <br /> Initially,
            its target was childhood education. It expanded to address other
            problems, including vocational training, woman's empowerment (with a
            direction to remove social and economic inequalities), and health.
          </p>
          <Link to="/about">
            <button className="green-button">READ MORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impact_story;
