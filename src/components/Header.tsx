import React, { useState, useEffect } from 'react';
import { FirmLogo } from './FirmLogo';
import { NAV_LINKS } from '../data/firmData';
import { PHONE_CONFIG, WHATSAPP_CONFIG } from '../data/contactData';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

interface HeaderProps {
  onNavigate: (href: string) => void;
  onOpenConsultation?: () => void;
  activePath?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  activePath = '/',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    onNavigate(href);
  };

  const handleConsultationClick = () => {
    setIsMobileMenuOpen(false);
    onNavigate('/contact');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071A2B]/95 backdrop-blur-md shadow-xl border-b border-white/10 h-[72px] sm:h-[80px]'
          : 'bg-[#071A2B]/90 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none border-b border-white/10 h-[72px] sm:h-[80px]'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="focus:outline-none"
          aria-label="Veritas Law Group Home"
        >
          <FirmLogo variant="light" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activePath;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white border-b-2 border-[#C99A4A] pb-1 font-semibold'
                    : 'text-white opacity-60 hover:opacity-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Header CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={PHONE_CONFIG.telUri}
            className="text-xs text-white/60 hover:text-white flex items-center gap-1.5 transition-colors font-medium tracking-wide"
          >
            <Phone className="w-3.5 h-3.5 text-[#C99A4A]" />
            <span>{PHONE_CONFIG.displayNumber}</span>
          </a>

          <a
            id="header-consultation-btn"
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] px-6 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 hover:translate-y-[-1px] shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Contact Us on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center space-x-3 lg:hidden">
          <a
            href={WHATSAPP_CONFIG.getLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#C99A4A] text-[#071A2B] font-bold text-xs tracking-wider"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#071A2B] border-b border-[#C99A4A]/25 px-5 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="space-y-1 pt-2 pb-3 border-b border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block py-2.5 px-3 rounded text-sm uppercase tracking-wider font-medium ${
                  link.href === activePath
                    ? 'bg-[#0B2238] text-[#E0B86A] font-semibold border-l-2 border-[#C99A4A]'
                    : 'text-white/80 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href={WHATSAPP_CONFIG.getLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 bg-[#C99A4A] text-[#071A2B] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <span>Contact Us on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-[11px] text-white/50 mt-2">
              Confidential • Strategic • Client-Focused
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
