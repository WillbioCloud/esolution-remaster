import React from 'react';
import type { Language } from '../constants/languages';

/* -------------------------------------------------------------------------- */
/*  i18n dictionary (pt | en | es)                                             */
/* -------------------------------------------------------------------------- */

interface AboutCopy {
  eyebrow: string;
  title: string;
  historyTitle: string;
  lead: string;
  paragraphs: string[];
  pillarsLabel: string;
  pillars: { title: string; detail: string }[];
  mediaLabel: string;
  mediaStatus: string;
  hubTop: string;
  hubBottom: string;
  stats: { value: string; label: string }[];
}

const ABOUT_TRANSLATIONS: Record<Language, AboutCopy> = {
  pt: {
    eyebrow: '+20 ANOS DE INOVAÇÃO EM HOSPITALIDADE',
    title: 'QUEM SOMOS.',
    historyTitle: 'NOSSA HISTÓRIA.',
    lead:
      'A eSolution é uma referência em software de gestão, consultoria e soluções de negócios, dedicada ao setor de hotelaria.',
    paragraphs: [
      'Atendemos empresas de multipropriedade, hotelaria e parques com uma solução completa, construída com tecnologias emergentes e metodologias práticas que levam a eficiência operacional e à inovação contínua.',
      'Somos parceiros de transformação. Entregamos soluções que se integram de forma fluida, eliminando rotinas extras e processos manuais para uma operação mais ágil e simplificada.',
      'Nosso compromisso vai além da tecnologia: valorizamos as conexões humanas, promovemos a sustentabilidade e garantimos transparência em todas as relações.',
    ],
    pillarsLabel: 'PILARES',
    pillars: [
      {
        title: 'Parceria de transformação',
        detail: 'Sistemas que conversam entre si, do front office ao financeiro.',
      },
      {
        title: 'Conexões humanas',
        detail: 'Equipe especializada e comprometida com o sucesso de cada cliente.',
      },
      {
        title: 'Transparência & sustentabilidade',
        detail: 'Relações claras e uma operação que cresce com responsabilidade.',
      },
    ],
    mediaLabel: 'ARQUITETURA DE SOFTWARE UNIFICADA',
    mediaStatus: 'ECOSSISTEMA ONLINE',
    hubTop: 'NÚCLEO',
    hubBottom: 'ÚNICO',
    stats: [
      { value: '20+', label: 'Anos de inovação' },
      { value: '07', label: 'Módulos integrados' },
      { value: '01', label: 'Ecossistema' },
    ],
  },
  en: {
    eyebrow: '20+ YEARS OF INNOVATION IN HOSPITALITY',
    title: 'WHO WE ARE.',
    historyTitle: 'OUR HISTORY.',
    lead:
      'eSolution is a reference in management software, consulting and business solutions, dedicated to the hospitality sector.',
    paragraphs: [
      'We serve companies in timeshare, hospitality and theme parks with a complete solution, built on emerging technologies and practical methodologies that drive operational efficiency and continuous innovation.',
      'We are transformation partners. We deliver solutions that integrate seamlessly, eliminating extra routines and manual processes for a leaner, simpler operation.',
      'Our commitment goes beyond technology: we value human connections, promote sustainability and guarantee transparency in every relationship.',
    ],
    pillarsLabel: 'PILLARS',
    pillars: [
      {
        title: 'Transformation partnership',
        detail: 'Systems that talk to each other, from the front desk to finance.',
      },
      {
        title: 'Human connections',
        detail: 'A highly specialized team committed to the success of every client.',
      },
      {
        title: 'Transparency & sustainability',
        detail: 'Clear relationships and an operation that grows responsibly.',
      },
    ],
    mediaLabel: 'UNIFIED SOFTWARE ARCHITECTURE',
    mediaStatus: 'ECOSYSTEM ONLINE',
    hubTop: 'SINGLE',
    hubBottom: 'CORE',
    stats: [
      { value: '20+', label: 'Years of innovation' },
      { value: '07', label: 'Integrated modules' },
      { value: '01', label: 'Ecosystem' },
    ],
  },
  es: {
    eyebrow: '+20 AÑOS DE INNOVACIÓN EN HOSPITALIDAD',
    title: 'QUIÉNES SOMOS.',
    historyTitle: 'NUESTRA HISTORIA.',
    lead:
      'eSolution es una referencia en software de gestión, consultoría y soluciones de negocio, dedicada al sector hotelero.',
    paragraphs: [
      'Atendemos a empresas de multipropiedad, hotelería y parques con una solución completa, construida con tecnologías emergentes y metodologías prácticas que impulsan la eficiencia operativa y la innovación continua.',
      'Somos socios de transformación. Entregamos soluciones que se integran de forma fluida, eliminando rutinas extra y procesos manuales para una operación más ágil y simplificada.',
      'Nuestro compromiso va más allá de la tecnología: valoramos las conexiones humanas, promovemos la sostenibilidad y garantizamos la transparencia en cada relación.',
    ],
    pillarsLabel: 'PILARES',
    pillars: [
      {
        title: 'Alianza de transformación',
        detail: 'Sistemas que se comunican entre sí, desde recepción hasta finanzas.',
      },
      {
        title: 'Conexiones humanas',
        detail: 'Un equipo altamente especializado y comprometido con el éxito de cada cliente.',
      },
      {
        title: 'Transparencia y sostenibilidad',
        detail: 'Relaciones claras y una operación que crece con responsabilidad.',
      },
    ],
    mediaLabel: 'ARQUITECTURA DE SOFTWARE UNIFICADA',
    mediaStatus: 'ECOSISTEMA EN LÍNEA',
    hubTop: 'NÚCLEO',
    hubBottom: 'ÚNICO',
    stats: [
      { value: '20+', label: 'Años de innovación' },
      { value: '07', label: 'Módulos integrados' },
      { value: '01', label: 'Ecosistema' },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/*  Architecture diagram data (module names are brand names, not translated)   */
/* -------------------------------------------------------------------------- */

const MODULES = [
  'Hotel',
  'Parque',
  'Back',
  'Multipropriedade',
  'PDV',
  'SóFalta.eu',
  'Telemarketing',
] as const;

const DIAGRAM = {
  width: 600,
  height: 420,
  cx: 300,
  cy: 210,
  radius: 158,
  hubRadius: 50,
  nodeWidth: 118,
  nodeHeight: 28,
};

const moduleNodes = MODULES.map((label, index) => {
  const angle = ((-90 + (index * 360) / MODULES.length) * Math.PI) / 180;
  return {
    label,
    x: DIAGRAM.cx + DIAGRAM.radius * Math.cos(angle),
    y: DIAGRAM.cy + DIAGRAM.radius * Math.sin(angle),
  };
});

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

interface AboutUsProps {
  currentLang: Language;
}

export const AboutUs: React.FC<AboutUsProps> = ({ currentLang }) => {
  const t = ABOUT_TRANSLATIONS[currentLang];

  return (
    <section id="quem-somos" className="py-28 md:py-36 bg-[#0A0A0A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
            <span className="w-2 h-0.5 bg-emerald-400"></span>
            {t.eyebrow}
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-white">
            {t.title}
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start mt-20">
          {/* Left Column: Manifesto */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter uppercase text-white">
              {t.historyTitle}
            </h3>

            <p className="text-lg sm:text-xl font-light tracking-wide text-neutral-300 leading-relaxed">
              {t.lead}
            </p>

            <div className="flex flex-col gap-6">
              {t.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm sm:text-base font-light tracking-wide text-neutral-400 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pillars */}
            <div>
              <div className="text-[10px] font-mono tracking-[0.3em] text-neutral-600 uppercase mb-2">
                {t.pillarsLabel}
              </div>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {t.pillars.map((pillar, index) => (
                  <li key={pillar.title} className="group py-5 flex items-start gap-6">
                    <span className="text-xs font-mono tracking-widest text-neutral-600 group-hover:text-emerald-400 transition-colors duration-300 pt-1">
                      0{index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold uppercase tracking-tight text-neutral-200">
                        {pillar.title}
                      </h4>
                      <p className="text-xs font-light tracking-wide text-neutral-400 mt-1 leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Architecture Media Panel */}
          <div className="lg:col-span-7 lg:sticky lg:top-28">
            <div className="border border-white/15 bg-neutral-950/80 p-6 sm:p-8 relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
              {/* Panel Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  {t.mediaLabel}
                </span>
                <div className="flex items-center gap-2 px-2.5 py-1 text-[9px] font-mono tracking-widest border border-emerald-500/30 text-emerald-400 uppercase bg-emerald-500/5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  {t.mediaStatus}
                </div>
              </div>

              {/* Diagram */}
              <div className="my-6 border border-white/10 bg-[#070707] relative">
                <svg
                  viewBox={`0 0 ${DIAGRAM.width} ${DIAGRAM.height}`}
                  className="w-full h-auto block"
                  role="img"
                  aria-label={t.mediaLabel}
                >
                  {/* Background rings */}
                  <circle
                    cx={DIAGRAM.cx}
                    cy={DIAGRAM.cy}
                    r={DIAGRAM.radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="2 6"
                  />
                  <circle
                    cx={DIAGRAM.cx}
                    cy={DIAGRAM.cy}
                    r={DIAGRAM.hubRadius + 22}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                  />

                  {/* Connectors */}
                  {moduleNodes.map((node) => (
                    <line
                      key={`line-${node.label}`}
                      x1={DIAGRAM.cx}
                      y1={DIAGRAM.cy}
                      x2={node.x}
                      y2={node.y}
                      stroke="rgba(255,255,255,0.18)"
                      strokeWidth={1}
                    />
                  ))}

                  {/* Hub */}
                  <circle
                    cx={DIAGRAM.cx}
                    cy={DIAGRAM.cy}
                    r={DIAGRAM.hubRadius}
                    fill="#0A0A0A"
                    stroke="#22d3ee"
                    strokeWidth={1}
                  />
                  <circle
                    cx={DIAGRAM.cx}
                    cy={DIAGRAM.cy}
                    r={DIAGRAM.hubRadius - 12}
                    fill="none"
                    stroke="rgba(34,211,238,0.25)"
                    strokeDasharray="3 4"
                  />
                  <text
                    x={DIAGRAM.cx}
                    y={DIAGRAM.cy - 4}
                    textAnchor="middle"
                    className="font-mono"
                    fill="#67e8f9"
                    fontSize={9}
                    letterSpacing={2}
                  >
                    {t.hubTop}
                  </text>
                  <text
                    x={DIAGRAM.cx}
                    y={DIAGRAM.cy + 9}
                    textAnchor="middle"
                    className="font-mono"
                    fill="#67e8f9"
                    fontSize={9}
                    letterSpacing={2}
                  >
                    {t.hubBottom}
                  </text>

                  {/* Module nodes */}
                  {moduleNodes.map((node) => (
                    <g key={`node-${node.label}`}>
                      <circle cx={node.x} cy={node.y} r={2.5} fill="#22d3ee" />
                      <rect
                        x={node.x - DIAGRAM.nodeWidth / 2}
                        y={node.y - DIAGRAM.nodeHeight / 2}
                        width={DIAGRAM.nodeWidth}
                        height={DIAGRAM.nodeHeight}
                        fill="#0A0A0A"
                        stroke="rgba(255,255,255,0.22)"
                        strokeWidth={1}
                      />
                      <text
                        x={node.x}
                        y={node.y + 1}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="font-mono uppercase"
                        fill="#d4d4d4"
                        fontSize={10}
                        letterSpacing={1}
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-px bg-white/10 border border-white/10">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="bg-[#0A0A0A] p-4 sm:p-5">
                    <div className="text-xl sm:text-2xl font-extrabold tracking-tighter font-mono text-white">
                      {stat.value}
                    </div>
                    <div className="text-[10px] font-light tracking-wide text-neutral-500 uppercase mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
