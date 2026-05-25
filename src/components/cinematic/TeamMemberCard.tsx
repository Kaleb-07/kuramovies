import React from 'react';
import { motion } from 'framer-motion';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ 
  name, 
  role, 
  image,
  bio,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Image */}
      <div className="aspect-[3/4] overflow-hidden bg-slate-800 relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-65 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-[#d4af37] text-sm uppercase tracking-wider mb-2">{role}</p>
        {bio && (
          <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {bio}
          </p>
        )}
      </div>
    </motion.div>
  );
};
