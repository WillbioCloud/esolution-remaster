import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Terminal, ChevronDown } from 'lucide-react';
import type { Language } from '../constants/languages';
import { translations } from '../constants/languages';

const BrazilFlag: React.FC = () => (
  <svg className="w-4 h-2.5 rounded-[1px] shrink-0 shadow-xs" viewBox="0 0 20 14" fill="none">
    <rect width="20" height="14" fill="#009B3A" />
    <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FEDF00" />
    <circle cx="10" cy="7" r="3.2" fill="#002776" />
    <path d="M7 6.8C8.5 6.2 11.5 6.5 13 7.8" stroke="#FFFFFF" strokeWidth="0.6" strokeLinecap="round" />
  </svg>
);

const USAFlag: React.FC = () => (
  <svg className="w-4 h-2.5 rounded-[1px] shrink-0 shadow-xs" viewBox="0 0 20 14" fill="none">
    <rect width="20" height="14" fill="#B22234" />
    <line x1="0" y1="2" x2="20" y2="2" stroke="#FFFFFF" strokeWidth="1.07" />
    <line x1="0" y1="4.15" x2="20" y2="4.15" stroke="#FFFFFF" strokeWidth="1.07" />
    <line x1="0" y1="6.3" x2="20" y2="6.3" stroke="#FFFFFF" strokeWidth="1.07" />
    <line x1="0" y1="8.45" x2="20" y2="8.45" stroke="#FFFFFF" strokeWidth="1.07" />
    <line x1="0" y1="10.6" x2="20" y2="10.6" stroke="#FFFFFF" strokeWidth="1.07" />
    <line x1="0" y1="12.75" x2="20" y2="12.75" stroke="#FFFFFF" strokeWidth="1.07" />
    <rect width="8" height="7.5" fill="#3C3B6E" />
    <circle cx="2" cy="2" r="0.4" fill="#FFFFFF" />
    <circle cx="4" cy="2" r="0.4" fill="#FFFFFF" />
    <circle cx="6" cy="2" r="0.4" fill="#FFFFFF" />
    <circle cx="3" cy="3.75" r="0.4" fill="#FFFFFF" />
    <circle cx="5" cy="3.75" r="0.4" fill="#FFFFFF" />
    <circle cx="2" cy="5.5" r="0.4" fill="#FFFFFF" />
    <circle cx="4" cy="5.5" r="0.4" fill="#FFFFFF" />
    <circle cx="6" cy="5.5" r="0.4" fill="#FFFFFF" />
  </svg>
);

const SpainFlag: React.FC = () => (
  <svg className="w-4 h-2.5 rounded-[1px] shrink-0 shadow-xs" viewBox="0 0 20 14" fill="none">
    <rect width="20" height="14" fill="#AA151B" />
    <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    <rect x="4" y="5" width="2" height="4" fill="#AA151B" opacity="0.8" rx="0.3" />
  </svg>
);

interface NavbarProps {
  currentLang: Language;
  onChangeLang: (lang: Language) => void;
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onChangeLang, onOpenDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const t = translations[currentLang].nav;

  const languageOptions = [
    { code: 'pt' as Language, label: 'PT', fullLabel: 'BR', flag: <BrazilFlag /> },
    { code: 'en' as Language, label: 'EN', fullLabel: 'US', flag: <USAFlag /> },
    { code: 'es' as Language, label: 'ES', fullLabel: 'ES', flag: <SpainFlag /> },
  ];

  const currentOption = languageOptions.find((l) => l.code === currentLang) || languageOptions[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: t.solutions, href: '#solucoes' },
    { label: t.ecosystem, href: '#metricas' },
    { label: t.desktop, href: '#painel-desktop' },
    { label: t.clients, href: '#depoimentos' },
    { label: t.partners, href: '#parceiros' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-8 flex items-center">
            <img
              src="https://esolution.com.br/wp-content/uploads/2024/02/cropped-Logo-padrao-azul-escuro.png"
              alt="eSolution"
              className="h-7 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="hidden sm:flex items-center gap-1.5 pl-3 border-l border-white/15 text-[10px] tracking-widest text-neutral-400 font-mono uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            REMASTER
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-light tracking-[0.2em] text-neutral-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Language Switcher Dropdown */}
        <div className="hidden md:flex items-center gap-5">
          {/* Minimalist Flag Dropdown (Sem excesso de botões na barra) */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 py-1.5 px-2.5 text-xs font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer border border-white/10 hover:border-white/25 bg-transparent rounded-none"
              aria-label="Selecionar Idioma"
            >
              {currentOption.flag}
              <span className="font-semibold text-[11px]">{currentOption.label}</span>
              <ChevronDown
                className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Dropdown Menu com visual translúcido sofisticado */}
            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 bg-[#0A0A0A]/95 backdrop-blur-md border border-white/10 shadow-2xl py-1 z-50 animate-fadeIn rounded-none">
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      onChangeLang(opt.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2 text-[11px] font-mono text-left transition-colors cursor-pointer ${
                      currentLang === opt.code
                        ? 'text-white bg-white/[0.05] font-bold'
                        : 'text-neutral-400 hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {opt.flag}
                      <span>{opt.label}</span>
                      <span className="text-neutral-500 text-[10px]">({opt.fullLabel})</span>
                    </div>
                    {currentLang === opt.code && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://esolutiontecnologia.atlassian.net/servicedesk/customer/user/login?destination=portals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono tracking-wider text-neutral-500 hover:text-neutral-300 flex items-center gap-1 transition-colors"
          >
            <span>{t.support}</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={onOpenDemo}
            className="px-5 py-2.5 text-xs font-mono tracking-widest uppercase border border-neutral-700 bg-transparent text-neutral-200 rounded-none hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-2 group cursor-pointer"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-400 group-hover:text-black transition-colors" />
            <span>{t.demo}</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white border border-neutral-800 rounded-none cursor-pointer"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/10 px-6 py-8 animate-fadeIn">
          {/* Mobile Language Selector with Flags */}
          <div className="flex items-center gap-2 pb-6 mb-6 border-b border-white/10 text-xs font-mono text-neutral-400">
            <span className="text-neutral-500 text-[10px] uppercase mr-2">IDIOMA:</span>
            {languageOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => onChangeLang(opt.code)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 border transition-all cursor-pointer ${
                  currentLang === opt.code
                    ? 'border-emerald-400 text-white bg-white/5 font-bold'
                    : 'border-white/10 text-neutral-400 hover:text-white'
                }`}
              >
                {opt.flag}
                <span>{opt.label}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-light tracking-[0.25em] text-neutral-300 hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo?.();
                }}
                className="w-full py-3 text-xs font-mono tracking-widest uppercase border border-white text-white hover:bg-white hover:text-black transition-all rounded-none text-center cursor-pointer"
              >
                {t.demo}
              </button>
              <a
                href="https://esolutiontecnologia.atlassian.net/servicedesk/customer/user/login?destination=portals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-center font-mono text-neutral-500 py-2"
              >
                {t.support} →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
