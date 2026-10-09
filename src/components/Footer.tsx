import React from 'react';
import { ArrowUp, ArrowUpRight, MapPin, Building, ShieldCheck } from 'lucide-react';
import type { Language } from '../constants/languages';
import { translations } from '../constants/languages';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const t = translations[currentLang].footer;
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 text-neutral-400 pt-20 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tier: Brand, Social Media & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-12 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://esolution.com.br/wp-content/uploads/2024/02/cropped-Logo-padrao-azul-escuro.png"
              alt="eSolution"
              className="h-7 w-auto object-contain brightness-0 invert opacity-90"
            />
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 pl-4 border-l border-white/10 uppercase">
              {t.suite}
            </span>
          </div>

          {/* Redes Sociais Oficiais Embutidas */}
          <div className="flex items-center gap-5 border border-white/5 bg-white/[0.01] px-4 py-2 font-mono text-[11px] self-start sm:self-auto">
            <span className="text-neutral-500 text-[10px] tracking-wider uppercase">CONNECT:</span>
            <a
              href="https://www.instagram.com/esolution_tecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram eSolution"
              className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/eSolutionTecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook eSolution"
              className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://br.linkedin.com/company/esolution-tecnologia-ltda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn eSolution"
              className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>


          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors group cursor-pointer self-start sm:self-auto"
          >
            <span>{t.scroll}</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle Tier: Clean Architectural Columns */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-white/10">
          {/* Col 1: Soluções */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mb-4">
              {t.sectSolutions}
            </div>
            <ul className="space-y-2.5 font-light">
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  eSolution Hotel (PMS)
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  eSolution Parque (RFID)
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  eSolution Back (ERP)
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  eSolution Multipropriedade
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  eSolution PDV
                </a>
              </li>
              <li>
                <a
                  href="https://sofalta.eu/meunegocio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Só Falta.eu</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-white transition-colors">
                  eSolution Telemarketing
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Institucional */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mb-4">
              {t.sectInst}
            </div>
            <ul className="space-y-2.5 font-light">
              <li>
                <a href="https://esolution.com.br/re-historia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Nossa História
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Nossos Clientes
                </a>
              </li>
              <li>
                <a href="#parceiros" className="hover:text-white transition-colors">
                  Nossa Diretoria
                </a>
              </li>
              <li>
                <a href="https://esolution.com.br/trabalhe-conosco/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Clientes & Suporte */}
          <div>
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mb-4">
              {t.sectSupport}
            </div>
            <ul className="space-y-2.5 font-light">
              <li>
                <a
                  href="https://esolutiontecnologia.atlassian.net/servicedesk/customer/user/login?destination=portals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Helpdesk Atlassian</span>
                  <ArrowUpRight className="w-2.5 h-2.5" />
                </a>
              </li>
              <li>
                <a href="https://esolution.com.br/esolution-conecta/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  eSolution Conecta
                </a>
              </li>
              <li>
                <a href="https://esolution.com.br/base-de-conhecimento/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Base de Conhecimento
                </a>
              </li>
              <li>
                <a href="https://esolution.com.br/esolution-academy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  eSolution Academy
                </a>
              </li>
              <li>
                <a href="https://esolution.com.br/blog/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Blog eSolution
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 & 5: Sede Corporativa & CNPJ */}
          <div className="col-span-2 space-y-4">
            <div className="text-[11px] font-mono tracking-widest text-white uppercase mb-4">
              {t.sectSede}
            </div>
            <div className="p-4 border border-white/10 bg-white/[0.01] space-y-3 font-mono text-[11px]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">eSolution Tecnologia e Sistemas</div>
                  <div className="text-neutral-500 font-light mt-0.5">
                    Av. Dr. João de Araújo Castro - Termal, Caldas Novas - GO, CEP 75680-081
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                <Building className="w-4 h-4 text-neutral-500 shrink-0" />
                <span>CNPJ: <strong className="text-neutral-300">09.107.581/0001-30</strong></span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-400/90">{t.certified}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 font-mono">
          <div>
            © {new Date().getFullYear()} eSolution. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span>{t.compliance}</span>
            <span>{t.terms}</span>
            <span className="text-emerald-400/80">Remastered v4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
