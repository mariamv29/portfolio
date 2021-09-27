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
        Welcome to my space! Let me introduce myself, my name is Maria
        Mireles, a 24 year old coffee-lover. At the moment, I am remotly attending a coding boot camp at the University of Texas at
        Austin. Where with no prior coding knowledge, I have expanded my programming skills from frontend to backend.
         To date, I have been coding for about 5 months. Take a look around, send me a message and 
        let us chat some code! {" "}
      </p>
    </section>
  );
}

export default About;
