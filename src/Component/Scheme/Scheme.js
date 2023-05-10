import React from "react";
import "./scheme.css";

const Scheme = () => {
  return (
    <div className="scheme">
      <p>
        Our efforts to educate children and provide them with study materials,
        pay for their schooling and health care cannot take effect unless we
        have the support of our community. We request you to come forward and
        help us in any of the above-mentioned ways as we are in need of funds.
      </p>
      <h1>Sponsership Scheme</h1>
      <p>The following are the schemes of the sponsorship we have right now:</p>
      <ol>
        <li>
          <h2>Sponsor a child scheme:</h2>
          <p>
            {" "}
            In this scheme, a sponsorship amount of Rs.7600 per child is raised
            by a sponsor for an academic year which includes all the expenses of
            the child like fees, books, stationeries, transportation, etc.
          </p>
        </li>
        <li>
          <h2> Centre Rent Scheme:</h2>
          <p>
            {" "}
            In this scheme, a sponsorship amount for centres is raised by a
            sponsor (where we teach slum children) for an academic year
          </p>
        </li>
        <li>
          <h2>Recruit payment scheme:</h2>
          <p>
            {" "}
            In this scheme, a sponsorship amount for recruits at different
            centres is raised by a sponsor for an academic year.
          </p>
        </li>
        <li>
          <h2>General Donation Scheme:</h2>
          <p>
            {" "}
            In this scheme, sponsors can make a general donation of an amount
            suitable to them.
          </p>
        </li>
        <li>
          <h2>Sports Sponsorship :</h2>
          <p>
            {" "}
            In this scheme, a sponsorship amount of Rs.2500 per child is raised
            by a sponsor for an academic year which includes all the expenses of
            the child, like travel expenses for tournaments,sports equipment,
            etc.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Scheme;
