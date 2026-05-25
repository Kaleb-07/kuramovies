import type { Service } from './servicesData';
import { services } from './servicesData';

export type PricingTierName = 'Normal' | 'Standard' | 'Pro';

export interface PricingTier {
  name: PricingTierName;
  priceLabel: string;
  summary: string;
  features: string[];
  featured?: boolean;
}

export interface PricingService extends Service {
  slug: string;
  pricingIntro: string;
  pricingNote: string;
  tiers: PricingTier[];
}

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const pricingBlueprint: Record<string, { pricingIntro: string; pricingNote: string; tiers: PricingTier[] }> = {
  'Feature Films & Series': {
    pricingIntro: 'Built for long-form stories that need development, scale, and a polished delivery path.',
    pricingNote: 'Prices vary by script length, cast size, locations, and delivery format. These are starting points.',
    tiers: [
      {
        name: 'Normal',
        priceLabel: 'From $5,500',
        summary: 'Best for concept development and a lean production setup.',
        features: ['Story and scope consult', 'Basic scheduling', '1 shoot day', 'Light edit and color pass'],
      },
      {
        name: 'Standard',
        priceLabel: 'From $12,500',
        summary: 'Ideal for polished film or episodic pilots with stronger production support.',
        features: ['Full pre-production', 'Casting shortlist', '2-3 shoot days', 'Edit, color, and sound mix'],
        featured: true,
      },
      {
        name: 'Pro',
        priceLabel: 'From $25,000',
        summary: 'Complete production coverage for premium releases, festivals, and streaming delivery.',
        features: ['Script refinement and visual development', 'Full crew and production management', 'Multiple shoot days', 'Mastering and delivery package'],
      },
    ],
  },
  'Documentary & Impact': {
    pricingIntro: 'Designed for real stories, nonprofit campaigns, and research-driven impact films.',
    pricingNote: 'Cost depends on travel, archival licensing, interview count, and final runtime.',
    tiers: [
      {
        name: 'Normal',
        priceLabel: 'From $2,800',
        summary: 'Lean coverage for a focused story with a simple post-production package.',
        features: ['Interview planning', '1 field day', 'Basic edit', 'Titles and clean audio'],
      },
      {
        name: 'Standard',
        priceLabel: 'From $6,500',
        summary: 'Balanced production for brand documentaries and social impact pieces.',
        features: ['Research and pre-interviews', '2 shoot days', 'Archival integration', 'Professional grading and mix'],
        featured: true,
      },
      {
        name: 'Pro',
        priceLabel: 'From $14,000',
        summary: 'End-to-end documentary production with more depth, travel, and finishing support.',
        features: ['Full research and development', 'Multi-location field production', 'Festival-ready edit', 'Delivery across web and broadcast'],
      },
    ],
  },
  'Commercial & Advertising': {
    pricingIntro: 'Fast, brand-forward packages for campaigns, product launches, and digital ads.',
    pricingNote: 'Final pricing changes with shot complexity, talent, props, motion graphics, and turnaround.',
    tiers: [
      {
        name: 'Normal',
        priceLabel: 'From $1,500',
        summary: 'A sharp starter package for social ads or single-location promos.',
        features: ['Creative concept', '1 shoot day', 'Basic edit', 'One platform cutdown'],
      },
      {
        name: 'Standard',
        priceLabel: 'From $4,500',
        summary: 'Stronger production value for brand films and campaign rollouts.',
        features: ['Storyboards and shot plan', 'Casting support', '2 shoot days', 'Motion graphics and cutdowns'],
        featured: true,
      },
      {
        name: 'Pro',
        priceLabel: 'From $10,000',
        summary: 'Full commercial production for premium launches and multi-platform campaigns.',
        features: ['Campaign strategy support', 'Full crew and equipment', 'Multiple deliverables', 'Advanced edit, color, and sound'],
      },
    ],
  },
  'Music Videos': {
    pricingIntro: 'Visual concepts built around rhythm, performance, and artist identity.',
    pricingNote: 'Prices depend on choreography, location count, special effects, and edit complexity.',
    tiers: [
      {
        name: 'Normal',
        priceLabel: 'From $1,200',
        summary: 'Simple performance-focused video with a fast production schedule.',
        features: ['Creative direction', '1 location', 'Basic lighting setup', 'Edited master video'],
      },
      {
        name: 'Standard',
        priceLabel: 'From $3,400',
        summary: 'A stronger visual package with movement, styling, and more post work.',
        features: ['Location planning', 'Choreography support', '2 shoot blocks', 'Color grading and effects'],
        featured: true,
      },
      {
        name: 'Pro',
        priceLabel: 'From $7,500',
        summary: 'High-concept production with multiple setups, stronger styling, and cinematic polish.',
        features: ['Full creative development', 'Multiple locations', 'Performance and narrative mix', 'Premium finishing and delivery'],
      },
    ],
  },
  'Corporate & Brand Films': {
    pricingIntro: 'Professional brand communication packages for companies, institutions, and internal content.',
    pricingNote: 'Pricing depends on crew size, interview count, locations, and delivery urgency.',
    tiers: [
      {
        name: 'Normal',
        priceLabel: 'From $900',
        summary: 'Clean and efficient coverage for short company updates or simple profiles.',
        features: ['Brief development', '1 shoot setup', 'Basic edit', 'Simple subtitles or lower thirds'],
      },
      {
        name: 'Standard',
        priceLabel: 'From $2,800',
        summary: 'Best for brand stories, recruitment films, and polished corporate communication.',
        features: ['Interview planning', 'Brand storytelling script', '2 shoot setups', 'Professional edit and grading'],
        featured: true,
      },
      {
        name: 'Pro',
        priceLabel: 'From $6,500',
        summary: 'Complete brand film delivery with multiple cuts and broad usage rights support.',
        features: ['Strategy and scripting', 'Multi-location production', 'Versioned edits for web/social', 'Full finishing package'],
      },
    ],
  },
  'Photography & Stills': {
    pricingIntro: 'Cinematic stills for campaigns, portraits, events, and editorial visuals.',
    pricingNote: 'Final price changes with number of shots, styling, retouching, and usage needs.',
    tiers: [
      {
        name: 'Normal',
        priceLabel: 'From $300',
        summary: 'Focused photo coverage for quick sessions or simple promotional needs.',
        features: ['1 session block', 'Basic retouching', 'Delivered digital selects', 'Simple usage guidance'],
      },
      {
        name: 'Standard',
        priceLabel: 'From $850',
        summary: 'Stronger production for brand shoots, portraits, and event storytelling.',
        features: ['Creative direction', 'Lighting setup', 'Extended retouching', 'Multiple final selects'],
        featured: true,
      },
      {
        name: 'Pro',
        priceLabel: 'From $1,800',
        summary: 'Full campaign photography with styling, production help, and premium post work.',
        features: ['Pre-production and shot list', 'Multiple setup changes', 'High-end retouching', 'Campaign-ready delivery'],
      },
    ],
  },
};

export const pricingServices: PricingService[] = services.map((service) => {
  const blueprint = pricingBlueprint[service.title];

  return {
    ...service,
    slug: slugify(service.title),
    pricingIntro: blueprint.pricingIntro,
    pricingNote: blueprint.pricingNote,
    tiers: blueprint.tiers,
  };
});
