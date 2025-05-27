'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { generateQRCode } from '@/lib/invitation-utils';
import FloatingParticles from '../ui/FloatingParticles';

interface InvitationQRProps {
  invitationUrl: string;
  guestName: string;
  preGeneratedQR?: string | null;
}

export default function InvitationQR({ invitationUrl, guestName, preGeneratedQR }: InvitationQRProps) {
  const [qrCode, setQrCode] = useState<string>('');

  useEffect(() => {
    const setupQR = async () => {
      try {
        if (preGeneratedQR) {
          // Use pre-generated base64 QR code
          // Check if it's already a data URL, if not, prepend the data URL prefix
          const qrDataUrl = preGeneratedQR.startsWith('data:') 
            ? preGeneratedQR 
            : `data:image/png;base64,${preGeneratedQR}`;
          setQrCode(qrDataUrl);
        } else {
          // Generate QR code from invitation URL
          const qrDataUrl = await generateQRCode(invitationUrl);
          setQrCode(qrDataUrl);
        }
      } catch (error) {
        console.error('Failed to setup QR code:', error);
      }
    };

    setupQR();
  }, [invitationUrl, preGeneratedQR]);

  if (!qrCode) return null;

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Floating Particles */}
      <FloatingParticles count={15} className="z-10" />
      
      <div className="container-wedding relative z-20">
        <motion.div
          className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="font-playfair text-xl sm:text-2xl text-primary mb-2">Share Invitation</h3>
            <p className="text-sm sm:text-base text-gray-600">
              Scan this QR code to view the invitation for {guestName}
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56">
              <Image
                src={qrCode}
                alt="Invitation QR Code"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>Or use this link:</p>
            <a
              href={invitationUrl}
              className="text-primary hover:text-primary/80 break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {invitationUrl}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 