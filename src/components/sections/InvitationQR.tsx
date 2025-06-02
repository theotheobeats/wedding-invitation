'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { generateQRCode } from '@/lib/invitation-utils';
import FloatingParticles from '../ui/FloatingParticles';

interface InvitationQRProps {
  invitationUrl: string;
  guestName: string;
  preGeneratedQR?: string | null;
}

// Enhanced animation variants with aesthetic easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 60,
      damping: 20
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 80,
      damping: 20
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
      duration: 1.4,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const linkVariants = {
  hidden: { 
    opacity: 0, 
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3
    }
  }
};

export default function InvitationQR({ invitationUrl, guestName, preGeneratedQR }: InvitationQRProps) {
  const [qrCode, setQrCode] = useState<string>('');

  useEffect(() => {
    const setupQR = async () => {
      try {
        if (preGeneratedQR) {
          // Use pre-generated base64 QR code
          // Check if it's already a data URL, if not, prepend the data URL prefix
          const qrDataUrl = preGeneratedQR.startsWith('data:') 
            ? preGeneratedQR 
            : `data:image/png;base64,${preGeneratedQR}`;
          setQrCode(qrDataUrl);
        } else {
          // Generate QR code from invitation URL
          const qrDataUrl = await generateQRCode(invitationUrl);
          setQrCode(qrDataUrl);
        }
      } catch (error) {
        console.error('Failed to setup QR code:', error);
      }
    };

    setupQR();
  }, [invitationUrl, preGeneratedQR]);

  if (!qrCode) return null;

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Enhanced Floating Particles */}
      <FloatingParticles count={4} className="z-10" />
      
      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-20 left-8 w-32 h-32 border border-primary/8 rounded-full z-15"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-8 w-24 h-24 border border-secondary/10 rounded-full z-15"
        animate={{ 
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      />
      
      <div className="container-wedding relative z-20">
        <motion.div
          className="max-w-md mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/20"
            variants={cardVariants}
            whileHover={{ 
              y: -5,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            {/* Enhanced Header */}
            <motion.div 
              className="text-center mb-8"
              variants={titleVariants}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

              <motion.h3 
                className="font-playfair text-2xl sm:text-3xl text-primary mb-3 font-bold"
                whileHover={{ 
                  scale: 1.02,
                  color: "#be185d",
                  transition: { duration: 0.3 }
                }}
              >
                Share Invitation
              </motion.h3>
              
              <motion.p 
                className="text-sm sm:text-base text-gray-600 leading-relaxed"
                variants={linkVariants}
              >
                Scan this QR code to view the invitation for{' '}
                <span className="font-medium text-primary">{guestName}</span>
              </motion.p>
            </motion.div>

            {/* Enhanced QR Code */}
            <motion.div 
              className="flex justify-center mb-8"
              variants={qrVariants}
            >
              <motion.div 
                className="relative w-48 h-48 sm:w-56 sm:h-56 p-4 bg-white rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <Image
                  src={qrCode}
                  alt="Invitation QR Code"
                  fill
                  className="object-contain rounded-xl"
                />
                
                {/* Decorative corners */}
                <motion.div 
                  className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                />
                <motion.div 
                  className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
                <motion.div 
                  className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
                <motion.div 
                  className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Link Section */}
            <motion.div 
              className="text-center"
              variants={linkVariants}
            >
              <motion.p 
                className="text-sm text-gray-500 mb-3"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                Or use this link:
              </motion.p>
              
              <motion.a
                href={invitationUrl}
                className="text-primary hover:text-primary/80 break-all text-sm font-medium transition-colors duration-300 block p-3 bg-gray-50 rounded-xl border border-gray-200"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "#f3f4f6",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {invitationUrl}
              </motion.a>

              {/* Copy Link Button */}
              <motion.button
                className="mt-4 px-6 py-3 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 w-full"
                onClick={() => {
                  navigator.clipboard.writeText(invitationUrl);
                  // You could add a toast notification here
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="flex items-center justify-center gap-2"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Copy Link
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              className="flex justify-center items-center gap-3 mt-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary/50"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-2 h-2 bg-primary/40 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary/50"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 