import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Globe,
  Heart,
  Sparkles,
  Target,
  Users,
  Film,
  TrendingUp,
  Eye,
  MapPin,
  Trophy,
  ArrowRight,
} from 'lucide-react';
import { SectionTitle } from '../components/cinematic/SectionTitle';
import { SplitHeroSection } from '../components/cinematic/SplitHeroSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ============================================
// REUSABLE COMPONENTS
// ============================================

// (Removed local AnimatedCounter — moved to shared components if needed)

// (Removed unused local StatCard - using shared component if needed)

// Timeline Item Component
const TimelineItem: React.FC<{ year: string; title: string; description: string; index: number }> = ({ 
  year, 
  title, 
  description, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 group"
    >
      {/* Year Badge */}
      <div className="shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
        <span className="text-lg sm:text-2xl font-bold text-[#050505]">{year}</span>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 md:glass rounded-none md:rounded-xl flex-1 hover:bg-white/10 transition-all duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Value Card Component
const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="p-6 md:p-8 md:glass rounded-none md:rounded-2xl text-left md:text-center hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

// ============================================
// MAIN ABOUT PAGE COMPONENT
// ============================================

const About: React.FC = () => {
  const [selectedValueIndex, setSelectedValueIndex] = useState<number>(0);

  const [openMissionIndex, setOpenMissionIndex] = useState<number | null>(null);

  const values = [
    {
      icon: <Heart className="w-5 h-5 text-[#050505]" />,
      title: 'Authenticity',
      description:
        'We tell real stories with genuine voices, honoring the truth of African experiences without compromise.',
    },
    {
      icon: <Award className="w-5 h-5 text-[#050505]" />,
      title: 'Excellence',
      description: 'World-class production standards in every frame, from pre-production to final delivery.',
    },
    {
      icon: <Globe className="w-5 h-5 text-[#050505]" />,
      title: 'Cultural Pride',
      description: 'Celebrating the richness and diversity of African cultures through powerful visual storytelling.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#050505]" />,
      title: 'Innovation',
      description: 'Pushing creative boundaries with cutting-edge techniques while respecting timeless storytelling principles.',
    },
    {
      icon: <Film className="w-5 h-5 text-[#050505]" />,
      title: 'Storytelling Power',
      description: 'Crafting narratives that move audiences emotionally and leave lasting cultural impact.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#050505]" />,
      title: 'Collaboration',
      description: 'Building strong partnerships with clients, crews, and communities to create magic together.',
    },
  ];
  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* Navbar */}
      <Navbar />
      
      {/* ============================================
          1. ABOUT HERO SECTION
      ============================================ */}
      <SplitHeroSection
        // eyebrow="About Kura Films"
        title={<>We Tell Stories <br /><span className="text-gradient">That Matter</span></>}
        description={""}
        badge={{ value: 'No. 1', label: 'Top Creative Studio' }}
        scrollLabel="Scroll to Explore"
      />

      {/* ============================================
          2. OUR STORY SECTION
      ============================================ */}
      <section className="py-10 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Story Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-4/5 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059"
                  alt="Kura Films Story"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Gold Frame */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-[#d4af37] rounded-2xl -z-10" />
            </motion.div>

            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                subtitle="Our Journey"
                title="A Vision Born From the Ethiopian Highlands"
                align="left"
              />
              
              <div className="space-y-5 text-slate-300 leading-relaxed">
                <p>
                  In 2015, in the heart of Addis Ababa, a group of passionate filmmakers came together 
                  with a singular vision: to tell authentic African stories that resonate globally. 
                  What started as a small collective with one camera and boundless ambition has grown 
                  into one of East Africa's most respected production companies.
                </p>
                <p>
                  We were tired of seeing our continent portrayed through a narrow lens. We knew the 
                  richness of our cultures, the depth of our histories, and the power of our contemporary 
                  voices deserved a cinematic platform that matched their magnitude.
                </p>
                <p>
                  Today, Kura Films stands as a testament to what happens when cultural pride meets 
                  world-class craftsmanship. From the bustling streets of Nairobi to the ancient rock 
                  churches of Lalibela, we've captured stories that move, inspire, and transform.
                </p>
                <p className="text-[#d4af37] font-semibold italic">
                  "Every frame we shoot is a love letter to Africa and its boundless creative spirit."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          3. MISSION & VISION SECTION
      ============================================ */}
      <section className="py-10 px-6 bg-linear-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            subtitle="Our Purpose"
            title="Mission & Vision"
            align="center"
            className="mb-16"
          />

          <div>
            {/* Desktop cards (md+) */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-10 md:glass rounded-none md:rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-linear-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-[#050505]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Creating powerful cinematic experiences that celebrate African identity and culture, 
                  while delivering world-class production value that competes on the global stage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 md:p-10 md:glass rounded-none md:rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mb-6 rounded-full bg-linear-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-[#050505]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  To become the leading African production company recognized globally for authentic 
                  storytelling, technical excellence, and cultural impact that shapes how the world 
                  sees Africa.
                </p>
              </motion.div>
            </div>

            {/* Mobile flat list (Option A) */}
            <div className="md:hidden">
              {[
                {
                  key: 'mission',
                  icon: <Target className="w-5 h-5 text-[#050505]" />, 
                  title: 'Our Mission',
                  text: 'Creating powerful cinematic experiences that celebrate African identity and culture, while delivering world-class production value that competes on the global stage.'
                },
                {
                  key: 'vision',
                  icon: <Eye className="w-5 h-5 text-[#050505]" />,
                  title: 'Our Vision',
                  text: 'To become the leading African production company recognized globally for authentic storytelling, technical excellence, and cultural impact that shapes how the world sees Africa.'
                }
              ].map((item, idx) => {
                const open = openMissionIndex === idx;
                return (
                  <div key={item.key} className="border-b border-white/6">
                    <button
                      onClick={() => setOpenMissionIndex(open ? null : idx)}
                      aria-expanded={open}
                      className="w-full flex items-center justify-between gap-4 py-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/6 flex items-center justify-center">{item.icon}</div>
                        <div className="text-left">
                          <div className="font-semibold text-white">{item.title}</div>
                        </div>
                      </div>
                      <div className={`text-[#d4af37] transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
                        <ArrowRight size={18} />
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 py-3' : 'max-h-0'}`}>
                      <p className="text-slate-300">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          4. OUR VALUES SECTION
      ============================================ */}
      <section className="py-10 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            subtitle="What Drives Us"
            title="The Pillars of Our Craft"
            align="center"
            className="mb-16"
          />

          <div>
            {/* Mobile: Pills */}
            <div className="md:hidden">
              <div className="flex gap-3 overflow-x-auto py-2 px-2">
                {values.map((v, i) => (
                  <button
                    key={v.title}
                    onClick={() => setSelectedValueIndex(i)}
                    className={`flex items-center gap-3 shrink-0 px-4 py-2 rounded-full transition-colors duration-200 ${
                      selectedValueIndex === i
                        ? 'bg-[#d4af37] text-[#050505]'
                        : 'bg-white/6 text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">{v.icon}</span>
                    <span className="font-semibold text-sm">{v.title}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-slate-300 max-w-3xl mx-auto">{values[selectedValueIndex].description}</p>
              </div>
            </div>

            {/* Desktop: Value cards grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v) => (
                <ValueCard key={v.title} icon={v.icon} title={v.title} description={v.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          5. ACHIEVEMENTS & MILESTONES SECTION
      ============================================ */}
      <section className="py-10 px-6 bg-linear-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            subtitle="Our Journey"
            title="Milestones & Achievements"
            align="center"
            className="mb-20"
          />

          {/* Timeline */}
          <div className="space-y-8 mb-12">
            <TimelineItem 
              year="2015"
              title="The Beginning"
              description="Founded in Addis Ababa with a vision to transform African storytelling through cinema."
              index={0}
            />
            <TimelineItem 
              year="2017"
              title="First International Recognition"
              description="Our debut documentary wins Best African Film at the Pan-African Film Festival."
              index={1}
            />
            <TimelineItem 
              year="2019"
              title="Expansion Across East Africa"
              description="Opened production offices in Nairobi and Kigali, expanding our regional footprint."
              index={2}
            />
            <TimelineItem 
              year="2021"
              title="Global Partnerships"
              description="Secured partnerships with major international streaming platforms and broadcasters."
              index={3}
            />
            <TimelineItem 
              year="2023"
              title="Award-Winning Excellence"
              description="Received multiple awards including Best Cinematography at the African Movie Academy Awards."
              index={4}
            />
            <TimelineItem 
              year="2024"
              title="100+ Productions Milestone"
              description="Celebrated our 100th production, reaching audiences in over 50 countries worldwide."
              index={5}
            />
          </div>

          {/* Statistics */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard value={100} label="Productions" suffix="+" />
            <StatCard value={35} label="Million Views" suffix="M+" />
            <StatCard value={12} label="Countries" suffix="+" />
            <StatCard value={25} label="Awards Won" suffix="+" />
          </div> */}
        </div>
      </section>

      {/* ============================================
          6. CREATIVE PHILOSOPHY SECTION
      ============================================ */}
      <section className="py-10 px-6 bg-[#050505] relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#d4af37]/5 to-transparent" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionTitle 
            subtitle="Our Approach"
            title="The Kura Films Philosophy"
            align="center"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-6 md:p-12 md:glass rounded-none md:rounded-2xl"
          >
            <blockquote className="text-2xl md:text-3xl text-center text-slate-200 leading-relaxed mb-8 italic font-serif">
              "The African Cinematic Renaissance is not coming. It is already here, fueled by 
              the light of our ancestors and the lens of our cameras."
            </blockquote>
            <p className="text-center text-[#d4af37] font-semibold uppercase tracking-wider">
              — Kura Films Creative Collective
            </p>

            <div className="mt-12 space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                At Kura Films, we believe that every story is sacred. Our approach combines the 
                technical precision of Hollywood with the soul and authenticity of African oral 
                tradition. We don't just make films—we create cultural artifacts that will be 
                remembered for generations.
              </p>
              <p>
                Our creative process begins with deep community engagement. We listen before we 
                shoot. We learn before we direct. We honor before we create. This philosophy has 
                earned us the trust of communities across the continent and the respect of audiences 
                worldwide.
              </p>
              <p>
                We are committed to elevating African cinema to its rightful place on the world 
                stage—not by imitating Western aesthetics, but by celebrating what makes our 
                stories uniquely powerful, visually stunning, and emotionally resonant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          7. OUR TEAM TEASER SECTION
      ============================================
      <section className="py-10 px-6 bg-linear-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            subtitle="The Visionaries"
            title="Visionary Leaders"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <TeamMemberCard 
              name="Abebe Selassie"
              role="Founder & Creative Director"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887"
            />
            <TeamMemberCard 
              name="Emebet Tadesse"
              role="Executive Producer"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888"
            />
            <TeamMemberCard 
              name="Desta Bekele"
              role="Director of Cinematography"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link to="/team">
              <CinematicButton variant="outline" size="lg">
                Meet the Full Team
              </CinematicButton>
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* ============================================
          8. GLOBAL IMPACT SECTION
      ============================================ */}
      <section className="py-10 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            subtitle="Our Reach"
            title="Global Impact"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-8 md:glass rounded-none md:rounded-2xl text-left md:text-center hover:bg-white/10 transition-all duration-300"
            >
              <MapPin className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Continental Presence</h3>
              <p className="text-slate-400 leading-relaxed">
                Production offices and partnerships across 12 African countries, from Cape Town to Cairo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 md:p-8 md:glass rounded-none md:rounded-2xl text-left md:text-center hover:bg-white/10 transition-all duration-300"
            >
              <Trophy className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Festival Recognition</h3>
              <p className="text-slate-400 leading-relaxed">
                Featured at Cannes, Sundance, Toronto, and major African film festivals worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 md:p-8 md:glass rounded-none md:rounded-2xl text-left md:text-center hover:bg-white/10 transition-all duration-300"
            >
              <TrendingUp className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cultural Impact</h3>
              <p className="text-slate-400 leading-relaxed">
                Our films have sparked conversations, changed perceptions, and inspired a new generation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
