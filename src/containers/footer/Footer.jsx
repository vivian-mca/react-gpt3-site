import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Are you ready to join the AI-powered revolution of learning and discovery?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Frank Reynolds LLC, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overview</p>
        <p>Pricing</p>
        <p>Research</p>
        <p>Docs</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>123 Sesame Street</p>
        <p>012-3456</p>
        <p>info@mocksite.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
