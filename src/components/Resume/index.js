import React from "react";

function Resume() {
  return (
    <section className="resume">
      <div className="languages">
        <h3> Frontend: </h3>
        <li>React </li>
        <li>HTML5 </li>
        <li>CSS/ Advanced CSS </li>
        <li>JavaScript </li>
        <li>Bootstrap </li>
        <li>Bulma </li>
        <li>Web-API </li>
        <li>Regex </li>
      </div>
      <div className="languages-bk">
        <h3>Backend:</h3>
        <li>MySQL </li>
        <li>MongoDB </li>
        <li>Stripe</li>
        <li>Express.js </li>
        <li>Node.js</li>
        <li>Handlebars.js </li>
        <li>GraphQL</li>
      </div>

      <a href="resume.pdf" download className="download">
        <strong>Download my resume!</strong>
      </a>
    </section>
  );
}

export default Resume;
