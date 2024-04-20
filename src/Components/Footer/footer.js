import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="connect">
        Connect With Me
        <div className="platforms">
          <a href="https://github.com/Aditya584" target="#"  className="social-icons">
            <BsGithub size={40} color="black"></BsGithub>
          </a>
          <a
            className="social-icons"
            href="https://www.linkedin.com/in/aditya-s-464023207/"
            target="#"
          >
            <AiFillLinkedin size={40} color="steelblue"></AiFillLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;