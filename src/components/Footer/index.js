import React from "react";
import { FaGithub } from "react-icons/fa";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon  from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer>
      <div className="text-center">
          <a href="https://www.linkedin.com/in/maria-erika-mireles-7b7b27210/">
        <LinkedInIcon />
        </a>
        {"   "}
        <a href="mailto:mireles335@gmail.com? subject=subject text">
        <EmailIcon />
        </a>
        {"   "}
        <a href="https://github.com/mariamv29">
        <FaGithub /> {"   "}
        </a>
      </div>
      <div className="container">&copy;2021 by Maria Mireles</div>
    </footer>
  );
};

export default Footer;
