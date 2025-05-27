'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { weddingData } from '@/lib/wedding-data';
import FloatingParticles from '../ui/FloatingParticles';

const bankAccounts = [
  {
    id: 1,
    name: weddingData.digitalGift.accountName,
    bank: 'https://ext.same-assets.com/1904390701/2004770080.png', // BNI logo
    bankName: weddingData.digitalGift.bank,
    accountNumber: weddingData.digitalGift.accountNumber,
  }
];

export default function GiftRegistry() {
  const [showAccounts, setShowAccounts] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = (id: number) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative section-padding py-20 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={3} className="z-10" />
      
      <div className="container-wedding relative z-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Hadiah Pernikahan</h2>

          <p className="max-w-2xl mx-auto text-center mb-8 text-sm md:text-base">
            Do'a restu keluarga, sahabat, serta rekan-rekan semua di pernikahan kami sudah sangat cukup sebagai hadiah, tetapi jika memberi merupakan tanda kasih, kami dengan senang hati menerimanya dan tentunya semakin melengkapi kebahagiaan kami.
          </p>

          <motion.button
            className="inline-block bg-secondary text-white py-2 px-6 rounded-md"
            onClick={() => setShowAccounts(!showAccounts)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAccounts ? 'Tutup Rekening' : 'Lihat Rekening'}
          </motion.button>
        </motion.div>

        {showAccounts && (
          <motion.div
            className="flex justify-center mt-8 sm:mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {bankAccounts.map((account) => (
              <motion.div
                key={account.id}
                className="card-wedding p-6 sm:p-8 md:p-10 max-w-md w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
               
                <div className="text-center mb-6 sm:mb-8 space-y-3">
                  <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl text-primary">{account.bankName}</h3>
                  <h4 className="font-montserrat text-lg sm:text-xl text-gray-700">{account.name}</h4>
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <p className="font-montserrat text-xl sm:text-2xl font-bold text-gray-800 tracking-wider">{account.accountNumber}</p>
                  </div>
                </div>

                <CopyToClipboard text={account.accountNumber} onCopy={() => handleCopy(account.id)}>
                  <button className="w-full bg-primary text-white py-3 sm:py-4 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-primary/90 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl">
                    {copiedId === account.id ? (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        Copy Account Number
                      </>
                    )}
                  </button>
                </CopyToClipboard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
