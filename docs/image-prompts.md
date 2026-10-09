# Prompts de geração — previews das Soluções Integradas

Os 7 assets são referenciados pelo objeto `solutions` em `src/components/SolutionsShowcase.tsx`
e servidos a partir de `public/assets/`. Use os prompts abaixo em qualquer gerador de imagem
(Midjourney, DALL·E, Gemini Imagen, Flux, etc.) para regenerar ou substituir cada arquivo.

**Specs de saída:** PNG, proporção 16:10 (paisagem), mínimo 1600×1000 px, sem moldura de dispositivo.

## Estilo base (anexar a todos os prompts)

> Ultra-minimal luxury dark cyber enterprise UI, flat high-fidelity product screenshot, 16:10 landscape,
> deep neutral black background #0A0A0A, off-white #F5F5F5 hairline 1px strokes and thin line charts,
> cyan #22d3ee and emerald accents used sparingly, monospace micro-labels, generous negative space,
> subtle grid backdrop, no people, no photography, no skeuomorphism, no heavy gradients, crisp vector-like
> rendering, clean hospitality and data-intelligence dashboard, Dribbble / Behance style, no readable body text.

## Negative prompt (quando suportado)

`people, faces, photography, colorful rainbow palette, cartoon, 3d render clutter, device frame, watermark, blurry, distorted UI, lorem ipsum paragraphs`

---

## 01 · Hotel — `public/assets/pms-preview.png`

> Front-office PMS dashboard for a luxury hotel: a minimalist floor-plan grid of room tiles (UH-102 to UH-512)
> with occupied rooms outlined in cyan and available rooms in dim grey, a thin-line occupancy area chart over 30 days,
> a vertical check-in timeline with small RFID key icons, and three KPI cards showing ADR, RevPAR and occupancy
> rendered as hairline sparklines. Overall base style applied.

## 02 · Parque — `public/assets/parque-preview.png`

> Water-park access control and capacity command center: a minimal top-down schematic map of park zones
> (pool, slides, lounge, entrance) drawn in hairline strokes, zones tinted with a cyan-to-emerald heat intensity,
> a large circular capacity gauge in the centre, a real-time turnstile throughput line chart, and a scrolling list of
> RFID wristband gate events with tiny status dots. Overall base style applied.

## 03 · Back — `public/assets/back-preview.png`

> Executive ERP / BI dashboard for hospitality finance: a DRE (income statement) waterfall chart in hairline cyan and
> off-white bars, a donut chart of purchasing by category, a fiscal document table with abstract placeholder rows
> (SPED / NF-e status chips), a small bar chart of monthly closing progress, and a KPI strip at the top.
> Overall base style applied.

## 04 · Multipropriedade — `public/assets/multipropriedade-preview.png`

> Timeshare / vacation-club management interface: a 52-week calendar matrix where each week cell is a small square
> showing share ownership state (sold in cyan, available in outline, in-use in emerald), a sales pipeline funnel
> from presentation room to signed contract, a contract-signing progress bar, and a pool-rental income mini chart.
> Overall base style applied.

## 05 · PDV — `public/assets/pdv-preview.png`

> Touch point-of-sale terminal interface on a landscape tablet screen (no device frame): a grid of large minimal
> product tiles with thin borders, an order ticket panel on the right with line items and a total area, a KDS
> kitchen queue column with order cards and timers, and a bottom status bar showing an offline-contingency
> indicator with a cyan sync dot. Overall base style applied.

## 06 · SóFalta.eu — `public/assets/sofalta-preview.png`

> White-label day-use ticket e-commerce storefront on a desktop browser canvas: a row of minimal ticket product cards
> with abstract tiles and authenticated QR-code vouchers rendered as hairline matrix patterns, a checkout summary
> panel with a PIX payment block showing a QR placeholder, and a small line chart of daily ticket sales.
> Overall base style applied.

## 07 · Telemarketing — `public/assets/telemarketing-preview.png`

> Sales call-center console: a left dialer panel with a live call waveform in cyan, a centre lead funnel kanban
> with columns (Novo, Contatado, Qualificado, Agendado) and thin cards, a right guided script panel with
> placeholder text bars, and a bottom mini-calendar of sales-room appointments with small emerald markers.
> Overall base style applied.

---

## Notas da geração (revisão visual)

Os 7 arquivos foram gerados em `public/assets/` e já estão ligados ao objeto `solutions`.
Ponto de atenção ao regenerar com outro gerador:

| Asset | Situação | Sugestão |
| --- | --- | --- |
| `parque-preview.png` | Limpo, bem alinhado ao estilo | Manter |
| `pms-preview.png` | Moldura clara ao redor da tela (canvas off-white) | Acrescentar "full-bleed dark canvas, no outer background" ao prompt |
| `sofalta-preview.png` | Barra de navegador (traffic lights) | Acrescentar "no browser chrome, no window frame" |
| `pdv-preview.png`, `back-preview.png`, `multipropriedade-preview.png`, `telemarketing-preview.png` | Micro-textos ilegíveis ou com palavras truncadas | Aceitáveis como textura; para texto nítido, usar a versão SVG/HTML ou refazer com "placeholder bars only, no words" |

Os textos de interface gerados por IA costumam sair com erros ortográficos. Se preferir legibilidade total,
troque os rótulos por barras de placeholder no prompt, como indicado em cada módulo.
