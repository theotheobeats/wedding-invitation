'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '../ui/dialog';
import FloatingParticles from '../ui/FloatingParticles';

const galleryImages = [
  { id: 1, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbXqf6wvgDL7tpu5Zbrw18K2ojNhVncqIzeF6S', alt: 'Eci & Sho Wedding Photo 1' },
  { id: 2, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt', alt: 'Eci & Sho Wedding Photo 2' },
  { id: 3, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbPqTfVnaKYEQifNSdbP93UCpFHJz8qLxrV6kw', alt: 'Eci & Sho Wedding Photo 3' },
  { id: 4, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbhXWHyLQzkVC1iSYKf8Z5RXnErvwO2aAx6mMU', alt: 'Eci & Sho Wedding Photo 4' },
  { id: 5, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb1R0sC67wJ6qlUnQodXTDOF3CVNWcZxgpuGHY', alt: 'Eci & Sho Wedding Photo 5' },
  { id: 6, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbrPcgnueJMC1D4ZGeypxH9Et8vfPNuwAVXncB', alt: 'Eci & Sho Wedding Photo 6' },
  { id: 7, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbhXWHyLQzkVC1iSYKf8Z5RXnErvwO2aAx6mMU', alt: 'Eci & Sho Wedding Photo 7' },
  { id: 8, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbLVL5SS3Aw08W2p3ymD7SOME1tFndlXzCor4L', alt: 'Eci & Sho Wedding Photo 8' },
  { id: 9, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb6SORMH1lLCHBIuoynfra1WU4bOcJNki3SeKY', alt: 'Eci & Sho Wedding Photo 9' },
  { id: 10, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbfjDn622cDTkzlAW62qsMLYewuH5NCUx7mFXE', alt: 'Eci & Sho Wedding Photo 10' },
  { id: 11, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbGshH14OCfFdA9jbwVolHW4nXs8pSuROYk06e', alt: 'Eci & Sho Wedding Photo 11' },
  { id: 12, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbIQBtJjXaKL9NjAoB0Z6CYvwbuVFQWUXzxqIe', alt: 'Eci & Sho Wedding Photo 12' },
  { id: 13, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbrPcgnueJMC1D4ZGeypxH9Et8vfPNuwAVXncB', alt: 'Eci & Sho Wedding Photo 13' },
  { id: 14, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbTIXKZxR9mxsjAhVcWMKYR2npEbzBU7fv89qG', alt: 'Eci & Sho Wedding Photo 14' },
  { id: 15, src: 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt', alt: 'Eci & Sho Wedding Photo 15' },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 100, 
    opacity: 0, 
    scale: 0.8,
    rotateY: 15
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
};

const headerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "backOut"
    }
  }
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-8 w-96 h-96 border border-primary/8 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-32 left-12 w-64 h-64 border border-secondary/10 rounded-full z-15 animate-pulse delay-700"></div>

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
              alt="Gallery"
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </motion.div>

          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl text-gray-800 font-medium mb-4"
            variants={headerVariants}
          >
            Mini Gallery
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-roboto-slab"
            variants={headerVariants}
          >
            Sebuah kumpulan momen indah dari perjalanan cinta Eci & Sho
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-[2px] rounded-2xl">
                  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg group">
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        objectPosition: 'center center'
                      }}
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      onError={(e) => {
                        console.error('Gallery image failed to load:', image.src);
                        e.currentTarget.src = 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt';
                      }}
                    />

                    {/* Hover overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-black/20"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover icon */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-center text-white">
                        <motion.div 
                          className="w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          initial={{ scale: 0.5, rotate: -180 }}
                          whileHover={{ 
                            scale: 1, 
                            rotate: 0,
                            transition: { duration: 0.5, ease: "backOut" }
                          }}
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3h4a2 2 0 0 1 2 2v4m-6 0L21 3m-11 18h-4a2 2 0 0 1-2-2v-4m6 0L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                        <p className="text-sm font-medium font-roboto-slab">View Photo</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-3xl">
            {selectedImage && (
              <motion.div 
                className="relative w-full h-[85vh] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedImage}
                  alt="Gallery preview"
                  className="w-full h-full object-contain"
                />

                <motion.button
                  className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  onClick={() => setSelectedImage(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
