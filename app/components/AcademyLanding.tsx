import { academyEntry } from "../academy/paths";
import { Reveal } from "./Reveal";

const benefits = [
  "Posicionamento estratégico",
  "Construção de autoridade",
  "Mapeamento de empresas e decisores",
  "Prospecção B2B",
  "Conversas e conversão",
  "Inteligência Artificial aplicada",
];

const categories = [
  ["Vendas e Desenvolvimento Comercial", "Prospecção, negociação e conversão.", "03_Vendas_e_Desenvolvimento_Comercial.webp"],
  ["LinkedIn e Prospecção B2B", "Posicionamento e geração de oportunidades.", "04_LinkedIn_e_Prospeccao_B2B.webp"],
  ["Inteligência Artificial", "IA aplicada à rotina comercial.", "05_Inteligencia_Artificial_Aplicada.webp"],
  ["Gestão e Processos", "Métodos para organizar a operação.", "06_Gestao_e_Processos.webp"],
];

const approach = [
  ["01", "Entender", "Compreender estratégias e fundamentos."],
  ["02", "Estruturar", "Organizar um método de aplicação."],
  ["03", "Executar", "Transformar conhecimento em ações práticas."],
  ["04", "Evoluir", "Desenvolver novas capacidades continuamente."],
];

const testimonialExamples = [
  ["Prospecção B2B", "Nos exercícios, ficou mais claro quem eu precisava abordar e como começar uma conversa sem depender de um roteiro pronto."],
  ["Gestão comercial", "A mentoria me ajudou a organizar os próximos passos do funil e a definir o que acompanhar na rotina do time."],
  ["IA aplicada", "Saí com ideias de como usar IA para pesquisar empresas e preparar reuniões, sem perder o contexto de cada oportunidade."],
];

function AcademyImage({ file, priority = false }: { file: string; priority?: boolean }) {
  return <img className="academy-scene-image" src={`/images/academy/${file}.webp`} alt="" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" />;
}

export function AcademyLanding({ standalone = false }: { standalone?: boolean }) {
  return <div className={standalone ? "academy-page" : "academy-page academy-page-embedded"}>
      <section id="academy-inicio" className="academy-scene academy-hero section-dark">
        <AcademyImage file="01_Hero_VANT_Academy" priority={standalone} />
        <div className="grid-overlay" aria-hidden="true" />
        <div className="container academy-scene-content">
          <div className="academy-copy">
            <span className="eyebrow"><i /> VANT ACADEMY</span>
            <h1>Conhecimento estratégico para quem quer <em>crescer.</em></h1>
            <p>Mentorias e treinamentos gravados para assistir no seu ritmo e aplicar o que aprende na rotina comercial.</p>
            <div className="academy-actions">
              <a className="button" href="#academy-catalog">Explorar mentorias <span className="arrow" aria-hidden="true">→︎</span></a>
              <a className="button button-ghost" href={academyEntry}>Entrar na Academy</a>
            </div>
          </div>
        </div>
      </section>

      <section id="academy-mentoring" className="academy-scene academy-feature section-light">
        <AcademyImage file="02_LinkedIn_Revenue_Mentoring" />
        <div className="container academy-scene-content">
          <div className="academy-copy">
            <span className="kicker dark">MENTORIA GRAVADA</span>
            <h2>Transforme o LinkedIn em um <span>canal comercial.</span></h2>
            <p>Estruture seu posicionamento, encontre decisores e inicie conversas com potenciais clientes B2B.</p>
            <ul id="academy-benefits" className="academy-benefits">{benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
            <div className="academy-actions"><a className="button" href="#academy-catalog">Conhecer a mentoria <span className="arrow" aria-hidden="true">→︎</span></a><a className="academy-text-link" href="#academy-benefits">Ver o que você vai aprender <span aria-hidden="true">→︎</span></a></div>
          </div>
        </div>
      </section>

      <section id="academy-categorias" className="section-dark section-pad academy-categories">
        <div className="container"><Reveal className="section-heading academy-heading"><span className="kicker">EXPLORE POR FRENTE</span><h2>Conhecimento para cada desafio da <span>operação.</span></h2><p>Conteúdos práticos para ampliar repertório, organizar decisões e aplicar novas capacidades.</p></Reveal>
          <div className="academy-category-grid">{categories.map(([title, text, image]) => <article className="academy-category-card" key={title}><img src={`/images/academy/${image}`} alt="" loading="lazy" decoding="async" /><div><h3>{title}</h3><p>{text}</p><a href="#academy-catalog">Explorar conteúdos <span aria-hidden="true">→︎</span></a></div></article>)}</div>
        </div>
      </section>

      <section id="academy-catalog" className="section-light section-pad academy-catalog">
        <div className="container"><Reveal className="section-heading academy-heading"><span className="kicker dark">CATÁLOGO DE MENTORIAS</span><h2>Encontre a mentoria certa para sua <span>evolução.</span></h2><p>Escolha uma mentoria gravada e volte às aulas sempre que precisar.</p></Reveal>
          <Reveal className="academy-product-card"><img src="/images/academy/02_LinkedIn_Revenue_Mentoring.webp" alt="LinkedIn Revenue Mentoring" loading="lazy" decoding="async" /><div className="academy-product-content"><div className="academy-product-top"><span>DISPONÍVEL</span><small>MENTORIA GRAVADA</small></div><h3>LinkedIn Revenue Mentoring</h3><p>Estruture posicionamento, prospecção e conversas comerciais para transformar o LinkedIn em uma frente de oportunidades B2B.</p><div className="academy-product-meta"><span>LinkedIn e Prospecção B2B</span><span>Aplicação prática</span></div><a className="button" href="#academy-mentoring">Conhecer mentoria <span className="arrow" aria-hidden="true">→︎</span></a></div></Reveal>
        </div>
      </section>

      <section id="academy-abordagem" className="academy-scene academy-approach section-dark">
        <AcademyImage file="07_Nossa_Abordagem" />
        <div className="container academy-scene-content"><div className="academy-copy"><span className="kicker">NOSSA ABORDAGEM</span><h2>Aprenda o método. <span>Aplique na operação.</span></h2><p>Da estratégia à execução, cada etapa prepara você para agir.</p></div><div className="academy-steps">{approach.map(([number, title, text]) => <div className="academy-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div>
      </section>

      <section id="academy-sobre" className="academy-scene academy-about section-light"><AcademyImage file="08_Sobre_a_VANT_Academy" /><div className="container academy-scene-content"><div className="academy-copy"><span className="kicker dark">SOBRE A VANT ACADEMY</span><h2>Educação para os desafios reais dos <span>negócios.</span></h2><p>A VANT Academy é a frente educacional da V4NT, focada em desenvolvimento comercial, tecnologia e IA aplicada aos negócios.</p></div></div></section>

      <section id="academy-depoimentos" className="section-dark section-pad academy-testimonials">
        <div className="container">
          <div className="section-heading academy-heading">
            <span className="kicker">DEPOIMENTOS</span><h2>O aprendizado <span>na prática.</span></h2>
            <p>Relatos ilustrativos, ainda não coletados de alunos reais.</p>
          </div>
          <div className="academy-testimonial-grid">
            {testimonialExamples.map(([topic, quote]) => <figure className="academy-testimonial" key={topic}>
              <span>EXEMPLO DE DEPOIMENTO</span>
              <blockquote>“{quote}”</blockquote>
              <figcaption>{topic}</figcaption>
            </figure>)}
          </div>
        </div>
      </section>

      <section id="academy-cta" className="academy-scene academy-final section-light"><AcademyImage file="09_CTA_Final" /><div className="container academy-scene-content"><div className="academy-copy"><span className="kicker dark">VANT ACADEMY</span><h2>Pronto para o <span>próximo passo?</span></h2><p>Entre para explorar os conteúdos gravados da VANT Academy.</p><a className="button" href={academyEntry}>Entrar na Academy <span className="arrow" aria-hidden="true">→︎</span></a></div></div></section>
    </div>;
}
