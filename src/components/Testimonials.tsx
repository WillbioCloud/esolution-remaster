import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  title: string;
  company: string;
  image: string;
  quote: string;
  tags: string[];
}

export const Testimonials: React.FC = () => {


  const testimonials: TestimonialItem[] = [
    {
      id: 'jonathan',
      name: 'Jonathan Rodrigues',
      title: 'Head de A&B',
      company: 'Grandes Lagos Resorts e Parque Aquático',
      image: 'https://esolution.com.br/wp-content/uploads/2025/06/Jonathas-1-e1750098788278.png',
      quote:
        'Uma marca não gera valor se as pessoas que a compõem não transmitirem isso. Para mim, a eSolution não entregaria tanto valor se seu time não fosse formado por bons profissionais, abertos a ouvir e, acima de tudo, comprometidos em buscar soluções para os problemas apresentados.',
      tags: ['GRANDES LAGOS RESORTS', 'OPERAÇÃO PARQUE & HOTEL'],
    },
    {
      id: 'mariana',
      name: 'Mariana Conz',
      title: 'Consultora Hoteleira',
      company: 'Parceira Estratégica eSolution',
      image: 'https://esolution.com.br/wp-content/uploads/2025/06/Mari-1-e1750098729929.png',
      quote:
        'Não é todo dia que você encontra uma empresa de tecnologia que investe tanto na qualidade da experiência dos seus clientes diretos e os clientes finais se preocupando em facilitar o uso das ferramentas, promovendo novas funcionalidades. Uma empresa fora da curva que entende que o seu real sucesso só acontece quando seus clientes estiverem felizes!',
      tags: ['CONSULTORIA HOTELEIRA', 'TRANSFORMAÇÃO DIGITAL'],
    },
  ];

  return (
    <section id="depoimentos" className="py-28 md:py-36 bg-[#0A0A0A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-emerald-400"></span>
              REPUTAÇÃO E AUTORIDADE REAL
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-white">
              QUEM VIVE A <br className="hidden sm:inline" />
              OPERAÇÃO FALA.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-light text-neutral-400 leading-relaxed">
            Depoimentos autênticos de lideranças que operam os maiores complexos turísticos e redes de hospitalidade do país diariamente com a eSolution.
          </p>
        </div>

        {/* Testimonials Grid / Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div

              key={item.id}
              className="border border-white/10 bg-[#0F0F0F] p-8 sm:p-12 flex flex-col justify-between relative group hover:border-neutral-500 transition-all duration-500"
            >
              {/* Top Row: 5 Stars + Corporate Tag */}
              <div>
                <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
                  <div className="flex items-center gap-1.5 text-neutral-200">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                    CASO DE SUCESSO REAL
                  </div>
                </div>

                {/* Big Quote */}
                <p className="text-base sm:text-lg font-light text-neutral-300 leading-relaxed italic mb-10">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-5">
                {/* Photo with Luxury Grayscale treatment */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 border border-white/15 bg-neutral-900 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* Name & Credentials */}
                <div>
                  <h4 className="text-lg font-extrabold uppercase text-white tracking-tight">
                    {item.name}
                  </h4>
                  <div className="text-xs font-mono text-emerald-400 mt-0.5">
                    {item.title}
                  </div>
                  <div className="text-xs font-light text-neutral-400 mt-0.5">
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
