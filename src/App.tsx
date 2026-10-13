import React from 'react';
import { CandlestickBackground } from './components/CandlestickBackground';
import { Navbar } from './components/Navbar';
import { MarketTicker } from './components/MarketTicker';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { MarketInsights } from './components/MarketInsights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-slate-100 relative selection:bg-gold-500/20 selection:text-gold-400 font-sans transition-colors duration-300">
      {/* Decorative Candlestick Background Texture */}
      <CandlestickBackground />

      {/* Sticky Institutional Navbar */}
      <Navbar />

      {/* Market Ticker Strip (clearly marked sample data) */}
      <MarketTicker />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About & Career Objective */}
        <About />

        {/* 3. Education Timeline */}
        <Education />

        {/* 4. Experience & Internships */}
        <Experience />

        {/* 5. Projects & Case Studies */}
        <Projects />

        {/* 6. Skills & Analytical Frameworks */}
        <Skills />

        {/* 7. Certifications */}
        <Certifications />

        {/* 8. Leadership & Campus Governance */}
        <Leadership />

        {/* 9. Interactive Market Insights & Financial Calculators */}
        <MarketInsights />

        {/* 10. Contact & Recruiter Outreach */}
        <Contact />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
};

export default App;
