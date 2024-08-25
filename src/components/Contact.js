import React from 'react';
import resume from "../images/resume.png";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import clickHere from "../images/click-here.png"

function Contact() {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col-md-6 col-sm-12">
          <h1>Contact me</h1>
          <div className="d-flex align-items-center mb-2" style={{marginTop:"8vw"}}>
            <img src={mail} alt="mail" className="contact"/>
            <span>denisghera@yahoo.com</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={phone} alt="phone" className="contact"/>
            <span>+40733380155</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
        <a href={resume} style={{ position: 'relative', display: 'inline-block' }}>
          <img src={resume} alt="resume" className="resume-img" />
          <img src={clickHere} alt="click here" className ="click-img"/>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
