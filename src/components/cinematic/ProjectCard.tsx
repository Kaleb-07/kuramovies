import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  image: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  large?: boolean;
}

const ProjectCard = ({ project, index = 0, large = false }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ scale: 1.015 }}
      className={`group relative overflow-hidden rounded-3xl cursor-pointer ${large ? 'aspect-[4/3]' : 'aspect-video'}`}
      role="article"
      aria-label={project.title}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Category badge */}
      <div className="absolute top-5 left-5">
        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#050505] bg-[#d4af37]">
          {project.category}
        </span>
      </div>

      {/* Play button — appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]"
        >
          <Play className="w-6 h-6 text-white ml-1 fill-white" />
        </motion.div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
        <div className="flex items-end justify-between">
          <div>
            {project.client && (
              <p className="text-[#d4af37] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">
                {project.client}
              </p>
            )}
            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-white/50 text-xs mt-1">{project.year}</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0 ml-4">
            <span className="text-white text-xs">↗</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
