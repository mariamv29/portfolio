import React from "react";

function Nav() {
    const tabs = ['Home', 'About', 'Work', 'Contact']
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span arial-label="home">Maria Mireles</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">About me</a>
          </li>
          <li>
          <a data-testid="mywork" href="#mywork">Portfolio</a>
          </li>
          <li>
          <a data-testid="contact" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
