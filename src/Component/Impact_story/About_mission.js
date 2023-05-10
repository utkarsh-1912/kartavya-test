import React from "react";
import "./Impact_story.css";

const About_mission = () => {
  return (
    <div className="about_mission">
      <p className="Istory">Kartavya</p>
      <p className="green-text">An Efforts towards Educated India</p>
      <p></p>
      <p className="gray">
        Kartavya is a national non-profit voluntary organization (registered
        under Societies Registration Act XXI, 1860 with registration no.
        S/63750/2008 ) run by the students and the alumni of IIT (ISM) Dhanbad
        and other associated colleges with the vision to equip the children of
        slums with education, life skills and character that they need to lead
        empowered lives.
      </p>
      <div className="main-container">
        <div className="box">
          <h3>Mission</h3>A world where everyone has an equal opportunity to
          reach their full potential regardless of their background or
          circumstances. A society where no one is deemed underprivileged.
        </div>
        <div className="box">
          <h3>Vision</h3>
          Upliftment of the underprivileged sections of society living in slums
          by helping children reach their full potential by providing access to
          education, health care, and other basic necessities; empowering women
          and by eradicating social evils so that our help is no longer needed.
        </div>
      </div>
    </div>
  );
};

export default About_mission;
