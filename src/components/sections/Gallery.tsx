'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dialog, DialogContent } from '../ui/dialog';
import FloatingParticles from '../ui/FloatingParticles';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    // Set initial states
    gsap.set(header.children, { y: 50, opacity: 0 });
    gsap.set('.gallery-item', { y: 100, opacity: 0, scale: 0.8, rotationY: 15 });

    // Header animation
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: 'play none none reverse'
      }
    });

    headerTl
      .to(header.children[0], { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'back.out(1.7)',
        rotation: 360
      })
      .to(header.children[1], { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power3.out'
      }, '-=0.5')
      .to(header.children[2], { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power3.out'
      }, '-=0.6');

    // Gallery items animation
    const items = gsap.utils.toArray('.gallery-item');
    
    gsap.timeline({
      scrollTrigger: {
        trigger: grid,
        start: 'top 85%',
        end: 'bottom 50%',
        toggleActions: 'play none none reverse'
      }
    }).to(items, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      duration: 1.2,
      ease: 'power3.out',
      stagger: {
        each: 0.1,
        from: 'random'
      }
    });

    // Magnetic hover effect for gallery items
    items.forEach((item: any) => {
      const image = item.querySelector('img');
      const overlay = item.querySelector('.hover-overlay');
      const icon = item.querySelector('.hover-icon');

      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out'
        });
        gsap.to(image, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.fromTo(icon, {
          scale: 0.5,
          rotation: -180
        }, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'back.out(1.7)'
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
        gsap.to(image, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      // Magnetic effect
      item.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(item, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-20 md:py-32 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-8 w-96 h-96 border border-primary/8 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-32 left-12 w-64 h-64 border border-secondary/10 rounded-full z-15 animate-pulse delay-700"></div>

      <div className="container-wedding relative z-20">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-20 sm:mb-24">
          <div className="mb-8">
            <Image
              src="https://ext.same-assets.com/1904390701/1875536406.svg"
              alt="Gallery"
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </div>

          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-gray-800 font-medium mb-4">
            Mini Gallery
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-roboto-slab">
            Sebuah kumpulan momen indah dari perjalanan cinta Eci & Sho
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-[2px] rounded-2xl">
                  <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        objectPosition: 'center center'
                      }}
                      loading="lazy"
                      onError={(e) => {
                        console.error('Gallery image failed to load:', image.src);
                        e.currentTarget.src = 'https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdbNdyPJ0t1Ur0yBwME7gRxvoZcOf6jLq9XPhDt';
                      }}
                    />

                    {/* Hover overlay */}
                    <div className="hover-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300"></div>

                    {/* Hover icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center text-white">
                        <div className="hover-icon w-12 h-12 mx-auto mb-2 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3h4a2 2 0 0 1 2 2v4m-6 0L21 3m-11 18h-4a2 2 0 0 1-2-2v-4m6 0L3 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="text-sm font-medium font-roboto-slab">View Photo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-2 bg-black/90 backdrop-blur-md border border-white/10 rounded-3xl">
            {selectedImage && (
              <div className="relative w-full h-[85vh] rounded-2xl overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Gallery preview"
                  className="w-full h-full object-contain"
                />

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
