import React, { useState } from 'react';
import { Terminal, Play, RefreshCw, Database, CheckCircle2, HardDrive, Wifi } from 'lucide-react';

interface Routine {
  id: string;
  name: string;
  module: string;
  sql: string;
  latencyMs: number;
  recordsCount: number;
  data: Array<Record<string, string>>;
  logMessage: string;
}

export const DesktopSimulator: React.FC = () => {
  const [selectedRoutineId, setSelectedRoutineId] = useState<string>('catracas');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [lastExecutedTime, setLastExecutedTime] = useState<string>('0.003s');
  const [logs, setLogs] = useState<string[]>([
    '[INIT] eSolution Workstation Engine v4.8 inicializado com sucesso.',
    '[NET] Link TCP/IP estabelecido com o Concentrador de Portaria RFID.',
    '[SYNC] Sincronização offline: 12.450 credenciais ativas em cache local.',
  ]);

  const routines: Routine[] = [
    {
      id: 'catracas',
      name: 'Portaria & Acesso RFID',
      module: 'eSolution Parque',
      sql: `-- Oracle Environment / Controle de Lotação
SELECT TOP 5 catraca_id, descricao_area, tag_uid, nome_hospede, status_validacao, hora_giro
FROM tb_portaria_acesso_rfid
WHERE data_movimento = CAST(GETDATE() AS DATE) AND ind_liberado = 'S'
ORDER BY hora_giro DESC;`,
      latencyMs: 3,
      recordsCount: 5,
      logMessage: 'SUCCESS_INTEGRATION: Varredura de 28 controladores RFID concluída em 0.003s.',
      data: [
        { catraca_id: 'CAT-01-SUL', descricao_area: 'Entrada Principal Parque', tag_uid: 'RFID-9F8A2B', nome_hospede: 'Marcos V. Silveira', status_validacao: 'LIBERADO (DAY USE)', hora_giro: '10:45:12' },
        { catraca_id: 'CAT-04-NORTE', descricao_area: 'Área Vip Termas', tag_uid: 'RFID-3C4D1E', nome_hospede: 'Larissa Alencar M.', status_validacao: 'LIBERADO (HÓSPEDE APTO 402)', hora_giro: '10:45:11' },
        { catraca_id: 'CAT-02-LESTE', descricao_area: 'Toboágua Radical', tag_uid: 'RFID-8B2A9F', nome_hospede: 'Rodrigo B. Fonseca', status_validacao: 'LIBERADO (FAST PASS)', hora_giro: '10:45:09' },
        { catraca_id: 'CAT-06-VIP', descricao_area: 'Lounge Bangalôs', tag_uid: 'RFID-7A1B2C', nome_hospede: 'Camila Guimarães', status_validacao: 'LIBERADO (ALL INCLUSIVE)', hora_giro: '10:45:07' },
        { catraca_id: 'CAT-03-SUL', descricao_area: 'Entrada Principal Parque', tag_uid: 'RFID-4D8E9A', nome_hospede: 'Eduardo Martins', status_validacao: 'LIBERADO (DAY USE)', hora_giro: '10:45:04' },
      ],
    },
    {
      id: 'pms',
      name: 'Check-in Express & Governança',
      module: 'eSolution Hotel',
      sql: `-- SQL Server Environment / Front Office Core
SELECT TOP 5 num_apartamento, nome_titular, status_pms, canal_reserva, vlr_consumo_aberto
FROM tb_front_hospedagem_ativa
WHERE ind_status = 'HOSPEDADO' AND status_pms = 'CHECKIN_CONFIRMADO'
ORDER BY num_apartamento ASC;`,
      latencyMs: 6,
      recordsCount: 5,
      logMessage: 'SUCCESS_PMS: Tabela de Governança Digital e Contas de Consumo sincronizada em 0.006s.',
      data: [
        { num_apartamento: 'UH-102 (Suíte)', nome_titular: 'Gustavo Paiva Netto', status_pms: 'CHAVE RFID IMPRESSA', canal_reserva: 'MOTOR DIRETO', vlr_consumo_aberto: 'R$ 420,50' },
        { num_apartamento: 'UH-204 (Master)', nome_titular: 'Juliana Carvalho R.', status_pms: 'CHAVE RFID IMPRESSA', canal_reserva: 'BOOKING COM', vlr_consumo_aberto: 'R$ 1.140,00' },
        { num_apartamento: 'UH-305 (Bangalô)', nome_titular: 'Fernando S. Dias', status_pms: 'PRÉ-CHECKIN CONECTA', canal_reserva: 'OPERADORA CVC', vlr_consumo_aberto: 'R$ 0,00' },
        { num_apartamento: 'UH-410 (Premium)', nome_titular: 'Patrícia Albuquerque', status_pms: 'CHAVE RFID IMPRESSA', canal_reserva: 'MULTIPROPRIEDADE', vlr_consumo_aberto: 'R$ 890,20' },
        { num_apartamento: 'UH-512 (Duplo)', nome_titular: 'Carlos E. Monteiro', status_pms: 'CHAVE RFID IMPRESSA', canal_reserva: 'MOTOR DIRETO', vlr_consumo_aberto: 'R$ 215,80' },
      ],
    },
    {
      id: 'pdv',
      name: 'Sincronismo Estações PDV',
      module: 'eSolution PDV',
      sql: `-- Contingência Local Offline / Cashless
SELECT TOP 5 station_id, descricao_pdv, vlr_acumulado_offline, status_sincronismo
FROM tb_pdv_estacoes_trabalho
WHERE ind_ativo = 1
ORDER BY station_id ASC;`,
      latencyMs: 2,
      recordsCount: 5,
      logMessage: 'SUCCESS_OFFLINE: Sincronização assíncrona de vendas offline ativa (0 buffers pendentes).',
      data: [
        { station_id: 'PDV-POS-01', descricao_pdv: 'Bar da Piscina Central', vlr_acumulado_offline: 'R$ 14.890,00', status_sincronismo: 'CONCLUÍDO (HÁ 2S)' },
        { station_id: 'PDV-POS-02', descricao_pdv: 'Restaurante Central', vlr_acumulado_offline: 'R$ 28.450,00', status_sincronismo: 'CONCLUÍDO (HÁ 1S)' },
        { station_id: 'PDV-POS-03', descricao_pdv: 'Quiosque Chope', vlr_acumulado_offline: 'R$ 8.920,00', status_sincronismo: 'CONCLUÍDO (HÁ 4S)' },
        { station_id: 'PDV-POS-04', descricao_pdv: 'Conveniência & Boutique', vlr_acumulado_offline: 'R$ 12.110,00', status_sincronismo: 'CONCLUÍDO (HÁ 1S)' },
        { station_id: 'PDV-POS-05', descricao_pdv: 'Sorveteria Termal', vlr_acumulado_offline: 'R$ 6.340,00', status_sincronismo: 'CONCLUÍDO (HÁ 2S)' },
      ],
    },
  ];

  const current = routines.find((r) => r.id === selectedRoutineId) || routines[0];

  const handleRunQuery = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setLastExecutedTime(`0.00${current.latencyMs}s`);
      const timestamp = new Date().toLocaleTimeString('pt-BR');
      setLogs((prev) => [
        `[${timestamp}] EXEC_SQL: ${current.sql.split('\n')[1]}...`,
        `[${timestamp}] ${current.logMessage}`,
        ...prev.slice(0, 5),
      ]);
    }, 350);
  };

  return (
    <section id="painel-desktop" className="py-28 md:py-36 bg-[#070707] border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-emerald-500/5 blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="text-xs font-mono tracking-[0.3em] text-emerald-400 uppercase mb-4 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              FACILIDADES TÉCNICAS GERADAS • EXECUÇÃO LOCAL NATIVA
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase text-white">
              ESTAÇÃO <br className="hidden sm:inline" />
              NATIVA.
            </h2>
          </div>
          <p className="max-w-md text-sm font-light text-neutral-400 leading-relaxed">
            Nossos módulos locais funcionam em arquitetura híbrida tolerante a falhas. Em caso de queda de link de internet na região, as catracas e pontos de venda continuam operando de forma autônoma com sincronismo em tempo de resposta ultra-reduzido.
          </p>
        </div>

        {/* Electron Window Mockup Frame */}
        <div className="border border-white/15 bg-[#0D0D0D] shadow-2xl relative overflow-hidden">
          {/* Titlebar Chrome */}
          <div className="h-11 bg-[#141414] border-b border-white/10 px-4 flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#333333] border border-white/10 hover:bg-red-500/80 transition-colors inline-block cursor-pointer"></span>
                <span className="w-3 h-3 rounded-full bg-[#333333] border border-white/10 hover:bg-yellow-500/80 transition-colors inline-block cursor-pointer"></span>
                <span className="w-3 h-3 rounded-full bg-[#333333] border border-white/10 hover:bg-green-500/80 transition-colors inline-block cursor-pointer"></span>
              </div>
              <div className="h-4 w-px bg-white/10 mx-1"></div>
              <div className="text-[11px] font-mono tracking-wider text-neutral-300 flex items-center gap-2">
                <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                <span>eSolution Station Workstation v4.8</span>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-500 text-[10px]">LOCAL_HOST: FRONT-DESK-CALDAS-01</span>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Wifi className="w-3 h-3" />
                <span>LAN CONECTADA</span>
              </span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Database className="w-3 h-3 text-emerald-400" />
                <span>ORACLE / SQL SERVER ENVIRONMENT</span>
              </span>
              <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                ONLINE
              </span>
            </div>
          </div>

          {/* Main App Workspace */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Sidebar */}
            <div className="lg:col-span-4 bg-[#101010] border-b lg:border-b-0 lg:border-r border-white/10 p-5 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-4 flex items-center justify-between">
                  <span>FACILIDADES TÉCNICAS E ROTEIROS</span>
                  <span className="text-neutral-600">INTEGRAÇÕES</span>
                </div>

                <div className="space-y-2">
                  {routines.map((routine) => {
                    const isSelected = routine.id === selectedRoutineId;
                    return (
                      <button
                        key={routine.id}
                        onClick={() => setSelectedRoutineId(routine.id)}
                        className={`w-full text-left p-3.5 border transition-all duration-200 rounded-none flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'bg-white/5 border-emerald-500/60 text-white'
                            : 'bg-transparent border-white/5 text-neutral-400 hover:border-white/20 hover:text-neutral-200'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-mono font-semibold tracking-wide flex items-center gap-2">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSelected ? 'bg-emerald-400' : 'bg-neutral-600'
                              }`}
                            ></span>
                            {routine.name}
                          </div>
                          <div className="text-[10px] font-mono text-neutral-500 mt-1 pl-3.5">
                            {routine.module}
                          </div>
                        </div>

                        <div className="text-[10px] font-mono text-emerald-400 bg-black/40 px-2 py-1 border border-white/5">
                          {routine.latencyMs}ms
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hardware Diagnostics */}
              <div className="mt-8 pt-5 border-t border-white/10 text-[11px] font-mono text-neutral-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">ENGINE RUNTIME:</span>
                  <span className="text-neutral-300">Native Electron Shell</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">LATÊNCIA BANCO LOCAL:</span>
                  <span className="text-emerald-400 font-bold">&lt; 1.2ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">EMISSÃO CONTINGÊNCIA:</span>
                  <span className="text-neutral-300">NFC-e/SAT ATIVO</span>
                </div>
              </div>
            </div>

            {/* Viewport */}
            <div className="lg:col-span-8 p-6 flex flex-col justify-between bg-[#0A0A0A]">
              <div>
                {/* Query Header & Test Button */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">
                      MANUAL DE INTEGRAÇÃO EM EXECUÇÃO
                    </span>
                    <h3 className="text-base font-bold text-white font-mono mt-0.5">
                      {current.name} — {current.module}
                    </h3>
                  </div>

                  <button
                    onClick={handleRunQuery}
                    disabled={isRunning}
                    className="px-5 py-2.5 text-xs font-mono tracking-widest uppercase bg-emerald-500 text-black hover:bg-emerald-400 font-bold rounded-none flex items-center justify-center gap-2 transition-all duration-200 self-start sm:self-auto cursor-pointer"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>VERIFICANDO CONEXÃO...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-black" />
                        <span>TESTAR AMBIENTE [F5]</span>
                      </>
                    )}
                  </button>
                </div>

                {/* SQL Editor Frame */}
                <div className="mb-4 bg-[#050505] border border-white/10 p-3.5 font-mono text-xs text-neutral-300 overflow-x-auto">
                  <div className="text-[10px] text-neutral-600 mb-1 select-none font-sans uppercase tracking-wider">
                    ESTRUTURA SQL HOMOLOGADA (BASE DE CONHECIMENTO)
                  </div>
                  <pre className="text-emerald-300/90 leading-relaxed font-mono whitespace-pre-wrap">
                    {current.sql}
                  </pre>
                </div>

                {/* Results Table */}
                <div className="border border-white/10 bg-[#0F0F0F] overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#181818] text-neutral-400 text-[10px] tracking-wider uppercase border-b border-white/10">
                      <tr>
                        {Object.keys(current.data[0]).map((key) => (
                          <th key={key} className="py-2.5 px-3 font-semibold">
                            {key.replace('_', ' ')}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-neutral-300">
                      {current.data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                          {Object.values(row).map((val, cellIdx) => (
                            <td
                              key={cellIdx}
                              className={`py-2 px-3 whitespace-nowrap text-[11px] ${
                                String(val).includes('LIBERADO') || String(val).includes('CONCLUÍDO') || String(val).includes('IMPRESSA')
                                  ? 'text-emerald-400 font-bold'
                                  : ''
                              }`}
                            >
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Execution Footer Stats */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sincronismo estrutural validado</span>
                  </span>
                  <span>Tempo de resposta local: <strong className="text-emerald-400">{lastExecutedTime}</strong></span>
                </div>
              </div>

              {/* Real-time Event Stream / Log Output */}
              <div className="mt-6 pt-4 border-t border-white/10 bg-[#070707] p-3 border border-white/5 font-mono text-[11px]">
                <div className="text-[10px] uppercase text-neutral-600 mb-1.5 tracking-wider">
                  DIAGNÓSTICO DE IMPLANTAÇÃO (STREAM DE LOGS)
                </div>
                <div className="space-y-1 text-neutral-400">
                  {logs.map((log, index) => (
                    <div
                      key={index}
                      className={index === 0 ? 'text-emerald-400 font-semibold' : 'text-neutral-500'}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
