'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountdownTimer from '../ui-custom/CountdownTimer';
import { weddingDate } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

export default function SaveTheDate() {

  return (
    <section className="relative section-padding py-24 overflow-hidden">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/60 z-10" />
        <Image
          src="/IMG_0448.JPG"
          alt="Background pattern"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles count={10} className="z-15" />

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full z-15 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 border border-white/15 rounded-full z-15 animate-pulse delay-500"></div>

      <div className="container-wedding relative z-20">
        {/* Header Section with Enhanced Styling */}
        <motion.div
          className="text-center mb-16"
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
              src="https://ext.same-assets.com/1904390701/3084549826.svg"
              alt="Ornament"
              width={100}
              height={40}
              className="mx-auto filter brightness-0 invert opacity-90"
            />
          </motion.div>
          
          <motion.h2 
            className="heading-2 mb-8 text-white drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Menghitung Hari
          </motion.h2>
          
          <motion.div
            className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white font-montserrat text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-center">
              "Therefore what God has joined together, let no one separate. So they are no longer two, but one flesh."
            </p>
            <p className="text-secondary font-playfair text-sm sm:text-base md:text-lg italic text-center">Matthew 19:6</p>
          </motion.div>
        </motion.div>

        {/* Countdown Timer with Enhanced Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl rounded-full transform scale-150"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <CountdownTimer targetDate={weddingDate} />
            </div>
          </div>
        </motion.div>

        {/* Enhanced Photo Section with Better Layout */}
        <div className="max-w-5xl mx-auto">
          {/* Main Featured Image */}
          <motion.div
            className="relative group mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9]">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary p-[2px] rounded-3xl">
                <div className="bg-black rounded-3xl h-full w-full overflow-hidden">
                  <Image
                    src="/IMG_0454.JPG"
                    alt="Save the date main"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              
              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white">
                  <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">June 16, 2025</h3>
                  <p className="text-sm sm:text-base md:text-lg opacity-90">Our Special Day</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Side Images Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square relative">
                <Image
                  src="/IMG_0448.JPG"
                  alt="Save the date 2"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
            </motion.div>

            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square relative">
                <Image
                  src="/IMG_0432.JPG"
                  alt="Save the date 3"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/10 transition-colors duration-300"></div>
              </div>
            </motion.div>

            {/* Third image - hidden on mobile, visible on md+ */}
            <motion.div
              className="relative group overflow-hidden rounded-2xl shadow-xl hidden md:block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <div className="aspect-square relative">
                <Image
                  src="/IMG_0288.JPG"
                  alt="Save the date 4"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl text-white mb-3 sm:mb-4">Save The Date</h3>
            <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">Mark your calendar for our special celebration</p>
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-secondary">
              <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-r from-transparent to-secondary"></div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" />
              </svg>
              <div className="w-6 sm:w-8 h-[2px] bg-gradient-to-l from-transparent to-secondary"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
