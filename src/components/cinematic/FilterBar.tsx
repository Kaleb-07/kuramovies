import React from 'react';
import { motion } from 'framer-motion';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  projectCounts?: { [key: string]: number };
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  projectCounts,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`overflow-x-auto hide-scrollbar ${className}`}
    >
      <div className="flex gap-3 min-w-max">
        {categories.map((category) => {
          const count = projectCounts?.[category];
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap border ${
                activeCategory === category
                  ? 'bg-[#d4af37] text-[#050505] border-[#d4af37]'
                  : 'bg-transparent text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-300'
              }`}
            >
              {category}
              {count !== undefined && (
                <span className={`ml-2 ${activeCategory === category ? 'text-[#050505]' : 'text-slate-600'}`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};
