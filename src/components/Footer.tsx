import React from 'react';
import { PERSONAL_INFO } from '../content/data';
import { ArrowUp, Mail, Phone, Shield } from 'lucide-react';
import { LinkedInIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full bg-white dark:bg-[#060F1C] border-t border-slate-200 dark:border-navy-800/80 py-12 transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-navy-800">
          
          {/* Brand & Monogram */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/40 flex items-center justify-center shadow-md">
              <span className="font-serif font-bold text-gold-400 text-base">
                {PERSONAL_INFO.monogram}
              </span>
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-navy-950 dark:text-slate-100 block">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-gold-400/90">
                MBA Applied Finance (PwC Program) · Chandigarh University
              </span>
            </div>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center space-x-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 border border-slate-200 dark:border-navy-800 transition-colors"
              title="Email Saurabh"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:text-emerald-500 border border-slate-200 dark:border-navy-800 transition-colors"
              title="Call Saurabh"
              aria-label="Phone call"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] border border-slate-200 dark:border-navy-800 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-xl bg-gold-500/10 text-gold-500 hover:bg-gold-500/20 border border-gold-500/30 transition-all flex items-center gap-1.5 text-xs font-semibold"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits & Institutional Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-400 space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-1.5">
            <Shield className="w-3.5 h-3.5 text-gold-500" />
            <span>
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All institutional rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-emerald-500 font-semibold">
              Ready for Equity Research & IB Opportunities
            </span>
            <span className="text-slate-500">|</span>
            <span>Unnao / Lucknow, UP</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
