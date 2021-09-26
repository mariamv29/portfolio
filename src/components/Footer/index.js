import React from "react";
import { FaGithub } from "react-icons/fa";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon  from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer>
      <div className="text-center">
        <LinkedInIcon />
        {"   "}
        <EmailIcon />
        {"   "}
        <FaGithub /> {"   "}
      </div>
      <div className="container">&copy;2021 by Maria Mireles</div>
    </footer>
  );
};

export default Footer;
