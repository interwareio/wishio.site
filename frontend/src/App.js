import React from "react";
import "./App.css";
import Navbar from "./components/wishio/Navbar";
import Hero from "./components/wishio/Hero";
import Features from "./components/wishio/Features";
import Screenshots from "./components/wishio/Screenshots";
import Download from "./components/wishio/Download";
import Footer from "./components/wishio/Footer";

function App() {
  return (
    <div className="App font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </div>
  );
}

export default App;