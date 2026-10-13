import React from 'react';
import { PERSONAL_INFO, QUICK_FACTS } from '../content/data';
import {
  GraduationCap,
  MapPin,
  Award,
  TrendingUp,
  FileSpreadsheet,
  Users,
  Target,
  Briefcase,
  Compass,
} from 'lucide-react';

// Icon mapper for quick facts
const getFactIcon = (iconName: string) => {
  switch (iconName) {
    case 'GraduationCap':
      return <GraduationCap className="w-5 h-5 text-gold-500" />;
    case 'MapPin':
      return <MapPin className="w-5 h-5 text-gold-500" />;
    case 'Award':
      return <Award className="w-5 h-5 text-emerald-500" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-emerald-500" />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className="w-5 h-5 text-gold-500" />;
    case 'Users':
      return <Users className="w-5 h-5 text-emerald-500" />;
    default:
      return <Target className="w-5 h-5 text-gold-500" />;
  }
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-navy-900/40 relative border-t border-slate-200/80 dark:border-navy-800/80"
      aria-label="About Saurabh Gautam"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Profile & Trajectory</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            About Me & Career Objective
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Career Objective & Focus (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 shadow-md">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 dark:text-slate-100">
                    Career Objective
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-gold-400/80 uppercase">
                    Institutional Mandate
                  </span>
                </div>
              </div>

              {/* Exact Provided Objective Quote */}
              <blockquote className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-serif italic border-l-4 border-gold-500 pl-4 py-1 mb-6">
                "{PERSONAL_INFO.bioObjective}"
              </blockquote>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                My academic training under the PwC partnership program at Chandigarh University, combined with 
                on-ground research at Nirmal Bang and retail workflow analysis at Reliance Retail, has anchored 
                my discipline in quantitative financial modeling, equity valuation techniques, and investor sentiment dynamics.
              </p>
            </div>

            {/* Target Divisions / What I Bring */}
            <div className="p-7 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 shadow-md">
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-950 dark:text-slate-100">
                    Open To Roles
                  </h3>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">
                    Target Functional Verticals
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {PERSONAL_INFO.openToRoles.map((role, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-slate-200 hover:border-gold-500/50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{role}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Facts Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 shadow-lg">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200 dark:border-navy-800">
                <div className="flex items-center space-x-2.5">
                  <span className="font-serif text-xl font-bold text-navy-950 dark:text-slate-100">
                    Quick Facts
                  </span>
                </div>
                <span className="text-[11px] font-mono font-semibold text-gold-500 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/20 uppercase tracking-wider">
                  VERIFIED DATA
                </span>
              </div>

              <div className="space-y-4">
                {QUICK_FACTS.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/60 dark:border-navy-800/80 hover:border-gold-500/40 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 flex-shrink-0">
                      {getFactIcon(fact.iconName)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {fact.label}
                      </span>
                      <span className="text-sm font-semibold text-navy-950 dark:text-slate-100 mt-0.5">
                        {fact.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Recruiter Assurance Badge */}
              <div className="mt-6 p-4 rounded-xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-600 dark:text-slate-300 flex items-center gap-3">
                <span className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span>
                  Immediate availability for internship or full-time associate placement with pan-India / hybrid relocation flexibility.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
