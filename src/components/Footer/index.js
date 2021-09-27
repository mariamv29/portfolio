import React from "react";
import { FaGithub } from "react-icons/fa";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon  from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer>
      <div>
          <a style={{ textDecoration: 'none', color: "#f9461af8"  }} href="https://www.linkedin.com/in/maria-erika-mireles-7b7b27210/">
        <LinkedInIcon />
        </a>
        {"   "}
        <a style={{ textDecoration: 'none', color: "#f9461af8" }} href="mailto:mireles335@gmail.com? subject=subject text">
        <EmailIcon />
        </a>
        {"   "}
        <a style={{ textDecoration: 'none', color: "#f9461af8" }} href="https://github.com/mariamv29">
        <FaGithub /> {"   "}
        </a>
      </div>
      <div style={{color: "#f9461af8" }}className="container">&copy;2021 by Maria Mireles</div>
    </footer>
  );
};

export default Footer;
