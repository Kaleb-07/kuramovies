import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Crown, Star, BadgeInfo } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { SplitHeroSection } from '../components/cinematic/SplitHeroSection';
import { pricingServices, type PricingService, type PricingTier } from '../data/pricingData';

function tierIcon(name: PricingTier['name']) {
  if (name === 'Normal') return <Check className="h-4 w-4" />;
  if (name === 'Standard') return <Star className="h-4 w-4" />;
  return <Crown className="h-4 w-4" />;
}

const Pricing = () => {
  const [activeServiceSlug, setActiveServiceSlug] = useState(pricingServices[0]?.slug ?? '');

  const activeService = useMemo<PricingService>(() => {
    return pricingServices.find((service) => service.slug === activeServiceSlug) ?? pricingServices[0];
  }, [activeServiceSlug]);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <Navbar />

      <SplitHeroSection
        // eyebrow="Pricing"
        title={<>Clear Packages for Every <br /><span className="text-gradient">Production Service</span></>}
        description={""}
        // <>Choose a service, compare Normal, Standard, and Pro, and let clients understand exactly what they get at each level. Each package scales from a lean setup to a complete production solution.</>
      />

      <section className="py-10 px-6 bg-linear-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[360px_1fr] gap-8 items-start">
          <div className="lg:sticky lg:top-28 space-y-4">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold">Pricing</p>
            </div>

            {pricingServices.map((service, index) => {
              const isActive = service.slug === activeServiceSlug;

              return (
                <motion.button
                  key={service.slug}
                  type="button"
                  onClick={() => setActiveServiceSlug(service.slug)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  className={`group relative w-full overflow-hidden rounded-[22px] border px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-[#d4af37]/60 bg-white/10 shadow-[0_0_40px_rgba(212,175,55,0.12)]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className={`text-base md:text-lg font-semibold transition-colors ${isActive ? 'text-[#d4af37]' : 'text-white group-hover:text-[#d4af37]'}`}>
                      {service.title}
                    </h3>
                    {isActive && <BadgeInfo className="h-5 w-5 text-[#d4af37] shrink-0" />}
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="space-y-8">
            <div className="mb-0">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] font-semibold mb-2">Package Details</p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Compare Normal, Standard, and Pro
              </h2>
            </div>

            <motion.div
              key={activeService.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="text-center mb-6">
                <p className="text-[#d4af37] text-xs uppercase tracking-[0.3em] mb-2">{activeService.title}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                {activeService.tiers.map((tier, tierIndex) => {
                  const isFeatured = tier.featured;

                  return (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: tierIndex * 0.08 }}
                      className={`relative rounded-none p-5 border transition-all duration-300 ${
                          isFeatured
                            ? 'border-[#d4af37]/60 bg-linear-to-b from-[#d4af37]/18 to-white/5 shadow-[0_0_24px_rgba(212,175,55,0.10)]'
                            : 'border-white/10 bg-black/20 hover:border-white/20'
                        }`}
                    >
                      {isFeatured && (
                        <div className="absolute -top-3 left-6 rounded-full bg-[#d4af37] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#050505]">
                          Most Popular
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div>
                          <p className="text-white text-lg font-semibold">{tier.name}</p>
                          <p className="text-slate-400 text-xs mt-1">{tier.summary}</p>
                        </div>
                        <div className={`flex h-9 w-9 items-center justify-center rounded-md ${isFeatured ? 'bg-[#d4af37] text-[#050505]' : 'bg-white/10 text-[#d4af37]'}`}>
                          {tierIcon(tier.name)}
                        </div>
                      </div>

                      <div className="mb-5">
                        <div className="text-2xl font-bold text-white">{String(tier.priceLabel).replace(/\$/g, 'ETB ')}</div>
                        <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mt-2">Based on service scope</div>
                      </div>

                      <ul className="space-y-2 mb-6 text-xs text-slate-300">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="h-4 w-4 text-[#d4af37] mt-0.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/contact"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                          isFeatured
                            ? 'bg-[#d4af37] text-[#050505] hover:bg-[#c29b24]'
                            : 'bg-white/5 text-white hover:bg-[#d4af37] hover:text-[#050505]'
                        }`}
                      >
                        Enquire Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Normal',
                  text: 'A lean package for clients who want the essentials at the lowest starting cost.',
                },
                {
                  title: 'Standard',
                  text: 'The best value option for most clients because it balances scope, quality, and cost.',
                },
                {
                  title: 'Pro',
                  text: 'For clients who want the full service, bigger production support, and everything included.',
                },
              ].map((item, index) => (
                <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <div className="text-[#d4af37] text-xs uppercase tracking-[0.3em] mb-3">0{index + 1}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-linear-to-b from-[#050505] to-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-sm">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="text-[#d4af37] text-xs uppercase tracking-[0.3em] mb-3">Need a custom quote?</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tell us the service, and we will shape the right package.</h2>
              <p className="text-slate-300 leading-relaxed max-w-3xl">
                These pricing tiers are built to help customers understand the difference between Normal, Standard, and Pro.
                Final pricing can be adjusted for shoot days, crew size, travel, rush delivery, and add-ons.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-3 font-bold text-[#050505] transition-colors hover:bg-[#c29b24]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition-all hover:border-[#d4af37]/50 hover:text-[#d4af37]"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
