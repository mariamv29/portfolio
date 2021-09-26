import React from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <div>
        <Nav></Nav>
        <main>
          <About></About>
          <Portfolio></Portfolio>
          <Contact></Contact>
        </main>
      </div>
    
        <Footer />
    </div>
  );
}

export default App;
