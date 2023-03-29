import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <button type="button">Request Early Access</button>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3 logo" />
          <p>Sahil Khatri, All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Sahil Khatri</p>
          <p>+977-9861430836</p>
          <p>sahil99.dev@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>© 2022 GPT-3. All rights reserved.</p>
        <p>Developed by Sahil Khatri</p>
      </div>
    </footer>
  );
};

export default Footer;
