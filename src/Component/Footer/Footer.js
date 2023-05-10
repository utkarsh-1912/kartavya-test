import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../assets/kartavya-logo.png";

import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const copyrightText = `Copyright © ${new Date().getFullYear()}`;
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/kartavya.org"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a
            href="https://twitter.com/kartavyadhn?lang=en"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a
            href="https://www.google.com/search?q=kartavya+iit+ism&sxsrf=AJOqlzWclcy1ss3c3CBH1sFYIvuLUgtgnw%3A1678797683949&ei=c2sQZOvEOd2t4-EP8a2usA4&ved=0ahUKEwiryufcuNv9AhXd1jgGHfGWC-YQ4dUDCA8&uact=5&oq=kartavya+iit+ism&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzIECCMQJzIFCAAQhgMyBQgAEIYDOggIABCiBBCwA0oECEEYAVCKAliICWCzEmgBcAB4AIAB6gGIAYYOkgEDMi04mAEAoAEByAECwAEB&sclient=gws-wiz-serp"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com/kartavya_dhanbad/?hl=en"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/kartavya-ngo/?originalSubdomain=in"
            className="me-4 text-reset"
          >
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">
                {/* <MDBIcon color='secondary' icon='gem' className='me-3' /> */}
                <img className="logo-footer" src={logo} alt="logo" />
              </h6>
              <p>
                -Every child deserves a happy childhood.
                <br /> -Join us in our journey to make a positive impact on
                children's lives.
                <br /> -Dedicated to the upliftment of the underprivileged
                through education since 1999.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">OUR WORK</h6>
              <p>
                <a href="#!" className="text-reset">
                  Provide education to children
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Provide training and health facilities
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Creating Awareness on social issues
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <span className="text-reset">
                  <Link to="/photos" style={{ textDecoration: "none" }}>
                    {" "}
                    Photos{" "}
                  </Link>
                </span>
              </p>
              <p>
                <span className="text-reset">
                  <Link to="/videos" style={{ textDecoration: "none" }}>
                    Videos
                  </Link>
                </span>
              </p>
              <p>
                <span className="text-reset">
                  <Link to="/contact" style={{ textDecoration: "none" }}>
                    Get in touch{" "}
                  </Link>
                </span>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Kartavya C-3, Mondal Basti, Dhaiya PO -ISM,Dhanbad-
                826004(Jharkhand)
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                sponsor.kartavya@gmail.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 91
                9123258021
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 91
                9693169016
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <a
          className="text-reset fw-bold"
          href="https://www.instagram.com/kartavya_dhanbad/?hl=en"
        >
          {copyrightText} | Kartavya.org
        </a>
      </div>
    </MDBFooter>
  );
}
