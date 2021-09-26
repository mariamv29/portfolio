import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function About() {
  return (
    <section className="box">
      <Stack direction="row" spacing={2}>
      <Avatar alt="Maria Mireles" src="/static/images/avatar/1.jpg" />
      </Stack>
      <h4> Austin-Based Full Stack Web-Developer
        </h4>
      <p>
        {" "}
        Hi, welcome to my page! Let me introduce myself, my name is Maria
        Mireles and I am a Austin-based Full Stack Web-Developer. I'm currently
        remotly attending a coding boot-camp at the University of Texas at
        Austin. At this moment in time, have a set of skills on HTML, CSS,
        JavaScript and currently learning Third-Party Web-APIs. Front-End skills
        aren't just it, I am working on perfecting Back-End skills with
        technolgies like: Node.JS, SQL{" "}
      </p>
    </section>
  );
}

export default About;
