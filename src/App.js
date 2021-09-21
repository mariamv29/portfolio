import React from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav'


function App() {
  return (
    <div>
      <Nav></Nav>
    <main>
      <About></About>
      <Portfolio></Portfolio>
    </main>
  </div>
  );
}

export default App;
