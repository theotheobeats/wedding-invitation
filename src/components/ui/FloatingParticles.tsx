'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'heart' | 'sparkle' | 'petal' | 'dot';
  duration: number;
  delay: number;
}

const particleIcons = {
  heart: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="rgba(255, 182, 193, 0.6)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5" />
    </svg>
  ),
  sparkle: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="rgba(255, 255, 255, 0.6)" />
      <path d="M19 3L19.5 5.5L22 6L19.5 6.5L19 9L18.5 6.5L16 6L18.5 5.5L19 3Z" fill="rgba(255, 255, 255, 0.8)" />
    </svg>
  ),
  petal: (size: number) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="12" cy="8" rx="6" ry="8" fill="rgba(255, 192, 203, 0.4)" transform="rotate(20 12 12)" />
      <ellipse cx="12" cy="8" rx="4" ry="6" fill="rgba(255, 182, 193, 0.6)" transform="rotate(20 12 12)" />
    </svg>
  ),
  dot: (size: number) => (
    <div 
      className="rounded-full bg-white/40 shadow-sm" 
      style={{ 
        width: size, 
        height: size,
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
      }}
    />
  )
};

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export default function FloatingParticles({ count = 25, className = '' }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const types: Array<Particle['type']> = ['heart', 'sparkle', 'petal', 'dot'];
      
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100, // Percentage
          y: Math.random() * 100, // Percentage
          size: Math.random() * 10 + 6, // 6-16px
          type: types[Math.floor(Math.random() * types.length)],
          duration: Math.random() * 10 + 15, // 15-25 seconds
          delay: Math.random() * 3, // 0-3 seconds delay
        });
      }
      
      setParticles(newParticles);
    };

    generateParticles();
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y + 20}vh`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: [
              `${particle.x}vw`, 
              `${particle.x + Math.random() * 10 - 5}vw`,
              `${particle.x + Math.random() * 15 - 7.5}vw`
            ],
            y: [`${particle.y + 20}vh`, `${particle.y - 20}vh`],
            opacity: [0, 0.6, 0.4, 0],
            scale: [0, 1, 0.8, 0],
            rotate: [0, Math.random() * 90, Math.random() * 180],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.2))',
          }}
        >
          {particle.type === 'dot' 
            ? particleIcons[particle.type](particle.size)
            : particleIcons[particle.type](particle.size)
          }
        </motion.div>
      ))}
      
      {/* Simplified sparkles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          initial={{
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 2,
            ease: "easeInOut"
          }}
        >
          <div 
            className="bg-white rounded-full" 
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              boxShadow: '0 0 3px rgba(255, 255, 255, 0.5)',
            }}
          />
        </motion.div>
      ))}
      
      {/* Gentle glowing orbs */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          initial={{
            x: `${30 + i * 40}vw`,
            y: `${20 + Math.random() * 60}vh`,
            opacity: 0,
          }}
          animate={{
            x: [`${30 + i * 40}vw`, `${32 + i * 40}vw`, `${28 + i * 40}vw`],
            y: [`${20 + Math.random() * 60}vh`, `${25 + Math.random() * 50}vh`],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 8,
            delay: i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: 12 + Math.random() * 8,
            height: 12 + Math.random() * 8,
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 182, 193, 0.1) 50%, transparent 70%)`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
} 