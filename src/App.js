import React from 'react';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from ".//Components/Contact";
import Footer from "./Components/Footer";
import Flip from 'react-reveal/Flip';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <h1 className="portfolio-title"><Flip bottom delay={500}>Portfolio</Flip></h1>
      <Portfolio />
      <h1 className="portfolio-title"><Flip bottom delay={500}>Contact</Flip></h1>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
