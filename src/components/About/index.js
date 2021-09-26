import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function About() {
  return (
    <section className="box">
      <Stack direction="row" spacing={2}>
        <Avatar alt="Maria Mireles" src="/static/images/avatar/1.jpg" />
        <h4> Austin-Based Full Stack Web-Developer</h4>
      </Stack>

      <p>
        {" "}
        Welcome to my page! Let me introduce myself, my name is Maria
        Mireles. At the moment, I am 
        remotly attending a coding boot-camp at the University of Texas at
        Austin. I have been coding for a total of 5 months. My technical skills are on HTML, CSS,
        JavaScript and currently learning Third-Party Web-APIs. Front-End skills
        aren't just it, I am working on perfecting Back-End skills with
        technolgies like: Node.JS, SQL{" "}
      </p>
    </section>
  );
}

export default About;
