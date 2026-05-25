import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
  index?: number;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  image,
  index = 0,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className={`group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm ${className}`}
    >
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>

      {/* Content Section */}
      <div className="relative bg-gradient-to-b from-white/10 to-white/5 p-8 text-center">
        
        {/* Icon - Centered and overlapping image */}
        <motion.div 
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center shadow-2xl border-4 border-[#050505]"
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-12 h-12 text-[#050505]" />
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 mt-8 group-hover:text-[#d4af37] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Read More Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#d4af37] to-[#c29b24] text-[#050505] font-bold text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          Read More
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </motion.button>

        {/* Hover glow effect */}
        <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
      </div>
    </motion.div>
  );
};
