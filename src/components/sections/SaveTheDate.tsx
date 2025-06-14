'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountdownTimer from '../ui-custom/CountdownTimer';
import { weddingDate } from '@/lib/wedding-data';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SaveTheDate() {
  const { translate } = useLanguage();

  const countdownLabels = {
    days: translate('saveTheDateSection.days'),
    hours: translate('saveTheDateSection.hours'),
    minutes: translate('saveTheDateSection.minutes'),
    seconds: translate('saveTheDateSection.seconds'),
    weddingDay: translate('saveTheDateSection.weddingDay'),
    countdownToWedding: translate('saveTheDateSection.countdownToWedding')
  };

  return (
    <div className="relative min-h-screen bg-zinc-900 text-white overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container-wedding w-full">
          <div className='flex gap-4'>
            <div>
              {/* Title and Quote Section */}
              <div className="mt-16 md:mt-24 p-8">
                <motion.h1
                  className="font-playfair text-4xl md:text-5xl lg:text-6xl tracking-wide text-white"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {translate('saveTheDateSection.titleLine1')}
                  <br />
                  <span className="inline-block">{translate('saveTheDateSection.titleLine2')}</span>
                </motion.h1>

                <motion.div
                  className="mt-8 md:mt-12 max-w-md"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm md:text-base leading-relaxed font-roboto-slab text-white">
                    {translate('saveTheDateSection.quote')}
                  </p>
                  <p className="mt-4 font-medium font-roboto-slab text-white">
                    {translate('saveTheDateSection.quoteRef')}
                  </p>
                </motion.div>
              </div>

              {/* Couple Photo */}
              <motion.div
                className="relative w-1/2 md:w-1/3 h-48 md:h-64 mt-28 ml-8 z-20" 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb81liXsxMqlXk5KLSTw0ZaeyhzjRcCbFJNsf2"
                    alt={translate('saveTheDateSection.couplePhotoAlt')}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 border-2 border-white/20 rounded-lg" />
                </div>
              </motion.div>
            </div>
            
            <div>
              {/* Countdown Sidebar */}
              <motion.div
                className="w-20 md:w-24 flex flex-row md:flex-col justify-between items-center bg-zinc-900 px-2 md:py-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                >
                <div>
                  <CountdownTimer targetDate={weddingDate} labels={countdownLabels} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <motion.div
          className="absolute inset-0 z-0 opacity-25"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="https://s4smxmfvbu.ufs.sh/f/M87ztnPlGzdb9PoITsHeOalHmg4Rnyt6Whs1UXrLdiEPMK3D"
            alt={translate('saveTheDateSection.backgroundAlt')}
            fill
            className="object-cover object-center"
          />
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-20 right-8 w-16 h-16 border border-white/10 rounded-full z-15"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-8 w-12 h-12 border border-white/15 rounded-full z-15"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}
