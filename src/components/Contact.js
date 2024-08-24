import React from 'react';
import resume from "../images/resume.png";
import mail from "../images/mail.png";
import phone from "../images/phone.png";
import clickHere from "../images/click-here.png"

function Contact() {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "3%" }}>
        <div className="col-md-6 col-sm-12" style={{ fontSize: "4vw", textShadow: "2px 2px black" }}>
          <h1>Contact me</h1>
          <div className="d-flex align-items-center mb-2" style={{marginTop:"8vw"}}>
            <img src={mail} alt="mail" style={{ width: "4vw", marginRight: "1rem" }} />
            <span>denisghera@yahoo.com</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={phone} alt="phone" style={{ width: "4vw", marginRight: "1rem" }} />
            <span>+40733380155</span>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 d-flex justify-content-center">
        <a href={resume} style={{ position: 'relative', display: 'inline-block' }}>
          <img src={resume} alt="resume" style={{ width: '25vw' }} />
          <img src={clickHere} alt="click here" style={{
            position: 'absolute',
            top: '3%',
            right: '7%',
            width: '15%',
            transform: 'translate(20%, -20%) rotate(-30deg)',
            zIndex: '10',
          }} />
        </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
