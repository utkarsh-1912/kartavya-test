import React from "react";
import CardPile from "../../Component/Card/CardPile";
import Features from "../../Component/Features/Features";
import Impact_story from "../../Component/Impact_story/Impact_story";
import Slider1 from "../../Component/Slider/Slider1";
import About_mission from "../../Component/Impact_story/About_mission";
import Faq from "../../Component/Faqs/Faq";

const Home = () => {
  return (
    <div>
      <Slider1 />
      <About_mission />
      <CardPile />
      <Impact_story />
      <Features />
     // <Faq />
    </div>
  );
};

export default Home;
