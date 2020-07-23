import React from 'react';
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
