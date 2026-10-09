import React from 'react';
import { AnimatedCounter } from './AnimatedCounter';

export const Metrics: React.FC = () => {
  const metrics = [
    {
      target: 500,
      prefix: '+',
      suffix: '',
      decimals: 0,
      label: 'Clientes Ativos',
      detail: 'Sendo mais de 120 operações de Multipropriedade em todo o território nacional.',
      highlight: false,
    },
    {
      target: 5,
      prefix: 'R$ ',
      suffix: 'B+',
      decimals: 0,
      label: 'Receitas Geridas / Ano',
      detail: 'Volume financeiro consolidado transitando em nossos módulos de ERP e PDV.',
      highlight: true,
    },
    {
      target: 350,
      prefix: '',
      suffix: 'M+',
      decimals: 0,
      label: 'Acessos em Catracas',
      detail: 'Giros de catraca validados com alta segurança em parques e complexos termais.',
      highlight: false,
    },
    {
      target: 2.5,
      prefix: '',
      suffix: 'M+',
      decimals: 1,
      label: 'Contas Hoteleiras',
      detail: 'Estadias e contas de consumo geridas sem perdas ou divergências de auditoria.',
      highlight: false,
    },
    {
      target: 200,
      prefix: '',
      suffix: 'k+',
      decimals: 0,
      label: 'Cotas Imobiliárias',
      detail: 'Frações de multipropriedade administradas com controle rígido de semanas.',
      highlight: false,
    },
    {
      target: 99.98,
      prefix: '',
      suffix: '%',
      decimals: 2,
      label: 'Disponibilidade SLA',
      detail: 'Resiliência operacional com contingência offline nativa para hotéis e parques.',
      highlight: true,
    },
  ];

  return (
    <section id="metricas" className="py-28 md:py-36 bg-[#0A0A0A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-emerald-400"></span>
              IMPACTO E ESCALA NACIONAL
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-white">
              NOSSOS <br className="hidden sm:inline" />
              NÚMEROS.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-light text-neutral-400 leading-relaxed">
            Mais de duas décadas liderando a vanguarda tecnológica da hospitalidade e turismo no Brasil. Números que comprovam a solidez de quem sustenta as maiores operações do setor.
          </p>
        </div>

        {/* Minimalist Luxury Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] p-10 flex flex-col justify-between group hover:bg-[#0F0F0F] transition-all duration-300 relative"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-mono tracking-widest text-neutral-600 uppercase group-hover:text-emerald-400 transition-colors">
                  IND_0{index + 1}
                </span>
                <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-emerald-400 transition-colors"></span>
              </div>

              <div>
                <div
                  className={`text-5xl sm:text-6xl font-extrabold tracking-tighter font-mono uppercase transition-all duration-300 ${
                    item.highlight
                      ? 'text-emerald-400 group-hover:text-emerald-300'
                      : 'text-white group-hover:text-neutral-100'
                  }`}
                >
                  <AnimatedCounter
                    end={item.target}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    decimals={item.decimals}
                    duration={2200}
                  />
                </div>
                <h3 className="text-base font-semibold uppercase tracking-tight text-neutral-200 mt-3">
                  {item.label}
                </h3>
                <p className="text-xs font-light text-neutral-400 mt-2 leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Minimal bottom accent bar */}
              <div className="w-0 group-hover:w-full h-0.5 bg-emerald-500 mt-6 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
