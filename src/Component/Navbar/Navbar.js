import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";
import logo from "../../assets/kartavya-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="top-Navbar">
      <Link to="/">
        <div className="logoImg">
          <img className="logo" src={logo} alt="" />
        </div>
      </Link>
      <div className="toggle-nav">
        <button
          className="toggle"
          onClick={() => {
            return setClick(!click);
          }}
        >
          {click ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </button>
      </div>
      <div
        className={
          click ? "top-Navbar-headings show" : "top-Navbar-headings hide"
        }
        // style={{ display: !click ? "none" : "block" }}
      >
        <Link to="/">
          <div className="headings">Home</div>
        </Link>
        <Link to="/about">
          <div className="headings">About Us</div>
        </Link>
        <Link to="/work">
          <div className="headings">Our work</div>
        </Link>
        <Link to="/faqs">
          <div className="headings">FAQs</div>
        </Link>
        <Link to="/contact">
          <div className="headings">Contact us</div>
        </Link>
        <Link to="/donate">
          <div>
            <button className="green-button1">DONATE</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
