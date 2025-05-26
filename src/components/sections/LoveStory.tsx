'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData, coupleNames } from '@/lib/wedding-data';

const timelineItems = [
  {
    id: 1,
    title: weddingData.loveStory.meeting.title,
    date: weddingData.loveStory.meeting.date,
    description: weddingData.loveStory.meeting.description,
    image: 'https://ext.same-assets.com/1904390701/1429101287.jpeg',
    icon: 'https://ext.same-assets.com/1904390701/1199203718.svg'
  },
  {
    id: 2,
    title: weddingData.loveStory.commitment.title,
    date: weddingData.loveStory.commitment.date,
    description: weddingData.loveStory.commitment.description,
    image: 'https://ext.same-assets.com/1904390701/233451041.jpeg',
    icon: 'https://ext.same-assets.com/1904390701/3273214577.svg'
  },
  {
    id: 3,
    title: weddingData.loveStory.engagement.title,
    date: weddingData.loveStory.engagement.date,
    description: weddingData.loveStory.engagement.description,
    image: 'https://ext.same-assets.com/1904390701/1299802887.jpeg',
    icon: 'https://ext.same-assets.com/1904390701/1873535483.svg'
  },
  {
    id: 4,
    title: 'Menikah',
    date: 'Juni 2025',
    description: `Akhirnya hari yang ditunggu-tunggu tiba! ${coupleNames} akan mengadakan pernikahan yang indah dan penuh berkah. Sebuah perjalanan cinta yang dimulai dari kantor di Osaka, Jepang, kini akan berlanjut ke jenjang yang lebih sakral.`,
    image: 'https://ext.same-assets.com/1904390701/3516829485.jpeg',
    icon: 'https://ext.same-assets.com/1904390701/3280192825.svg'
  }
];

export default function LoveStory() {
  return (
    <section className="section-padding py-20">
      <div className="container-wedding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://ext.same-assets.com/1904390701/457500614.svg"
            alt="Love Story"
            width={80}
            height={30}
            className="mx-auto mb-6"
          />
          <h2 className="section-title">Kisah Cinta</h2>
          <h3 className="font-playfair text-xl md:text-2xl">Kami Berdua</h3>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          {/* Timeline items */}
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex items-center mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content */}
                <div className="w-full md:w-5/12 p-4">
                  <div className="flex items-center mb-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={30}
                      height={30}
                      className="mr-3"
                    />
                    <h3 className="font-playfair text-xl md:text-2xl">{item.title}</h3>
                  </div>
                  <div className="font-medium text-secondary mb-3">{item.date}</div>
                  <p className="text-sm md:text-base">{item.description}</p>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white"></div>

                {/* Image */}
                <div className="w-full md:w-5/12 p-4">
                  <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
