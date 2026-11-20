import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

// Supported languages
const SUPPORTED_LANGUAGES = [
  'en', 'es', 'pt', 'fr', 'de', 'it', 'zh', 'ja', 'ko', 'ar', 'hi', 'ru', 'tr', 'nl', 'pl', 'id'
];

// Get browser language and map to supported language
const getBrowserLanguage = () => {
  // Get browser language (e.g., 'en-US', 'es', 'pt-BR')
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  
  // Extract base language code (e.g., 'en' from 'en-US')
  const baseLang = browserLang.split('-')[0].toLowerCase();
  
  // Check if the base language is supported
  if (SUPPORTED_LANGUAGES.includes(baseLang)) {
    return baseLang;
  }
  
  // Default to English
  return 'en';
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = window.localStorage.getItem('wishio-language');
      if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
    } catch { /* Browser storage can be unavailable. */ }
    return getBrowserLanguage();
  });
  const t = translations[language] || translations.en;

  useEffect(() => {
    try { window.localStorage.setItem('wishio-language', language); } catch { /* Keep language switching usable without storage. */ }
  }, [language]);

  const value = {
    language,
    t,
    // Expose setLanguage in case needed later
    setLanguage: (lang) => {
      if (SUPPORTED_LANGUAGES.includes(lang)) {
        setLanguage(lang);
      }
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;