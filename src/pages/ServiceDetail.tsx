import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { services } from '../data/servicesData';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, Home, ArrowRight, Shield, Award } from 'lucide-react';

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const ServiceDetail: React.FC = () => {
  const { slug } = useParams();
  const service = services.find((s) => slugify(s.title) === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#050505] text-white">
        <Navbar />
        <div className="max-w-4xl mx-auto py-40 px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Service not found</h2>
          <p className="text-slate-400 mb-6">We couldn't find that service. Return to the services list.</p>
          <Link to="/services" className="text-[#d4af37] underline">Back to Services</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="pt-32 pb-24 px-6 md:pt-40">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
            >
              <ArrowLeft className="h-4 w-4 text-[#d4af37]" />
              <span>Back to Services</span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
            >
              <Home className="h-4 w-4 text-[#d4af37]" />
              <span>Back to Home</span>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_28px_90px_rgba(0,0,0,0.35)]"
          >
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
              <div className="relative lg:border-r lg:border-white/10">
                <img src={service.image} alt={service.title} className="h-130 w-full object-cover" />
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    Cinematic delivery
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    Luxury presentation
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    Tailored workflow
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-6 border-b border-white/10 pb-5">
                  <p className="text-xs uppercase tracking-[0.32em] text-[#d4af37] font-semibold mb-2">Service Overview</p>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">{service.title}</h1>
                </div>

                <p className="text-slate-300 leading-relaxed mb-5">{service.description}</p>
                <p className="text-slate-400 leading-relaxed mb-8">{service.detailDescription}</p>

                <div className="mb-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] mb-3">Why this service stands out</p>
                  <ul className="space-y-4 border-l border-white/10 pl-5">
                    {service.highlights.map((highlight, index) => (
                      <li key={highlight} className="relative text-sm md:text-base leading-relaxed text-slate-200">
                        <span className="absolute left-[-1.55rem] top-1 inline-flex h-2.5 w-2.5 rounded-full bg-[#d4af37]" />
                        <span className="mr-3 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">0{index + 1}</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-[#d4af37] px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#050505] transition-colors hover:bg-[#c29b24]"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition-all hover:border-[#d4af37]/50 hover:text-[#d4af37]"
                  >
                    View Pricing
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Deliverables',
                icon: Shield,
                content: service.deliverables,
              },
              {
                title: 'Key Features',
                icon: Award,
                content: service.highlights,
              },
              {
                title: 'How We Work',
                icon: Clock,
                content: [
                  'Discovery and scope alignment',
                  'Production with curated crew and equipment',
                  'Post-production, refinement, and delivery',
                ],
              },
            ].map((panel) => {
              const Icon = panel.icon;

              return (
                <motion.div
                  key={panel.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-[0_20px_70px_rgba(0,0,0,0.22)]"
                >
                  <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37]">Luxury Card</p>
                      <h3 className="text-lg font-semibold text-white">{panel.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm text-slate-300">
                    {panel.content.map((item, index) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center border border-[#d4af37]/35 text-[10px] font-bold text-[#d4af37]">
                          0{index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
