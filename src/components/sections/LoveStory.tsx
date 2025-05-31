'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { weddingData, coupleNames } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    // Set initial states
    gsap.set(header.children, { y: 80, opacity: 0, scale: 0.8 });
    gsap.set('.story-card', { 
      y: 150, 
      opacity: 0, 
      scale: 0.7, 
      rotationY: 45,
      z: -100 
    });

    // Cinematic header reveal
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        end: 'top 30%',
        toggleActions: 'play none none reverse'
      }
    });

    headerTl
      .to(header.children[0], { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.5, 
        ease: 'power4.out',
        transformOrigin: 'center center'
      })
      .to(header.children[1], { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        duration: 1.2, 
        ease: 'power3.out'
      }, '-=1.0');

    // Story cards cinematic reveal
    const cards = gsap.utils.toArray('.story-card');
    
    const cardsTl = gsap.timeline({
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    cardsTl.to(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      z: 0,
      duration: 1.8,
      ease: 'power3.out',
      stagger: {
        each: 0.2,
        from: 'start'
      }
    });

    // Interactive hover effects for cards
    cards.forEach((card: any, index) => {
      const isImageCard = card.classList.contains('image-card');
      const image = card.querySelector('img');
      
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.03,
          y: -10,
          rotationY: isImageCard ? 5 : -5,
          duration: 0.6,
          ease: 'power2.out'
        });

        if (image) {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.8,
            ease: 'power2.out'
          });
        }

        // Animate text elements
        const textElements = card.querySelectorAll('h3, p, span');
        gsap.to(textElements, {
          y: -3,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.05
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          rotationY: 0,
          duration: 0.6,
          ease: 'power2.out'
        });

        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: 0.8,
            ease: 'power2.out'
          });
        }

        const textElements = card.querySelectorAll('h3, p, span');
        gsap.to(textElements, {
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.05
        });
      });

      // Magnetic effect
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(card, {
          rotationX: y * 0.05,
          rotationY: x * 0.05,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });

    // Bottom quote animation
    const quote = section.querySelector('.bottom-quote');
    if (quote) {
      gsap.fromTo(quote, {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: quote,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gray-900 py-20 md:py-32 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />
      
      <div className="container-wedding relative z-20">
        {/* Header Section */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-4">
            Kisah Cinta
          </h2>
          
          <h3 className="font-roboto-slab text-xl md:text-2xl text-gray-300">
            Kami Berdua
          </h3>
        </div>

        {/* Masonry Grid */}
        <div className="max-w-6xl mx-auto">
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Pertemuan Text Card */}
            <div className="story-card text-card bg-gray-700 rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1">
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
            </div>

            {/* Large Image Card */}
            <div className="story-card image-card relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-[600px] md:col-span-1 lg:row-span-2">
              <Image
                src="/IMG_0307.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Hubungan Text Card */}
            <div className="story-card text-card bg-gray-800 rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1">
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
            </div>

            {/* Medium Image Card */}
            <div className="story-card image-card relative rounded-2xl overflow-hidden min-h-[250px] md:col-span-1">
              <Image
                src="/IMG_0380.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Another Image Card */}
            <div className="story-card image-card relative rounded-2xl overflow-hidden min-h-[250px] md:col-span-1">
              <Image
                src="/IMG_0338.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Tunangan Text Card */}
            <div className="story-card text-card bg-black rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1">
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
            </div>

            {/* Final Image Card */}
            <div className="story-card image-card relative rounded-2xl overflow-hidden min-h-[250px] md:col-span-1">
              <Image
                src="/IMG_0195.JPG"
                alt="Love Story Image"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Menikah Text Card */}
            <div className="story-card text-card bg-gradient-to-br from-gray-800 to-black rounded-2xl p-6 flex flex-col justify-start min-h-[280px] md:col-span-1">
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
            </div>

          </div>
        </div>

        {/* Bottom Quote */}
        <div className="bottom-quote text-center mt-20">
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
        </div>
      </div>
    </section>
  );
}
