import React, { useState, useEffect } from 'react';
import { Separator } from '../ui/separator';

const navLinks = [
  { label: 'Delivery', href: '#delivery' },
  { label: 'Lifecycle', href: '#enhancement' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Governance', href: '#governance' },
  { label: 'Team', href: '#team' },
  { label: 'Cost', href: '#cost' },
  { label: 'Partners', href: '#partnerships' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(l => l.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-white'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2" aria-label="Emergent home">
            <div className="w-7 h-7 rounded-md bg-sky-500 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold font-mono">CX</span>
            </div>
            <span className="text-lg font-bold text-slate-900 tracking-tight font-sans">
              CompassX <span className="font-normal text-slate-500">AI</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-[12px] font-medium tracking-wide uppercase font-mono ${
                  activeSection === link.href.slice(1)
                    ? 'text-sky-500'
                    : 'text-slate-500 hover:text-sky-500'
                }`}
                style={{ transition: 'color 0.2s ease' }}
                data-testid={`nav-link-${link.href.slice(1)}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Separator className="opacity-60" />
    </nav>
  );
};
