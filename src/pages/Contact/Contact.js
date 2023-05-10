import React, { useState } from "react";
import "./contact.css";
import axios from "axios";

const Contact = () => {
  //  form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Subject: subject,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/61aa65a3-b56b-46b1-8336-539d644e626d",
        data
      )
      .then((response) => {
        alert("Message Delivered Sucessfully !! We get back to you soon.");
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        console.log(response);
      });
  };

  const mapData =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.082469212406!2d86.43252181429825!3d23.815666292198365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bca0c68a439f%3A0xb7aeed608c840d19!2sKartavya%20Center-3!5e0!3m2!1sen!2sin!4v1678824590782!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
  return (
    <>
      <section className="contact">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={mapData}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS: </h4>
                <p>
                  Kartavya C-3, Mondal Basti, Dhaiya PO-ISM, Dhanbad - 826004
                  (Jharkhand)
                </p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>sponsor.kartavya@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+91-9123258021</p>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="form-group"
              autoComplete="off"
            >
              <div className="flexSB">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(ev) => setSubject(ev.target.value)}
                required
              />
              <textarea
                cols="30"
                rows="10"
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
              >
                Create a message here...
              </textarea>
              <button>SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
