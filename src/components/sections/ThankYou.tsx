'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { coupleNames } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

export default function ThankYou() {
  return (
    <section className="section-padding py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src="/IMG_0491.JPG"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Floating Particles */}
      <FloatingParticles count={4} className="z-15" />

      <div className="container-wedding relative z-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          viewport={{ once: true }}
        >
          <Image
            src="https://ext.same-assets.com/1904390701/898528465.svg"
            alt="Thank You"
            width={80}
            height={30}
            className="mx-auto mb-6"
          />
          <h2 className="heading-2 mb-6 text-white drop-shadow-lg">Thank You</h2>

          <div className="bg-white/90 backdrop-blur-sm max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
            <p className="text-center mb-8 text-sm md:text-base">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan doa restu kepada kami.
            </p>

            <h3 className="font-playfair text-xl md:text-2xl mb-4">Kami yang Berbahagia</h3>
            <h4 className="font-playfair text-2xl md:text-3xl">{coupleNames}</h4>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}
