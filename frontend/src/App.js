import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import Landing from "./components/wishio/Landing";
import PrivacyPolicy from "./components/wishio/PrivacyPolicy";
import TermsAndConditions from "./components/wishio/TermsAndConditions";

function App() {
  return (
    <LanguageProvider>
      <div className="App font-sans antialiased">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
