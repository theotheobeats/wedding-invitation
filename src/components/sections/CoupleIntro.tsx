'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';

export default function CoupleIntro() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-wedding">
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title max-w-4xl mx-auto leading-relaxed">Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/I untuk menghadiri acara pernikahan kami :</h2>
        </motion.div>

        <div className="grid-responsive">
          {/* Bride */}
          <motion.div
            className="card-wedding p-6 sm:p-8 md:p-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
              <Image
                src={weddingData.bride.photo}
                alt={weddingData.bride.nickname}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl mb-2 text-primary">{weddingData.bride.nickname}</h3>
            <h4 className="font-montserrat text-lg sm:text-xl md:text-2xl mb-4 text-gray-700">{weddingData.bride.fullName}</h4>
            <p className="text-muted-foreground mb-3 text-responsive-small">{weddingData.bride.parentInfo}</p>
            <p className="font-medium text-responsive text-center leading-relaxed">
              {weddingData.bride.father} <br />
              & {weddingData.bride.mother}
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center space-x-4">
              {weddingData.bride.instagram && (
              <a
                  href={`https://instagram.com/${weddingData.bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              )}
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div
            className="card-wedding p-6 sm:p-8 md:p-10 flex flex-col items-center text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-6 sm:mb-8 rounded-full overflow-hidden border-4 border-secondary shadow-xl">
              <Image
                src={weddingData.groom.photo}
                alt={weddingData.groom.nickname}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-playfair text-2xl sm:text-3xl md:text-4xl mb-2 text-primary">{weddingData.groom.nickname}</h3>
            <h4 className="font-montserrat text-lg sm:text-xl md:text-2xl mb-4 text-gray-700">{weddingData.groom.fullName}</h4>
            <p className="text-muted-foreground mb-3 text-responsive-small">{weddingData.groom.parentInfo}</p>
            <p className="font-medium text-responsive text-center leading-relaxed">
              {weddingData.groom.father} <br />
              & {weddingData.groom.mother}
            </p>

            <div className="mt-6 sm:mt-8 flex justify-center space-x-4">
              {weddingData.groom.instagram && (
              <a
                  href={`https://instagram.com/${weddingData.groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors duration-300 p-2 rounded-full hover:bg-primary/10"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
