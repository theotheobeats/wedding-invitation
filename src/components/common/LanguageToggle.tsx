'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage, Language as LangType } from '@/contexts/LanguageContext'; // Assuming LangType is exported if needed elsewhere, or use 'id' | 'en' | 'ja' directly
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageOption {
  code: LangType;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'id', name: 'Bahasa', flag: '🇮🇩' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
];

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, translate } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);

  const currentLanguageDetails = languages.find(lang => lang.code === language);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleRef]);

  return (
    <div ref={toggleRef} className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[51] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-2 mb-2 w-40 border border-gray-200 dark:border-gray-700"
          >
            <ul className="space-y-1">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-md transition-colors duration-150 ease-in-out 
                                ${language === lang.code 
                                  ? 'bg-amber-500 text-white' 
                                  : 'text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-gray-700 hover:text-amber-700 dark:hover:text-amber-200'}
                              `}
                    aria-label={`${translate('common.selectLanguagePrefix') || 'Select'} ${lang.name} ${translate('common.selectLanguageSuffix') || ''}`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-600 dark:bg-amber-700 text-white flex items-center justify-center shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 transition-all duration-300"
        aria-label={translate('common.toggleLanguageMenu') || "Toggle language menu"}
        aria-expanded={isOpen}
      >
        {currentLanguageDetails ? (
            <span className="text-lg font-semibold">{currentLanguageDetails.code.toUpperCase()}</span>
        ) : (
            <span className="text-lg font-semibold">{language.toUpperCase()}</span> // Fallback if not found
        )
        }
      </motion.button>
    </div>
  );
};

export default LanguageToggle; 