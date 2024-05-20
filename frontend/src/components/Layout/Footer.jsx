import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Pranav Aditya.</div>
      <div>
        <Link to={"https://www.facebook.com/PranavAdityaAD"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://github.com/AdityaPranav05"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.linkedin.com/in/pranav-aditya-a31129234/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/pranav_aditya_?igsh=aW90OXNmYm1keGZp"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
