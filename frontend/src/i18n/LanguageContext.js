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
  const [language, setLanguage] = useState('en');
  const [t, setT] = useState(translations.en);

  useEffect(() => {
    const detectedLang = getBrowserLanguage();
    setLanguage(detectedLang);
    setT(translations[detectedLang] || translations.en);
  }, []);

  const value = {
    language,
    t,
    // Expose setLanguage in case needed later
    setLanguage: (lang) => {
      if (SUPPORTED_LANGUAGES.includes(lang)) {
        setLanguage(lang);
        setT(translations[lang] || translations.en);
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