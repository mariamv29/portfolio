import React from "react";

function Resume() {
  return (
    <section>
        <a href='../../assets/resume/resume.pdf' download> 
      <h2 className="download">Click to download resume</h2>
      </a>

      <div className="languages">
        <h3> Frontend: </h3>
        <li>React </li>
        <li>HTML5 </li>
        <li>CSS/ Advanced CSS </li>
        <li> JavaScript </li>
        <li>Bootstrap </li>
        <li>BUlma </li>
        <li>Web-API </li>
        <li>Regex </li>
        <li>HTML </li>
      </div>
      <div className="languages-bk">
        <h3>Backend:</h3>
        <li>MySQL </li>
        <li>MongoDB </li>
        <li>Express </li>
        <li>Node </li>
        <li>Handlebars </li>
        <li>Webpack </li>
      </div>
    </section>
  );
}

export default Resume;
