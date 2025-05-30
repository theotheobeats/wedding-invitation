'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData, coupleNames } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

const timelineItems = [
  {
    id: 1,
    type: 'text',
    title: weddingData.loveStory.meeting.title,
    date: weddingData.loveStory.meeting.date,
    description: weddingData.loveStory.meeting.description,
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 2,
    type: 'image',
    title: weddingData.loveStory.meeting.title,
    image: '/IMG_0307.JPG',
    gridClass: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 3,
    type: 'text',
    title: weddingData.loveStory.commitment.title,
    date: weddingData.loveStory.commitment.date,
    description: weddingData.loveStory.commitment.description,
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 4,
    type: 'image',
    title: weddingData.loveStory.commitment.title,
    image: '/IMG_0380.JPG',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 5,
    type: 'image',
    title: weddingData.loveStory.engagement.title,
    image: '/IMG_0338.JPG',
    gridClass: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 6,
    type: 'text',
    title: weddingData.loveStory.engagement.title,
    date: weddingData.loveStory.engagement.date,
    description: weddingData.loveStory.engagement.description,
    gridClass: 'md:col-span-1 md:row-span-1'
  }
];

export default function LoveStory() {
  return (
    <section className="relative bg-gray-900 py-20 md:py-32 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />
      
      <div className="container-wedding relative z-20">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Kisah Cinta
          </motion.h2>
          
          <motion.h3 
            className="font-roboto-slab text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Kami Berdua
          </motion.h3>
        </motion.div>

        {/* Masonry Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pertemuan Text Card */}
            <motion.div
              className="bg-gray-700 rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mr-3">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" />
                </svg>
                <span className="font-roboto-slab text-sm text-gray-300">{weddingData.loveStory.meeting.date}</span>
              </div>
              <h3 className="font-playfair text-xl text-white font-medium mb-3">{weddingData.loveStory.meeting.title}</h3>
              <p className="font-roboto-slab text-sm text-gray-300 leading-relaxed flex-1">
                {weddingData.loveStory.meeting.description}
              </p>
            </motion.div>

            {/* Large Image Card */}
            <motion.div
              className="relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-[600px] md:col-span-1 lg:row-span-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/IMG_0307.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            {/* Hubungan Text Card */}
            <motion.div
              className="bg-gray-800 rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mr-3">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                </svg>
                <span className="font-roboto-slab text-sm text-gray-300">{weddingData.loveStory.commitment.date}</span>
              </div>
              <h3 className="font-playfair text-xl text-white font-medium mb-3">{weddingData.loveStory.commitment.title}</h3>
              <p className="font-roboto-slab text-sm text-gray-300 leading-relaxed flex-1">
                {weddingData.loveStory.commitment.description}
              </p>
            </motion.div>

            {/* Medium Image Card */}
            <motion.div
              className="relative rounded-2xl overflow-hidden min-h-[250px] md:col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="/IMG_0380.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            {/* Another Image Card */}
            <motion.div
              className="relative rounded-2xl overflow-hidden min-h-[250px] md:col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/IMG_0338.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            {/* Tunangan Text Card */}
            <motion.div
              className="bg-black rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mr-3">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <span className="font-roboto-slab text-sm text-gray-300">{weddingData.loveStory.engagement.date}</span>
              </div>
              <h3 className="font-playfair text-xl text-white font-medium mb-3">{weddingData.loveStory.engagement.title}</h3>
              <p className="font-roboto-slab text-sm text-gray-300 leading-relaxed flex-1">
                {weddingData.loveStory.engagement.description}
              </p>
            </motion.div>

            {/* Final Image Card */}
            <motion.div
              className="relative rounded-2xl overflow-hidden min-h-[250px] md:col-span-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <Image
                src="/IMG_0195.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </motion.div>

            {/* Menikah Text Card */}
            <motion.div
              className="bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white mr-3">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" />
                </svg>
                <span className="font-roboto-slab text-sm text-gray-300">Juni 2025</span>
              </div>
              <h3 className="font-playfair text-xl text-white font-medium mb-3">Menikah</h3>
              <p className="font-roboto-slab text-sm text-gray-300 leading-relaxed flex-1">
                Akhirnya hari yang ditunggu-tunggu tiba! {coupleNames} akan mengadakan pernikahan yang indah dan penuh berkah. Sebuah perjalanan cinta yang dimulai dari kantor di Osaka, Jepang, kini akan berlanjut ke jenjang yang lebih sakral. Dengan dukungan keluarga dan teman-teman, kami siap memulai babak baru dalam hidup sebagai suami istri.
              </p>
            </motion.div>

          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto">
            <p className="font-playfair text-xl md:text-2xl text-white italic leading-relaxed">
              "Dan mereka hidup bahagia selamanya..."
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-gray-400">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gray-400"></div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
              </svg>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gray-400"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
