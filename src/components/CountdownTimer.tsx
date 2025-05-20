import React, { useEffect, useState, useMemo } from 'react';

interface CountdownTimerProps {
  targetDate: Date | string;
}

const getTimeRemaining = (endTime: Date) => {
  const now = new Date();
  const total = endTime.getTime() - now.getTime();

  // If the target date is in the past, return all zeros
  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { total, days, hours, minutes, seconds };
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const endTime = useMemo(() => {
    const date =
      typeof targetDate === 'string' ? new Date(targetDate) : targetDate;

    // Ensure the date is valid
    if (Number.isNaN(date.getTime())) {
      return new Date();
    }
    return date;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(endTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex gap-4 justify-center items-center text-[24px] md:text-[50px] lg:text-[55px] xl:text-[64px] font-bold text-white opacity-60">
      <div className="flex flex-col items-center">
        <span>{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="text-xs mt-1 font-normal tracking-widest">DAYS</span>
      </div>
      <span className="pb-6 md:pb-8">:</span>
      <div className="flex flex-col items-center">
        <span>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="text-xs mt-1 font-normal tracking-widest">HOURS</span>
      </div>
      <span className="pb-6 md:pb-8">:</span>
      <div className="flex flex-col items-center">
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="text-xs mt-1 font-normal tracking-widest">
          MINUTES
        </span>
      </div>
      <span className="pb-6 md:pb-8">:</span>
      <div className="flex flex-col items-center">
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="text-xs mt-1 font-normal tracking-widest">
          SECONDS
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
