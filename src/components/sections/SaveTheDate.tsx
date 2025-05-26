'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountdownTimer from '../ui-custom/CountdownTimer';
import { weddingDate } from '@/lib/wedding-data';

export default function SaveTheDate() {

  return (
    <section className="relative section-padding py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src="https://ext.same-assets.com/1904390701/151362697.png"
          alt="Background pattern"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="container-wedding relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://ext.same-assets.com/1904390701/3084549826.svg"
            alt="Ornament"
            width={80}
            height={30}
            className="mx-auto mb-6"
          />
          <h2 className="heading-2 mb-6">Menghitung Hari</h2>
          <p className="max-w-2xl mx-auto text-pretty font-montserrat text-sm md:text-base">
            Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
            <span className="block mt-2 italic">QS. Ar-Rum: 21</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <CountdownTimer targetDate={weddingDate} />
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://ext.same-assets.com/1904390701/2190377621.jpeg"
            alt="Save the date"
            width={300}
            height={300}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
