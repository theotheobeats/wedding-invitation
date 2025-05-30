'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';
import { useState, useEffect } from 'react';

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-8 bg-gray-100 rounded-b-full border-l-2 border-r-2 border-b-2 border-gray-300"></div>
            <h2 className="font-roboto-slab text-lg text-gray-700 pt-8">
              Acara akan dilaksanakan Pada
            </h2>
          </div>
        </motion.div>

        {/* Event Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Akad Nikah Card */}
          <motion.div
            className="bg-white shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Card Header */}
            <div className="bg-gray-200 px-6 py-4 relative">
              <div className="absolute top-4 right-4">
                <div className="w-8 h-12 bg-white shadow-md transform rotate-12"></div>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl text-gray-800 font-medium">
                Akad Nikah
              </h3>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Date Section */}
              <div className="bg-white p-8 md:w-1/3 flex flex-col justify-center items-center border-r border-gray-100">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gray-700 mb-2">16</div>
                  <div className="space-y-1">
                    <div className="text-lg font-roboto-slab text-gray-600">Minggu</div>
                    <div className="text-lg font-roboto-slab text-gray-600">Juni 2025</div>
                  </div>
                </div>
              </div>

              {/* Details Section with Background Image */}
              <div className="relative md:w-2/3 h-64 md:h-auto">
                <Image
                  src="/IMG_0307.JPG"
                  alt="Ceremony Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Pukul</span>
                    </div>
                    <p className="font-roboto-slab text-lg">{weddingData.events.blessing.time} WIB - selesai</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Kediaman mempelai wanita</span>
                    </div>
                    <p className="font-roboto-slab text-sm leading-relaxed">
                      {weddingData.events.blessing.address}
                    </p>
                  </div>

                  <motion.a
                    href={weddingData.events.blessing.shareLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-6 py-3 font-roboto-slab font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300 self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Google Maps
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resepsi Card */}
          <motion.div
            className="bg-white shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Card Header */}
            <div className="bg-gray-200 px-6 py-4 relative">
              <div className="absolute top-4 right-4">
                <div className="w-8 h-12 bg-white shadow-md transform rotate-12"></div>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl text-gray-800 font-medium">
                Resepsi
              </h3>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Date Section */}
              <div className="bg-white p-8 md:w-1/3 flex flex-col justify-center items-center border-r border-gray-100">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gray-700 mb-2">16</div>
                  <div className="space-y-1">
                    <div className="text-lg font-roboto-slab text-gray-600">Minggu</div>
                    <div className="text-lg font-roboto-slab text-gray-600">Juni 2025</div>
                  </div>
                </div>
              </div>

              {/* Details Section with Background Image */}
              <div className="relative md:w-2/3 h-64 md:h-auto">
                <Image
                  src="/IMG_0380.JPG"
                  alt="Reception Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Pukul</span>
                    </div>
                    <p className="font-roboto-slab text-lg">{weddingData.events.reception.time} WIB - selesai</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Kediaman mempelai wanita</span>
                    </div>
                    <p className="font-roboto-slab text-sm leading-relaxed">
                      {weddingData.events.reception.address}
                    </p>
                  </div>

                  <motion.a
                    href={weddingData.events.reception.shareLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-6 py-3 font-roboto-slab font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300 self-start"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Google Maps
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
