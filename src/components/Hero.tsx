import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../content/data';
import { FileText, Mail, ArrowRight, ShieldCheck, TrendingUp, Award, Building } from 'lucide-react';
import { LinkedInIcon } from './Icons';

export const Hero: React.FC = () => {
  // Typing animation cycling roles
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PERSONAL_INFO.rolesCycling;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        const nextText = currentRole.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
        if (nextText === currentRole) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting characters
        const nextText = currentRole.substring(0, displayedText.length - 1);
        setDisplayedText(nextText);
        if (nextText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden"
      aria-label="Introduction and Overview"
    >
      {/* Decorative ambient lighting glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 dark:bg-gold-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-navy-600/10 dark:bg-navy-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Information (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Top Institutional Badge */}
            <div className="inline-flex items-center space-x-2 self-start px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-300 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Equity Research & Investment Banking Roles</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-950 dark:text-slate-50 leading-[1.15]">
                {PERSONAL_INFO.name}
              </h1>
              
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-navy-900/10 dark:bg-navy-800 text-navy-700 dark:text-gold-400 border border-navy-700/30 dark:border-navy-700 font-mono">
                  PwC Industry Program
                </span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Chandigarh University
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200 pt-1">
                {PERSONAL_INFO.tagline}
              </h2>
            </div>

            {/* Dynamic Typing Animated Ribbon */}
            <div className="flex items-center space-x-2 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-mono py-1">
              <span className="text-gold-600 dark:text-gold-400 font-semibold">Specializing in:</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-gold-500 dark:text-gold-300 font-semibold min-h-[36px]">
                {displayedText}
                <span className="w-1.5 h-4 ml-1 bg-gold-400 animate-pulse" />
              </span>
            </div>

            {/* 10-Second Elevator Pitch */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Equipped with rigorous practical training in fundamental analysis, equity research, 
              and capital market analytics through live projects and internships at Nirmal Bang and Reliance Retail. 
              Proficient in MS Excel, Power BI, and quantitative financial modeling.
            </p>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary: Download Resume */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Resume-Saurabh-Gautam.pdf"
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-xl font-semibold text-sm text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-lg shadow-gold-500/25 hover:shadow-glow-gold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-navy-950" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Secondary: Contact Me */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-900 border border-slate-300 dark:border-navy-700 hover:border-gold-500 hover:text-gold-500 dark:hover:text-gold-400 shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              {/* Tertiary: LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-navy-900/60 border border-slate-200 dark:border-navy-800 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 transition-all duration-200"
                aria-label="View Saurabh Gautam's LinkedIn profile"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>

            {/* Quick Fact Highlights Pill Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200 dark:border-navy-800/80">
              <div className="flex flex-col p-2.5 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200/80 dark:border-navy-800">
                <span className="font-mono text-lg font-bold text-navy-950 dark:text-gold-400">7.76 / 10</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">MBA CGPA</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200/80 dark:border-navy-800">
                <span className="font-mono text-lg font-bold text-navy-950 dark:text-gold-400">PwC</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Program Partner</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200/80 dark:border-navy-800">
                <span className="font-mono text-lg font-bold text-navy-950 dark:text-gold-400">2 Internships</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">Nirmal Bang & Retail</span>
              </div>
              <div className="flex flex-col p-2.5 rounded-lg bg-slate-50 dark:bg-navy-900/50 border border-slate-200/80 dark:border-navy-800">
                <span className="font-mono text-lg font-bold text-navy-950 dark:text-gold-400">4 Badges</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 uppercase tracking-wider">IIM-B, Zerodha, CISCO</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Fintech Card & Photo Avatar (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-gold-500/40 via-emerald-500/20 to-navy-600/40 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition duration-500" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-navy-900/95 border border-slate-200 dark:border-navy-700/80 p-5 shadow-2xl glass-card">
                
                {/* Header Strip with Terminal / Fin-Docket aesthetic */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-navy-800 text-xs">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="font-mono text-[11px] text-slate-500 dark:text-slate-400 pl-2">
                      ANALYST_PROFILE.v26
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold-500 font-semibold bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20">
                    VERIFIED CANDIDATE
                  </span>
                </div>

                {/* Profile Image / High-End Avatar Frame */}
                <div className="relative w-full aspect-square max-h-[320px] rounded-xl overflow-hidden bg-gradient-to-b from-navy-850 to-navy-950 border border-slate-200 dark:border-navy-700 shadow-inner group">
                  <img
                    src={PERSONAL_INFO.profilePhoto}
                    alt={`${PERSONAL_INFO.name} - MBA Applied Finance Student`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to avatar vector if any image issue occurs
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith('profile-avatar.svg')) {
                        target.src = '/assets/profile-avatar.svg';
                      }
                    }}
                  />
                  
                  {/* Subtle gradient overlay at bottom of picture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Financial Crest Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="px-2.5 py-1 rounded-md bg-navy-950/85 backdrop-blur-md border border-gold-500/40 text-[11px] font-mono text-gold-300 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                      <span>Equity Research & IB</span>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-navy-950/85 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>CGPA 7.76</span>
                    </div>
                  </div>
                </div>

                {/* Card Sub-Panel: Institutional Verification Data */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-navy-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <Building className="w-3.5 h-3.5 text-gold-500" />
                      University:
                    </span>
                    <span className="font-medium text-navy-900 dark:text-slate-100">Chandigarh University</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                      <Award className="w-3.5 h-3.5 text-emerald-500" />
                      Industry Partner:
                    </span>
                    <span className="font-semibold text-gold-600 dark:text-gold-400">PwC (Applied Finance)</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                    <span className="text-slate-500 dark:text-slate-400">Leadership:</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      Elected Class Representative
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
