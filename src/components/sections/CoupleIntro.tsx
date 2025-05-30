'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import OptimizedImage from '../ui/ImageOptimized';
import FloatingParticles from '../ui/FloatingParticles';

export default function CoupleIntro() {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={2} className="z-10" />
      
      <div className="container-wedding relative z-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20 md:mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {/* Decorative curved text elements */}
          <div className="relative mb-8">
            
            <motion.h2 
              className="font-playfair md:text-3xl text-gray-800 font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/I
              <br />
              untuk menghadiri acara pernikahan kami
            </motion.h2>
            
          </div>
        </motion.div>

        {/* Couple Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Bride */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Large Photo */}
              <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden">
                <OptimizedImage
                  src={weddingData.bride.photo}
                  alt={weddingData.bride.nickname}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Name overlay on photo */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-playfair text-3xl md:text-4xl text-white font-light">
                    {weddingData.bride.nickname}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 text-left">
                <h4 className="font-playfair text-2xl md:text-3xl text-gray-800 font-medium">
                  {weddingData.bride.fullName}
                </h4>
                
                <p className="font-roboto-slab text-sm text-gray-600 uppercase tracking-wider">
                  {weddingData.bride.parentInfo}
                </p>
                
                <div className="space-y-1">
                  <p className="font-roboto-slab text-gray-700">
                    Bapak {weddingData.bride.father}
                  </p>
                  <p className="font-roboto-slab text-gray-700">
                    & Ibu {weddingData.bride.mother}
                  </p>
                </div>

                {/* Instagram */}
                {weddingData.bride.instagram && (
                  <motion.a
                    href={`https://instagram.com/${weddingData.bride.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 mt-4"
                    whileHover={{ x: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                    <span className="font-roboto-slab text-sm">@{weddingData.bride.instagram}</span>
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Groom */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Large Photo */}
              <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden">
                <OptimizedImage
                  src={weddingData.groom.photo}
                  alt={weddingData.groom.nickname}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* Name overlay on photo */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-playfair text-3xl md:text-4xl text-white font-light">
                    {weddingData.groom.nickname}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4 text-left">
                <h4 className="font-playfair text-2xl md:text-3xl text-gray-800 font-medium">
                  {weddingData.groom.fullName}
                </h4>
                
                <p className="font-roboto-slab text-sm text-gray-600 uppercase tracking-wider">
                  {weddingData.groom.parentInfo}
                </p>
                
                <div className="space-y-1">
                  <p className="font-roboto-slab text-gray-700">
                    Bapak {weddingData.groom.father}
                  </p>
                  <p className="font-roboto-slab text-gray-700">
                    & Ibu {weddingData.groom.mother}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Ampersand */}
        <motion.div
          className="flex justify-center mt-16 md:mt-24"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-6xl md:text-8xl font-playfair text-gray-300 font-light">
            &
          </div>
        </motion.div>
      </div>
    </section>
  );
}
