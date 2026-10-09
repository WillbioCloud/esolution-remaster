import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';


interface SolutionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gifIcon: string;
  previewImage: string;
  metrics: string;
}

export const SolutionsShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('hotel');

  const solutions: SolutionItem[] = [
    {
      id: 'hotel',
      number: '01',
      title: 'eSolution Hotel',
      subtitle: 'PMS & Hospitalidade Completa',
      description:
        'A mais completa solução para gestão hoteleira do Brasil. Motor de reservas unificado, check-in express, auditoria noturna automatizada, governança digital e integração nativa com OTAs e Channel Managers sem intermediários.',
      tags: ['PMS NATIVO', 'GOVERNANÇA MOBILE', 'TARIFÁRIO DINÂMICO', 'AUDITORIA NOTURNA'],
      gifIcon: 'https://esolution.com.br/wp-content/uploads/2024/10/Cama.gif',
      previewImage: 'https://esolution.com.br/wp-content/uploads/2024/09/Slide-1-Side-V4.png',
      metrics: 'Tempo de check-in reduzido em 68%',
    },
    {
      id: 'parque',
      number: '02',
      title: 'eSolution Parque',
      subtitle: 'Controle de Acesso & Parques Aquáticos',
      description:
        'Projetado nos menores detalhes para parques aquáticos e temáticos de altíssimo fluxo. Controle de catracas eletrônicas de resposta milimétrica, pulseiras RFID cashless, gestão de capacidade em tempo real e blindagem contra fraudes.',
      tags: ['CATRACAS RFID', 'CONSUMO CASHLESS', 'GESTÃO DE LOTAÇÃO', 'PORTARIA EXPRESS'],
      gifIcon: 'https://esolution.com.br/wp-content/uploads/2024/10/parque-aquatico.gif',
      previewImage: 'https://esolution.com.br/wp-content/uploads/2024/09/BH-Slide-6.png',
      metrics: 'Até 45.000 giros de catraca/dia por parque',
    },
    {
      id: 'back',
      number: '03',
      title: 'eSolution Back',
      subtitle: 'ERP Corporativo de Alta Precisão',
      description:
        'O eSolution Back é um ERP completo com todos os recursos de automação necessários para centralizar o fiscal, compras, suprimentos e controladoria. Desenvolvido para o regime tributário e particularidades do setor de hospitalidade.',
      tags: ['SPED & FISCAL', 'COMPRAS CENTRALIZADAS', 'DRE EM TEMPO REAL', 'BI EXECUTIVO'],
      gifIcon: 'https://esolution.com.br/wp-content/uploads/2024/10/Software-Grafico.gif',
      previewImage: 'https://esolution.com.br/wp-content/uploads/2024/09/Tablet-s-883x1024.png',
      metrics: 'Fechamento contábil e fiscal 3x mais rápido',
    },
    {
      id: 'multipropriedade',
      number: '04',
      title: 'eSolution Multipropriedade',
      subtitle: 'Frações Imobiliárias & Vacation Club',
      description:
        'Ciclo completo para comercialização e gestão de Cotas Imobiliárias. Da sala de apresentação de vendas e esteira contratual até a governança das semanas de uso, intercâmbio com intercambiadoras e prestação de contas do pool.',
      tags: ['SALAS DE VENDA', 'CONTRATOS & COMISSÕES', 'POOL DE LOCAÇÃO', 'INTEGRAÇÃO RCI/INTERVAL'],
      gifIcon: 'https://esolution.com.br/wp-content/uploads/2024/10/Multipropriedade.gif',
      previewImage: 'https://esolution.com.br/wp-content/uploads/2024/03/turismo-compartilhado-nova-sede-1.png',
      metrics: '+120 empreendimentos e 200k+ cotas ativas',
    },
    {
      id: 'pdv',
      number: '05',
      title: 'eSolution PDV',
      subtitle: 'Frente de Caixa & Operação Resiliente',
      description:
        'O eSolution PDV simplifica e otimiza o processo de vendas no ponto de atendimento. Interface touch ultra-veloz, operação 100% offline tolerante a quedas de link, envio de pedidos para KDS e faturamento direto na conta do hóspede.',
      tags: ['OFFLINE CONTINGENCY', 'KDS COZINHA', 'PULSEIRAS DE CONSUMO', 'NFC-E & SAT'],
      gifIcon: 'https://esolution.com.br/wp-content/uploads/2024/10/vendas.gif',
      previewImage: 'https://esolution.com.br/wp-content/uploads/2024/09/BG-Slider-Home-Azul.png',
      metrics: 'Latência de fechamento < 400ms por pedido',
    },
    {
      id: 'sofalta',
      number: '06',
      title: 'SóFalta.eu',
      subtitle: 'E-commerce & Ingressos Day Use',
      description:
        'Uma plataforma completa para comercialização de ingressos day use, atrações e experiências. Loja virtual white-label integrada diretamente com a bilheteria e catracas, com emissão instantânea de voucher com QR Code autenticado.',
      tags: ['E-COMMERCE WHITE LABEL', 'QR CODE NATIVO', 'PIX AUTOMATIZADO', 'DAY USE TICKETING'],
      gifIcon: 'https://esolution.com.br/wp-content/uploads/2024/10/pagina-da-internet-1.gif',
      previewImage: 'https://esolution.com.br/wp-content/uploads/2024/09/Slide-1-Side-V4.png',
      metrics: 'Zero filas na bilheteria com auto-validação',
    },
    {
      id: 'telemarketing',
      number: '07',
      title: 'eSolution Telemarketing',
      subtitle: 'Captação & Esteira de Conversão',
      description:
        'Otimize sua operação de telemarketing e aproveite ao máximo sua base de clientes para gerar novos negócios. Roteamento de ligações, scripts dinâmicos de atendimento, funil de captação de casais e agendamento para salas de venda.',
      tags: ['DISCADOR INTELIGENTE', 'ESTEIRA DE LEADS', 'SCRIPTS GUIADOS', 'AGENDAMENTO SALAS'],
      gifIcon: 'https://esolution.com.br/wp-content/uploads/2024/10/Telemarketing.gif',
      previewImage: 'https://esolution.com.br/wp-content/uploads/2024/09/Tablet-s-883x1024.png',
      metrics: 'Taxa de comparecimento em sala aumentada em 42%',
    },
  ];

  const currentSolution = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section id="solucoes" className="py-28 md:py-36 bg-[#0A0A0A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-emerald-400"></span>
              SUÍTE DE ENGENHARIA DE HOSPITALIDADE
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-white">
              SOLUÇÕES <br className="hidden sm:inline" />
              INTEGRADAS.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-light text-neutral-400 leading-relaxed">
            Arquitetura modular orientada a resultados operacionais. Cada módulo opera de forma autônoma ou em harmonia total dentro do ecossistema eSolution.
          </p>
        </div>

        {/* Minimalist Typographic Interactive Table Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Table List Column */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {solutions.map((item) => {
              const isActive = item.id === activeId;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`group py-7 cursor-pointer transition-all duration-300 flex items-start justify-between gap-4 ${
                    isActive ? 'bg-white/[0.02] px-4 -mx-4' : 'hover:bg-white/[0.01]'
                  }`}
                >
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    {/* Index Number */}
                    <span
                      className={`text-xs font-mono tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-emerald-400 font-bold' : 'text-neutral-600 group-hover:text-neutral-400'
                      }`}
                    >
                      {item.number}
                    </span>

                    {/* Title & Subtitle */}
                    <div>
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase transition-all duration-300 ${
                          isActive
                            ? 'text-white translate-x-1'
                            : 'text-neutral-500 group-hover:text-neutral-200'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs font-light tracking-wide mt-1 transition-colors duration-300 ${
                          isActive ? 'text-neutral-300' : 'text-neutral-600'
                        }`}
                      >
                        {item.subtitle}
                      </p>

                      {/* Mobile Accordion Details */}
                      {isActive && (
                        <div className="lg:hidden mt-4 pt-4 border-t border-white/10 animate-fadeIn">
                          <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-[9px] font-mono tracking-wider bg-white/5 border border-white/10 text-neutral-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="text-[11px] font-mono text-emerald-400">
                            ● {item.metrics}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Icon indicator */}
                  <div className="pt-2 flex items-center gap-3">
                    <img
                      src={item.gifIcon}
                      alt={item.title}
                      className={`w-7 h-7 object-contain transition-all duration-500 ${
                        isActive ? 'opacity-100 scale-110 filter drop-shadow' : 'opacity-40 grayscale'
                      }`}
                    />
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive
                          ? 'text-white translate-x-0.5 -translate-y-0.5'
                          : 'text-neutral-700 group-hover:text-neutral-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Persistent Dynamic Preview Panel (Desktop Sticky) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="border border-white/15 bg-neutral-950/80 p-8 backdrop-blur-sm relative overflow-hidden transition-all duration-500">
              {/* Module Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-white/15 bg-white/5 flex items-center justify-center p-1.5">
                    <img
                      src={currentSolution.gifIcon}
                      alt={currentSolution.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                      MÓDULO {currentSolution.number}
                    </span>
                    <h4 className="text-xl font-extrabold text-white uppercase tracking-tight">
                      {currentSolution.title}
                    </h4>
                  </div>
                </div>
                <div className="px-2.5 py-1 text-[9px] font-mono tracking-widest border border-emerald-500/30 text-emerald-400 uppercase bg-emerald-500/5">
                  OPERACIONAL
                </div>
              </div>

              {/* Media Preview Box with Luxury Grayscale treatment */}
              <div className="my-6 relative border border-white/10 bg-neutral-900/50 aspect-[16/10] overflow-hidden group">
                <img
                  src={currentSolution.previewImage}
                  alt={currentSolution.title}
                  className="w-full h-full object-contain p-4 grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/80 border border-white/10 text-[9px] font-mono text-neutral-400">
                  PREVIEW EM TEMPO REAL
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm font-light text-neutral-300 leading-relaxed mb-6">
                {currentSolution.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentSolution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-mono tracking-wider border border-white/10 bg-white/[0.03] text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metric Card */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-[11px] font-mono text-neutral-400">BENCHMARK ESTIMADO:</div>
                <div className="text-xs font-mono text-emerald-400 font-medium">
                  {currentSolution.metrics}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
