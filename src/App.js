import React, {useState} from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

function App() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "Portfolio":
        return <Portfolio />;
        case "Contact":
        return <Contact />
default: return <About />
    }
  }


  return (
    <div>
      <Nav currentPage ={currentPage} handlePageChange={handlePageChange}
     > </Nav>
     <div>
       {
       renderPage(currentPage)
       }
     </div>
    </div>
  );
}

export default App;
