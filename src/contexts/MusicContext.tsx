'use client';

import React, { createContext, useContext, ReactNode, useRef, useEffect } from 'react';

const MusicContext = createContext<{} | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/bg_song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // 30% volume by default
    
    // Auto-play music when component mounts
    const playMusic = async () => {
      try {
        await audioRef.current?.play();
        console.log('Background music started');
      } catch (error) {
        console.warn('Auto-play failed, user interaction required:', error);
      }
    };
    
    playMusic();
    
    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <MusicContext.Provider value={{}}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}; 