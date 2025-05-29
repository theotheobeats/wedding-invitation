'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { coupleNames } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';
import OptimizedImage from '../ui/ImageOptimized';

interface HeroProps {
  onOpenInvitation: () => void;
  isOpen: boolean;
  guestName: string;
  qrCode?: string;
}

export default function Hero({ onOpenInvitation, isOpen, guestName, qrCode }: HeroProps) {
  const [showQR, setShowQR] = useState(false);

  const flipCard = () => {
    setShowQR(!showQR);
  };

  return (
    <motion.div
      className={`relative w-full min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden bg-[#2b211e] text-white`}
      animate={{
        opacity: isOpen ? 0 : 1,
        pointerEvents: isOpen ? 'none' : 'auto',
      }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0">
          <OptimizedImage
            src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt"
            alt="Wedding background"
            fill
            priority
            className="object-cover"
          />
        </div>
        {/* Floating Particles */}
        <FloatingParticles count={6} className="z-15" />
      </div>

      <div className="container-wedding relative z-20 flex flex-col items-center justify-center min-h-screen py-8">
        <div className="text-center space-y-4 sm:space-y-6 md:space-y-8">
          <motion.h2 
            className="font-italiana text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Wedding Of
          </motion.h2>

          <motion.h1 
            className="heading-1 text-white drop-shadow-2xl px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {coupleNames}
          </motion.h1>

          <motion.h3 
            className="font-montserrat text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            16 Juni 2025
          </motion.h3>

          <motion.div 
            className="w-full max-w-md mx-auto mt-8 sm:mt-12 mb-6 sm:mb-8 px-4 perspective-1000"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="relative w-full h-[300px] sm:h-[320px]"
              animate={{ rotateY: showQR ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Front of card (Invitation) */}
              <div 
                className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 flex flex-col items-center justify-center"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(0deg)'
                }}
              >
                <h4 className="font-playfair text-lg sm:text-xl mb-4 text-white">Undangan Pernikahan</h4>
                <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mb-6"></div>
                <h3 className="font-playfair text-xl sm:text-2xl mb-2 text-white">Kepada</h3>
                <p className="font-montserrat text-lg sm:text-xl text-white/95 font-medium mb-6">{guestName}</p>
                {qrCode && (
                  <button
                    onClick={flipCard}
                    className="text-sm text-white/80 hover:text-white flex items-center justify-center gap-2 mx-auto transition-colors duration-300 mt-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M7 12h10"/>
                      <path d="M3 18h18"/>
                    </svg>
                    Show QR Code
                  </button>
                )}
              </div>

              {/* Back of card (QR Code) */}
              {qrCode && (
                <div 
                  className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 flex flex-col items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h4 className="font-playfair text-lg sm:text-xl mb-6 text-white">Scan QR Code</h4>
                  <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 bg-white rounded-xl p-2">
                    <Image
                      src={qrCode}
                      alt="Invitation QR Code"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <button
                    onClick={flipCard}
                    className="text-sm text-white/80 hover:text-white flex items-center justify-center gap-2 mx-auto transition-colors duration-300 mt-auto"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 19-7-7 7-7"/>
                      <path d="M19 12H5"/>
                    </svg>
                    Back to Invitation
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.p 
            className="font-montserrat text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-white/90 leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Dengan penuh rasa syukur, kami mengundang kehadiran Bapak/Ibu/Saudara/i pada acara pernikahan kami yang penuh bahagia ini
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="btn-primary rounded-full bg-secondary hover:bg-secondary/90 px-8 sm:px-10 py-3 sm:py-4 font-medium text-white flex items-center gap-3 mx-auto text-sm sm:text-base shadow-2xl"
              onClick={onOpenInvitation}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4 12L8.7 7.3C8.5 7.1 8.5 6.9 8.5 6.7C8.5 6.5 8.6 6.3 8.7 6.1C8.9 5.9 9.1 5.8 9.3 5.8C9.5 5.8 9.7 5.9 9.9 6.1L15.1 11.3C15.3 11.5 15.4 11.7 15.4 12C15.4 12.3 15.3 12.5 15.1 12.7L9.9 17.9C9.7 18.1 9.5 18.2 9.3 18.2C9.1 18.2 8.9 18.1 8.7 17.9C8.5 17.7 8.5 17.5 8.5 17.3C8.5 17.1 8.6 16.9 8.7 16.7L13.4 12Z" fill="white" />
              </svg>
              Open Invitation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
