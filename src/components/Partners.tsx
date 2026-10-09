import React from 'react';

export const Partners: React.FC = () => {
  const partners = [
    {
      name: 'ADIT Brasil',
      role: 'Associação de Desenvolvimento Imobiliário e Turístico',
      logo: 'https://esolution.com.br/wp-content/uploads/2024/10/Logo-ADIT_04.png',
    },
    {
      name: 'Skyone',
      role: 'Cloud Infrastructure & High Availability',
      logo: 'https://esolution.com.br/wp-content/uploads/2024/10/Skyone-logo.png',
    },
    {
      name: 'Blockit',
      role: 'Tecnologia de Segurança e Integração',
      logo: 'https://esolution.com.br/wp-content/uploads/2024/10/Blockit-LogoBlue.png',
    },
    {
      name: 'Mapah',
      role: 'Auditoria, Consultoria e Controladoria',
      logo: 'https://esolution.com.br/wp-content/uploads/2024/02/mapah-consultoria-auditoria-e-co-2.png',
    },
    {
      name: 'TC Brasil',
      role: 'Consultoria Especializada em Multipropriedade',
      logo: 'https://esolution.com.br/wp-content/uploads/2024/02/TCBrasil-Consultoria-Site-Logo-V-2.png',
    },
    {
      name: 'Doutor Hotel',
      role: 'Gestão Estratégica em Hotelaria',
      logo: 'https://esolution.com.br/wp-content/uploads/2024/02/doutor-hotel.png',
    },
  ];

  const leaders = [
    { name: 'Junior', role: 'Diretoria Executiva', image: 'https://esolution.com.br/wp-content/uploads/2024/05/Junior.png' },
    { name: 'Layner', role: 'Diretoria de Tecnologia & Engenharia', image: 'https://esolution.com.br/wp-content/uploads/2024/05/Layner.png' },
    { name: 'Cesar', role: 'Diretoria de Operações & Implantação', image: 'https://esolution.com.br/wp-content/uploads/2024/05/Cesar.png' },
    { name: 'Marcelo', role: 'Diretoria Comercial & Expansão', image: 'https://esolution.com.br/wp-content/uploads/2024/05/Marcelo.png' },
    { name: 'Nayara', role: 'Diretoria de Customer Success', image: 'https://esolution.com.br/wp-content/uploads/2024/05/Nayara.png' },
  ];

  return (
    <section id="parceiros" className="py-28 md:py-36 bg-[#080808] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-emerald-400"></span>
              ECOSSISTEMA & ALIANÇAS ESTRATÉGICAS
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-white">
              PARCEIROS & <br className="hidden sm:inline" />
              LIDERANÇA.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-light text-neutral-400 leading-relaxed">
            Alianças com os principais players de infraestrutura cloud, associações nacionais e conselhos do setor de turismo e hospitalidade.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 mb-24">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] p-6 flex flex-col items-center justify-center min-h-[140px] group hover:bg-[#111111] transition-all duration-300 text-center"
            >
              <div className="h-10 w-full flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-8 max-w-[120px] object-contain grayscale contrast-125 brightness-150 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                />
              </div>
              <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase group-hover:text-neutral-300">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Leadership Row */}
        <div>
          <div className="flex items-center justify-between pb-6 mb-10 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                GOVERNANÇA CORPORATIVA
              </span>
              <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight mt-1">
                Nossa Diretoria
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500">CALDAS NOVAS • GO</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group">
                <div className="aspect-square border border-white/10 bg-neutral-900 overflow-hidden mb-4 relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-2 left-2 text-[9px] font-mono text-neutral-400 bg-black/60 px-1.5 py-0.5 border border-white/10">
                    DIR_0{idx + 1}
                  </div>
                </div>
                <h4 className="text-base font-bold text-white uppercase tracking-tight">
                  {leader.name}
                </h4>
                <p className="text-[11px] font-light text-neutral-400 mt-0.5">
                  {leader.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
