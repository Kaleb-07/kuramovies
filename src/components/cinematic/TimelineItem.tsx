import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  index,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center gap-8 group ${className}`}
    >
      {/* Year Badge */}
      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl font-bold text-[#050505]">{year}</span>
      </div>

      {/* Content */}
      <div className="glass p-6 rounded-xl flex-1 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};
