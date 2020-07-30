import React from 'react';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from ".//Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
      <h1 className="portfolio-title">Portfolio</h1>
      <Portfolio />
      <hr />
      <Contact/>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
