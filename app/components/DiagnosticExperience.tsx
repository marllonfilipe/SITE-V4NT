"use client";

import { useEffect, useMemo, useState } from "react";

type QuestionId = "bottleneck" | "process" | "crm" | "execution" | "moment" | "support";
type Answers = Partial<Record<QuestionId, string>>;

type Recommendation = {
  product: string;
  eyebrow: string;
  description: string;
  nextStep: string;
};

const questions: { id: QuestionId; eyebrow: string; title: string; options: { label: string; value: string }[] }[] = [
  {
    id: "bottleneck",
    eyebrow: "01 · IDENTIFICAR",
    title: "Em qual ponto a operação comercial perde mais capacidade hoje?",
    options: [
      { label: "Geração de oportunidades qualificadas", value: "acquisition" },
      { label: "Organização do processo e pipeline", value: "process" },
      { label: "Conversão entre etapas", value: "conversion" },
      { label: "Uso do CRM e qualidade dos dados", value: "crm" },
      { label: "Tarefas manuais e falta de automação", value: "automation" },
      { label: "Aplicação prática de IA", value: "ai" },
      { label: "Ainda não conseguimos identificar", value: "unknown" },
    ],
  },
  {
    id: "process",
    eyebrow: "02 · ESTRUTURAR",
    title: "O processo comercial está estruturado com critérios claros?",
    options: [
      { label: "Temos etapas, critérios, cadências e responsáveis definidos", value: "structured" },
      { label: "Existem etapas, mas cada pessoa opera de um jeito", value: "inconsistent" },
      { label: "O processo depende muito de indicação e experiência individual", value: "referral" },
      { label: "Não existe um processo comercial documentado", value: "missing" },
    ],
  },
  {
    id: "crm",
    eyebrow: "03 · CENTRALIZAR",
    title: "O CRM funciona como centro da operação?",
    options: [
      { label: "Sim, orienta rotina, gestão e decisões", value: "central" },
      { label: "Está implantado, mas é pouco utilizado", value: "underused" },
      { label: "É usado apenas para registrar contatos", value: "records" },
      { label: "Temos dados espalhados em planilhas e ferramentas", value: "scattered" },
      { label: "Ainda precisamos implantar ou reorganizar o CRM", value: "missing" },
    ],
  },
  {
    id: "execution",
    eyebrow: "04 · IMPLEMENTAR",
    title: "Onde a equipe mais perde tempo na execução?",
    options: [
      { label: "Atualização manual de dados", value: "data" },
      { label: "Follow-ups e cadências", value: "followup" },
      { label: "Distribuição e priorização de oportunidades", value: "priorities" },
      { label: "Relatórios e acompanhamento", value: "reporting" },
      { label: "Integração entre ferramentas", value: "integration" },
      { label: "Não temos visibilidade suficiente para identificar", value: "unknown" },
    ],
  },
  {
    id: "moment",
    eyebrow: "05 · PRIORIZAR",
    title: "Qual cenário descreve melhor o momento da empresa?",
    options: [
      { label: "Sei que existe um gargalo, mas preciso identificar qual", value: "diagnose" },
      { label: "Sei o gargalo e preciso implementar uma solução", value: "implement" },
      { label: "Temos gargalos em várias áreas da operação", value: "multiple" },
      { label: "Precisamos crescer com mais previsibilidade", value: "predictability" },
    ],
  },
  {
    id: "support",
    eyebrow: "06 · EVOLUIR",
    title: "Que tipo de apoio você procura agora?",
    options: [
      { label: "Diagnosticar e priorizar", value: "score" },
      { label: "Implementar um processo específico", value: "process" },
      { label: "Reorganizar o CRM e os dados", value: "crm" },
      { label: "Automatizar a operação", value: "automation" },
      { label: "Estruturar a operação comercial inteira", value: "system" },
      { label: "Construir capacidade interna com acompanhamento", value: "mentoring" },
    ],
  },
];

function getRecommendation(answers: Answers): Recommendation {
  const bottleneck = answers.bottleneck;
  const moment = answers.moment;
  const support = answers.support;

  if (moment === "diagnose" || support === "score" || bottleneck === "unknown") {
    return {
      product: "VANT Score",
      eyebrow: "PORTA DE ENTRADA",
      description: "O próximo passo é identificar o gargalo com clareza antes de escolher uma frente de implementação.",
      nextStep: "O diagnóstico organiza evidências, prioridades e o plano para o próximo Sprint.",
    };
  }

  if (moment === "multiple" || moment === "predictability" || support === "system") {
    return {
      product: "VANT Revenue System",
      eyebrow: "OPERAÇÃO INTEGRADA",
      description: "Os sinais indicam gargalos em mais de uma frente e necessidade de coordenar processo, dados e tecnologia.",
      nextStep: "O VANT Revenue System organiza a evolução da operação como um sistema único.",
    };
  }

  if (support === "mentoring") {
    return {
      product: "LinkedIn Revenue Mentoring",
      eyebrow: "CAPACITAÇÃO",
      description: "O momento pede método, acompanhamento e construção de capacidade interna para a equipe.",
      nextStep: "A mentoria orienta líderes e equipes na aplicação do método com autonomia.",
    };
  }

  if (bottleneck === "acquisition") {
    return {
      product: "LinkedIn Revenue Sprint",
      eyebrow: "GERAR DEMANDA",
      description: "A prioridade parece estar em estruturar aquisição, posicionamento, prospecção e cadências.",
      nextStep: "O Sprint implementa a frente de demanda com escopo e rotina de execução definidos.",
    };
  }

  if (bottleneck === "crm" || answers.crm === "underused" || answers.crm === "scattered" || answers.crm === "missing" || support === "crm") {
    return {
      product: "Revenue CRM Sprint",
      eyebrow: "CENTRALIZAR",
      description: "A operação precisa transformar o CRM em centro de dados, rotina e tomada de decisão.",
      nextStep: "O Sprint implanta ou reorganiza o CRM para apoiar a execução comercial.",
    };
  }

  if (bottleneck === "automation" || bottleneck === "ai" || answers.execution === "data" || answers.execution === "integration" || support === "automation") {
    return {
      product: bottleneck === "ai" ? "AI Productivity Sprint" : "Automation Sprint",
      eyebrow: bottleneck === "ai" ? "APLICAR IA" : "AUTOMATIZAR",
      description: bottleneck === "ai" ? "A prioridade está em aplicar IA de forma prática à produtividade comercial." : "A operação perde tempo em tarefas repetitivas e conexões manuais entre ferramentas.",
      nextStep: bottleneck === "ai" ? "O Sprint traduz IA em rotinas úteis para a equipe comercial." : "O Sprint configura automações para reduzir trabalho manual e organizar fluxos críticos.",
    };
  }

  return {
    product: "Revenue Process Sprint",
    eyebrow: "ORGANIZAR",
    description: "Os sinais indicam que a operação precisa de mais clareza em etapas, critérios, cadências e responsabilidades.",
    nextStep: "O Sprint estrutura o processo para dar consistência à execução comercial.",
  };
}

export function DiagnosticExperience() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [submitted, setSubmitted] = useState(false);
  const recommendation = useMemo(() => getRecommendation(answers), [answers]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const trigger = target?.closest('a[href="#diagnostico"]');
      if (!trigger) return;
      event.preventDefault();
      setIsOpen(true);
      setStep(0);
      setAnswers({});
      setSubmitted(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const currentQuestion = questions[step] ?? questions[0];
  const selectedValue = answers[currentQuestion.id];
  const isResult = step === questions.length;

  const selectAnswer = (value: string) => {
    setAnswers(current => ({ ...current, [currentQuestion.id]: value }));
  };

  const nextStep = () => {
    if (!selectedValue) return;
    setStep(current => current + 1);
  };

  const previousStep = () => setStep(current => Math.max(0, current - 1));

  const scrollToForm = () => {
    setIsOpen(false);
    window.setTimeout(() => document.querySelector("#formulario")?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Nome: ${formData.get("name")}`,
      `Empresa: ${formData.get("company")}`,
      `E-mail: ${formData.get("email")}`,
      `WhatsApp: ${formData.get("phone")}`,
      `Cargo: ${formData.get("role")}`,
      `Contexto: ${formData.get("context") || "Não informado"}`,
      `Diagnóstico rápido: ${recommendation.product} — ${recommendation.description}`,
    ].join("\n");
    setSubmitted(true);
    window.location.href = `mailto:contato@v4nt.com.br?subject=${encodeURIComponent("Quero diagnosticar minha operação")}&body=${encodeURIComponent(body)}`;
  };

  return <>
    <section id="formulario" className="lead-form-section section-light section-pad">
      <div className="container lead-form-layout">
        <div className="lead-form-copy">
          <span className="kicker dark">PRÓXIMO PASSO</span>
          <h2>Transforme a leitura inicial em uma <span>prioridade clara.</span></h2>
          <p>Compartilhe seus dados e o contexto da operação. A VANT usa o diagnóstico para indicar o próximo passo com mais precisão.</p>
          <div className="lead-form-note"><strong>VANT Score</strong><span>Diagnóstico da operação · Plano priorizado · 7–14 dias</span></div>
        </div>
        <form className="lead-form" onSubmit={handleFormSubmit}>
          <div className="lead-form-fields">
            <label>Nome<input name="name" required placeholder="Seu nome" /></label>
            <label>Empresa<input name="company" required placeholder="Nome da empresa" /></label>
            <label>E-mail corporativo<input type="email" name="email" required placeholder="voce@empresa.com" /></label>
            <label>WhatsApp<input name="phone" placeholder="(00) 00000-0000" /></label>
            <label>Cargo<input name="role" placeholder="Seu cargo" /></label>
            <label className="lead-form-full">O que está acontecendo na operação?<textarea name="context" rows={4} placeholder="Conte brevemente sobre o gargalo, processo ou prioridade atual." /></label>
          </div>
          <div className="lead-form-diagnostic"><span>LEITURA INICIAL</span><p>{recommendation.product} · {recommendation.eyebrow}</p></div>
          <button className="button" type="submit">Receber recomendação da VANT <span className="arrow" aria-hidden="true">→︎</span></button>
          {submitted && <small className="lead-form-success">Seu pedido foi preparado para envio por e-mail.</small>}
        </form>
      </div>
    </section>

    {isOpen && <div className="diagnostic-overlay" role="presentation" onClick={event => { if (event.target === event.currentTarget) setIsOpen(false); }}>
      <div className="diagnostic-modal" role="dialog" aria-modal="true" aria-labelledby="diagnostic-title">
        <button className="diagnostic-close" type="button" aria-label="Fechar diagnóstico" onClick={() => setIsOpen(false)}>×</button>
        <div className="diagnostic-topline"><span>VANT DIAGNÓSTICO RÁPIDO</span><strong>{isResult ? "RESULTADO" : `${String(step + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`}</strong></div>
        {!isResult ? <>
          <div className="diagnostic-progress"><i style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div>
          <div className="diagnostic-question">
            <span className="kicker">{currentQuestion.eyebrow}</span>
            <h2 id="diagnostic-title">{currentQuestion.title}</h2>
            <div className="diagnostic-options">{currentQuestion.options.map(option => <button className={selectedValue === option.value ? "is-selected" : ""} key={option.value} type="button" onClick={() => selectAnswer(option.value)}>{option.label}<span>→︎</span></button>)}</div>
          </div>
          <div className="diagnostic-actions"><button className="diagnostic-back" type="button" onClick={previousStep} disabled={step === 0}>Voltar</button><button className="button" type="button" onClick={nextStep} disabled={!selectedValue}>{step === questions.length - 1 ? "Ver recomendação" : "Próxima pergunta"} <span className="arrow" aria-hidden="true">→︎</span></button></div>
        </> : <div className="diagnostic-result">
          <span className="kicker">{recommendation.eyebrow}</span>
          <h2 id="diagnostic-title">A prioridade inicial parece ser <span>{recommendation.product}.</span></h2>
          <p>{recommendation.description}</p>
          <div className="diagnostic-next"><small>PRÓXIMO PASSO</small><strong>{recommendation.nextStep}</strong></div>
          <p className="diagnostic-disclaimer">Esta é uma indicação inicial baseada nas suas respostas. O VANT Score confirma o gargalo e define a prioridade de implementação.</p>
          <button className="button" type="button" onClick={scrollToForm}>Preencher formulário <span className="arrow" aria-hidden="true">→︎</span></button>
        </div>}
      </div>
    </div>}
  </>;
}
