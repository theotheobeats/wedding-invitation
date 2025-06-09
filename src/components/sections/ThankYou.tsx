'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';
import { useLanguage } from '@/contexts/LanguageContext';

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

const iconVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3,
    rotate: -180
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
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
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 80,
      damping: 20
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

const textVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
};

const backgroundVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.1
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeOut"
    }
  }
};

export default function ThankYou() {
  const { translate } = useLanguage();
  const coupleDisplayName = `${weddingData.groom.nickname} ${translate('common.and')} ${weddingData.bride.nickname}`;

  return (
    <section className="section-padding py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        variants={backgroundVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/20 z-10"
          animate={{ opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Image
          src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbThibf49mxsjAhVcWMKYR2npEbzBU7fv89qG4"
          alt={translate('thankYouSection.backgroundAlt')}
          fill
          className="object-cover"
        />
      </motion.div>
      
      {/* Enhanced Floating Particles */}
      <FloatingParticles count={6} className="z-15" />

      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-20 left-8 w-32 h-32 border border-white/10 rounded-full z-15"
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
        className="absolute bottom-20 right-8 w-24 h-24 border border-white/15 rounded-full z-15"
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
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Enhanced Icon */}
          <motion.div
            className="mb-8"
            variants={iconVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="https://ext.same-assets.com/1904390701/898528465.svg"
                alt={translate('thankYouSection.headerIconAlt')}
                width={80}
                height={30}
                className="mx-auto"
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Title */}
          <motion.h2 
            className="heading-2 mb-8 text-white drop-shadow-lg"
            variants={titleVariants}
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            {translate('thankYouSection.title')}
          </motion.h2>

          {/* Enhanced Content Card */}
          <motion.div 
            className="bg-white/95 backdrop-blur-sm max-w-2xl mx-auto p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            <motion.p 
              className="text-center mb-8 text-sm md:text-base leading-relaxed text-gray-700"
              variants={textVariants}
            >
              {translate('thankYouSection.mainMessage')}
            </motion.p>

            <motion.div
              className="space-y-4"
              variants={textVariants}
            >
              <motion.h3 
                className="font-playfair text-xl md:text-2xl mb-4 text-gray-800"
                whileHover={{ 
                  scale: 1.02,
                  color: "#374151",
                  transition: { duration: 0.3 }
                }}
              >
                {translate('thankYouSection.happyCoupleSubtitle')}
              </motion.h3>
              
              <motion.h4 
                className="font-playfair text-2xl md:text-3xl text-primary font-medium"
                whileHover={{ 
                  scale: 1.05,
                  color: "#be185d",
                  transition: { duration: 0.3 }
                }}
              >
                {coupleDisplayName}
              </motion.h4>

              <motion.p 
                className="text-center text-sm text-gray-600 pt-4"
                variants={textVariants}
              >
                {translate('thankYouSection.closing')}
              </motion.p>
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              className="flex justify-center items-center gap-4 mt-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div 
                className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-3 h-3 bg-primary/30 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xs text-white/70 tracking-wider font-roboto-slab">
              {translate('thankYouSection.madeWithLove')} {" "}
              <a 
                href="https://instagram.com/valentinustheo"
                target="_blank"
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1 hover:text-primary transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="inline"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @valentinustheo
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle animated overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30 z-5"
        animate={{ opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
