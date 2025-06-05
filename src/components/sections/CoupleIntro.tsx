'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import OptimizedImage from '../ui/ImageOptimized';
import FloatingParticles from '../ui/FloatingParticles';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { language, translate } = useLanguage();

  const brideParentInfoText = `${weddingData.bride.parentInfo[language]} ${weddingData.bride.father} ${translate('common.and')} ${weddingData.bride.mother}`;
  const groomParentInfoText = `${weddingData.groom.parentInfo[language]} ${weddingData.groom.father} ${translate('common.and')} ${weddingData.groom.mother}`;

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
              {translate('coupleIntroSection.invitationPreamble').split('\n').map((line, index, arr) => (
                <span key={index}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
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
                  className="font-playfair font-semibold text-2xl md:text-4xl text-left"
                >
                  {weddingData.bride.fullName}
                </motion.h4>
                <p
                  className="font-roboto-slab text-sm md:text-base text-gray-600 leading-relaxed text-left"
                >
                  {brideParentInfoText}
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced Decorative Ampersand */}
            <motion.div
              className="flex justify-center md:mt-24"
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

            {/* Enhanced Groom Section */}
            <motion.div
              className="text-center"
              variants={coupleVariants}
            >
              {/* Enhanced Photo with hover effects */}
              <motion.div
                className="relative w-full aspect-[3/4] mb-8 overflow-hidden rounded-3xl shadow-2xl bg-gray-200"
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
                className="space-y-4 text-right"
                variants={detailsVariants}
              >
                <motion.h4
                  className="font-playfair font-semibold text-2xl md:text-4xl text-right"
                >
                  {weddingData.groom.fullName}
                </motion.h4>
                <p
                  className="font-roboto-slab text-sm md:text-base text-gray-600 leading-relaxed text-right"
                >
                  {groomParentInfoText}
                </p>
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
