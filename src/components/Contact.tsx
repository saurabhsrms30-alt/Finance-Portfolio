import React, { useState } from 'react';
import { PERSONAL_INFO } from '../content/data';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { LinkedInIcon } from './Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleInterest: 'Equity Research Analyst',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If Formspree endpoint is configured via env, use it:
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (formspreeEndpoint) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setIsSuccess(true);
          confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
        }
      } catch (err) {
        console.error('Submission error', err);
      }
    } else {
      // Direct graceful client fallback
      setTimeout(() => {
        setIsSuccess(true);
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });

        // Trigger mailto so recruiter's message is preserved
        const subject = encodeURIComponent(`Inquiry from ${formData.name} regarding ${formData.roleInterest}`);
        const body = encodeURIComponent(
          `Hi Saurabh,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
        );
        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      }, 600);
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-navy-900/40 relative border-t border-slate-200/80 dark:border-navy-800/80"
      aria-label="Contact Saurabh Gautam"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect & Engage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Currently interviewing for Equity Research, Investment Banking, and Financial Analyst roles. 
            Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick 30-Second Recruiter Pitch Card */}
            <div className="p-7 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 shadow-md">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-gold-500 block mb-2">
                Fast Contact Channels
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-950 dark:text-slate-100 mb-4">
                Let's discuss opportunities.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I am actively seeking full-time and internship openings across institutional equity research, 
                investment banking divisions, and wealth advisory.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Email with copy button */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-gold-500/10 text-gold-500 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Institutional Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-navy-950 dark:text-slate-100 hover:text-gold-500 dark:hover:text-gold-400 truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="p-2 rounded-lg text-slate-400 hover:text-gold-500 hover:bg-white dark:hover:bg-navy-900 transition-colors"
                    title="Copy Email"
                    aria-label="Copy Email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 flex-shrink-0 mr-3">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-xs sm:text-sm font-semibold text-navy-950 dark:text-slate-100 hover:text-emerald-500 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-500 flex-shrink-0 mr-3">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Location
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-navy-950 dark:text-slate-100">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] flex-shrink-0">
                      <LinkedInIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Professional Network
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-navy-950 dark:text-slate-100">
                        linkedin.com/in/saurabh-gautam-516141295
                      </span>
                    </div>
                  </div>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-lg text-xs font-semibold text-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 transition-colors"
                  >
                    Connect
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 shadow-xl">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-navy-800">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 dark:text-slate-100">
                    Send Direct Inquiry
                  </h3>
                  <span className="text-xs font-mono text-slate-400">
                    Response turnaround typically within 24 hours
                  </span>
                </div>
                <span className="p-2 rounded-xl bg-gold-500/10 text-gold-500">
                  <Sparkles className="w-5 h-5" />
                </span>
              </div>

              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-navy-950 dark:text-slate-100">
                    Thank You! Message Dispatched.
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your inquiry has been formulated. I look forward to connecting regarding opportunities.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        roleInterest: 'Equity Research Analyst',
                        message: '',
                      });
                    }}
                    type="button"
                    className="mt-3 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aditi Sharma / Recruiter"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-navy-950 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/60"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        Your Work / Contact Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="aditi@firm.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-navy-950 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/60"
                      />
                    </div>

                  </div>

                  {/* Target Role Dropdown */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Role / Department Discussed
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-navy-950 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-gold-500/60"
                    >
                      <option value="Equity Research Analyst">Equity Research Analyst</option>
                      <option value="Investment Banking Analyst">Investment Banking Analyst / Trainee</option>
                      <option value="Wealth Management">Wealth Management Specialist</option>
                      <option value="Financial Analyst">Corporate Financial Analyst</option>
                      <option value="General Conversation">General Networking / Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Message / Opening Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Saurabh, we are reviewing candidates for our Equity Research / Investment Banking team..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-300 dark:border-navy-700 text-sm text-navy-950 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-500/60"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl font-semibold text-sm text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-md shadow-gold-500/25 hover:shadow-glow-gold transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 text-navy-950" />
                    <span>{isSubmitting ? 'Dispatching...' : 'Send Message to Saurabh'}</span>
                  </button>

                  <p className="text-[11px] font-mono text-slate-400 text-center pt-1">
                    Direct integration configured with mailto client fallback and Formspree support.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
