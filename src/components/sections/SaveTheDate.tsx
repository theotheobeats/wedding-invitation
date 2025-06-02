'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountdownTimer from '../ui-custom/CountdownTimer';
import { weddingDate } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

// Enhanced animation variants with aesthetic easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
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
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 60,
      damping: 20
    }
  }
};

const quoteVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    x: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3
    }
  }
};

const photoVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.6,
      ease: [0.34, 1.56, 0.64, 1],
      delay: 0.5
    }
  }
};

const countdownVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.7
    }
  }
};

const backgroundVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.1
  },
  visible: {
    opacity: 0.6,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  }
};

export default function SaveTheDate() {
  return (
    <motion.div 
      className="relative min-h-screen bg-zinc-900 text-white overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-wedding w-full">
          <motion.div 
            className='flex gap-4'
            variants={containerVariants}
          >
            <div>
              {/* Enhanced Title and Quote Section */}
              <motion.div
                className="mt-16 md:mt-24 p-8"
                variants={titleVariants}
              >
                <motion.h1
                  className="font-playfair text-4xl md:text-5xl lg:text-6xl tracking-wide font-light"
                  variants={titleVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  Menghitung
                  <br />
                  <motion.span
                    className="inline-block"
                    whileHover={{ 
                      color: "#f3f4f6",
                      transition: { duration: 0.3 }
                    }}
                  >
                    Hari
                  </motion.span>
                </motion.h1>

                <motion.div
                  className="mt-8 md:mt-12 max-w-md"
                  variants={quoteVariants}
                >
                  <motion.p 
                    className="text-sm md:text-base leading-relaxed font-roboto-slab"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  >
                    "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh."
                  </motion.p>
                  <motion.p 
                    className="mt-4 font-medium font-roboto-slab text-white/80"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    Genesis 2:24
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Enhanced Couple Photo */}
              <motion.div
                className="relative w-1/2 md:w-1/3 h-48 md:h-64 mt-8 ml-8" 
                variants={photoVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <motion.div
                  className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    transition: { duration: 0.4 }
                  }}
                >
                  <Image
                    src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXqf6wvgDL7tpu5Zbrw18K2ojNhVncqIzeF6S"
                    alt="Couple photo"
                    fill
                    className="object-cover"
                  />
                  {/* Enhanced overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Decorative border */}
                  <motion.div 
                    className="absolute inset-0 border-2 border-white/20 rounded-lg"
                    whileHover={{ borderColor: "rgba(255, 255, 255, 0.4)" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            </div>
            
            <div>
              {/* Enhanced Countdown Sidebar */}
              <motion.div
                className="w-20 md:w-24 flex flex-row md:flex-col justify-between items-center bg-zinc-900 px-2 md:py-8"
                variants={countdownVariants}
                whileHover={{ 
                  backgroundColor: "rgba(24, 24, 27, 0.9)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  <CountdownTimer targetDate={weddingDate} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Background Image with parallax effect */}
        <motion.div
          className="absolute inset-0 z-0"
          variants={backgroundVariants}
        >
          <Image
            src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb9PoITsHeOalHmg4Rnyt6Whs1UXrLdiEPMK3D"
            alt="Background"
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Subtle animated overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40 z-5"
          animate={{ opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Decorative floating elements */}
        <motion.div 
          className="absolute top-20 right-8 w-16 h-16 border border-white/10 rounded-full z-15"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-8 w-12 h-12 border border-white/15 rounded-full z-15"
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
        />
      </div>
    </motion.div>
  );
}
