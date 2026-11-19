"use client";

import { FormEvent, useState } from "react";

type Mode = "login" | "register";

export function AcademyAuth() {
  const [mode, setMode] = useState<Mode>("login");
  const [error, setError] = useState("");

  const switchMode = (nextMode: Mode) => {
    setMode(nextMode);
    setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = "/academy";
  };

  return <section className="academy-auth-page"><div className="academy-auth-glow" aria-hidden="true" /><div className="academy-auth-shell"><a className="academy-auth-brand" href="/"><img src="/images/vant-logo.webp" alt="VANT" /></a><div className="academy-auth-grid"><div className="academy-auth-intro"><span className="kicker">VANT ACADEMY</span><h1>Seu próximo passo começa <span>aqui.</span></h1><p>Acesse a VANT Academy e descubra mentorias e treinamentos para desenvolver suas capacidades profissionais e comerciais.</p><a className="academy-back-link" href="/">← Voltar ao site institucional</a></div><div className="academy-auth-card"><div className="academy-auth-tabs"><button className={mode === "login" ? "is-active" : ""} type="button" onClick={() => switchMode("login")}>Entrar</button><button className={mode === "register" ? "is-active" : ""} type="button" onClick={() => switchMode("register")}>Criar conta</button></div><div className="academy-auth-card-heading"><span>{mode === "login" ? "ACESSO À ACADEMY" : "NOVA CONTA"}</span><h2>{mode === "login" ? "Bem-vindo de volta." : "Comece sua jornada."}</h2></div><form noValidate onSubmit={handleSubmit}>{mode === "register" && <label>Nome completo<input name="name" placeholder="Seu nome" autoComplete="name" /></label>}<label>E-mail<input name="email" type="email" placeholder="voce@empresa.com" autoComplete="email" /></label><label>Senha<input name="password" type="password" placeholder="Mínimo de 6 caracteres" autoComplete={mode === "login" ? "current-password" : "new-password"} /></label>{mode === "register" && <><label>Confirmar senha<input name="confirmation" type="password" placeholder="Repita sua senha" autoComplete="new-password" /></label><label className="academy-check"><input name="terms" type="checkbox" /> <span>Aceito os termos de uso e a política de privacidade.</span></label></>}{mode === "login" && <a className="academy-recover" href="mailto:contato@v4nt.com.br?subject=Recuperação%20de%20acesso%20VANT%20Academy">Recuperar senha</a>}{error && <p className="academy-auth-error" role="alert">{error}</p>}<button className="button" type="submit">{mode === "login" ? "Entrar" : "Criar minha conta"}<span className="arrow" aria-hidden="true">→︎</span></button></form><small className="academy-auth-note">O botão leva você ao marketplace VANT Academy.</small></div></div></div></section>;
}
