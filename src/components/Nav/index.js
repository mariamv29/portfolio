import React from "react";

function Nav() {
    const tabs = ['Home', 'About', 'Work', 'Contact']
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          <span arial-label="home">Maria Mireles</span>
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About me</a>
          </li>
          <li>
          <a href="#mywork">Portfolio</a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
