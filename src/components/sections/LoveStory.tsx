'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData, coupleNames } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

const timelineItems = [
  {
    id: 1,
    title: weddingData.loveStory.meeting.title,
    date: weddingData.loveStory.meeting.date,
    description: weddingData.loveStory.meeting.description,
    image: '/IMG_0491.JPG',
    icon: 'https://ext.same-assets.com/1904390701/1199203718.svg'
  },
  {
    id: 2,
    title: weddingData.loveStory.commitment.title,
    date: weddingData.loveStory.commitment.date,
    description: weddingData.loveStory.commitment.description,
    image: '/IMG_0307.JPG',
    icon: 'https://ext.same-assets.com/1904390701/3273214577.svg'
  },
  {
    id: 3,
    title: weddingData.loveStory.engagement.title,
    date: weddingData.loveStory.engagement.date,
    description: weddingData.loveStory.engagement.description,
    image: '/IMG_9790.JPG',
    icon: 'https://ext.same-assets.com/1904390701/1873535483.svg'
  },
  {
    id: 4,
    title: 'Menikah',
    date: 'Juni 2025',
    description: `Akhirnya hari yang ditunggu-tunggu tiba! ${coupleNames} akan mengadakan pernikahan yang indah dan penuh berkah. Sebuah perjalanan cinta yang dimulai dari kantor di Osaka, Jepang, kini akan berlanjut ke jenjang yang lebih sakral.`,
    image: '/IMG_0419.JPG',
    icon: 'https://ext.same-assets.com/1904390701/3280192825.svg'
  }
];

export default function LoveStory() {
  return (
    <section className="relative section-padding py-20 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={18} className="z-10" />
      
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute top-32 left-8 w-64 h-64 border border-primary/10 rounded-full z-15 animate-pulse"></div>
      <div className="absolute bottom-40 right-12 w-48 h-48 border border-secondary/15 rounded-full z-15 animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 left-16 w-32 h-32 border border-primary/8 rounded-full z-15 animate-pulse delay-500"></div>
      
      <div className="container-wedding relative z-20">
        {/* Enhanced Header Section */}
        <motion.div
          className="text-center mb-20 sm:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Image
              src="https://ext.same-assets.com/1904390701/457500614.svg"
              alt="Love Story"
              width={100}
              height={40}
              className="mx-auto opacity-80"
            />
          </motion.div>
          
          <motion.h2 
            className="section-title mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Kisah Cinta
          </motion.h2>
          
          <motion.h3 
            className="font-playfair text-xl md:text-2xl lg:text-3xl text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Kami Berdua
          </motion.h3>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 rounded-full hidden md:block"></div>

          {/* Timeline items with enhanced design */}
          <div className="relative z-10 space-y-20 md:space-y-32">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 mb-8 md:mb-0">
                  <motion.div
                    className={`bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mr-4 shadow-lg"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={24}
                          height={24}
                          className="brightness-0 invert"
                        />
                      </motion.div>
                      <div>
                        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-primary">{item.title}</h3>
                        <div className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent font-semibold text-lg">{item.date}</div>
                      </div>
                    </div>

                    {/* Description with enhanced styling */}
                    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">{item.description}</p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-secondary/10 to-transparent rounded-bl-3xl"></div>
                  </motion.div>
                </div>

           

                {/* Enhanced Image Section */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    className={`relative group ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Simplified Image container for debugging */}
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl h-64 md:h-80 lg:h-96">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onLoad={() => console.log('Image loaded successfully:', item.image)}
                        onError={(e) => {
                          console.error('Image failed to load:', item.image);
                          console.error('Error details:', e);
                          // Try alternative path formats
                          const alternatives = [
                            item.image.toLowerCase(),
                            item.image.replace('.JPG', '.jpg'),
                            '/Gress-518.jpg' // Known working image
                          ];
                          const currentSrc = e.currentTarget.src;
                          const nextAlt = alternatives.find(alt => !currentSrc.includes(alt));
                          if (nextAlt) {
                            console.log('Trying alternative:', nextAlt);
                            e.currentTarget.src = nextAlt;
                          }
                        }}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                     
                    </div>

                    {/* Floating badge with timeline number */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced ending decoration */}
          <motion.div
            className="text-center mt-20 sm:mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill="currentColor" />
                </svg>
              </motion.div>
              <p className="font-playfair text-xl md:text-2xl text-primary italic leading-relaxed">
                "Dan mereka hidup bahagia selamanya..."
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 text-secondary">
                <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary"></div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
                </svg>
                <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
