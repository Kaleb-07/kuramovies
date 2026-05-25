import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HorizontalSliderProps {
  children: React.ReactNode;
}

export const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once on load to establish state
      setTimeout(checkScroll, 100);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
    };
  }, [children]);

  const slide = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full group/slider">
      {/* Left Navigation Button */}
      {showLeftBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => slide('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-[#d4af37] hover:text-[#050505] text-[#d4af37] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer hidden md:flex items-center justify-center opacity-0 group-hover/slider:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      )}

      {/* Slider Content Wrapper */}
      <div
        ref={containerRef}
        className="w-full flex gap-6 overflow-x-auto overflow-y-hidden py-4 px-2 scroll-smooth select-none hide-scrollbar"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {children}
      </div>

      {/* Right Navigation Button */}
      {showRightBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => slide('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:bg-[#d4af37] hover:text-[#050505] text-[#d4af37] transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] cursor-pointer hidden md:flex items-center justify-center opacity-0 group-hover/slider:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      )}
    </div>
  );
};
