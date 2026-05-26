import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroStat {
  value: string;
  label: string;
}

interface HeroBadge {
  value: string;
  label: string;
}

interface SplitHeroSectionProps {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  image?: string;
  imageAlt?: string;
  scrollLabel?: string;
  cta?: React.ReactNode;
  stats?: HeroStat[];
  badge?: HeroBadge;
}

export const SplitHeroSection: React.FC<SplitHeroSectionProps> = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  scrollLabel,
  cta,
  stats,
  badge,
}) => {
  const hasImage = Boolean(image);

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0">
        {image ? <img src={image} alt={imageAlt || ''} className="w-full h-full object-cover hero-zoom" /> : null}
        <div className="absolute inset-0 bg-linear-to-r from-[#48607a]/90 via-[#5e748a]/80 to-[#23425d]/90" />
        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_26%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className={hasImage ? 'grid gap-8 lg:grid-cols-2 lg:gap-12 items-center' : 'mx-auto max-w-4xl text-center'}>
          {hasImage && (
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-115">
                <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <img
                    src={image}
                    alt={imageAlt || ''}
                    className="h-[320px] w-full object-cover sm:h-[360px] lg:h-[420px]"
                  />
                </div>

                {badge && (
                  <>
                        <div className="hidden sm:flex absolute -top-6 left-8 h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <div className="h-5 w-5 rounded-full bg-[#d4af37]" />
                        </div>

                    <div className="hidden md:flex absolute top-1/2 right-0 z-20 -translate-y-1/2 translate-x-1/4 rounded-full bg-white px-4 py-2.5 shadow-2xl border border-white/20">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d5ea8] text-white">
                          <span className="text-base font-bold">★</span>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#17324a]">{badge.value}</div>
                          <div className="text-[10px] text-slate-500">{badge.label}</div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: hasImage ? 40 : 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={
              hasImage
                ? 'text-center lg:text-left'
                : 'mx-auto flex min-h-[40vh] w-full items-center justify-center text-center'
            }
          >
            <div
              className={
                hasImage
                  ? ''
                  : 'w-full rounded-[34px] border border-white/10 bg-white/5 px-6 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-8 sm:py-12'
              }
            >
              {eyebrow && (
                <motion.p
                  initial={{ opacity: 0, letterSpacing: '0.5em' }}
                  animate={{ opacity: 1, letterSpacing: '0.3em' }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d4af37]"
                >
                  {eyebrow}
                </motion.p>
              )}

              <h1 className="mb-5 text-4xl font-bold tracking-tight leading-tight text-white md:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-white/80 md:text-lg lg:mx-0">
                {description}
              </p>

              {cta && <div className={`mt-8 flex justify-center ${hasImage ? 'lg:justify-start' : ''}`}>{cta}</div>}
            </div>
          </motion.div>
        </div>

        {stats && stats.length > 0 && (
          <div className="relative z-20 mx-auto mt-8 max-w-5xl rounded-[24px] border border-white/10 bg-[#1f3f5b]/75 px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md md:px-6 md:py-5">
            <div className="grid grid-cols-2 gap-2 text-center md:grid-cols-4 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.08, duration: 0.5 }}
                  className="px-1 py-0.5"
                >
                  <h3 className="text-xl font-bold leading-none text-white md:text-3xl">{stat.value}</h3>
                  <p className="mt-1.5 text-[9px] uppercase tracking-[0.2em] text-white/75 md:text-[10px]">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {scrollLabel && (
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[4px] uppercase text-white/40"
        >
          <span className="flex items-center gap-2">
            {scrollLabel}
            <ChevronDown className="h-4 w-4" />
          </span>
        </motion.div>
      )}
    </section>
  );
};

export default SplitHeroSection;