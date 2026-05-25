import React from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}

export const ContactCard: React.FC<ContactCardProps> = ({ 
  icon, 
  title, 
  details, 
  action,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className={`glass p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group ${className}`}
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-slate-300 text-sm">{detail}</p>
        ))}
      </div>
      {action && (
        <a 
          href={action.href}
          className="inline-block mt-4 text-[#d4af37] text-sm font-semibold hover:text-[#c29b24] transition-colors"
        >
          {action.label} →
        </a>
      )}
    </motion.div>
  );
};
