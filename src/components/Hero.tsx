import React from 'react';
import { ArrowDownRight, ArrowRight, Cpu } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';


interface HeroProps {
  onOpenDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative min-h-screen pt-36 pb-24 md:py-36 flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Ambience & Delicate Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10">
        {/* Subtle pill tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-white/10 bg-white/[0.02] mb-10 text-xs font-mono tracking-widest text-neutral-400">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
          <span className="text-neutral-300 font-medium">ECOSSISTEMA HOSPITALITY & PARQUES</span>
          <span className="text-neutral-600">/</span>
          <span className="text-neutral-500 text-[10px]">ENTERPRISE SUITE</span>
        </div>

        {/* Massive Typography Title */}
        <div className="max-w-6xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[108px] font-extrabold tracking-tighter text-[#F5F5F5] uppercase leading-[0.92] select-none">
            A REVOLUÇÃO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              COMEÇA AGORA.
            </span>
          </h1>
        </div>

        {/* Grid Split: Subtitle + CTA vs Luxury Media Preview */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          {/* Left Column: Ultra-thin Description & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-400 leading-relaxed max-w-2xl">
              Somos a única solução de gestão verdadeiramente completa. Capaz de unificar todo o ciclo da hospitalidade, parques temáticos e multipropriedade em um único ecossistema tecnológico robusto, eliminando rotinas manuais e maximizando a rentabilidade.
            </p>

            {/* Action Buttons: Pure Outline & Square Corners */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenDemo}
                className="px-8 py-4 text-xs font-mono tracking-[0.25em] uppercase border border-neutral-600 bg-transparent text-white rounded-none hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>AGENDAR APRESENTAÇÃO VIP</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#solucoes"
                className="px-8 py-4 text-xs font-mono tracking-[0.25em] uppercase border border-neutral-800 bg-transparent text-neutral-400 rounded-none hover:text-white hover:border-neutral-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>EXPLORAR MÓDULOS</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Authority Indicators */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-mono">
                  <AnimatedCounter end={500} prefix="+" duration={1800} />
                </div>
                <div className="text-[11px] font-light text-neutral-500 uppercase tracking-wider mt-1">Clientes Ativos</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-emerald-400 font-mono">
                  <AnimatedCounter end={5} prefix="R$ " suffix="B+" duration={1800} />
                </div>
                <div className="text-[11px] font-light text-neutral-500 uppercase tracking-wider mt-1">Receitas Geridas</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-mono">
                  <AnimatedCounter end={350} suffix="M+" duration={1800} />
                </div>
                <div className="text-[11px] font-light text-neutral-500 uppercase tracking-wider mt-1">Acessos em Catracas</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Media Showcase with Grayscale Luxury Treatment */}
          <div className="lg:col-span-5 relative group">
            <div className="relative border border-white/10 bg-neutral-950/60 p-4 transition-all duration-500 group-hover:border-neutral-600">
              {/* Media header badge */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[10px] font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 text-neutral-300">
                  <Cpu className="w-3 h-3 text-emerald-400" />
                  eSolution Architecture v4.0
                </span>
                <span className="text-neutral-500">LIVE ENGINE</span>
              </div>

              {/* Main Screenshot/Mockup with Grayscale Contrast Filter */}
              <div className="relative overflow-hidden aspect-[4/3] bg-neutral-900/40 flex items-center justify-center">
                <img
                  src="https://esolution.com.br/wp-content/uploads/2024/09/Slide-1-Side-V4.png"
                  alt="eSolution Hospitality Suite"
                  className="w-full h-full object-contain p-2 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />

                {/* Subtle corner tech markings */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-emerald-500/50"></div>
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-emerald-500/50"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-emerald-500/50"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-emerald-500/50"></div>
              </div>

              {/* Footnote */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>PMS • ERP • RFID • PDV</span>
                <span className="text-emerald-400/80">LATÊNCIA &lt; 8ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
