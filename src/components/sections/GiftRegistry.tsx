'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';
import { useLanguage } from '@/contexts/LanguageContext';

const bankAccounts = [
  {
    id: 1,
    bankName: weddingData.digitalGift.bank,
    name: weddingData.digitalGift.accountName,
    accountNumber: weddingData.digitalGift.accountNumber
  }
];

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

const buttonVariants = {
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
      duration: 1,
      ease: [0.34, 1.56, 0.64, 1],
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    y: -3,
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

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9,
    rotateY: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 60,
      damping: 20
    }
  }
};

const accountVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2
    }
  }
};

export default function GiftRegistry() {
  const { translate } = useLanguage();

  return (
    <section className="relative section-padding py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Enhanced Floating Particles */}
      <FloatingParticles count={5} className="z-10" />
      
      {/* Decorative animated elements */}
      <motion.div 
        className="absolute top-20 right-8 w-48 h-48 border border-primary/8 rounded-full z-15"
        animate={{ 
          rotate: 360,
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-8 w-32 h-32 border border-secondary/10 rounded-full z-15"
        animate={{ 
          rotate: -360,
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }
        }}
      />

      <div className="container-wedding relative z-20">
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="flex justify-center mb-8"
            variants={headerVariants}
          >
            <motion.div
              className="relative"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="https://ext.same-assets.com/1904390701/1788928505.svg"
                alt={translate('giftSection.headerIconAltGift')}
                width={50}
                height={50}
                className="mr-3 opacity-80 inline-block"
              />
              <Image
                src="https://ext.same-assets.com/1904390701/857206430.svg"
                alt={translate('giftSection.headerIconAltRegistry')}
                width={50}
                height={50}
                className="opacity-80 inline-block"
              />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="section-title mb-6"
            variants={headerVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            {translate('giftSection.title')}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={headerVariants}
          >
            {translate('giftSection.description')}
          </motion.p>
        </motion.div>

        {/* Enhanced Account Cards */}
        <motion.div
          className="flex justify-center mt-8 sm:mt-10 md:mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
              {bankAccounts.map((account) => (
                <motion.div
                  key={account.id}
                  className="card-wedding p-8 sm:p-10 md:p-12 max-w-md w-full"
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="text-center mb-8 sm:mb-10 space-y-4"
                    variants={accountVariants}
                  >
                    {/* Enhanced Bank Icon */}
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
                        <path d="M12 2L2 7v10c0 5.55 3.84 7.74 9 9 5.16-1.26 9-3.45 9-9V7l-10-5z" fill="currentColor"/>
                        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>

                    <motion.h3 
                      className="font-playfair text-2xl sm:text-3xl md:text-4xl text-primary font-bold"
                      whileHover={{ 
                        scale: 1.05,
                        color: "#be185d",
                        transition: { duration: 0.3 }
                      }}
                    >
                      {account.bankName}
                    </motion.h3>
                    
                    <motion.h4 
                      className="font-roboto-slab text-lg sm:text-xl text-gray-700 font-medium"
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {account.name}
                    </motion.h4>
                    
                    <motion.div 
                      className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl border border-gray-200"
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "#f9fafb",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.p 
                        className="font-roboto-slab text-xl sm:text-2xl font-bold text-gray-800 tracking-wider"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {account.accountNumber}
                      </motion.p>
                    </motion.div>

                    {/* Copy Button */}
                    <motion.button
                      className="mt-6 px-6 py-3 bg-white border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300"
                      onClick={() => {
                        navigator.clipboard.writeText(account.accountNumber);
                        // You could add a toast notification here
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ x: 2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        Copy Number
                      </motion.div>
                    </motion.button>
                  </motion.div>

                  {/* Decorative elements */}
                  <motion.div 
                    className="flex justify-center items-center gap-3"
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
              ))}
        </motion.div>
      </div>
    </section>
  );
}
