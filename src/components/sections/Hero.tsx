'use client';

import { motion, AnimatePresence } from 'framer-motion';
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

// Enhanced animation variants with aesthetic easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth ease
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1], // Smooth ease-out curve
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const subtitleVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1], // Bouncy ease for button
      delay: 0.4
    }
  },
  hover: {
    scale: 1.05,
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeInOut"
    }
  }
};

const guestVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.6
    }
  }
};

const qrVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    rotate: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.8
    }
  }
};

export default function Hero({ onOpenInvitation, isOpen, guestName, qrCode }: HeroProps) {
  const [showQR, setShowQR] = useState(false);

  return (
    <motion.div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Enhanced Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
        <OptimizedImage
          src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt"
          alt="Wedding Background"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* Enhanced Floating Particles */}
      <FloatingParticles count={6} className="z-15" />

      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-20 left-8 w-32 h-32 border border-white/20 rounded-full z-15"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-8 w-24 h-24 border border-white/15 rounded-full z-15"
        animate={{ 
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
      />

      <div className="container-wedding relative z-20 flex flex-col items-center justify-center min-h-screen py-8">
        <motion.div 
          className="text-center space-y-4 sm:space-y-6 md:space-y-8"
          variants={containerVariants}
        >
          <motion.h2 
            className="font-italiana text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90"
            variants={subtitleVariants}
          >
            The Wedding Of
          </motion.h2>

          <motion.h1 
            className="heading-1 text-white drop-shadow-2xl px-4"
            variants={titleVariants}
          >
            {coupleNames}
          </motion.h1>

          <motion.h3 
            className="font-roboto-slab text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90"
            variants={subtitleVariants}
          >
            16 Juni 2025
          </motion.h3>

          {/* Enhanced Guest Name Display */}
          {guestName && guestName !== "Guest" && (
            <motion.div
              className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20"
              variants={guestVariants}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <p className="text-white/80 text-sm font-roboto-slab mb-1">Kepada Yth:</p>
              <p className="text-white font-playfair text-lg sm:text-xl font-medium">{guestName}</p>
            </motion.div>
          )}

          {/* Enhanced QR Code Section */}
          {qrCode && (
            <motion.div
              className="flex flex-col items-center space-y-4"
              variants={guestVariants}
            >
              <motion.button
                className="text-white/80 hover:text-white text-sm underline transition-colors duration-300"
                onClick={() => setShowQR(!showQR)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showQR ? 'Hide QR Code' : 'Show QR Code'}
              </motion.button>
              
              <AnimatePresence mode="wait">
                {showQR && (
                  <motion.div
                    className="bg-white p-4 rounded-2xl shadow-2xl"
                    variants={qrVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    key="qr-code"
                  >
                    <img
                      src={qrCode.startsWith('data:') ? qrCode : `data:image/png;base64,${qrCode}`}
                      alt="Invitation QR Code"
                      className="w-32 h-32 sm:w-40 sm:h-40 block"
                      onError={(e) => {
                        console.error('QR Code failed to load:', e);
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log('QR Code loaded successfully');
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Enhanced Open Invitation Button */}
          <motion.div variants={buttonVariants}>
            <motion.button
              className="btn-primary rounded-full bg-gradient-to-r from-secondary to-primary text-white px-8 sm:px-12 py-4 sm:py-5 font-medium flex items-center gap-3 mx-auto text-sm sm:text-base shadow-2xl transition-all duration-300 border border-white/20"
              onClick={onOpenInvitation}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M13.4 12L8.7 7.3C8.5 7.1 8.5 6.9 8.5 6.7C8.5 6.5 8.6 6.3 8.7 6.1C8.9 5.9 9.1 5.8 9.3 5.8C9.5 5.8 9.7 5.9 9.9 6.1L15.1 11.3C15.3 11.5 15.4 11.7 15.4 12C15.4 12.3 15.3 12.5 15.1 12.7L9.9 17.9C9.7 18.1 9.5 18.2 9.3 18.2C9.1 18.2 8.9 18.1 8.7 17.9C8.5 17.7 8.5 17.5 8.5 17.3C8.5 17.1 8.6 16.9 8.7 16.7L13.4 12Z" fill="white" />
              </motion.svg>
              <span>Open Invitation</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 z-5"
        animate={{ opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
