import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Sparkles, Target, Heart } from 'lucide-react';
import { CinematicButton } from '../components/cinematic/CinematicButton';
import { SectionTitle } from '../components/cinematic/SectionTitle';
import { SplitHeroSection } from '../components/cinematic/SplitHeroSection';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { services } from '../data/servicesData';

// ============================================
// TYPES & DATA
// ============================================

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface WhyChooseItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

// services now imported from ../data/servicesData

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Concept',
    description: 'We start by understanding your vision, goals, and audience. Together, we develop a creative concept that aligns with your objectives.'
  },
  {
    number: '02',
    title: 'Pre-Production',
    description: 'Detailed planning including scriptwriting, storyboarding, casting, location scouting, and scheduling. Every detail is mapped out.'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Our experienced crew brings your story to life with world-class cinematography, direction, and production management.'
  },
  {
    number: '04',
    title: 'Post-Production',
    description: 'Expert editing, color grading, sound design, and VFX transform raw footage into a polished cinematic experience.'
  },
  {
    number: '05',
    title: 'Delivery & Distribution',
    description: 'Final delivery in all required formats, optimized for your distribution channels, with ongoing support as needed.'
  }
];

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Heart,
    title: 'Authentic African Storytelling',
    description: 'We understand the nuances of African cultures and tell stories with genuine authenticity and respect.'
  },
  {
    icon: Award,
    title: 'World-Class Quality',
    description: 'International production standards with cutting-edge equipment and techniques that compete globally.'
  },
  {
    icon: Users,
    title: 'Experienced Creative Team',
    description: 'Award-winning directors, cinematographers, and editors with proven track records across multiple genres.'
  },
  {
    icon: Target,
    title: 'End-to-End Service',
    description: 'From initial concept to final delivery, we handle every aspect of production with seamless coordination.'
  },
  {
    icon: Globe,
    title: 'International Reach',
    description: 'Experience working with global brands and distribution across 12+ countries with cultural sensitivity.'
  },
  {
    icon: Sparkles,
    title: 'Creative Excellence',
    description: 'We push creative boundaries while maintaining commercial viability and delivering measurable results.'
  }
];

const clients = [
  { name: 'Ethiopian Airlines', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ethiopian_Airlines_Logo.svg/320px-Ethiopian_Airlines_Logo.svg.png' },
  { name: 'UNESCO', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/UNESCO_logo.svg/320px-UNESCO_logo.svg.png' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png' },
  { name: 'African Union', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Emblem_of_the_African_Union.svg/240px-Emblem_of_the_African_Union.svg.png' },
  { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/320px-Coca-Cola_logo.svg.png' },
  { name: 'MTN', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/MTN_Logo.svg/320px-MTN_Logo.svg.png' },
  { name: 'Safaricom', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Safaricom_Logo.svg/320px-Safaricom_Logo.svg.png' },
  { name: 'BBC', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/BBC_Logo_2021.svg/320px-BBC_Logo_2021.svg.png' }
];

// ============================================
// REUSABLE COMPONENTS
// ============================================

// Service Card Component
const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
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
      className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm"
    >
      {/* Background Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img 
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />
      </div>

      {/* Content Section */}
      <div className="relative bg-gradient-to-b from-white/10 to-white/5 p-8 text-center">
        
        {/* Icon removed by user request; spacing adjusted */}

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 mt-4 group-hover:text-[#d4af37] transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {service.description}
        </p>

        {/* Read More Button */}
        <Link to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
          className="w-full py-3 px-6 rounded-full bg-transparent border-2 border-white/5 text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-[#d4af37] group-hover:to-[#c29b24] group-hover:text-[#050505] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
        >
          Read More
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

// Process Step Component
const ProcessStepCard: React.FC<{ step: ProcessStep; index: number; isLast: boolean }> = ({ 
  step, 
  index,
  isLast 
}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.6, 
          delay: index * 0.15,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.05,
          rotateY: 5,
          transition: { duration: 0.3 }
        }}
        className="relative glass p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 group overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Number Badge with pulse animation */}
        <motion.div 
          className="relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center shadow-lg"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-[#d4af37]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="relative text-3xl font-bold text-[#050505]">{step.number}</span>
        </motion.div>

        {/* Title with slide animation */}
        <motion.h3 
          className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {step.title}
        </motion.h3>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
          {step.description}
        </p>

        {/* Corner decoration */}
        <motion.div
          className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#d4af37]/20 to-transparent rounded-tl-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
        />
      </motion.div>

      {/* Animated Connecting Arrow */}
      {!isLast && (
        <motion.div 
          className="hidden lg:block absolute top-1/2 -right-6 z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{
              x: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
              <path 
                d="M0 12H44M44 12L36 4M44 12L36 20" 
                stroke="#d4af37" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// Why Choose Card Component
const WhyChooseCard: React.FC<{ item: WhyChooseItem; index: number }> = ({ item, index }) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 120
      }}
      whileHover={{ 
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3 }
      }}
      className="relative group"
    >
      {/* Hexagonal background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl" />
      
      <div className="relative glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden border border-white/5 group-hover:border-[#d4af37]/30">
        
        {/* Animated corner lines */}
        <motion.div
          className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#d4af37] rounded-tl-2xl"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#d4af37] rounded-br-2xl"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
        />

        {/* Icon with orbital animation */}
        <div className="relative w-16 h-16 mb-5 mx-auto">
          <motion.div
            className="absolute inset-0 rounded-full border border-[#d4af37]/30"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div 
            className="relative w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center shadow-lg"
            whileHover={{ 
              scale: 1.2,
              rotate: 180,
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-7 h-7 text-[#050505]" />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3 
          className="text-lg font-bold text-white mb-3 text-center group-hover:text-[#d4af37] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          {item.title}
        </motion.h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed text-center group-hover:text-slate-300 transition-colors duration-300">
          {item.description}
        </p>

        {/* Floating dot animation */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-[#d4af37] rounded-full"
          animate={{
            y: [-5, 5, -5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

// ============================================
// MAIN SERVICES PAGE COMPONENT
// ============================================

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* Navbar */}
      <Navbar />
      
      {/* ============================================
          1. SERVICES HERO SECTION
      ============================================ */}
      <SplitHeroSection
        // eyebrow="What We Do"
        title={<>Premium Cinematic <br /><span className="text-gradient">Production Services</span></>}
        description=""
        badge={{ value: 'No. 1', label: 'Top Creative Studio' }}
        // scrollLabel="Explore Services"
        // cta={
        //   <Link to="/contact">
        //     <CinematicButton variant="primary" size="lg">
        //       Start Your Project
        //     </CinematicButton>
        //   </Link>
        // }
      />

      {/* ============================================
          2. CLIENTS & PARTNERS (Moved from section 7)
      ============================================ */}
      <section className="py-16 px-6 bg-[#050505] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto mb-8">
          <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-8">
            Trusted by Leading Brands & Organizations
          </p>
        </div>

        {/* Infinite Horizontal Scroll */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />
          
          {/* Scrolling container */}
          <div className="flex gap-12 animate-scroll items-center">
            {/* Duplicate clients array for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.15,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => console.log(`Clicked: ${client.name}`)}
                className="flex-shrink-0 glass px-8 py-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-all duration-300 group relative overflow-hidden border border-white/5 hover:border-[#d4af37]/50 min-w-[180px] h-24 flex items-center justify-center"
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                {/* Logo image */}
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="relative max-w-full max-h-12 object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const textFallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (textFallback) textFallback.style.display = 'block';
                  }}
                />
                
                {/* Text fallback (hidden by default) */}
                <p className="hidden text-slate-400 text-sm font-bold text-center group-hover:text-[#d4af37] transition-colors duration-300">
                  {client.name}
                </p>

                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Add custom CSS for animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 40s linear infinite;
            will-change: transform;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ============================================
          3. SERVICES OVERVIEW (Previously section 2)
      ============================================ */}
      <section className="relative py-24 px-6 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content with solid background */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {/* Decorative dots pattern */}
              <div className="absolute -left-8 top-0 grid grid-cols-4 gap-2 opacity-20">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#d4af37] rounded-full" />
                ))}
              </div>

              {/* Small label */}
              <motion.p
                className="text-[#d4af37] text-sm uppercase tracking-[0.3em] mb-4 font-semibold flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-8 h-0.5 bg-[#d4af37]" />
                Our Vision of Excellence
                <span className="w-8 h-0.5 bg-[#d4af37]" />
              </motion.p>

              {/* Main heading */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Ready to Tell <br />
                <span className="text-gradient">Your Story?</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-slate-300 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                At Kura Films, we don't just produce content—we create cinematic experiences that move audiences,
                elevate brands, and preserve cultural narratives. Our approach combines the technical precision of
                Hollywood with the soul and authenticity of African storytelling.
              </motion.p>

              <motion.p
                className="text-slate-400 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                From concept to final delivery, we bring world-class production value, creative excellence, and
                cultural sensitivity to every project.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link to="/contact">
                  <CinematicButton variant="primary" size="lg">
                    Start Your Project
                  </CinematicButton>
                </Link>
              </motion.div>

              {/* Decorative dots pattern bottom */}
              <div className="absolute -left-4 bottom-8 grid grid-cols-3 gap-2 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-[#d4af37] rounded-full" />
                ))}
              </div>
            </motion.div>

            {/* Right Side - Image with diagonal split */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-3xl overflow-hidden"
            >
              {/* Diagonal overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-transparent z-10" />
              
              {/* Main image */}
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071"
                alt="Kura Films Production"
                className="w-full h-full object-cover"
              />

              {/* Decorative corner accent */}
              <motion.div
                className="absolute top-8 right-8 w-20 h-20 border-4 border-[#d4af37] rounded-tr-3xl rounded-bl-3xl"
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />

              {/* Decorative dots on image */}
              <div className="absolute top-12 right-12 grid grid-cols-3 gap-2 z-20">
                {[...Array(9)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-2 h-2 bg-[#d4af37] rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 + i * 0.05 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          4. CORE SERVICES (MAIN SECTION) (Previously section 3)
      ============================================ */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            subtitle="What We Offer"
            title="Core Production Services"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          5. PRODUCTION PROCESS / WORKFLOW (Previously section 4)
      ============================================ */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            subtitle="Our Approach"
            title="The Production Journey"
            align="center"
            className="mb-16"
          />

          <div className="grid lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <ProcessStepCard 
                key={index} 
                step={step} 
                index={index}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          6. WHY CHOOSE KURA FILMS (Previously section 5)
      ============================================ */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            subtitle="What Sets Us Apart"
            title="Why Choose Kura Films"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, index) => (
              <WhyChooseCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          7. SELECTED WORK FROM SERVICES (Previously section 6)
      ============================================ */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle 
              subtitle="Portfolio"
              title="Selected Service Outcomes"
              align="left"
            />
            <Link to="/projects">
              <button className="text-[#d4af37] text-sm font-semibold hover:text-[#c29b24] transition-colors">
                View All Projects →
              </button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Ethiopian Airlines Campaign',
                category: 'Commercial',
                image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074'
              },
              {
                title: 'Heritage Documentary',
                category: 'Documentary',
                image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059'
              },
              {
                title: 'Urban Rhythm Music Video',
                category: 'Music Video',
                image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#d4af37] text-xs uppercase tracking-wider font-semibold mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
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

export default Services;
