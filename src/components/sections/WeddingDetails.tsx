'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingData } from '@/lib/wedding-data';

export default function WeddingDetails() {
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
          <Image
            src="https://ext.same-assets.com/1904390701/219188068.svg"
            alt="Event Details"
            width={80}
            height={30}
            className="ornament"
          />
          <h2 className="section-title">Acara akan dilaksanakan Pada :</h2>
        </motion.div>

        <div className="grid-responsive">
          {/* Blessing Ceremony */}
          <motion.div
            className="card-wedding p-6 sm:p-8 md:p-10 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-primary">Pemberkatan Nikah</h3>

            <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">16</div>
                <div className="text-xs sm:text-sm md:text-base font-medium uppercase text-gray-600">Senin</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">Juni</div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700">2025</div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <div>
                <h4 className="font-semibold mb-2 text-responsive text-gray-800">Pukul</h4>
                <p className="text-responsive text-gray-600">{weddingData.events.blessing.time} WIB - selesai</p>
            </div>

              <div>
                <h4 className="font-semibold mb-2 text-responsive text-gray-800">Tempat</h4>
                <p className="text-responsive text-gray-600 font-medium">{weddingData.events.blessing.venue}</p>
            </div>

              <div>
                <p className="text-responsive-small text-gray-500 leading-relaxed">
                  {weddingData.events.blessing.address}
                </p>
              </div>
            </div>

            {weddingData.events.blessing.shareLocation && (
            <a
                href={weddingData.events.blessing.shareLocation}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-block bg-primary text-white py-3 px-6 sm:px-8 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              Google Maps
            </a>
            )}
          </motion.div>

          {/* Reception */}
          <motion.div
            className="card-wedding p-6 sm:p-8 md:p-10 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-primary">Resepsi</h3>

            <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">16</div>
                <div className="text-xs sm:text-sm md:text-base font-medium uppercase text-gray-600">Senin</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-700">Juni</div>
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700">2025</div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              <div>
                <h4 className="font-semibold mb-2 text-responsive text-gray-800">Pukul</h4>
                <p className="text-responsive text-gray-600">{weddingData.events.reception.time} WIB - selesai</p>
            </div>

              <div>
                <h4 className="font-semibold mb-2 text-responsive text-gray-800">Tempat</h4>
                <p className="text-responsive text-gray-600 font-medium">{weddingData.events.reception.venue}</p>
            </div>

              <div>
                <p className="text-responsive-small text-gray-500 leading-relaxed">
                  {weddingData.events.reception.address}
                </p>
              </div>
            </div>

            {weddingData.events.reception.shareLocation && (
            <a
                href={weddingData.events.reception.shareLocation}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-block bg-primary text-white py-3 px-6 sm:px-8 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl"
            >
              Google Maps
            </a>
            )}
          </motion.div>
        </div>

        {/* Live Streaming */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 card-wedding p-6 sm:p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 text-primary">Live Streaming</h3>

          <div className="mb-6 sm:mb-8">
            <h4 className="font-semibold mb-2 text-responsive text-gray-800">Pukul</h4>
            <p className="text-responsive text-gray-600">{weddingData.events.blessing.time} WIB - selesai</p>
          </div>

          <p className="text-responsive max-w-2xl mx-auto mb-6 sm:mb-8 text-gray-600 leading-relaxed">
            Momen kebahagiaan prosesi Pernikahan akan kami tayangkan secara virtual melalui Youtube Live.
          </p>

          <a
            href="https://www.youtube.com/watch?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white py-3 px-6 sm:px-8 rounded-full hover:bg-red-700 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            Join Streaming
          </a>
        </motion.div>
      </div>
    </section>
  );
}
