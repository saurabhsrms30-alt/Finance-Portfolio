import React from 'react';
import { CERTIFICATIONS_DATA } from '../content/data';
import { Award, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      className="py-16 md:py-24 relative overflow-hidden"
      aria-label="Professional Certifications"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Accreditations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Accredited credentials from premier management institutes, capital market authorities, and global technology organizations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <div
              key={index}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 shadow-md hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Issuer and Year */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-navy-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-500 font-bold text-xs font-mono">
                      {cert.issuer.substring(0, 3).toUpperCase()}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-navy-950 dark:text-slate-200 block">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-navy-950 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800">
                    <Calendar className="w-3 h-3 mr-1 text-gold-500" />
                    {cert.year}
                  </span>
                </div>

                {/* Certificate Title */}
                <h3 className="font-serif text-xl font-bold text-navy-950 dark:text-slate-100 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors mb-3">
                  {cert.title}
                </h3>

                {/* Skills/Modules Taught */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Core Curriculum:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {cert.skillsTaught.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Credential
                </span>

                {cert.credentialUrl && cert.credentialUrl !== '#' && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold-500 hover:underline"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
