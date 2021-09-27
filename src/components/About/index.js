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
        Welcome to my tiny space in the World Wide Web! Let me briefly introduce
        myself. My name is Maria Mireles, a 24-year-old coffee-lover. I am soon
        to complete a fully remote coding boot camp through the University of
        Texas at Austin. Despite having no prior coding experience, I have been
        able to expand my front-end and back-end programming skills
        and abilities. To date, I have been coding for about 5 months. 
        Look around and feel free to reach out. Let us chat some code!{" "}
      </p>
    </section>
  );
}

export default About;
