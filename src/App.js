import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
   <div className="flex-column justify-flex-start min-100-vh">
      <div>
        <Nav></Nav>
        <main>
          <About></About>
          <Portfolio></Portfolio>
        </main>
      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
