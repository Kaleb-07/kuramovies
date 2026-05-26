import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award,
  Users,
  Heart,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SectionTitle } from '../components/cinematic/SectionTitle';
import { SplitHeroSection } from '../components/cinematic/SplitHeroSection';
import { TeamMemberCard } from '../components/cinematic/TeamMemberCard';

// ============================================
// TYPES & DATA
// ============================================

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
  isLeadership?: boolean;
}

interface Department {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

const departments: Department[] = [
  {
    id: 'direction',
    name: 'Direction & Production',
    icon: Users,
    description: 'Visionary leaders who bring stories to life'
  },
  {
    id: 'cinematography',
    name: 'Cinematography & Camera',
    icon: Sparkles,
    description: 'Masters of light, composition, and visual storytelling'
  },
  {
    id: 'editing',
    name: 'Editing & Post-Production',
    icon: Award,
    description: 'Crafting the final narrative through precision and artistry'
  },
  {
    id: 'creative',
    name: 'Writing & Creative Development',
    icon: Heart,
    description: 'The architects of compelling narratives and concepts'
  }
];

const teamMembers: TeamMember[] = [
  // Leadership
  {
    id: 1,
    name: 'Dawit Alemayehu',
    role: 'Founder & Creative Director',
    department: 'direction',
    bio: 'With over 15 years of experience in African cinema, Dawit has directed award-winning films that have screened at international festivals. His vision is to elevate Ethiopian storytelling to global standards while preserving authentic cultural narratives.',
    image: '/team/Gemini_Generated_Image_23s94923s94923s9.png',
    skills: ['Direction', 'Creative Strategy', 'Film Production', 'Storytelling'],
    social: {
      linkedin: '#',
      instagram: '#',
      email: 'dawit@kurafilms.com'
    },
    isLeadership: true
  },
  {
    id: 2,
    name: 'Sara Tesfaye',
    role: 'Executive Producer',
    department: 'direction',
    bio: 'Sara brings a wealth of experience in managing large-scale productions across Africa and Europe. Her expertise in logistics, budgeting, and client relations ensures every project runs smoothly from concept to delivery.',
    image: '/team/Gemini_Generated_Image_f2hbtrf2hbtrf2hb.png',
    skills: ['Production Management', 'Budget Planning', 'Client Relations', 'Team Leadership'],
    social: {
      linkedin: '#',
      instagram: '#',
      email: 'sara@kurafilms.com'
    },
    isLeadership: true
  },
  // Direction & Production
  {
    id: 3,
    name: 'Michael Bekele',
    role: 'Senior Director',
    department: 'direction',
    bio: 'Michael specializes in documentary and commercial work, with a keen eye for authentic moments and powerful visual narratives.',
    image: '/team/Gemini_Generated_Image_p8r7inp8r7inp8r7.png',
    skills: ['Documentary', 'Commercial Direction', 'Casting', 'Location Scouting'],
    social: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 4,
    name: 'Hanna Girma',
    role: 'Production Manager',
    department: 'direction',
    bio: 'Hanna ensures seamless coordination across all production phases, from pre-production planning to on-set execution.',
    image: '/team/Gemini_Generated_Image_3gpmmt3gpmmt3gpm.png',
    skills: ['Scheduling', 'Logistics', 'Team Coordination', 'Problem Solving'],
    social: {
      instagram: '#',
      email: 'hanna@kurafilms.com'
    }
  },
  // Cinematography
  {
    id: 5,
    name: 'Yonas Haile',
    role: 'Director of Photography',
    department: 'cinematography',
    bio: 'Yonas is a master of light and composition, creating stunning visuals that elevate every frame to cinematic art.',
    image: '/team/Gemini_Generated_Image_f7o9u7f7o9u7f7o9.png',
    skills: ['Cinematography', 'Lighting Design', 'Camera Operation', 'Visual Storytelling'],
    social: {
      linkedin: '#',
      instagram: '#'
    }
  },
  {
    id: 6,
    name: 'Liya Tadesse',
    role: 'Camera Operator',
    department: 'cinematography',
    bio: 'Liya brings technical precision and creative flair to every shot, specializing in dynamic camera movements and aerial cinematography.',
    image: '/team/Gemini_Generated_Image_ta0b1fta0b1fta0b.png',
    skills: ['Camera Operation', 'Drone Cinematography', 'Steadicam', 'Technical Expertise'],
    social: {
      instagram: '#'
    }
  },
  // Editing & Post
  {
    id: 7,
    name: 'Daniel Assefa',
    role: 'Lead Editor',
    department: 'editing',
    bio: 'Daniel crafts compelling narratives through precise editing, with expertise in both documentary and narrative storytelling.',
    image: '/team/Gemini_Generated_Image_k56x2rk56x2rk56x.png',
    skills: ['Video Editing', 'Color Grading', 'Sound Design', 'Motion Graphics'],
    social: {
      linkedin: '#',
      email: 'daniel@kurafilms.com'
    }
  },
  {
    id: 8,
    name: 'Meron Kebede',
    role: 'Colorist',
    department: 'editing',
    bio: 'Meron transforms footage into visual poetry through expert color grading and cinematic color science.',
    image: '/team/Gemini_Generated_Image_2ygsmi2ygsmi2ygs.png',
    skills: ['Color Grading', 'DaVinci Resolve', 'Color Science', 'Visual Enhancement'],
    social: {
      instagram: '#'
    }
  },
  // Creative Development
  {
    id: 9,
    name: 'Abebe Solomon',
    role: 'Head Writer',
    department: 'creative',
    bio: 'Abebe develops powerful scripts and concepts that resonate with both local and international audiences.',
    image: '/team/Gemini_Generated_Image_u9r97ru9r97ru9r9.png',
    skills: ['Scriptwriting', 'Story Development', 'Creative Concepts', 'Research'],
    social: {
      linkedin: '#',
      email: 'abebe@kurafilms.com'
    }
  },
  {
    id: 10,
    name: 'Bethlehem Yohannes',
    role: 'Creative Strategist',
    department: 'creative',
    bio: 'Bethlehem bridges brand objectives with creative storytelling, developing campaigns that drive results.',
    image: '/team/Gemini_Generated_Image_u9r97ru9r97ru9r9.png',
    skills: ['Brand Strategy', 'Campaign Development', 'Market Research', 'Creative Direction'],
    social: {
      linkedin: '#',
      instagram: '#'
    }
  }
];

const cultureValues = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'We pour our hearts into every frame, every story, every project.'
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'Great films are made by great teams working in harmony.'
  },
  {
    icon: Award,
    title: 'Excellence First',
    description: 'We never compromise on quality or creative integrity.'
  },
  {
    icon: Sparkles,
    title: 'Innovation Always',
    description: 'We push boundaries and explore new creative territories.'
  }
];

// Re-using shared `TeamMemberCard` from components/cinematic

// ============================================
// MAIN TEAM PAGE COMPONENT
// ============================================

const Team: React.FC = () => {
  const [activeDepartment, setActiveDepartment] = useState<string>('all');
  const teamActionRef = useRef<HTMLDivElement | null>(null);

  const leadershipTeam = teamMembers.filter(member => member.isLeadership);
  const filteredMembers = activeDepartment === 'all' 
    ? teamMembers.filter(member => !member.isLeadership)
    : teamMembers.filter(member => member.department === activeDepartment && !member.isLeadership);

  useEffect(() => {
    const container = teamActionRef.current;

    if (!container) {
      return;
    }

    let paused = false;

    const scrollNext = () => {
      if (paused) {
        return;
      }

      const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-team-action-card]'));
      if (!cards.length) {
        return;
      }

      const currentIndex = cards.findIndex((card) => {
        const cardLeft = card.offsetLeft;
        const containerLeft = container.scrollLeft;
        return cardLeft >= containerLeft && cardLeft < containerLeft + container.clientWidth;
      });

      const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % cards.length : 0;
      cards[nextIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    };

    const intervalId = window.setInterval(scrollNext, 60000);

    const handleMouseEnter = () => {
      paused = true;
    };

    const handleMouseLeave = () => {
      paused = false;
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.clearInterval(intervalId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Navbar */}
      <Navbar />

      {/* ============================================
          1. TEAM HERO SECTION
      ============================================ */}
      <SplitHeroSection
        // eyebrow="Our Team"
        title={<>Meet The <br /><span className="text-gradient">Creative Minds</span></>}
        description=""
        badge={{ value: 'No. 1', label: 'Top Creative Studio' }}
        scrollLabel="Meet The Team"
      />

      {/* ============================================
          2. LEADERSHIP TEAM
      ============================================ */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Leadership"
            title="The Visionaries"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {leadershipTeam.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                className="h-96"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          3. CREATIVE DEPARTMENTS FILTER
      ============================================ */}
      <section className="py-16 px-6 bg-linear-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Our Departments"
            title="Specialized Excellence"
            align="center"
            className="mb-12"
          />

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveDepartment('all')}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeDepartment === 'all'
                  ? 'bg-[#d4af37] text-[#050505]'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:border-[#d4af37]/50'
              }`}
            >
              All Team
            </motion.button>
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <motion.button
                  key={dept.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveDepartment(dept.id)}
                  className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeDepartment === dept.id
                      ? 'bg-[#d4af37] text-[#050505]'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:border-[#d4af37]/50'
                  }`}
                >
                  <Icon size={16} />
                  {dept.name}
                </motion.button>
              );
            })}
          </div>

          {/* Team Grid */}
          <motion.div
            key={activeDepartment}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMembers.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================
          4. TEAM CULTURE & PHILOSOPHY
      ============================================ */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                subtitle="Our Culture"
                title="How We Work"
                align="left"
                className="mb-8"
              />
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                At Kura Films, we believe that exceptional work comes from exceptional people working 
                in an environment that nurtures creativity, collaboration, and continuous growth.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our team is a diverse collective of passionate storytellers, each bringing unique perspectives 
                and expertise. We foster a culture where ideas flow freely, risks are encouraged, and every 
                voice matters in the creative process.
              </p>

              {/* Culture Values Grid */}
              <div className="grid grid-cols-2 gap-4">
                {cultureValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass p-4 rounded-xl"
                    >
                      <Icon className="w-8 h-8 text-[#d4af37] mb-3" />
                      <h4 className="text-white font-bold mb-1">{value.title}</h4>
                      <p className="text-slate-400 text-sm">{value.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-150 rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          5. BEHIND THE SCENES GALLERY
      ============================================ */}
      <section className="py-24 px-6 bg-linear-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            subtitle="Behind The Scenes"
            title="Our Team In Action"
            align="center"
            className="mb-16"
          />

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-linear-to-r from-[#050505] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-linear-to-l from-[#050505] to-transparent z-10" />

            <div
              ref={teamActionRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 scrollbar-none"
            >
              {[
                'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071',
                'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2062',
                'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059',
                'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071',
                'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070',
                'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070'
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  data-team-action-card
                  className="relative h-72 sm:h-80 lg:h-96 w-[82vw] sm:w-[46vw] lg:w-[32%] flex-none snap-center rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`Behind the scenes ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          7. FOOTER
      ============================================ */}
      <Footer />
    </div>
  );
};

export default Team;
