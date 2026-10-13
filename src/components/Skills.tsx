import React, { useState } from 'react';
import { SKILLS_DATA } from '../content/data';
import type { SkillItem } from '../content/data';
import {
  Wrench,
  Sheet,
  BarChart3,
  Landmark,
  Layers,
  Calculator,
  TrendingUp,
  Users2,
  Compass,
  Crown,
  CheckCircle2,
} from 'lucide-react';

const getSkillIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sheet':
      return <Sheet className="w-5 h-5 text-emerald-500" />;
    case 'BarChart3':
      return <BarChart3 className="w-5 h-5 text-gold-500" />;
    case 'Landmark':
      return <Landmark className="w-5 h-5 text-gold-500" />;
    case 'Layers':
      return <Layers className="w-5 h-5 text-sky-500" />;
    case 'Calculator':
      return <Calculator className="w-5 h-5 text-emerald-500" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-gold-500" />;
    case 'Users2':
      return <Users2 className="w-5 h-5 text-emerald-500" />;
    case 'Compass':
      return <Compass className="w-5 h-5 text-sky-500" />;
    case 'Crown':
      return <Crown className="w-5 h-5 text-gold-500" />;
    default:
      return <Wrench className="w-5 h-5 text-gold-500" />;
  }
};

const getLevelBadgeClass = (level: SkillItem['level']) => {
  switch (level) {
    case 'Proficient':
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
    case 'Working Knowledge':
      return 'bg-gold-500/10 text-gold-600 dark:text-gold-400 border-gold-500/30';
    case 'Advanced Competency':
      return 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30';
    default:
      return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Technical' | 'Interpersonal'>('All');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeTab === 'All') return true;
    return skill.category === activeTab;
  });

  return (
    <section
      id="skills"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-navy-900/40 relative border-t border-slate-200/80 dark:border-navy-800/80"
      aria-label="Core Skills and Competencies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>Applied Competencies</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Skills & Analytical Frameworks
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Practical proficiencies evaluated by real-world capability levels rather than artificial percentage metrics.
          </p>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-white dark:bg-navy-950 border border-slate-200 dark:border-navy-800 mt-4 shadow-sm">
            {(['All', 'Technical', 'Interpersonal'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-navy-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-navy-950 dark:hover:text-slate-200'
                }`}
              >
                {tab === 'All' ? 'All Skills' : `${tab} Skills`}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 shadow-md hover:shadow-xl hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-navy-950 border border-slate-200 dark:border-navy-800 shadow-inner">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${getLevelBadgeClass(
                      skill.level
                    )}`}
                  >
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {skill.level}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="font-serif text-lg font-bold text-navy-950 dark:text-slate-100 mb-1">
                  {skill.name}
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 block">
                  {skill.category} Competency
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Functional Indicator Bar (Level representation without fake percentages) */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-navy-800/80">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Proficiency Tier:</span>
                  <span className="text-gold-500 font-semibold">{skill.level}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 dark:bg-navy-950 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      skill.level === 'Proficient' || skill.level === 'Advanced Competency'
                        ? 'bg-gradient-to-r from-emerald-500 to-gold-400 w-full'
                        : 'bg-gradient-to-r from-gold-500 to-amber-400 w-3/4'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
