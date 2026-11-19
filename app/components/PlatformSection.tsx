import { Reveal } from "./Reveal";

const capabilities = [
  ["01", "Revenue Intelligence", "Interpreta dados comerciais, evidencia gargalos e organiza recomendações para priorizar oportunidades."],
  ["02", "AI Agents", "Apoiam pesquisa, qualificação, preparação de reuniões e follow-ups a partir do contexto da operação."],
  ["03", "Automation Engine", "Conecta processos e ferramentas para transformar decisões em tarefas, notificações e fluxos operacionais."],
];

export function PlatformSection() {
  return <section id="platform" className="section-dark section-pad platform-section">
    <div className="container">
      <Reveal className="section-heading centered platform-heading">
        <span className="kicker">VANT PLATFORM</span>
        <h2>Inteligência comercial que transforma dados em decisões e decisões em <span>execução.</span></h2>
        <p>A VANT Platform conecta Revenue Intelligence, AI Agents e Automation Engine para interpretar a operação comercial, identificar oportunidades e apoiar a execução dos próximos passos.</p>
      </Reveal>

      <Reveal className="platform-interface">
        <div className="platform-interface-bar"><span /><span /><span /><strong>VANT PLATFORM</strong><small>INTERFACE DEMONSTRATIVA</small></div>
        <img src="/images/vant-platform-dashboard.jpg" alt="Dashboard da VANT Platform com visão de operação comercial, pipeline e recomendações de inteligência artificial" loading="lazy" decoding="async" />
      </Reveal>

      <div className="platform-capabilities">
        {capabilities.map(([number, title, description]) => <Reveal className="platform-capability" key={number}>
          <div className="platform-capability-top"><span>{number}</span><i aria-hidden="true">↗</i></div>
          <h3>{title}</h3>
          <p>{description}</p>
        </Reveal>)}
      </div>

      <Reveal className="platform-cta-wrap"><a className="button" href="#diagnostico">Conhecer a VANT Platform <span className="arrow" aria-hidden="true">→︎</span></a></Reveal>
    </div>
  </section>;
}
