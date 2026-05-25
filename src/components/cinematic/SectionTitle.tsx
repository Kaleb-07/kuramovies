import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const alignmentStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const lineAlignmentStyles = {
    left: 'left-0 origin-left',
    center: 'left-1/2 -translate-x-1/2 origin-center',
    right: 'right-0 origin-right',
  };

  return (
    <div className={`flex flex-col mb-12 ${alignmentStyles[align]} ${className}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold mb-2"
        >
          {subtitle}
        </motion.span>
      )}
      
      <div className="relative pb-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-heading font-bold text-white tracking-wide"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </motion.h2>
        
        {/* Cinematic Gold Underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '80px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className={`absolute bottom-0 h-[3px] bg-gradient-to-r from-[#d4af37] to-transparent ${lineAlignmentStyles[align]}`}
        />
      </div>
    </div>
  );
};
