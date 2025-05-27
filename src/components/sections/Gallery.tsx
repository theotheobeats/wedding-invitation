'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '../ui/dialog';
import FloatingParticles from '../ui/FloatingParticles';

const galleryImages = [
  { id: 1, src: '/IMG_0195.JPG', alt: 'Eci & Sho Wedding Photo 1' },
  { id: 2, src: '/IMG_0211.JPG', alt: 'Eci & Sho Wedding Photo 2' },
  { id: 3, src: '/IMG_0234.JPG', alt: 'Eci & Sho Wedding Photo 3' },
  { id: 4, src: '/IMG_0237.JPG', alt: 'Eci & Sho Wedding Photo 4' },
  { id: 5, src: '/IMG_0307.JPG', alt: 'Eci & Sho Wedding Photo 5' },
  { id: 6, src: '/IMG_0321.JPG', alt: 'Eci & Sho Wedding Photo 6' },
  { id: 7, src: '/IMG_0338.JPG', alt: 'Eci & Sho Wedding Photo 7' },
  { id: 8, src: '/IMG_0380.JPG', alt: 'Eci & Sho Wedding Photo 8' },
  { id: 9, src: '/IMG_0427.JPG', alt: 'Eci & Sho Wedding Photo 9' },
  { id: 10, src: '/IMG_8700.JPG', alt: 'Eci & Sho Wedding Photo 10' },
  { id: 11, src: '/IMG_9223.JPG', alt: 'Eci & Sho Wedding Photo 11' },
  { id: 12, src: '/IMG_9226.JPG', alt: 'Eci & Sho Wedding Photo 12' },
  { id: 13, src: '/IMG_9798.JPG', alt: 'Eci & Sho Wedding Photo 13' },
  { id: 14, src: '/IMG_9823.JPG', alt: 'Eci & Sho Wedding Photo 14' },
  { id: 15, src: '/Gress-518.jpg', alt: 'Eci & Sho Wedding Photo 15' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative section-padding py-20 bg-muted overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={20} className="z-10" />

      {/* Enhanced Decorative Background Elements */}
      <div className="absolute top-20 right-8 w-96 h-96 border border-primary/8 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-32 left-12 w-64 h-64 border border-secondary/10 rounded-full z-15 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-8 w-40 h-40 border border-primary/6 rounded-full z-15 animate-pulse delay-500"></div>

      <div className="container-wedding relative z-20">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20 sm:mb-24"
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
              src="https://ext.same-assets.com/1904390701/1875536406.svg"
              alt="Gallery"
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </motion.div>

          <motion.h2
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Mini Gallery
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Sebuah kumpulan momen indah dari perjalanan cinta Eci & Sho
          </motion.p>
        </motion.div>

        {/* Normal Grid Layout */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Responsive Grid: 2 columns mobile, 3 tablet, 4 desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 120
                }}
                viewport={{ once: true, margin: "-50px" }}
                onClick={() => setSelectedImage(image.src)}
              >
                {/* Clean container with subtle border */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-[2px] rounded-2xl">
                  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{
                        objectPosition: index % 3 === 0 ? 'center 30%' : index % 3 === 1 ? 'center 20%' : 'center center'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        console.error('Gallery image failed to load:', image.src);
                        e.currentTarget.src = '/Gress-518.jpg';
                      }}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Hover content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
                      <div className="text-center text-white">
                        <motion.div
                          className="w-14 h-14 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3h4a2 2 0 0 1 2 2v4m-6 0L21 3m-11 18h-4a2 2 0 0 1-2-2v-4m6 0L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                        <p className="text-sm font-medium">View Photo</p>
                      </div>
                    </div>
                  </div>
                </div>

                å
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            className="text-center mt-12 lg:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </motion.div>

        {/* Enhanced Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-3xl">
            {selectedImage && (
              <motion.div
                className="relative w-full h-[85vh] rounded-2xl overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedImage}
                  alt="Gallery preview"
                  className="w-full h-full object-contain"
                />

                {/* Close button */}
                <motion.button
                  className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
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
