import { useState, useEffect } from 'react';
import { Clock, Zap } from 'lucide-react';

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 49,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer reached 0, restart from 3:49:00
          hours = 3;
          minutes = 49;
          seconds = 0;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white py-0.5 sm:py-1 relative overflow-hidden sticky top-0 z-40">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/30 via-transparent to-orange-400/30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-bounce"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12 animate-bounce delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-0.5 sm:space-y-0 sm:space-x-3 text-center">
          <div className="flex items-center space-x-1">
            <span className="font-bold text-xs sm:text-sm text-yellow-200">
              🔥 LIMITED TIME OFFER
            </span>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            <span className="text-xs font-medium">
              Offer ends in:
            </span>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-yellow-300" />
              <div className="flex items-center space-x-1 font-mono font-bold text-xs sm:text-sm bg-black/30 rounded px-1.5 py-0.5">
                <span className="text-yellow-300">{formatTime(timeLeft.hours)}</span>
                <span className="text-white animate-pulse">:</span>
                <span className="text-yellow-300">{formatTime(timeLeft.minutes)}</span>
                <span className="text-white animate-pulse">:</span>
                <span className="text-yellow-300">{formatTime(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:block text-xs lg:text-sm font-medium text-yellow-200 animate-pulse">
            Don't miss out!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;