"use client";

import { useEffect, useState } from "react";

const links = [["Soluções", "#solucoes"], ["Como funciona", "#metodo"], ["VANT Score", "#score"], ["Cases", "#cases"], ["Sobre", "#sobre"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner">
      <a className="brand" href="#inicio" aria-label="VANT - início"><img src="/images/vant-logo.png" alt="VANT" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="button button-small header-cta" href="#diagnostico">Diagnosticar minha operação</a>
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menu" onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegação móvel">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button" href="#diagnostico" onClick={() => setOpen(false)}>Diagnosticar minha operação</a></nav>
  </header>;
}
