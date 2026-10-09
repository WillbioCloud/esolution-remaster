import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, PhoneCall, Mail, MapPin } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    segmento: 'Hotel / Resort',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-28 md:py-36 bg-[#0A0A0A] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
                <span className="w-2 h-0.5 bg-emerald-400"></span>
                TRANSFORMAÇÃO DIGITAL EXECUTIVA
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-white leading-[0.95]">
                ELEVE SUA <br />
                OPERAÇÃO AO <br />
                ÁPICE.
              </h2>

              <p className="mt-8 text-base font-light text-neutral-400 leading-relaxed max-w-lg">
                Agende uma demonstração técnica com nossos engenheiros de soluções. Analisaremos sua infraestrutura atual de PMS, catracas ou PDVs e apresentaremos a rota de implantação sob medida.
              </p>

              {/* Direct Contacts Info */}
              <div className="mt-12 space-y-4 pt-8 border-t border-white/10 font-mono text-xs text-neutral-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sede Corporativa: Caldas Novas - GO, CEP 75680-081</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>contato@esolution.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Atendimento Nacional: +55 (64) 3453-7000</span>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-white/10 bg-white/[0.01]">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CONFIDENCIALIDADE & SEGURANÇA ENTERPRISE</span>
              </div>
              <p className="text-[11px] font-light text-neutral-500 mt-1">
                Seus dados operacionais são protegidos sob protocolos rígidos de sigilo corporativo.
              </p>
            </div>
          </div>

          {/* Right Column: Minimalist Luxury Form */}
          <div className="lg:col-span-6 border border-white/15 bg-[#0D0D0D] p-8 sm:p-12 relative">
            {submitted ? (
              <div className="py-16 text-center animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight">
                  SOLICITAÇÃO RECEBIDA
                </h3>
                <p className="text-sm font-light text-neutral-400 mt-2 max-w-md mx-auto">
                  Nosso diretor de contas entrará em contato em até 2 horas comerciais com o cronograma de demonstração guiada.
                </p>
                <div className="mt-6 p-4 bg-black/50 border border-white/10 font-mono text-xs text-emerald-400 inline-block">
                  PROTOCOLO: ESO-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <div className="mt-8">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono tracking-widest text-neutral-400 hover:text-white uppercase underline"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase mb-1">
                    FORMULÁRIO DE ACESSO VIP
                  </div>
                  <h3 className="text-xl font-bold uppercase text-white tracking-tight">
                    Agende sua Demonstração Técnica
                  </h3>
                </div>

                <div>
                  <label className="block text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Ex: Carlos Eduardo Silveira"
                    className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 rounded-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                      Empreendimento / Hotel *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      placeholder="Ex: Grand Resort Termal"
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                      Segmento Operacional *
                    </label>
                    <select
                      value={formData.segmento}
                      onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-400 rounded-none transition-colors"
                    >
                      <option value="Hotel / Resort">Hotelaria & Resorts</option>
                      <option value="Parque Temático / Aquático">Parque Aquático / Temático</option>
                      <option value="Multipropriedade / Fractional">Multipropriedade & Fractional</option>
                      <option value="Rede de Alimentos & PDV">Rede de PDVs & Gastronomia</option>
                      <option value="Outro">Outro segmento</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="diretoria@empreendimento.com.br"
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider text-neutral-400 uppercase mb-2">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      placeholder="(64) 99999-9999"
                      className="w-full bg-[#121212] border border-white/10 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-emerald-400 rounded-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-mono tracking-[0.25em] uppercase border border-white bg-white text-black hover:bg-black hover:text-white hover:border-white transition-all duration-300 font-bold rounded-none flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>SOLICITAR DEMONSTRAÇÃO EXECUTIVA</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
