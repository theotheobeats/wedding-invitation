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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const headerVariants = {
  hidden: { y: 80, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { 
    y: 150, 
    opacity: 0, 
    scale: 0.7, 
    rotateY: 45,
    z: -100 
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    z: 0,
    transition: {
      duration: 1.8,
      ease: "easeOut"
    }
  }
};

const quoteVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

export default function LoveStory() {
  return (
    <section className="relative bg-gray-900 py-20 md:py-32 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />

      {/* Animated decorative elements */}
      <div className="absolute top-20 left-8 w-96 h-96 border border-white/5 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-32 right-12 w-64 h-64 border border-white/8 rounded-full z-15 animate-pulse delay-700"></div>

      <div className="container-wedding relative z-20">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20 sm:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.div 
            className="mb-8"
            variants={headerVariants}
          >
            <Image
              src="https://ext.same-assets.com/1904390701/1875536406.svg"
              alt="Love Story"
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </motion.div>

          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-medium mb-4"
            variants={headerVariants}
          >
            Our Love Story
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-roboto-slab"
            variants={headerVariants}
          >
            Perjalanan cinta {weddingData.bride.nickname} & {weddingData.groom.nickname} yang dimulai dari pertemuan sederhana
          </motion.p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`story-card ${item.gridClass} ${item.type === 'image' ? 'image-card' : ''}`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  rotateY: item.type === 'image' ? 5 : -5,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
              >
                {item.type === 'text' ? (
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl h-full">
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.4, ease: "easeOut", stagger: 0.05 }}
                    >
                      <span className="inline-block px-4 py-2 bg-primary/20 text-primary-light rounded-full text-sm font-medium mb-6 font-roboto-slab">
                        {item.date}
                      </span>
                      
                      <h3 className="font-playfair text-2xl md:text-3xl text-white font-medium mb-6 leading-tight">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed font-roboto-slab text-base md:text-lg">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                ) : (
                  <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      onError={(e) => {
                        console.error('Love story image failed to load:', item.image);
                        e.currentTarget.src = '/IMG_0307.JPG';
                      }}
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.h3 
                        className="font-playfair text-xl md:text-2xl text-white font-medium"
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {item.title}
                      </motion.h3>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div 
          className="bottom-quote text-center mt-20 md:mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={quoteVariants}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" />
                </svg>
              </motion.div>
              
              <blockquote className="font-playfair text-xl md:text-2xl lg:text-3xl text-white italic leading-relaxed mb-6">
                "Cinta sejati adalah ketika dua hati bertemu dan memutuskan untuk berjalan bersama selamanya"
              </blockquote>
              
              <p className="text-gray-300 font-medium font-roboto-slab">
                - {weddingData.bride.nickname} & {weddingData.groom.nickname}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
