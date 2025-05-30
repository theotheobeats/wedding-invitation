'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountdownTimer from '../ui-custom/CountdownTimer';
import { weddingDate } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

export default function SaveTheDate() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden">
      {/* Main Content Area */}
      <div className="relative flex-1 overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 to-black/30" />

        {/* Floating Particles */}
        <FloatingParticles count={3} className="z-15" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-between md:p-12">
          <div className='flex gap-4'>
            <div>
              {/* Title and Quote Section */}
              <motion.div
                className="mt-16 md:mt-24 p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <motion.h1
                  className="font-playfair text-4xl md:text-5xl lg:text-6xl tracking-wide font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Menghitung
                  <br />
                  Hari
                </motion.h1>

                <motion.div
                  className="mt-8 md:mt-12 max-w-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-sm md:text-base leading-relaxed font-roboto-slab">
                    "Therefore a man shall leave his father and his mother and hold fast to his wife, and they shall become one flesh."
                  </p>
                  <p className="mt-4 font-medium font-roboto-slab">Genesis 2:24</p>
                </motion.div>
              </motion.div>

              {/* Couple Photo */}
              <motion.div
                className="relative w-1/2 md:w-1/3 h-48 md:h-64 mt-8 ml-8" 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Image
                  src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXqf6wvgDL7tpu5Zbrw18K2ojNhVncqIzeF6S"
                  alt="Couple photo"
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
            <div>
              {/* Countdown Sidebar */}
              <motion.div
                className="w-20 md:w-24 flex flex-row md:flex-col justify-between items-center bg-zinc-900 px-2 md:py-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <CountdownTimer targetDate={weddingDate} />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <Image
          src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb9PoITsHeOalHmg4Rnyt6Whs1UXrLdiEPMK3D"
          alt="Background"
          fill
          className="object-cover object-center z-0 opacity-60"
        />
      </div>


    </div>
  );
}
