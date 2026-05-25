import { Film, Video, Megaphone, Music, Briefcase, Image as ImageIcon } from 'lucide-react';

export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  detailDescription: string;
  deliverables: string[];
  highlights: string[];
  image: string;
}

export const services: Service[] = [
  {
    icon: Film,
    title: 'Feature Films & Series',
    description: 'Epic storytelling with world-class production value. From concept to screen, we bring your cinematic vision to life with authentic African narratives.',
    detailDescription: 'We develop feature films and episodic series from the earliest concept stage through delivery. That includes story development, script refinement, casting, visual planning, production design, on-set direction, editorial shaping, color grading, and final mastering for theatrical, festival, broadcast, or streaming release. The goal is to build emotionally resonant stories that look premium and travel well across audiences.',
    deliverables: ['Full Production Management', 'Casting & Direction', 'Location Scouting', 'Post-Production'],
    highlights: ['Script-to-screen production workflow', 'Cinematic visual language', 'Festival and platform-ready delivery'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059'
  },
  {
    icon: Video,
    title: 'Documentary & Impact',
    description: 'Powerful documentary filmmaking that drives social change and cultural preservation. We tell real stories that matter.',
    detailDescription: 'Our documentary work focuses on clarity, honesty, and emotional impact. We handle research, subject development, interview planning, shooting schedules, archival sourcing, field production, and post-production to create films that inform and move people. Whether the goal is cultural preservation, brand trust, nonprofit advocacy, or issue awareness, we shape stories that feel grounded and credible.',
    deliverables: ['Research & Development', 'Field Production', 'Interviews & B-Roll', 'Festival Distribution'],
    highlights: ['Research-first storytelling', 'Interview-led narrative construction', 'Strong distribution and festival positioning'],
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070'
  },
  {
    icon: Megaphone,
    title: 'Commercial & Advertising',
    description: 'High-impact brand films and commercials that captivate audiences and drive results. Premium quality for premium brands.',
    detailDescription: 'We create commercials and brand films that combine strong ideas with sharp execution. From concept development and mood boards to casting, shoot production, motion graphics, and final edits, every decision is shaped around the campaign objective. The result is content designed to elevate brand perception, launch products, and convert attention into action.',
    deliverables: ['Creative Concept', 'Storyboarding', 'Production', 'Multi-Platform Delivery'],
    highlights: ['Campaign-first creative strategy', 'Broadcast, social, and digital cutdowns', 'Premium visual polish'],
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071'
  },
  {
    icon: Music,
    title: 'Music Videos',
    description: 'Visually stunning music videos that amplify your artistry. From intimate performances to large-scale productions.',
    detailDescription: 'Music videos are where style and rhythm meet. We work with artists to shape a visual concept that fits the song, the persona, and the audience. That can include choreography, performance direction, stylized locations, performance edits, and bold color treatment. Each video is built to feel memorable, replayable, and aligned with the artist’s identity.',
    deliverables: ['Creative Direction', 'Choreography Support', 'Multi-Camera Setup', 'Color Grading'],
    highlights: ['Artist-led creative direction', 'Performance and narrative blending', 'High-energy visual pacing'],
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070'
  },
  {
    icon: Briefcase,
    title: 'Corporate & Brand Films',
    description: 'Professional corporate videos that elevate your brand story. Perfect for internal communications, training, and brand positioning.',
    detailDescription: 'Corporate and brand films are built to communicate trust, clarity, and value. We produce company profiles, internal communication pieces, recruitment films, brand stories, leadership messages, and training content. Every piece is tailored to your tone, audience, and business goals while keeping the visuals polished and professional.',
    deliverables: ['Script Development', 'Professional Crew', 'Studio or On-Location', 'Quick Turnaround'],
    highlights: ['Business-focused messaging', 'Flexible production setup', 'Fast turnaround for campaigns and internal use'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070'
  },
  {
    icon: ImageIcon,
    title: 'Photography & Stills',
    description: 'Professional photography services for campaigns, portraits, events, and editorial content with cinematic aesthetics.',
    detailDescription: 'Our photography work supports campaigns, portraits, product launches, events, and editorial storytelling. We focus on composition, lighting, and post-processing to create still images that feel cinematic, clean, and useful across web, print, and social platforms. Each session is planned to reflect the subject’s character and the brand’s visual tone.',
    deliverables: ['Campaign Photography', 'Portrait Sessions', 'Event Coverage', 'Retouching'],
    highlights: ['Cinematic stills with strong lighting', 'Brand and editorial friendly output', 'Retouching for polished final assets'],
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2074'
  }
];
