'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import OptimizedImage from '../ui/ImageOptimized';
import FloatingParticles from '../ui/FloatingParticles';

// Enhanced animation variants with aesthetic easing
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const headerVariants = {
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
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
};

const coupleVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.95,
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

const photoVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 40,
    rotateY: 15
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 50,
      damping: 15
    }
  }
};

const detailsVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    x: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.3
    }
  }
};

const ampersandVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3,
    rotate: -45
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.5,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function CoupleIntro() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Enhanced Floating Particles */}
      <FloatingParticles count={4} className="z-10" />
      
      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-20 right-8 w-64 h-64 border border-primary/5 rounded-full z-15"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-8 w-48 h-48 border border-secondary/8 rounded-full z-15"
        animate={{ 
          rotate: -360,
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }
        }}
      />
      
      <div className="container-wedding relative z-20">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="relative mb-8"
            variants={headerVariants}
          >
            <motion.h2 
              className="font-playfair md:text-3xl text-gray-800 font-light leading-relaxed"
              variants={headerVariants}
            >
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/I
              <br />
              untuk menghadiri acara pernikahan kami
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Enhanced Couple Section */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 md:gap-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            
            {/* Enhanced Bride Section */}
            <motion.div
              className="text-center"
              variants={coupleVariants}
            >
              {/* Enhanced Photo with hover effects */}
              <motion.div 
                className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-3xl shadow-2xl"
                variants={photoVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                <OptimizedImage
                  src={weddingData.bride.photo}
                  alt={weddingData.bride.nickname}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Enhanced overlay with gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Enhanced name overlay */}
                <motion.div 
                  className="absolute bottom-6 left-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="font-playfair text-3xl md:text-4xl text-white font-light drop-shadow-lg">
                    {weddingData.bride.nickname}
                  </h3>
                </motion.div>

                {/* Decorative corner elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
                <motion.div 
                  className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                />
              </motion.div>

              {/* Enhanced Details */}
              <motion.div 
                className="space-y-4 text-left"
                variants={detailsVariants}
              >
                <motion.h4 
                  className="font-playfair text-2xl md:text-3xl text-gray-800 font-medium"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {weddingData.bride.fullName}
                </motion.h4>
                
                <motion.p 
                  className="font-roboto-slab text-sm text-gray-600 uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {weddingData.bride.parentInfo}
                </motion.p>
                
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="font-roboto-slab text-gray-700">
                    Bapak {weddingData.bride.father}
                  </p>
                  <p className="font-roboto-slab text-gray-700">
                    & Ibu {weddingData.bride.mother}
                  </p>
                </motion.div>

                {/* Instagram link with enhanced styling */}
                {weddingData.bride.instagram && (
                  <motion.a
                    href={`https://instagram.com/${weddingData.bride.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mt-4"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @{weddingData.bride.instagram}
                  </motion.a>
                )}
              </motion.div>
            </motion.div>

            {/* Enhanced Groom Section */}
            <motion.div
              className="text-center"
              variants={coupleVariants}
            >
              {/* Enhanced Photo with hover effects */}
              <motion.div 
                className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-3xl shadow-2xl"
                variants={photoVariants}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: -2,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                <OptimizedImage
                  src={weddingData.groom.photo}
                  alt={weddingData.groom.nickname}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Enhanced overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Enhanced name overlay */}
                <motion.div 
                  className="absolute bottom-6 left-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <h3 className="font-playfair text-3xl md:text-4xl text-white font-light drop-shadow-lg">
                    {weddingData.groom.nickname}
                  </h3>
                </motion.div>

                {/* Decorative corner elements */}
                <motion.div 
                  className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                />
                <motion.div 
                  className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                />
              </motion.div>

              {/* Enhanced Details */}
              <motion.div 
                className="space-y-4 text-left"
                variants={detailsVariants}
              >
                <motion.h4 
                  className="font-playfair text-2xl md:text-3xl text-gray-800 font-medium"
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {weddingData.groom.fullName}
                </motion.h4>
                
                <motion.p 
                  className="font-roboto-slab text-sm text-gray-600 uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {weddingData.groom.parentInfo}
                </motion.p>
                
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="font-roboto-slab text-gray-700">
                    Bapak {weddingData.groom.father}
                  </p>
                  <p className="font-roboto-slab text-gray-700">
                    & Ibu {weddingData.groom.mother}
                  </p>
                </motion.div>

                {/* Instagram placeholder or link */}
                {weddingData.groom.instagram ? (
                  <motion.a
                    href={`https://instagram.com/${weddingData.groom.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mt-4"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @{weddingData.groom.instagram}
                  </motion.a>
                ) : (
                  <motion.div
                    className="text-gray-400 text-sm mt-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    No Instagram
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Decorative Ampersand */}
        <motion.div
          className="flex justify-center mt-16 md:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={ampersandVariants}
        >
          <motion.div 
            className="text-6xl md:text-8xl font-playfair text-gray-300 font-light relative"
            whileHover={{ 
              scale: 1.1,
              color: "#d1d5db",
              transition: { duration: 0.4 }
            }}
          >
            &
            {/* Decorative elements around ampersand */}
            <motion.div 
              className="absolute -top-4 -left-4 w-2 h-2 bg-primary/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-2 h-2 bg-secondary/30 rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
