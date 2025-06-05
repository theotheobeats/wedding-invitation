'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'id' | 'en' | 'ja';

// Define recursive type for nested translation objects
export type TranslationTree = { [key: string]: string | TranslationTree };
export type Translations = { [key in Language]?: TranslationTree };

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (key: string, section?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
  children,
  translations,
}: {
  children: ReactNode;
  translations: Translations;
}) => {
  const [language, setLanguage] = useState<Language>('en'); // Default to English

  const translate = (key: string, section?: string): string => {
    const path = section ? `${section}.${key}` : key;
    const keys = path.split('.');

    const findTranslation = (lang: Language): string | undefined => {
      let current: string | TranslationTree | undefined = translations[lang];
      for (const k of keys) {
        if (typeof current === 'object' && current !== null) {
          current = current[k];
        } else {
          return undefined;
        }
      }
      if (typeof current === 'string') {
        return current;
      }
      return undefined;
    };

    let translation = findTranslation(language);

    // If translation not found or is not a string, fallback to English
    if (translation === undefined) {
      if (language !== 'en') {
        translation = findTranslation('en');
      }
    }

    if (translation !== undefined) {
      return translation;
    }

    // If still not found, return the key path as a fallback
    console.warn(`Translation not found for key: ${path}`);
    return path;
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