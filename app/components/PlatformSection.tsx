import { Reveal } from "./Reveal";

const capabilities = [
  ["01", "Revenue Intelligence", "Transforma dados comerciais em inteligência para identificar gargalos, analisar o pipeline, priorizar oportunidades e orientar decisões."],
  ["02", "AI Agents", "Apoia pesquisa de empresas, qualificação de leads, preparação de reuniões e follow-ups contextualizados."],
  ["03", "Automation Engine", "Conecta ferramentas, processos e canais para automatizar tarefas, movimentações comerciais, notificações e fluxos operacionais."],
];

export function PlatformSection() {
  return <section id="platform" className="section-dark section-pad platform-section">
    <div className="container">
      <Reveal className="section-heading horizontal platform-heading">
        <div>
          <span className="kicker">VANT PLATFORM</span>
          <h2>Inteligência comercial para transformar dados em <span>crescimento.</span></h2>
        </div>
        <p>Uma plataforma de inteligência comercial que conecta análise, inteligência artificial e automação para ajudar empresas a identificar oportunidades, tomar decisões melhores e executar operações comerciais com mais eficiência.</p>
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

      <Reveal className="platform-close">
        <strong>Da informação à decisão. Da decisão à execução.</strong>
        <span>A VANT Platform conecta inteligência, pessoas e processos em uma operação comercial integrada.</span>
      </Reveal>

      <Reveal className="platform-cta-wrap"><a className="button" href="#diagnostico">Conhecer a VANT Platform <span className="arrow" aria-hidden="true">→︎</span></a></Reveal>
    </div>
  </section>;
}

