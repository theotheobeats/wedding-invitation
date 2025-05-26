'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        // Wedding day has arrived!
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  return (
    <div className="flex justify-center gap-4 md:gap-8 text-center">
      <div className="flex flex-col items-center">
        <div className="bg-primary/90 text-white w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold">
          {formatNumber(timeLeft.days)}
        </div>
        <span className="text-sm mt-2 font-medium">Hari</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-primary/90 text-white w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="text-sm mt-2 font-medium">Jam</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-primary/90 text-white w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="text-sm mt-2 font-medium">Menit</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="bg-primary/90 text-white w-16 h-16 md:w-24 md:h-24 rounded-lg flex items-center justify-center text-2xl md:text-4xl font-bold">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="text-sm mt-2 font-medium">Detik</span>
      </div>
    </div>
  );
}
