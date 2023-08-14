import React from 'react'
import "./footer.css";
import logo from "../../assets/logo.svg"
const Footer = () => {
  return (
    <div className='gpt3__footer '>
      <div className="gpt3__footer-header">
        <h1 className='graident__text '>Do you want to step in to the future before others</h1>
        <div className="gpt3__footer-button">
          <p>Request Early Access</p>
        </div>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-logo-links'>
          <h2>Links</h2>
          <p>Overons</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-logo-links'>
          <h2>Company</h2>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-logo-links'>
          <h2>Get in touch</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyrights'>
        <p>© 2023 GPT-IRIMIT. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer