'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingData } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

// Animation variants
const headerVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    y: 120, 
    opacity: 0, 
    scale: 0.8,
    rotateX: 15 
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

export default function WeddingDetails() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const weddingDate = new Date('2025-06-16T09:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-100 py-16 md:py-24 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />

      <div className="container-wedding relative z-20">
        {/* Header with decorative element */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-8 bg-gray-100 rounded-b-full border-l-2 border-r-2 border-b-2 border-gray-300"></div>
            <h2 className="font-roboto-slab text-lg text-gray-700 pt-8">
              Acara akan dilaksanakan Pada
            </h2>
          </div>
        </motion.div>

        {/* Event Cards */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Blessing Event */}
          <motion.div 
            className="event-card bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              scale: 1.02,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
          >
            <div className="card-inner p-8 md:p-10">
              {/* Date Section */}
              <motion.div 
                className="date-section text-center mb-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="text-4xl md:text-5xl font-playfair text-primary font-bold mb-2">
                  16
                </div>
                <div className="text-lg font-roboto-slab text-gray-700 uppercase tracking-wider">
                  Juni 2025
                </div>
              </motion.div>

              {/* Details Section */}
              <div className="details-section text-center space-y-4">
                <h3 className="font-playfair text-2xl md:text-3xl text-gray-800 font-medium">
                  Pemberkatan Nikah
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-gray-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-roboto-slab">{weddingData.events.blessing.time} WIB</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-roboto-slab">{weddingData.events.blessing.venue}</span>
                  </div>
                </div>

                <motion.button 
                  className="maps-button mt-6 px-6 py-3 bg-white/90 text-gray-700 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: '#ffffff',
                    color: '#374151'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(weddingData.events.blessing.shareLocation, '_blank')}
                >
                  Lihat Lokasi
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Reception Event */}
          <motion.div 
            className="event-card bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              scale: 1.02,
              transition: { duration: 0.6, ease: "easeOut" }
            }}
          >
            <div className="card-inner p-8 md:p-10">
              {/* Date Section */}
              <motion.div 
                className="date-section text-center mb-8 p-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="text-4xl md:text-5xl font-playfair text-secondary font-bold mb-2">
                  16
                </div>
                <div className="text-lg font-roboto-slab text-gray-700 uppercase tracking-wider">
                  Juni 2025
                </div>
              </motion.div>

              {/* Details Section */}
              <div className="details-section text-center space-y-4">
                <h3 className="font-playfair text-2xl md:text-3xl text-gray-800 font-medium">
                  Resepsi
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-center text-gray-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-roboto-slab">{weddingData.events.reception.time} WIB</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span className="font-roboto-slab">{weddingData.events.reception.venue}</span>
                  </div>
                </div>

                <motion.button 
                  className="maps-button mt-6 px-6 py-3 bg-white/90 text-gray-700 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: '#ffffff',
                    color: '#374151'
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(weddingData.events.reception.shareLocation, '_blank')}
                >
                  Lihat Lokasi
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="font-playfair text-2xl md:text-3xl text-gray-800 font-medium mb-8">
            Menuju Hari Bahagia
          </h3>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-md mx-auto">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + index * 0.1,
                  ease: "backOut"
                }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-200">
                  <div className="text-2xl md:text-3xl font-playfair font-bold text-primary mb-1">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs md:text-sm font-roboto-slab text-gray-600 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
