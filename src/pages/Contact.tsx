import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Clock,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import { CinematicButton } from '../components/cinematic/CinematicButton';
import { SectionTitle } from '../components/cinematic/SectionTitle';
import { SplitHeroSection } from '../components/cinematic/SplitHeroSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// ============================================
// TYPES
// ============================================

interface FormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  [key: string]: string;
}

// ============================================
// REUSABLE COMPONENTS
// ============================================

// Contact Card Component
const ContactCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  details: string[];
  action?: { label: string; href: string };
}> = ({ icon, title, details, action }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="glass p-8 rounded-2xl text-center hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="text-slate-300 text-sm">{detail}</p>
        ))}
      </div>
      {action && (
        <a 
          href={action.href}
          className="inline-block mt-4 text-[#d4af37] text-sm font-semibold hover:text-[#c29b24] transition-colors"
        >
          {action.label} →
        </a>
      )}
    </motion.div>
  );
};

// FAQ Accordion Item Component
const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ 
  question, 
  answer, 
  index 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-slate-300 leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

// Process Step Component
const ProcessStep: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
  index: number 
}> = ({ number, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#c29b24] flex items-center justify-center">
          <span className="text-xl font-bold text-[#050505]">{number}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// MAIN CONTACT PAGE COMPONENT
// ============================================

const Contact: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.description.trim()) newErrors.description = 'Project description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          description: '',
          budget: '',
          timeline: ''
        });
      }, 3000);
    }, 2000);
  };

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      
      {/* Navbar */}
      <Navbar />
      
      {/* ============================================
          1. CONTACT HERO SECTION
      ============================================ */}
      <SplitHeroSection
        // eyebrow="Let's Connect"
        title={<>Let's Create Something <br /><span className="text-gradient">Extraordinary Together</span></>}
        description={""}
        // badge={{ value: 'No. 1', label: 'Top Creative Studio' }}
        // scrollLabel="Get in Touch"
      />

        {/* ============================================
          2. QUICK CONTACT OPTIONS
        ============================================ */}
        <section className="py-10 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle 
            subtitle="Get in Touch"
            title="Contact Information"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <ContactCard 
              icon={<Phone className="w-8 h-8 text-[#050505]" />}
              title="Phone & WhatsApp"
              details={[
                '+251 91 123 4567',
                '+251 11 234 5678',
                'Available 9 AM - 6 PM EAT'
              ]}
              action={{ label: 'Call Now', href: 'tel:+251911234567' }}
            />

            <ContactCard 
              icon={<Mail className="w-8 h-8 text-[#050505]" />}
              title="Email Us"
              details={[
                'info@kurafilms.com',
                'partnerships@kurafilms.com',
                'Response within 24 hours'
              ]}
              action={{ label: 'Send Email', href: 'mailto:info@kurafilms.com' }}
            />

            <ContactCard 
              icon={<MapPin className="w-8 h-8 text-[#050505]" />}
              title="Visit Our Studio"
              details={[
                'Bole Road, Atlas Building',
                'Floor 5, Addis Ababa',
                'Ethiopia'
              ]}
              action={{ label: 'Get Directions', href: '#map' }}
            />
          </div>
        </div>
      </section>

        {/* ============================================
          3. PROJECT INQUIRY FORM
        ============================================ */}
        <section className="py-10 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            subtitle="Start Your Project"
            title="Project Brief"
            align="center"
            className="mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12 rounded-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle2 className="w-20 h-20 text-[#d4af37] mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-slate-300 text-lg">
                  We've received your project inquiry. Our team will review it and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name & Company */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-slate-300 mb-2">
                      Full Name <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.fullName ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                      Email Address <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                      Phone Number <span className="text-[#d4af37]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all`}
                      placeholder="+251 91 123 4567"
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-slate-300 mb-2">
                    Project Type <span className="text-[#d4af37]">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.projectType ? 'border-red-500' : 'border-white/10'} rounded-lg text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all`}
                  >
                    <option value="" className="bg-[#1a1a1a]">Select Project Type</option>
                    <option value="feature-film" className="bg-[#1a1a1a]">Feature Film</option>
                    <option value="documentary" className="bg-[#1a1a1a]">Documentary</option>
                    <option value="commercial" className="bg-[#1a1a1a]">Commercial / Advertisement</option>
                    <option value="music-video" className="bg-[#1a1a1a]">Music Video</option>
                    <option value="corporate" className="bg-[#1a1a1a]">Corporate Video</option>
                    <option value="event" className="bg-[#1a1a1a]">Event Coverage</option>
                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                  </select>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-slate-300 mb-2">
                    Project Description / Brief <span className="text-[#d4af37]">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white/5 border ${errors.description ? 'border-red-500' : 'border-white/10'} rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all resize-none`}
                    placeholder="Tell us about your project vision, goals, and any specific requirements..."
                  />
                  {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-slate-300 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select Budget Range</option>
                      <option value="under-10k" className="bg-[#1a1a1a]">Under $10,000</option>
                      <option value="10k-25k" className="bg-[#1a1a1a]">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-[#1a1a1a]">$25,000 - $50,000</option>
                      <option value="50k-100k" className="bg-[#1a1a1a]">$50,000 - $100,000</option>
                      <option value="100k-plus" className="bg-[#1a1a1a]">$100,000+</option>
                      <option value="flexible" className="bg-[#1a1a1a]">Flexible / To Discuss</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-300 mb-2">
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select Timeline</option>
                      <option value="urgent" className="bg-[#1a1a1a]">Urgent (Within 1 month)</option>
                      <option value="1-3-months" className="bg-[#1a1a1a]">1-3 Months</option>
                      <option value="3-6-months" className="bg-[#1a1a1a]">3-6 Months</option>
                      <option value="6-plus-months" className="bg-[#1a1a1a]">6+ Months</option>
                      <option value="flexible" className="bg-[#1a1a1a]">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#d4af37] text-[#050505] py-4 rounded-full font-bold text-lg uppercase tracking-wider hover:bg-[#c29b24] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-[#050505] border-t-transparent rounded-full"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Project Inquiry
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-center text-slate-500 text-sm mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

        {/* ============================================
          4. HOW WE WORK SECTION
        ============================================ */}
        <section className="py-10 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            subtitle="Our Process"
            title="Our Creative Journey"
            align="center"
            className="mb-16"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="1"
              title="First Contact"
              description="Share your vision with us. We'll schedule a consultation to understand your goals and requirements."
              index={0}
            />
            <ProcessStep 
              number="2"
              title="Concept Development"
              description="Our creative team develops a tailored concept, treatment, and production plan aligned with your vision."
              index={1}
            />
            <ProcessStep 
              number="3"
              title="Production & Collaboration"
              description="We bring your story to life with world-class cinematography, direction, and production excellence."
              index={2}
            />
            <ProcessStep 
              number="4"
              title="Delivery & Impact"
              description="Final delivery of your cinematic masterpiece, optimized for your distribution channels and audience."
              index={3}
            />
          </div>
        </div>
      </section>

        {/* ============================================
          5. FAQ SECTION
        ============================================ */}
        <section className="py-10 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            align="center"
            className="mb-12"
          />

          <div className="space-y-4">
            <FAQItem 
              question="What is your typical project timeline?"
              answer="Project timelines vary based on scope and complexity. A commercial or music video typically takes 2-4 weeks from concept to delivery. Documentaries range from 1-3 months, while feature films can take 3-12 months. We'll provide a detailed timeline during our initial consultation based on your specific needs."
              index={0}
            />
            <FAQItem 
              question="How is project pricing determined?"
              answer="Pricing depends on several factors: project type, duration, crew size, equipment needs, locations, post-production complexity, and deliverables. We offer transparent, itemized quotes after understanding your requirements. Our goal is to deliver maximum value within your budget while maintaining our premium quality standards."
              index={1}
            />
            <FAQItem 
              question="Do you work on international projects?"
              answer="Absolutely! We've produced content across 12+ African countries and collaborate with international partners regularly. We handle all logistics, permits, and local coordination. Our team is experienced in cross-border productions and can work with international crews and standards."
              index={2}
            />
            <FAQItem 
              question="What equipment and technology do you use?"
              answer="We use industry-leading cinema cameras (RED, ARRI, Sony Venice), professional lighting packages, stabilization systems, and drones. Our post-production suite includes DaVinci Resolve, Adobe Creative Suite, and professional color grading facilities. We continuously invest in the latest technology to ensure world-class production quality."
              index={3}
            />
            <FAQItem 
              question="Can you help with concept development and scriptwriting?"
              answer="Yes! Our creative team includes experienced writers, directors, and creative directors who can develop concepts from scratch or refine your existing ideas. We offer full pre-production services including scriptwriting, storyboarding, location scouting, and creative direction."
              index={4}
            />
            <FAQItem 
              question="What rights do I have to the final content?"
              answer="Upon full payment, clients receive full usage rights for the agreed-upon deliverables and distribution channels. We can structure licensing agreements based on your needs (exclusive, non-exclusive, territorial, duration). All terms are clearly outlined in our production agreement before work begins."
              index={5}
            />
          </div>
        </div>
      </section>

        {/* ============================================
          6. OFFICE LOCATION SECTION
        ============================================ */}
        <section id="map" className="py-10 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            subtitle="Visit Us"
            title="Our Studio"
            align="center"
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-square rounded-2xl overflow-hidden glass"
            >
              <div 
                className="w-full h-full bg-cover bg-center relative"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2070)',
                }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                    <p className="text-white font-semibold">Interactive Map</p>
                    <p className="text-slate-400 text-sm">Click to open in Google Maps</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Kura Films Production Studio</h3>
                <div className="space-y-3 text-slate-300">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                    <span>Bole Road, Atlas Building, Floor 5<br />Addis Ababa, Ethiopia</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                    <span>Monday - Friday: 9:00 AM - 6:00 PM EAT<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                    <span>+251 91 123 4567</span>
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-3">Visiting Our Studio</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  We welcome clients to visit our production facilities. Please schedule an appointment 
                  in advance to ensure our team is available to give you a proper tour and discuss your project.
                </p>
                <CinematicButton variant="outline" size="sm">
                  Schedule a Visit
                </CinematicButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          7. SOCIAL MEDIA & CONNECT SECTION
      ============================================
      <section className="py-10 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            subtitle="Stay Connected"
            title="Follow Our Journey"
            align="center"
            className="mb-12"
          />

          <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
            Follow us on social media to see our latest projects, behind-the-scenes content, 
            and insights into African cinematic storytelling.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { icon: MessageCircle, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
              { icon: MessageCircle, label: 'YouTube', href: '#', color: 'hover:text-red-500' },
              { icon: MessageCircle, label: 'LinkedIn', href: '#', color: 'hover:text-blue-500' },
              { icon: MessageCircle, label: 'X (Twitter)', href: '#', color: 'hover:text-sky-400' },
              { icon: MessageCircle, label: 'TikTok', href: '#', color: 'hover:text-white' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group ${social.color}`}
              >
                <social.icon className="w-8 h-8 text-[#d4af37] group-hover:text-current transition-colors" />
                <p className="text-white text-sm mt-3 font-semibold">{social.label}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ============================================
          9. FOOTER
      ============================================ */}
      <Footer />
    </div>
  );
};

export default Contact;
