'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'id' | 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children, translations }: { children: ReactNode, translations: any }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  const translate = (key: string, section?: string): string => {
    const path = section ? `${section}.${key}` : key;
    const keys = path.split('.');
    let current = translations[language];
    try {
      for (const k of keys) {
        current = current[k];
        if (current === undefined) {
          // Fallback to English if translation is missing
          current = translations['en'];
          for (const k_fb of keys) {
            current = current[k_fb];
            if (current === undefined) {
              return path; // Return key path if still not found
            }
          }
          return current || path;
        }
      }
      return current || path;
    } catch (error) {
      console.warn(`Translation not found for key: ${path} in language: ${language}. Falling back to English.`);
      // Try to find in English
      current = translations['en'];
      try {
        for (const k_fb of keys) {
          current = current[k_fb];
          if (current === undefined) {
            return path; // Return key path if still not found
          }
        }
        return current || path;
      } catch (e) {
        return path; // Return the key itself if not found
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 