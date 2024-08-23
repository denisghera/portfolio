import React from 'react';
import user from "../images/user-image.jpg"

function Contact() {
  return (
    <div>
        <h1 style={{marginTop:"4vw", textAlign:"center"}}>Contact page</h1>
        <center><img src={user} alt='user' style={{width:'18vw'}}/></center>
    </div>
  );
}

export default Contact;
