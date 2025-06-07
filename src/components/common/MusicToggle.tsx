'use client';

import React, { useState } from 'react';
import { useMusic } from '@/contexts/MusicContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  IoMusicalNote, 
  IoPlay,
  IoPause 
} from 'react-icons/io5';

const MusicToggle: React.FC = () => {
  const { isPlaying, togglePlay, volume, setVolume } = useMusic();
  const [isOpen, setIsOpen] = useState(false);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-[51] flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-4 mb-2 w-48 border border-gray-200 dark:border-gray-700"
          >
            <div className="space-y-3">
              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm rounded-md transition-colors duration-150 ease-in-out bg-amber-500 text-white hover:bg-amber-600"
                aria-label={isPlaying ? 'Pause music' : 'Play music'}
              >
                                 {isPlaying ? (
                   <>
                     <IoPause className="w-4 h-4" />
                     <span>Pause</span>
                   </>
                 ) : (
                   <>
                     <IoPlay className="w-4 h-4" />
                     <span>Play</span>
                   </>
                 )}
              </button>

                            {/* Volume Slider */}
              <div className="space-y-2">
                <label className="text-xs text-gray-600 dark:text-gray-400">Volume</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 slider"
                  aria-label="Adjust volume"
                />
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {Math.round(volume * 100)}%
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 dark:focus:ring-amber-500 transition-all duration-300 ${
          isPlaying 
            ? 'bg-amber-600 dark:bg-amber-700 text-white' 
            : 'bg-gray-600 dark:bg-gray-700 text-white'
        }`}
        aria-label="Toggle music controls"
        aria-expanded={isOpen}
             >
         <IoMusicalNote className="w-6 h-6" />
       </motion.button>
    </div>
  );
};

export default MusicToggle; 