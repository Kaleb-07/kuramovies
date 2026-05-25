import React from 'react';
import { motion } from 'framer-motion';

interface CinematicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const CinematicButton: React.FC<CinematicButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  // Styles aligned with Kura Films Cinematic Color Palette
  const baseStyles = 'relative inline-flex items-center justify-center font-sans font-semibold tracking-wider uppercase transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group';
  
  const sizeStyles = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-10 py-4 text-base tracking-widest',
  };

  const variantStyles = {
    primary: 'bg-[#d4af37] text-[#050505] hover:bg-[#c29b24] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]',
    secondary: 'bg-[#b31217] text-white hover:bg-[#8f0d12] shadow-[0_0_15px_rgba(179,18,23,0.3)] hover:shadow-[0_0_25px_rgba(179,18,23,0.6)]',
    outline: 'bg-transparent text-[#d4af37] border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-[#050505] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]',
    glass: 'glass text-white hover:bg-white/10 hover:border-white/20 hover:text-[#d4af37]',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {/* Glossy light sweep effect on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
