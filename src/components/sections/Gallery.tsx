'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Dialog, DialogContent } from '../ui/dialog';
import FloatingParticles from '../ui/FloatingParticles';
import { getGalleryImageUrls } from '@/lib/image-urls';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { translate } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const generateGalleryImages = () => {
    const availableImages = getGalleryImageUrls();
    return availableImages.map((src, index) => ({
      id: index + 1,
      src,
      alt: `${translate('gallerySection.imageAltPrefix')} ${index + 1}`
    }));
  };

  const galleryImages = generateGalleryImages();

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
              alt={translate('gallerySection.headerIconAlt')}
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </motion.div>

          <motion.h2 
            className="font-playfair text-3xl md:text-4xl lg:text-5xl text-gray-800 font-medium mb-4"
            variants={headerVariants}
          >
            {translate('gallerySection.title')}
          </motion.h2>
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
                        // Use first available image as fallback
                        e.currentTarget.src = galleryImages[0]?.src || 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt';
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
                        <p className="text-sm font-medium font-roboto-slab">{translate('gallerySection.viewPhotoHover')}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Empty State */}
        {galleryImages.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-gray-600 text-lg">{translate('gallerySection.emptyMessage')}</p>
          </motion.div>
        )}

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
                  alt={translate('gallerySection.dialogPreviewAlt')}
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
