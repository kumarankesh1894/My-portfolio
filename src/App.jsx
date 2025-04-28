import React from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Qualifications from "./components/Qualifications";
import GitHubRepos from "./components/GitHubRepos";
import Achievements from "./components/Achievements";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Qualifications />
        <Achievements />
        <Projects />
        <GitHubRepos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
