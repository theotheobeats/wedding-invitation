'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingData } from '@/lib/wedding-data';
import { useLanguage } from '@/contexts/LanguageContext';

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

const cardVariants = {
  hidden: { 
    y: 80, 
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function WeddingDetails() {
  const { translate } = useLanguage();
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
    <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="container-wedding relative z-20">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headerVariants}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 font-semibold">
            {translate('weddingDetailsSection.title')}
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="max-w-md mx-auto space-y-8">
          {/* Akad Nikah Card */}
          <motion.div 
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            {/* Ribbon Bookmark */}
            <div className="absolute top-0 right-6 z-20">
              <div className="w-12 h-16 bg-white shadow-md relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXqf6wvgDL7tpu5Zbrw18K2ojNhVncqIzeF6S"
                alt={translate('weddingDetailsSection.eventPhotoAlt')}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header Section */}
              <div className="p-6 pb-0">
                <h3 className="font-roboto-slab text-xl text-gray-800 font-medium">
                  {translate('weddingDetailsSection.ceremony')}
                </h3>
              </div>

              {/* Date Section */}
              <div className="flex items-start p-6 pt-4">
                <div className="flex-shrink-0 mr-6">
                  <div className="text-7xl font-bold text-gray-700 leading-none">
                    16
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-lg text-gray-600 font-medium">
                    {translate('weddingDetailsSection.dayOfWeekMonday')}
                  </div>
                  <div className="text-lg text-gray-600">
                    {translate('weddingDetailsSection.monthYearJune2025')}
                  </div>
                </div>
              </div>

              {/* Details Section with Dark Overlay */}
              <div className="bg-black/70 text-white p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="text-sm text-white/90 mb-1">{translate('weddingDetailsSection.timeLabel')}</div>
                    <div className="font-medium">{`${weddingData.events.blessing.time} ${translate('weddingDetailsSection.timeSuffixFinish')}`}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 flex-shrink-0">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <div>
                        <div className="text-sm text-white/90 mb-1">{translate('weddingDetailsSection.placeLabel')}</div>
                        <div className="font-medium">{weddingData.events.blessing.venue}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Google Maps Button */}
              <motion.button 
                className="w-full bg-gray-800 text-white py-4 flex items-center justify-center space-x-2 font-medium"
                whileHover={{ backgroundColor: '#374151' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(weddingData.events.blessing.shareLocation, '_blank')}
              >
                <span>{translate('weddingDetailsSection.viewLocation')}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Resepsi Card */}
          <motion.div 
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            {/* Ribbon Bookmark */}
            <div className="absolute top-0 right-6 z-20">
              <div className="w-12 h-16 bg-white shadow-md relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbhXWHyLQzkVC1iSYKf8Z5RXnErvwO2aAx6mMU"
                alt={translate('weddingDetailsSection.eventPhotoAlt')}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header Section */}
              <div className="p-6 pb-0">
                <h3 className="font-roboto-slab text-xl text-gray-800 font-medium">
                  {translate('weddingDetailsSection.reception')}
                </h3>
              </div>

              {/* Date Section */}
              <div className="flex items-start p-6 pt-4">
                <div className="flex-shrink-0 mr-6">
                  <div className="text-7xl font-bold text-gray-700 leading-none">
                    16
                  </div>
                </div>
                <div className="pt-4">
                  <div className="text-lg text-gray-600 font-medium">
                    {translate('weddingDetailsSection.dayOfWeekMonday')}
                  </div>
                  <div className="text-lg text-gray-600">
                    {translate('weddingDetailsSection.monthYearJune2025')}
                  </div>
                </div>
              </div>

              {/* Details Section with Dark Overlay */}
              <div className="bg-black/70 text-white p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-1">
                    <div className="text-sm text-white/90 mb-1">{translate('weddingDetailsSection.timeLabel')}</div>
                    <div className="font-medium">{`${weddingData.events.reception.time} ${translate('weddingDetailsSection.timeSuffixFinish')}`}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 mt-1 flex-shrink-0">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <div>
                        <div className="text-sm text-white/90 mb-1">{translate('weddingDetailsSection.placeLabel')}</div>
                        <div className="font-medium">{weddingData.events.reception.venue}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <motion.button 
                className="w-full bg-gray-800 text-white py-4 flex items-center justify-center space-x-2 font-medium"
                whileHover={{ backgroundColor: '#374151' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(weddingData.events.reception.shareLocation, '_blank')}
              >
                <span>{translate('weddingDetailsSection.viewLocation')}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
