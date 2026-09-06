import React from 'react';
import { FirmLogo } from './FirmLogo';
import { MapPin, Phone, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { PHONE_CONFIG, WHATSAPP_CONFIG } from '../data/contactData';

interface FooterProps {
  onNavigate: (href: string) => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#071A2B] text-white border-t border-white/10 pt-16 pb-12"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand & Description (Col 1-5) */}
          <div className="lg:col-span-5">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className="inline-block mb-5 focus:outline-none"
            >
              <FirmLogo variant="light" />
            </a>

            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-sans mb-6">
              Strategic legal counsel for businesses, entrepreneurs, and organizations navigating critical transactions, disputes, and corporate growth.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-5 py-2.5 bg-[#C99A4A] hover:bg-[#E0B86A] text-[#071A2B] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Contact Us Now
              </button>
              <a
                href={WHATSAPP_CONFIG.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Practice Areas Column (Col 6-7) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C99A4A] mb-5">
              Practice Areas
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => handleLink(e, '/practice-areas')}
                  className="text-white/60 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Corporate & Commercial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#C99A4A] transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => handleLink(e, '/practice-areas')}
                  className="text-white/60 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>M&A</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#C99A4A] transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => handleLink(e, '/practice-areas')}
                  className="text-white/60 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Litigation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#C99A4A] transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => handleLink(e, '/practice-areas')}
                  className="text-white/60 hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Employment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#C99A4A] transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Column (Col 8-9) - Clean standard list without Insights */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C99A4A] mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLink(e, '/')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/practice-areas"
                  onClick={(e) => handleLink(e, '/practice-areas')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Practice Areas
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLink(e, '/about')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  onClick={(e) => handleLink(e, '/team')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLink(e, '/contact')}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 10-12) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-[#C99A4A] mb-5">
              Contact
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5 text-white/60">
                <MapPin className="w-4 h-4 text-[#C99A4A] shrink-0 mt-0.5" />
                <span>1200 Madison Avenue<br />New York, NY 10016</span>
              </li>
              <li className="flex items-center gap-2.5 text-white/60">
                <Phone className="w-4 h-4 text-[#C99A4A] shrink-0" />
                <a href={PHONE_CONFIG.telUri} className="hover:text-white transition-colors">
                  {PHONE_CONFIG.displayNumber}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/60">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={WHATSAPP_CONFIG.getLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp Direct
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/60">
                <Mail className="w-4 h-4 text-[#C99A4A] shrink-0" />
                <span className="text-white/60">
                  hello@veritaslawgroup.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Geometric Balance Theme Pattern */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/40">
          <div className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-medium text-center sm:text-left">
            © 2026 Veritas Law Group. All rights reserved. Attorney Advertising.
          </div>

          <div className="flex gap-8">
            <button
              onClick={() => onNavigate('/privacy')}
              className="text-[10px] text-white/30 uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/terms')}
              className="text-[10px] text-white/30 uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[10px] text-white/50 font-bold uppercase tracking-widest">New York, NY</span>
            <span className="text-[#C99A4A] font-bold text-xs tracking-widest">+1 (212) 555-0188</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
