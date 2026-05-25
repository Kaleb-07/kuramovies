import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Award, 
  ArrowRight,
  Star,
  Trophy
} from 'lucide-react';
import { SectionTitle } from '../components/cinematic/SectionTitle';
import { SplitHeroSection } from '../components/cinematic/SplitHeroSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ============================================
// TYPES & DATA
// ============================================

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  description: string;
  image: string;
  videoUrl?: string;
  featured?: boolean;
  awards?: string[];
  views?: string;
}

const categories = [
  'All',
  'Feature Films',
  'Documentaries',
  'Commercials',
  'Music Videos',
  'Series',
  'Event Coverage',
  'Short Films'
];

const projects: Project[] = [
  {
    id: '1',
    title: 'Echoes of the Simien',
    category: 'Feature Films',
    year: '2024',
    client: 'Ethiopian Film Corporation',
    description: 'An epic tale of heritage and identity set against the breathtaking Simien Mountains.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070',
    featured: true,
    awards: ['Cannes Film Festival - Official Selection', 'AMAA Best Cinematography'],
    views: '2.5M'
  },
  {
    id: '2',
    title: 'Heritage Reimagined',
    category: 'Documentaries',
    year: '2024',
    client: 'UNESCO',
    description: 'Exploring ancient Ethiopian traditions through a modern lens.',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059',
    featured: true,
    awards: ['Sundance Documentary Award'],
    views: '1.8M'
  },
  {
    id: '3',
    title: 'Origins',
    category: 'Documentaries',
    year: '2023',
    description: 'A journey through the birthplace of humanity and coffee.',
    image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=2070',
    views: '3.2M'
  },
  {
    id: '4',
    title: 'Urban Rhythm',
    category: 'Music Videos',
    year: '2024',
    client: 'Teddy Afro',
    description: 'A vibrant celebration of Addis Ababa\'s music scene.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070',
    views: '5.1M'
  },
  {
    id: '5',
    title: 'Beyond Horizon',
    category: 'Commercials',
    year: '2024',
    client: 'Ethiopian Airlines',
    description: 'Showcasing Africa\'s connectivity to the world.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074',
    views: '8.3M'
  },
  {
    id: '6',
    title: 'Coffee Ceremony',
    category: 'Short Films',
    year: '2023',
    description: 'An intimate portrait of Ethiopia\'s sacred coffee tradition.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2074',
    awards: ['Toronto Film Festival - Best Short'],
    views: '1.2M'
  },
  {
    id: '7',
    title: 'Daughters of the Nile',
    category: 'Series',
    year: '2024',
    client: 'Netflix',
    description: 'A powerful drama series about three generations of Ethiopian women.',
    image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2069',
    featured: true,
    views: '12M'
  },
  {
    id: '8',
    title: 'Innovation Summit 2024',
    category: 'Event Coverage',
    year: '2024',
    client: 'African Union',
    description: 'Comprehensive coverage of Africa\'s largest tech summit.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070',
    views: '890K'
  },
  {
    id: '9',
    title: 'The Last King',
    category: 'Feature Films',
    year: '2023',
    description: 'Historical epic about Emperor Tewodros II.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070',
    awards: ['AMAA Best Picture Nominee'],
    views: '4.5M'
  }
];

const awards = [
  { name: 'Cannes Film Festival', count: '2x Official Selection', icon: Trophy },
  { name: 'Ethiopian Film Award', count: '8x Winner', icon: Award },
  { name: 'AMAA', count: '5x Best Cinematography', icon: Star },
  { name: 'Sundance', count: '3x Documentary Award', icon: Trophy }
];

const testimonials = [
  {
    quote: "Working with Kura Films transformed our brand narrative. They didn't just film a commercial; they captured the soul of our mission with a cinematic depth that won us the campaign of the year.",
    author: 'Sarah Mitchell',
    role: 'CMO, Ethiopian Airlines',
    project: 'Beyond Horizon Campaign'
  },
  {
    quote: "The documentary they produced for UNESCO exceeded every expectation. Their ability to blend cultural authenticity with world-class production value is unmatched in East Africa.",
    author: 'Dr. Alemayehu Bekele',
    role: 'Cultural Director, UNESCO Ethiopia',
    project: 'Heritage Reimagined'
  }
];

// ============================================
// REUSABLE COMPONENTS
// ============================================

// Filter Bar Component
const FilterBar: React.FC<{
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  projectCounts?: { [key: string]: number };
}> = ({ categories, activeCategory, onCategoryChange, projectCounts }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="overflow-x-auto hide-scrollbar"
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

// Featured Project Card Component
const FeaturedProjectCard: React.FC<{ project: Project; index: number }> = ({ 
  project, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-[16/9]"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-20 h-20 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.6)]"
        >
          <Play className="w-8 h-8 text-white ml-1 fill-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        {project.client && (
          <p className="text-[#d4af37] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            {project.client}
          </p>
        )}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-slate-300 text-sm mb-4 max-w-2xl">
          {project.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="uppercase tracking-wider">{project.category}</span>
          <span>•</span>
          <span>{project.year}</span>
          {project.views && (
            <>
              <span>•</span>
              <span>{project.views} views</span>
            </>
          )}
        </div>
        {project.awards && project.awards.length > 0 && (
          <div className="mt-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs font-semibold">
              {project.awards[0]}
            </span>
          </div>
        )}
      </div>

      {/* Gold Glow Border on Hover */}
      <div className="absolute inset-0 border-2 border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
    </motion.div>
  );
};

// Standard Project Card Component
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ 
  project, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-zinc-900"
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Play Icon Overlay */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#d4af37] text-xs uppercase tracking-wider font-semibold">
            {project.category}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-400 text-xs">{project.year}</span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors duration-300">
          {project.title}
        </h3>

        {project.client && (
          <p className="text-slate-500 text-sm mb-3">Client: {project.client}</p>
        )}

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {project.awards && project.awards.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[#d4af37] text-xs">Award Winner</span>
          </div>
        )}

        <button className="text-[#d4af37] text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          View Case Study <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Gold Glow on Hover */}
      <div className="absolute inset-0 border border-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

// ============================================
// MAIN PROJECTS PAGE COMPONENT
// ============================================

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  // Calculate project counts for each category
  const projectCounts: { [key: string]: number } = {
    'All': projects.length,
  };
  
  categories.slice(1).forEach(category => {
    projectCounts[category] = projects.filter(p => p.category === category).length;
  });

  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* Navbar */}
      <Navbar />
      
      {/* ============================================
          1. PROJECTS HERO BANNER
      ============================================ */}
      <SplitHeroSection
        // eyebrow="Our Portfolio"
        title={<>Our <span className="text-gradient">Work</span></>}
        description=""
        badge={{ value: 'No. 1', label: 'Top Creative Studio' }}
        scrollLabel="Explore Projects"
      />

      {/* ============================================
          2. FILTER & CATEGORY SYSTEM
      ============================================ */}
      <section className="py-12 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <FilterBar 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            projectCounts={projectCounts}
          />
        </div>
      </section>

      {/* ============================================
          3. FEATURED PROJECTS (HERO PROJECTS)
      ============================================ */}
      {activeCategory === 'All' && featuredProjects.length > 0 && (
        <section className="py-12 px-6 bg-[#050505]">
          <div className="max-w-7xl mx-auto">
            <SectionTitle 
              subtitle="Featured Work"
              title="Spotlight Projects"
              align="left"
              className="mb-12"
            />

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <FeaturedProjectCard 
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          4. ALL PROJECTS GRID
      ============================================ */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            subtitle={activeCategory === 'All' ? 'Portfolio' : activeCategory}
            title="Latest Projects"
            align="left"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>

          {regularProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================
          6. AWARDS & RECOGNITIONS
      ============================================ */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            subtitle="Recognition"
            title="Awards & Festival Selections"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <award.icon className="w-8 h-8 text-[#050505]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{award.name}</h3>
                <p className="text-[#d4af37] text-sm font-semibold">{award.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          7. CLIENT TESTIMONIALS
      ============================================ */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            subtitle="Client Stories"
            title="What Our Partners Say"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-[#d4af37]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="text-white font-bold">{testimonial.author}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  <p className="text-[#d4af37] text-xs mt-2 uppercase tracking-wider">
                    Project: {testimonial.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          9. FOOTER
      ============================================ */}
        <Footer />
    </div>
  );
};

export default Projects;
