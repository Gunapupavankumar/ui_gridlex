import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Research from "./components/research/Research";
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SinglePage />} />
      </Routes>
      
    </Router>
  );
}

const SinglePage = () => {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="aboutus">
        <About />
      </section>
      <section id="research">
        <Research />
      </section> 
      <section id="contactus">
      <Footer />
      </section>
    </div> 
  );
}

export default App;
