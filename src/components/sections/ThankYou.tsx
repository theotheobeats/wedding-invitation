'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { coupleNames } from '@/lib/wedding-data';

export default function ThankYou() {
  return (
    <section className="section-padding py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <Image
          src="https://ext.same-assets.com/1904390701/173693275.jpeg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="container-wedding relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

          <div className="mt-12 text-center">
            <a
              href="https://truelove.my.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-white/90"
            >
              <Image
                src="https://ext.same-assets.com/1904390701/940335937.png"
                alt="True Love"
                width={30}
                height={30}
              />
              <span className="font-medium">Mau Pesan Juga...? klik disini</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
