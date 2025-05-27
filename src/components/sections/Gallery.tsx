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
      <FloatingParticles count={4} className="z-10" />

      {/* Simplified Decorative Background Elements */}
      <div className="absolute top-20 right-8 w-96 h-96 border border-primary/8 rounded-full z-15"></div>
      <div className="absolute bottom-32 left-12 w-64 h-64 border border-secondary/10 rounded-full z-15"></div>

      <div className="container-wedding relative z-20">
        {/* Minimal Header Section */}
        <div className="text-center mb-20 sm:mb-24">
          <div className="mb-8">
            <Image
              src="https://ext.same-assets.com/1904390701/1875536406.svg"
              alt="Gallery"
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </div>

          <h2 className="section-title mb-4">
            Mini Gallery
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Sebuah kumpulan momen indah dari perjalanan cinta Eci & Sho
          </p>
        </div>

        {/* Simplified Grid Layout */}
        <div className="max-w-6xl mx-auto">
          {/* Responsive Grid: 2 columns mobile, 3 tablet, 4 desktop */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                onClick={() => setSelectedImage(image.src)}
              >
                {/* Clean container with subtle border */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-[2px] rounded-2xl">
                  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{
                        objectPosition: 'center center'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        console.error('Gallery image failed to load:', image.src);
                        e.currentTarget.src = '/Gress-518.jpg';
                      }}
                    />

                    {/* Simplified overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Minimal hover content */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3h4a2 2 0 0 1 2 2v4m-6 0L21 3m-11 18h-4a2 2 0 0 1-2-2v-4m6 0L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium">View Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simplified Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-3xl">
            {selectedImage && (
              <div className="relative w-full h-[85vh] rounded-2xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Gallery preview"
                  className="w-full h-full object-contain"
                />

                {/* Close button */}
                <button
                  className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
