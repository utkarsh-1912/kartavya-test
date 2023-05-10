import React from "react";
import "./works.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import CardPile from "../../Component/Card/CardPile";
const Works = () => {
  return (
    <>
      <div className="works">
        <div className="box content">
          <h1>Our Works</h1>
          <ol>
            <li>
              {" "}
              <p>
                We provide regular tuition classes at the centers and get
                children admitted to good schools. In addition, we prepare
                students for competitive examinations like Jawahar Navodaya,
                JEE, and SSC, to name a few.
              </p>
            </li>
            <li>
              <p>
                We promote co-curricular activities among the children by
                providing karate classes. Kartavya Sports Meet(KSM) is conducted
                annually.
              </p>
            </li>
            <li>
              {" "}
              <p>
                Our annual fest “PRAKASH” provides children the platform for a
                number of events, namelyquizzes, dance, singing, poetry
                competition, science exhibitions, and martial arts demonstration
              </p>
            </li>
            <li>
              <p>
                We also set up awareness camps regarding social issues and
                health and well-being
              </p>
            </li>
            <li>
              <p>
                We provide vocational training to women at our sewing centers
              </p>
            </li>
          </ol>
        </div>
        <div className="box gallary">
          <div className="video">
            <p>Video Gallary</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TRjVbS-Gdak"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="socialMedia">
            <p>Social Media</p>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="Kartavyadhn"
              options={{ height: 250 }}
            />
          </div>
        </div>
      </div>
      <CardPile />
    </>
  );
};

export default Works;
