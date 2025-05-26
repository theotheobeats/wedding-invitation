'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchAttendeeByCode } from '@/lib/api';
import { Attendee } from '@/lib/types';
import CoupleIntro from './CoupleIntro';
import Gallery from './Gallery';
import GiftRegistry from './GiftRegistry';
import Hero from './Hero';
import InvitationQR from './InvitationQR';
import LoveStory from './LoveStory';
import RSVP from './RSVP';
import SaveTheDate from './SaveTheDate';
import ThankYou from './ThankYou';
import WeddingDetails from './WeddingDetails';

export default function Main() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [attendee, setAttendee] = useState<Attendee | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAttendee = async () => {
      try {
        // Get code from URL
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        console.log('code', code);

        if (!code) {
          setError('No invitation code provided');
          setIsLoading(false);
          return;
        }

        const response = await fetchAttendeeByCode(code);
        
        if (!response.success || !response.data) {
          setError(response.error || 'Failed to load invitation');
          setIsLoading(false);
          return;
        }

        setAttendee(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error loading invitation:', err);
        setError('Failed to load invitation');
        setIsLoading(false);
      }
    };

    fetchAttendee();

    // Set up scroll listener
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    // Auto scroll to top of invitation content
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading invitation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-2xl font-playfair text-primary mb-4">Invitation Not Found</h2>
          <p className="text-gray-600 mb-2">{error}</p>
          <p className="text-gray-500 text-sm">Please check your invitation link and try again.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="relative">
      {/* Hero Cover Section */}
      <Hero
        onOpenInvitation={handleOpenInvitation}
        isOpen={isInvitationOpen}
        guestName={attendee?.name || "Guest"}
        qrCode={attendee?.qrCodeBase64}
      />

      {/* Main Content Sections (only visible after opening the invitation) */}
      <AnimatePresence>
        {isInvitationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <CoupleIntro />
            <SaveTheDate />
            <WeddingDetails />
            <LoveStory />
            <Gallery />
            <GiftRegistry />
            <RSVP />
            <ThankYou />
            {attendee?.qrCodeBase64 && (
              <InvitationQR
                invitationUrl={window.location.href}
                guestName={attendee.name}
                preGeneratedQR={attendee.qrCodeBase64}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isScrolling && isInvitationOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
            onClick={scrollToTop}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}
