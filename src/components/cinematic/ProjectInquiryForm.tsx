import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';

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

interface ProjectInquiryFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
  className?: string;
}

export const ProjectInquiryForm: React.FC<ProjectInquiryFormProps> = ({ 
  onSubmit,
  className = '' 
}) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default behavior - simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      
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
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center py-12 ${className}`}
      >
        <CheckCircle2 className="w-20 h-20 text-[#d4af37] mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-slate-300 text-lg">
          We've received your project inquiry. Our team will review it and get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
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
  );
};
