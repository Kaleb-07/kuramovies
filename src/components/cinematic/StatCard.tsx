import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  label, 
  suffix = '', 
  prefix = '',
  duration = 2,
  className = ''
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`glass p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 ${className}`}
    >
      <div className="text-5xl md:text-6xl font-bold text-[#d4af37] mb-3">
        {prefix}{count}{suffix}
      </div>
      <p className="text-slate-400 text-sm uppercase tracking-wider">{label}</p>
    </motion.div>
  );
};
