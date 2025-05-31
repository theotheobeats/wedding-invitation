'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { weddingData } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WeddingDetails() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const weddingDate = new Date('2025-06-16T09:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) return;

    // Set initial states
    gsap.set(header.children, { y: 60, opacity: 0 });
    gsap.set('.event-card', { 
      y: 120, 
      opacity: 0, 
      scale: 0.8,
      rotationX: 15 
    });

    // Header animation with decorative element
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
        duration: 1.2, 
        ease: 'power3.out'
      });

    // Event cards spectacular reveal
    const cardElements = gsap.utils.toArray('.event-card');
    
    gsap.timeline({
      scrollTrigger: {
        trigger: cards,
        start: 'top 85%',
        end: 'bottom 30%',
        toggleActions: 'play none none reverse'
      }
    }).to(cardElements, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1.5,
      ease: 'power3.out',
      stagger: {
        each: 0.3,
        from: 'start'
      }
    });

    // Interactive card effects
    cardElements.forEach((card: any) => {
      const cardInner = card.querySelector('.card-inner');
      const dateSection = card.querySelector('.date-section');
      const detailsSection = card.querySelector('.details-section');
      const button = card.querySelector('.maps-button');

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.02,
          duration: 0.6,
          ease: 'power2.out'
        });

        gsap.to(dateSection, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out'
        });

        if (button) {
          gsap.to(button, {
            scale: 1.1,
            backgroundColor: '#ffffff',
            color: '#374151',
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });

        gsap.to(dateSection, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });

        if (button) {
          gsap.to(button, {
            scale: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#374151',
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });

      // 3D tilt effect
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(card, {
          rotationY: x * 0.02,
          rotationX: -y * 0.02,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.8,
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
    <section ref={sectionRef} className="relative bg-gray-100 py-16 md:py-24 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />

      <div className="container-wedding relative z-20">
        {/* Header with decorative element */}
        <div ref={headerRef} className="text-center mb-12">
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-16 h-8 bg-gray-100 rounded-b-full border-l-2 border-r-2 border-b-2 border-gray-300"></div>
            <h2 className="font-roboto-slab text-lg text-gray-700 pt-8">
              Acara akan dilaksanakan Pada
            </h2>
          </div>
        </div>

        {/* Event Cards */}
        <div ref={cardsRef} className="max-w-4xl mx-auto space-y-8">
          
          {/* Akad Nikah Card */}
          <div className="event-card bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="bg-gray-200 px-6 py-4 relative">
              <div className="absolute top-4 right-4">
                <div className="w-8 h-12 bg-white rounded-sm shadow-md transform rotate-12"></div>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl text-gray-800 font-medium">
                Akad Nikah
              </h3>
            </div>

            <div className="card-inner flex flex-col md:flex-row">
              {/* Date Section */}
              <div className="date-section bg-white p-8 md:w-1/3 flex flex-col justify-center items-center border-r border-gray-100">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gray-700 mb-2">16</div>
                  <div className="space-y-1">
                    <div className="text-lg font-roboto-slab text-gray-600">Minggu</div>
                    <div className="text-lg font-roboto-slab text-gray-600">Juni 2025</div>
                  </div>
                </div>
              </div>

              {/* Details Section with Background Image */}
              <div className="details-section relative md:w-2/3 h-64 md:h-auto">
                <Image
                  src="/IMG_0307.JPG"
                  alt="Ceremony Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Pukul</span>
                    </div>
                    <p className="font-roboto-slab text-lg">{weddingData.events.blessing.time} WIB - selesai</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Kediaman mempelai wanita</span>
                    </div>
                    <p className="font-roboto-slab text-sm leading-relaxed">
                      {weddingData.events.blessing.address}
                    </p>
                  </div>

                  <a
                    href={weddingData.events.blessing.shareLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-button bg-white/90 text-gray-800 px-6 py-3 rounded-lg font-roboto-slab font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300 self-start"
                  >
                    Google Maps
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Resepsi Card */}
          <div className="event-card bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Card Header */}
            <div className="bg-gray-200 px-6 py-4 relative">
              <div className="absolute top-4 right-4">
                <div className="w-8 h-12 bg-white rounded-sm shadow-md transform rotate-12"></div>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl text-gray-800 font-medium">
                Resepsi
              </h3>
            </div>

            <div className="card-inner flex flex-col md:flex-row">
              {/* Date Section */}
              <div className="date-section bg-white p-8 md:w-1/3 flex flex-col justify-center items-center border-r border-gray-100">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-gray-700 mb-2">16</div>
                  <div className="space-y-1">
                    <div className="text-lg font-roboto-slab text-gray-600">Minggu</div>
                    <div className="text-lg font-roboto-slab text-gray-600">Juni 2025</div>
                  </div>
                </div>
              </div>

              {/* Details Section with Background Image */}
              <div className="details-section relative md:w-2/3 h-64 md:h-auto">
                <Image
                  src="/IMG_0380.JPG"
                  alt="Reception Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Pukul</span>
                    </div>
                    <p className="font-roboto-slab text-lg">{weddingData.events.reception.time} WIB - selesai</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <span className="font-roboto-slab text-sm">Kediaman mempelai wanita</span>
                    </div>
                    <p className="font-roboto-slab text-sm leading-relaxed">
                      {weddingData.events.reception.address}
                    </p>
                  </div>

                  <a
                    href={weddingData.events.reception.shareLocation}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-button bg-white/90 text-gray-800 px-6 py-3 rounded-lg font-roboto-slab font-medium inline-flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300 self-start"
                  >
                    Google Maps
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
