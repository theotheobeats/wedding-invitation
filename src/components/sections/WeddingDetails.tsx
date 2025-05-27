'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

export default function WeddingDetails() {
  return (
    <section className="relative section-padding bg-muted overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={22} className="z-10" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-primary/20 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-28 h-28 border border-secondary/15 rounded-full z-15 animate-pulse delay-700"></div>
      <div className="absolute top-1/3 right-5 w-20 h-20 border border-primary/10 rounded-full z-15 animate-pulse delay-300"></div>

      <div className="container-wedding relative z-20">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Image
              src="https://ext.same-assets.com/1904390701/219188068.svg"
              alt="Event Details"
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </motion.div>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Detail Acara
          </motion.h2>
        </motion.div>

        {/* Main Events Container */}
        <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Blessing Ceremony */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/10 to-transparent rounded-bl-3xl"></div>

                <div className="text-center relative z-10">
                  {/* Event Icon */}
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M20 6v2H4V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-2 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6h12v6z" fill="currentColor" />
                      <path d="M8 14h8v2H8v-2z" fill="currentColor" opacity="0.7" />
                    </svg>
                  </motion.div>

                  <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl mb-8 text-primary font-bold">Pemberkatan Nikah</h3>

                  {/* Date Display */}
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 mb-8">
                    <div className="flex justify-center items-center gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">16</div>
                        <div className="text-sm font-medium uppercase text-gray-600 tracking-wider">Senin</div>
                      </div>
                      <div className="w-px h-16 bg-gradient-to-b from-primary to-secondary"></div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-medium text-gray-700 mb-1">Juni</div>
                        <div className="text-lg sm:text-xl font-medium text-gray-700">2025</div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-6 mb-8">
                    <div className="bg-white/50 rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-2">Pukul</h4>
                      <p className="text-gray-700 font-medium">{weddingData.events.blessing.time} WIB - selesai</p>
                    </div>

                    <div className="bg-white/50 rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-2">Tempat</h4>
                      <p className="text-gray-700 font-medium mb-2">{weddingData.events.blessing.venue}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {weddingData.events.blessing.address}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  {weddingData.events.blessing.shareLocation && (
                    <motion.a
                      href={weddingData.events.blessing.shareLocation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                      Google Maps
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Reception */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative gradient overlay */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/10 to-transparent rounded-br-3xl"></div>

                <div className="text-center relative z-10">
                  {/* Event Icon */}
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-secondary to-primary rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: -360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" fill="currentColor" />
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>

                  <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl mb-8 text-primary font-bold">Resepsi</h3>

                  {/* Date Display */}
                  <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-6 mb-8">
                    <div className="flex justify-center items-center gap-6 mb-4">
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2">16</div>
                        <div className="text-sm font-medium uppercase text-gray-600 tracking-wider">Senin</div>
                      </div>
                      <div className="w-px h-16 bg-gradient-to-b from-secondary to-primary"></div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-medium text-gray-700 mb-1">Juni</div>
                        <div className="text-lg sm:text-xl font-medium text-gray-700">2025</div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="space-y-6 mb-8">
                    <div className="bg-white/50 rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-2">Pukul</h4>
                      <p className="text-gray-700 font-medium">{weddingData.events.reception.time} WIB - selesai</p>
                    </div>

                    <div className="bg-white/50 rounded-xl p-4">
                      <h4 className="font-semibold text-primary mb-2">Tempat</h4>
                      <p className="text-gray-700 font-medium mb-2">{weddingData.events.reception.venue}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {weddingData.events.reception.address}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  {weddingData.events.reception.shareLocation && (
                    <motion.a
                      href={weddingData.events.reception.shareLocation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-primary text-white py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                      Google Maps
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
