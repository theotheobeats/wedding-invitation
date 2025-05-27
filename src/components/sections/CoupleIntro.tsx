'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import OptimizedImage from '../ui/ImageOptimized';
import FloatingParticles from '../ui/FloatingParticles';

export default function CoupleIntro() {
  return (
    <section className="relative section-padding bg-muted overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={5} className="z-10" />
      
      <div className="container-wedding relative z-20">
        <motion.div
          className="text-center mb-16 sm:mb-20 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "linear" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <Image
              src="https://ext.same-assets.com/1904390701/219188068.svg"
              alt="Ornament"
              width={80}
              height={30}
              className="mx-auto mb-6 opacity-70"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl max-w-4xl mx-auto">
              Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/I untuk menghadiri acara pernikahan kami.
            </h2>
          </div>
        </motion.div>

        {/* Couple Cards Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-20">
            {/* Bride */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-secondary/20 to-transparent rounded-tr-3xl"></div>
                
                <div className="text-center relative z-10">
                  {/* Photo with enhanced styling */}
                  <motion.div
                    className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <OptimizedImage
                        src={weddingData.bride.photo}
                        alt={weddingData.bride.nickname}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 192px, 224px"
                      />
                    </div>
                  </motion.div>

                  {/* Name and Title */}
                  <div className="space-y-3 mb-6">
                    <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-primary font-bold">
                      {weddingData.bride.nickname}
                    </h3>
                    <h4 className="font-montserrat text-lg sm:text-xl text-gray-700 font-medium">
                      {weddingData.bride.fullName}
                    </h4>
                  </div>

                  {/* Parents Info */}
                  <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                    <p className="text-primary text-sm font-medium mb-2 uppercase tracking-wider">
                      {weddingData.bride.parentInfo}
                    </p>
                    <p className="font-medium text-gray-700 leading-relaxed">
                      {weddingData.bride.father} <br />
                      & {weddingData.bride.mother}
                    </p>
                  </div>

                  {/* Social Media */}
                  {weddingData.bride.instagram && (
                    <motion.a
                      href={`https://instagram.com/${weddingData.bride.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      @{weddingData.bride.instagram}
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Groom */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-secondary/20 to-transparent rounded-tl-3xl"></div>
                
                <div className="text-center relative z-10">
                  {/* Photo with enhanced styling */}
                  <motion.div
                    className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-30"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                      <OptimizedImage
                        src={weddingData.groom.photo}
                        alt={weddingData.groom.nickname}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 192px, 224px"
                      />
                    </div>
                  </motion.div>

                  {/* Name and Title */}
                  <div className="space-y-3 mb-6">
                    <h3 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-primary font-bold">
                      {weddingData.groom.nickname}
                    </h3>
                    <h4 className="font-montserrat text-lg sm:text-xl text-gray-700 font-medium">
                      {weddingData.groom.fullName}
                    </h4>
                  </div>

                  {/* Parents Info */}
                  <div className="bg-muted/50 rounded-2xl p-6 mb-6">
                    <p className="text-primary text-sm font-medium mb-2 uppercase tracking-wider">
                      {weddingData.groom.parentInfo}
                    </p>
                    <p className="font-medium text-gray-700 leading-relaxed">
                      {weddingData.groom.father} <br />
                      & {weddingData.groom.mother}
                    </p>
                  </div>

                  {/* Social Media or Contact */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    The Groom
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
