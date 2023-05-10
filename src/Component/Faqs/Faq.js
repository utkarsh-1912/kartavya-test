import React from "react";
import { useState } from "react";
import "./faq.css";

const faq = [
  {
    id: 1,
    title: "What is Kartavya ?",
    description:
      "Kartavya is a Non-Profit Organisation (NGO). Its Dhanbad Chapter is run by the students of IIT(ISM) Dhanbad. It educates children, provides vocational training to women and helps fight social evils prevalent in the slum areas",
  },
  {
    id: 2,
    title: "What are the activities conducted by Kartavya?",
    description:
      "<ol><li> We provide regular tuition classes at the centers and get children admitted to good schools. In addition, we prepare students for competitive examinations like Jawahar Navodaya, JEE, and SSC, to name a few.</li><li>We promote co-curricular activities among the children by providing karate classes. Kartavya Sports Meet(KSM) is conducted annually.</li><li> Our annual fest “PRAKASH” provides children the platform for a number of events, namelyquizzes, dance, singing, poetry competition, science exhibitions, and martial arts demonstration</li><li>We also set up awareness camps regarding social issues and health and well-being</li><li>We provide vocational training to women at our sewing centers</li></ol>",
  },
  {
    id: 2,
    title: "When Kartavya was established?",
    description:
      "Kartavya was established in 1999 by a cohort of students of IIT(ISM) Dhanbad led by Amresh Mishra, who is an Indian Police Service(IPS) Officer",
  },
];

const Faq = () => {
  const [click, setClick] = useState(false);
  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };
  return (
    <>
      <div className="fHead">
        <p className="Istory">FAQs</p>
        <p className="green-text">Frequently Ask Questions</p>
      </div>
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => {
            return (
              <div className="box">
                <button
                  className="accordion"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <h2>{val.title}</h2>
                  <span>
                    {click === index ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </span>
                </button>
                {click === index ? (
                  <div className="text">
                    <p
                      dangerouslySetInnerHTML={{ __html: val.description }}
                    ></p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
