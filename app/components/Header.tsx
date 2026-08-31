"use client";

import { useEffect, useState } from "react";

const links = [["Soluções", "#solucoes"], ["Como funciona", "#metodo"], ["VANT Score", "#score"], ["Cases", "#cases"], ["Sobre", "#sobre"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const sections = ["inicio", ...links.map(([, href]) => href.slice(1))].map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveHref(`#${visible.target.id}`);
    }, { rootMargin: "-28% 0px -58%", threshold: [0, .2, .5, .8] });
    onScroll();
    sections.forEach(section => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  return <>
  <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner">
      <a className="brand" href="#inicio" aria-label="VANT - início"><img src="/images/vant-logo.webp" alt="VANT" decoding="async" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([label, href]) => <a className={activeHref === href ? "is-active" : ""} key={href} href={href}>{label}</a>)}</nav>
      <a className="button button-small header-cta" href="#diagnostico">Diagnosticar minha operação</a>
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menu" onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegação móvel">{links.map(([label, href]) => <a className={activeHref === href ? "is-active" : ""} key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button" href="#diagnostico" onClick={() => setOpen(false)}>Diagnosticar minha operação</a></nav>
  </header>
  <a className="mobile-sticky-cta" href="#diagnostico">Diagnosticar minha operação <span className="arrow" aria-hidden="true">→︎</span></a>
  </>;
}
