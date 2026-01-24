import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/wishio/Navbar";
import Hero from "./components/wishio/Hero";
import Features from "./components/wishio/Features";
import Screenshots from "./components/wishio/Screenshots";
import Download from "./components/wishio/Download";
import Footer from "./components/wishio/Footer";
import PrivacyPolicy from "./components/wishio/PrivacyPolicy";

// Landing Page Component
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <Download />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <LanguageProvider>
      <div className="App font-sans antialiased">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
