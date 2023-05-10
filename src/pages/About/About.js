import React from "react";
import "./About.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const About = () => {
  return (
    <div className="about">
      <div className="box content">
        <h1>About Us</h1>
        <p>
          Kartavya is a student-led social organization that operates within the
          Indian Institute of Technology (IIT) - Indian School of Mines (ISM)
          Dhanbad. We are committed for promoting social welfare and community
          development in and around the campus.
        </p>
        <p>
          Our main objective is to make a positive impact in society by
          addressing various social issues and challenges faced by the local
          community. We strives to provide a platform for students to engage in
          meaningful social work and community service activities that can help
          to bring about positive change.
        </p>
        <p>
          We organizes health awareness programs to educate the community on
          various health issues such as hygiene, nutrition, and disease
          prevention. We also invites doctors and health experts to speak on
          these topics and provides free health check-ups to community members.
        </p>
        <img src="https://www.pcedf.org/image/slider/02.jpg" alt="" />
        <p>
          We also focuses on educational programs for underprivileged children.
          We runs a variety of initiatives aimed at providing educational
          opportunities for children from economically disadvantaged
          backgrounds. These initiatives include tutoring programs, computer
          literacy classes, and scholarship programs. We organizes cultural and
          recreational activities for these children to help them develop their
          skills and confidence.
        </p>
        <p>
          Another our important initiative is environmental awareness campaigns
          to encourages the community to adopt eco-friendly practices and raise
          awareness about the impact of climate change. We also organizes
          tree-planting drives and clean-up campaigns to keep the campus and the
          surrounding area clean and green
        </p>
        <p>
          Kartavya is funded by donations from alumni, faculty members, and
          other supporters. The organization is run by a team of dedicated
          volunteers who work tirelessly to organize and manage its activities.
          The organization's success is a testament to the commitment and
          dedication of its members.
        </p>
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
  );
};

export default About;
