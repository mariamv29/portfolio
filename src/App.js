import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio 
        // challenges={challenges}
        />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}>
        {" "}
      </Nav>
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default App;
