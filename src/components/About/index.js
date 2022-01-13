import * as React from "react";
import Stack from "@mui/material/Stack";
import image from "../../assets/profile/profile.jpg";


function About() {
  return (
    <div>
      <img
        alt="Maria Mireles"
        src={image}
        style={{ width: "300px", height: "260px", display: "block", margin: "auto", marginTop: "16vw", borderStyle: "solid" }}
      />
      <section className="box">
        <Stack direction="row" spacing={2}>
          <h4 className="intro"> Austin-Based Full Stack Web-Developer</h4>
        </Stack>

        <p>
          {" "}
          Welcome to my tiny space in the World Wide Web! Let me briefly
          introduce myself. My name is Maria Mireles, a 24-year-old
          coffee-lover. I have a Full Stack Web Developement (MERN)
          certification through the University of Texas at Austin. Despite
          having no prior coding experience, I have been able to expand my
          front-end and back-end programming skills and abilities. Look around
          and feel free to reach out. Let us chat some code!{" "}
        </p>
      </section>
    </div>
  );
}

export default About;
