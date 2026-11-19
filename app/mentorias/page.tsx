import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "VANT Academy | Conhecimento estratégico para quem quer crescer",
  description: "Mentorias e treinamentos da VANT para desenvolver competências comerciais e transformar conhecimento em aplicação prática.",
};

const benefits = [
  "Posicionamento estratégico",
  "Construção de autoridade",
  "Mapeamento de empresas e decisores",
  "Prospecção B2B",
  "Conversas e conversão",
  "Inteligência Artificial aplicada",
];

const categories = [
  ["Vendas e Desenvolvimento Comercial", "Estratégias para prospectar, negociar e converter oportunidades.", "03_Vendas_e_Desenvolvimento_Comercial.webp"],
  ["LinkedIn e Prospecção B2B", "Posicionamento, autoridade e geração de oportunidades comerciais.", "04_LinkedIn_e_Prospeccao_B2B.webp"],
  ["Inteligência Artificial", "Aplicações de IA para produtividade e inteligência comercial.", "05_Inteligencia_Artificial_Aplicada.webp"],
  ["Gestão e Processos", "Métodos para organizar e evoluir operações comerciais.", "06_Gestao_e_Processos.webp"],
];

const approach = [
  ["01", "Entender", "Compreender estratégias e fundamentos."],
  ["02", "Estruturar", "Organizar um método de aplicação."],
  ["03", "Executar", "Transformar conhecimento em ações práticas."],
  ["04", "Evoluir", "Desenvolver novas capacidades continuamente."],
];

export default function MentoriasPage() {
  return <>
    <Header />
    <main className="academy-page">
      <section id="academy-inicio" className="academy-hero section-dark">
        <div className="academy-hero-image" aria-hidden="true" />
        <div className="grid-overlay" aria-hidden="true" />
        <div className="container academy-hero-content">
          <Reveal className="academy-hero-copy">
            <span className="eyebrow"><i /> VANT ACADEMY</span>
            <h1>Conhecimento estratégico para quem quer <em>crescer.</em></h1>
            <p>Mentorias e treinamentos para desenvolver competências comerciais, ampliar sua visão de negócios e transformar conhecimento em aplicação prática.</p>
            <a className="button" href="#academy-catalog">Explorar mentorias <span className="arrow" aria-hidden="true">→︎</span></a>
          </Reveal>
        </div>
      </section>

      <section id="academy-mentoring" className="section-light section-pad academy-feature">
        <div className="container academy-feature-grid">
          <Reveal className="academy-feature-image"><img src="/images/academy/02_LinkedIn_Revenue_Mentoring.webp" alt="Profissional estudando uma operação comercial" loading="lazy" decoding="async" /></Reveal>
          <Reveal className="academy-feature-copy">
            <span className="kicker dark">MENTORIA GRAVADA</span>
            <h2>Transforme seu LinkedIn em um canal de geração de <span>oportunidades comerciais.</span></h2>
            <p>Aprenda a estruturar seu posicionamento, identificar decisores, desenvolver prospecções B2B e transformar conexões em oportunidades de negócio.</p>
            <ul className="academy-benefits">{benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul>
            <div className="academy-actions"><a className="button" href="#academy-catalog">Conhecer a mentoria <span className="arrow" aria-hidden="true">→︎</span></a><a className="academy-text-link" href="#academy-benefits">Ver o que você vai aprender <span aria-hidden="true">→︎</span></a></div>
          </Reveal>
        </div>
      </section>

      <section id="academy-categorias" className="section-dark section-pad academy-categories">
        <div className="container"><Reveal className="section-heading centered academy-heading"><span className="kicker">EXPLORE POR FRENTE</span><h2>Conhecimento para cada desafio da <span>operação.</span></h2><p>Conteúdos práticos para ampliar repertório, organizar decisões e aplicar novas capacidades.</p></Reveal>
          <div className="academy-category-grid">{categories.map(([title, text, image]) => <Reveal className="academy-category-card" key={title}><img src={`/images/academy/${image}`} alt={title} loading="lazy" decoding="async" /><div><h3>{title}</h3><p>{text}</p><a href="#academy-catalog">Explorar conteúdos <span aria-hidden="true">→︎</span></a></div></Reveal>)}</div>
        </div>
      </section>

      <section id="academy-catalog" className="section-light section-pad academy-catalog">
        <div className="container"><Reveal className="section-heading horizontal academy-heading"><div><span className="kicker dark">CATÁLOGO DE MENTORIAS</span><h2>Encontre a mentoria certa para sua <span>evolução.</span></h2></div><p>Conteúdos práticos desenvolvidos para diferentes desafios profissionais e comerciais.</p></Reveal>
          <Reveal className="academy-product-card"><img src="/images/academy/02_LinkedIn_Revenue_Mentoring.webp" alt="LinkedIn Revenue Mentoring" loading="lazy" decoding="async" /><div className="academy-product-content"><div className="academy-product-top"><span>DISPONÍVEL</span><small>MENTORIA GRAVADA</small></div><h3>LinkedIn Revenue Mentoring</h3><p>Estruture posicionamento, prospecção e conversas comerciais para transformar o LinkedIn em uma frente de oportunidades B2B.</p><div className="academy-product-meta"><span>LinkedIn e Prospecção B2B</span><span>Aplicação prática</span></div><a className="button" href="#academy-mentoring">Conhecer mentoria <span className="arrow" aria-hidden="true">→︎</span></a></div></Reveal>
        </div>
      </section>

      <section id="academy-abordagem" className="section-dark section-pad academy-approach">
        <div className="container academy-approach-grid"><Reveal className="academy-approach-copy"><span className="kicker">NOSSA ABORDAGEM</span><h2>Conhecimento que vai além da <span>teoria.</span></h2><p>Nossa abordagem conecta estratégia, método e execução para transformar aprendizado em aplicação prática.</p><a className="button" href="#academy-sobre">Conhecer a VANT Academy <span className="arrow" aria-hidden="true">→︎</span></a></Reveal><Reveal className="academy-approach-image"><img src="/images/academy/07_Nossa_Abordagem.webp" alt="Equipe aplicando estratégia comercial em conjunto" loading="lazy" decoding="async" /></Reveal></div>
        <div className="container academy-steps">{approach.map(([number, title, text]) => <Reveal className="academy-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </section>

      <section id="academy-sobre" className="section-light section-pad academy-about"><div className="container academy-about-grid"><Reveal className="academy-about-image"><img src="/images/academy/08_Sobre_a_VANT_Academy.webp" alt="Especialista apresentando conhecimento comercial" loading="lazy" decoding="async" /></Reveal><Reveal className="academy-about-copy"><span className="kicker dark">SOBRE A VANT ACADEMY</span><h2>Educação conectada aos desafios reais dos <span>negócios.</span></h2><p>A VANT Academy é a frente educacional da V4NT, criada para compartilhar conhecimentos em desenvolvimento comercial, tecnologia e inteligência aplicada aos negócios.</p><p>Nosso objetivo é transformar experiência em conhecimento prático para profissionais e empresas.</p><a className="button" href="#academy-catalog">Explorar mentorias <span className="arrow" aria-hidden="true">→︎</span></a></Reveal></div></section>

      <section id="academy-cta" className="academy-final section-dark"><div className="academy-final-image" aria-hidden="true" /><div className="grid-overlay" aria-hidden="true" /><div className="container academy-final-content"><Reveal><span className="kicker">VANT ACADEMY</span><h2>Sua próxima oportunidade começa com uma nova <span>capacidade.</span></h2><p>Desenvolva suas competências, amplie sua visão comercial e prepare-se para novos desafios.</p><a className="button button-large" href="#academy-catalog">Encontrar minha mentoria <span className="arrow" aria-hidden="true">→︎</span></a></Reveal></div></section>
    </main>
    <Footer />
  </>;
}
