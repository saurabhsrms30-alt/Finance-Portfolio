import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../content/data';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Market Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollspy detection
      const sections = ['hero', ...NAV_ITEMS.map((item) => item.href.substring(1))];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-navy-950/90 shadow-lg shadow-navy-950/10 border-b border-slate-200/80 dark:border-navy-800/80 glass-nav'
          : 'bg-white/70 dark:bg-navy-950/70 border-b border-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="Saurabh Gautam - Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border border-gold-500/40 flex items-center justify-center shadow-md group-hover:border-gold-400 group-hover:shadow-glow-gold transition-all duration-300">
              <span className="font-serif font-bold text-gold-400 text-base tracking-wider">
                {PERSONAL_INFO.monogram}
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-navy-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg text-navy-900 dark:text-slate-100 tracking-tight group-hover:text-gold-500 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-sans font-medium text-slate-500 dark:text-gold-400/90 tracking-wide uppercase">
                Applied Finance · PwC Program
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 relative ${
                    isActive
                      ? 'text-gold-500 dark:text-gold-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-gold-300 hover:bg-slate-100/50 dark:hover:bg-navy-900/50'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action buttons (Theme Toggle, Resume & Contact) */}
          <div className="hidden sm:flex items-center space-x-3">
            <ThemeToggle />

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Resume-Saurabh-Gautam.pdf"
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-navy-900 border border-slate-300 dark:border-navy-700 hover:border-gold-500/60 dark:hover:border-gold-500/60 hover:text-gold-500 dark:hover:text-gold-400 transition-all duration-200 shadow-sm"
              title="Download Saurabh Gautam's Resume PDF"
            >
              <FileText className="w-3.5 h-3.5 text-gold-500" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-md shadow-gold-500/20 hover:shadow-glow-gold transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-400 bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-navy-800 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-b border-slate-200 dark:border-navy-800 bg-white/95 dark:bg-navy-950/95 glass-nav px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gold-500/10 text-gold-500 dark:text-gold-400 font-semibold border-l-4 border-gold-500'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-900'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-200 dark:border-navy-800 flex flex-col gap-2.5">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Resume-Saurabh-Gautam.pdf"
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-navy-900 border border-slate-300 dark:border-navy-700"
            >
              <FileText className="w-4 h-4 text-gold-500" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-md"
            >
              <span>Contact Saurabh Gautam</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
