import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { CinematicButton } from '../components/cinematic/CinematicButton';

const featuredProjects = [
  { title: 'The Last Kingdom', category: 'Feature Film', year: '2025', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop' },
  { title: 'Echoes of Addis', category: 'Documentary', year: '2024', image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=800&auto=format&fit=crop' },
  { title: 'Daughters of the Nile', category: 'Drama Series', year: '2025', image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=800&auto=format&fit=crop' },
  { title: 'Coffee Ceremony', category: 'Short Film', year: '2024', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop' },
];

const services = [
  'Feature Films & Series',
  'Documentary Production',
  'Commercials & Brand Films',
  'Music Videos',
  'Event Coverage',
  'Post-Production & Color Grading',
];

function MobileServicesAccordion({ services }: { services: string[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-4">
      {services.map((s, i) => {
        const open = openIndex === i;
        return (
          <div key={s} className="border-b border-white/6">
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="w-full py-4 flex items-center justify-between text-left"
            >
              <div>
                <div className="text-sm font-semibold text-white">{s}</div>
              </div>
              <div className={`text-[#d4af37] transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
                <ArrowRight size={18} />
              </div>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 py-3' : 'max-h-0'}`}>
              <p className="text-[13px] text-[#cfd8e3]">World-class production with authentic African storytelling.</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const stats = [
  { value: '100+', label: 'Productions Completed' },
  { value: '35M+', label: 'Audience Reach' },
  { value: '12', label: 'Countries Reached' },
  { value: '50+', label: 'Happy Clients' },
];

const testimonials = [
  {
    name: 'Paulo Hubert',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    quote:
      'The team delivered exactly what we needed and elevated the entire story with a polished cinematic finish.',
  },
  {
    name: 'Laurence Vendetta',
    location: 'California, USA',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    quote:
      'Their attention to detail, pacing, and visuals made the final piece feel premium from start to finish.',
  },
  {
    name: 'Cassandra Raul',
    location: 'Florida',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    quote:
      'I was impressed by the care and precision the team brought to every stage of production. They made the process feel smooth, collaborative, and deeply professional, while delivering a final result that felt polished and authentic.',
  },
];

const Home = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(2);
  const activeTestimonial = testimonials[activeTestimonialIndex];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonialIndex((currentIndex) => (currentIndex + 1) % testimonials.length);
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-12 pb-10">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1920&auto=format&fit=crop"
            alt="Hero backdrop"
            className="w-full h-full object-cover hero-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#48607a]/90 via-[#5e748a]/80 to-[#23425d]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-[430px]">
                <div className="hidden sm:flex absolute -top-6 left-8 h-14 w-14 rounded-full bg-white items-center justify-center shadow-lg">
                  <div className="h-5 w-5 rounded-full bg-[#d4af37]" />
                </div>

                <div className="hidden md:flex absolute top-1/2 right-0 z-20 -translate-y-1/2 translate-x-1/4 rounded-full bg-white px-4 py-2.5 shadow-2xl border border-white/20">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d5ea8] text-white">
                      <span className="text-base font-bold">★</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#17324a]">No. 1</div>
                      <div className="text-[10px] text-slate-500">Top Creative Studio</div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <img
                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop"
                    alt="Creative team filming"
                    className="h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5 leading-tight text-white">
                Africa's Stories Told
                <br />
                <span className="text-[#7fb8ff]">to the World</span>
              </h1>

              <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed lg:mx-0 mx-auto">
                Premium cinematic production company creating powerful,
                authentic Ethiopian and African stories for global audiences.
              </p>
            </motion.div>
          </div>

          <div className="relative z-20 mt-8 rounded-[24px] border border-white/10 bg-[#1f3f5b]/75 backdrop-blur-md px-4 py-4 md:px-6 md:py-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
                  className="px-1 py-0.5"
                >
                  <h3 className="text-xl md:text-3xl font-bold text-white leading-none">{stat.value}</h3>
                  <p className="mt-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/75">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[4px] uppercase"
        >
          Scroll to Explore ↓
        </motion.div>
      </section>

      
      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-14">
            <div>
              <p className="text-[#d4af37] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">Our Work</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            </div>
            <Link
              to="/about"
              className="text-[#d4af37] hover:text-white flex items-center gap-2 text-sm font-semibold transition-colors duration-300 group"
            >
              View All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-video"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <p className="text-[#d4af37] text-xs mb-2 uppercase tracking-widest font-semibold">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="gold-glow h-16 w-16 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Play className="h-7 w-7 text-white ml-1 fill-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES (Redesigned Departments-style) ─── */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto relative">
          {/* Big rounded background */}
          <div className="rounded-[28px] bg-gradient-to-r from-[#3b2a1e] via-[#5a3f2c] to-[#3b2a1e] p-10 md:p-16 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-[#d4af37] text-xs uppercase tracking-[0.3em] mb-3 font-semibold">What We Do</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#e8e6e3]">Our Expertise</h2>
            </div>

            {/* Cards grid - show all cards on large screens */}
            <div className="mt-10">
              <div className="mx-auto px-4 md:px-0">
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                  {services.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.6 }}
                      whileHover={{ translateY: -6 }}
                      className="bg-[#f8f5ef] hover:bg-[#d4af37]/15 border border-white/10 hover:border-[#d4af37]/40 shadow-[0_12px_30px_rgba(0,0,0,0.28)] p-4 min-h-[120px] sm:min-h-[155px] flex flex-col sm:items-center items-start justify-center text-left sm:text-center rounded-2xl transition-colors duration-300"
                    >
                        <div className="w-10 h-1 bg-[#d4af37] mb-4" />
                        <h3 className="text-sm font-semibold text-[#0b1220] mb-2 leading-snug px-0 sm:px-2">{service}</h3>
                        <p className="hidden sm:block text-[11px] text-gray-500 leading-relaxed max-w-[160px] sm:px-2">
                          World-class production with authentic African storytelling.
                        </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            {/* Mobile Accordion (compact list) */}
            <div className="md:hidden mt-6">
              <MobileServicesAccordion services={services} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-10 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#d4af37] text-xs uppercase tracking-[0.35em] mb-4 font-semibold">Client Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Some Reviews</h2>
            <p className="mt-3 text-[#67a2ff] text-lg md:text-xl font-medium uppercase tracking-[0.18em]">
              Of Our Clients
            </p>
          </div>

          <div className="hidden lg:grid relative lg:grid-cols-[1.05fr_0.9fr] gap-14 xl:gap-20 items-center">
            <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-visible bg-gradient-to-b from-transparent via-[#4ea0ff] to-transparent">
              <div className="absolute inset-0 -translate-x-1/2 rounded-full bg-[#4ea0ff]/20 blur-xl" />
              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-14 h-3 w-3 -translate-x-1/2 rounded-full bg-[#4ea0ff] shadow-[0_0_0_8px_rgba(78,160,255,0.12),0_0_26px_rgba(78,160,255,0.55)]"
              />
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#3e7ed4] shadow-[0_0_0_10px_rgba(62,126,212,0.12),0_0_30px_rgba(62,126,212,0.55)]"
              />
              <motion.div
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.95, 1.08, 0.95] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 bottom-16 h-5 w-5 -translate-x-1/2 rounded-full bg-[#2f6dbd] shadow-[0_0_0_12px_rgba(47,109,189,0.08),0_0_32px_rgba(47,109,189,0.5)]"
              />
            </div>

            <div className="relative pl-8 md:pl-14 lg:pl-20">

              <div className="space-y-10 md:space-y-14">
                {testimonials.map((testimonial, index) => {
                  const isActive = index === activeTestimonialIndex;

                  return (
                    <motion.div
                      key={testimonial.name}
                      initial={{ opacity: 0, x: -24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: index * 0.1 }}
                      onClick={() => setActiveTestimonialIndex(index)}
                      className={`relative flex cursor-pointer items-center gap-5 md:gap-8 transition-all duration-300 ${
                        isActive
                          ? 'rounded-[28px] bg-white/0 px-6 py-6 md:px-8 md:py-8'
                          : 'py-2 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <div className={`relative shrink-0 rounded-full overflow-hidden ${isActive ? 'h-24 w-24 md:h-28 md:w-28' : 'h-20 w-20 md:h-24 md:w-24'} ring-1 ring-black/5`}>
                        <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                      </div>

                      <div>
                        <h3 className={`font-bold tracking-tight ${isActive ? 'text-[#2d4b6f] text-xl md:text-2xl' : 'text-[#2d4b6f] text-lg md:text-xl'}`}>
                          {testimonial.name}
                        </h3>
                        <p className={`mt-1 ${isActive ? 'text-[#4f6f93] text-base' : 'text-[#4f6f93] text-sm md:text-base'}`}>
                          {testimonial.location}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              key={activeTestimonialIndex}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="absolute -left-2 top-0 text-[#3e7ed4] text-6xl md:text-7xl font-light leading-none select-none">
                “
              </div>
              <div className="pl-10 md:pl-12 pt-8 md:pt-10 max-w-xl">
                <p className="text-[#9bacc2] text-lg md:text-xl leading-8 md:leading-9">
                  {activeTestimonial.quote}
                </p>

                <div className="mt-8 flex items-center gap-1 text-[#3e7ed4]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-xl md:text-2xl leading-none">
                      ★
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-white font-semibold text-lg">{activeTestimonial.name}</p>
                  <p className="text-[#88a0b9] text-sm mt-1">{activeTestimonial.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Mobile layout: stacked active testimonial + horizontal thumbnails */}
          <div className="lg:hidden mt-6">
            <motion.div
              key={activeTestimonialIndex}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#0b1220]/10 rounded-2xl p-6 mx-4"
            >
              <div className="absolute left-2 top-0 text-[#3e7ed4] text-5xl font-light leading-none select-none">“</div>
              <div className="pl-6 pt-2">
                <p className="text-[#9bacc2] text-base leading-7">{activeTestimonial.quote}</p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-16 w-16 rounded-full overflow-hidden ring-1 ring-black/5 flex-shrink-0">
                    <img src={activeTestimonial.image} alt={activeTestimonial.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">{activeTestimonial.name}</p>
                    <p className="text-[#88a0b9] text-sm">{activeTestimonial.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-6 px-4">
              <div className="flex gap-4 overflow-x-auto py-2 scrollbar-hide">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setActiveTestimonialIndex(i)}
                    className={`flex-shrink-0 w-28 p-2 rounded-xl text-left transition-transform duration-200 ${i === activeTestimonialIndex ? 'scale-105 ring-2 ring-[#4ea0ff]/30' : 'opacity-75 hover:opacity-100'}`}
                  >
                    <div className="h-14 w-full rounded-lg overflow-hidden mb-2">
                      <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="text-sm font-semibold text-white truncate">{t.name}</div>
                    <div className="text-xs text-[#88a0b9] truncate">{t.location}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      {/* ─── FEATURE HIGHLIGHT (New Section) ─── */}
      <section className="py-10 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Framed Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-b from-zinc-900 to-zinc-800 p-6 rounded-2xl border border-white/5 shadow-lg">
              <div className="rounded-xl overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
                  alt="Cinematographer shooting at sunset"
                  className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Elegance in Every Frame</h2>

            <div className="space-y-8 text-gray-300">
              <div className="flex items-start gap-4">
                <div className="text-[#d4af37] mt-1">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Authentic Storytelling</h3>
                  <p className="text-sm text-gray-400">We don't just film; we bridge the gap between heritage and modern cinema, ensuring every story resonates with its roots while speaking to a global audience.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-[#d4af37] mt-1">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">World-Class Quality</h3>
                  <p className="text-sm text-gray-400">Equipped with the latest technology and a roster of award-winning creators, we provide a production quality that rivals the world's best studios.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1920&auto=format&fit=crop"
            alt="CTA backdrop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's create something powerful together.
            </p>
            <Link to="/contact">
              <CinematicButton variant="primary" size="lg" className="text-lg px-14 py-5">
                Start Your Project Today
              </CinematicButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
