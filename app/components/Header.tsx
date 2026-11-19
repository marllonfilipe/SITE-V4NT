"use client";

import { useEffect, useState } from "react";
import { academyEntry, academyRegistration } from "../academy/paths";

const sectionLinks = [["Soluções", "#solucoes"], ["VANT Platform", "#platform"], ["Como funciona", "#metodo"], ["Cases", "#cases"], ["Sobre", "#sobre"]] as const;
const academyAnchor = "#academy-inicio";

function AcademyAccessActions({ onClick }: { onClick?: () => void }) {
  return <div className="academy-access-actions">
    <a className="button button-small button-ghost" href={academyEntry} onClick={onClick}>Login</a>
    <a className="button button-small" href={academyRegistration} onClick={onClick}>Cadastro</a>
  </div>;
}

export function Header({ academy = false }: { academy?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const [academySelected, setAcademySelected] = useState(false);
  const showingAcademy = academy || academySelected;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const syncAcademy = () => setAcademySelected(Boolean(document.querySelector(".academy-page-embedded :target")));
    const sections = ["inicio", ...sectionLinks.map(([, href]) => href.slice(1))].map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveHref(`#${visible.target.id}`);
    }, { rootMargin: "-28% 0px -58%", threshold: [0, .2, .5, .8] });
    onScroll();
    syncAcademy();
    sections.forEach(section => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", syncAcademy);
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("hashchange", syncAcademy); };
  }, []);
  const resolveHref = (href: string) => academy ? `/${href}` : href;
  const brandHref = academy ? "/" : "#inicio";
  const academyClass = showingAcademy ? "is-active" : "";
  return <>
  <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner">
      <a className="brand" href={brandHref} aria-label="VANT - início"><img src="/images/vant-logo.webp" alt="VANT" decoding="async" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{sectionLinks.map(([label, href]) => <a className={!showingAcademy && activeHref === href ? "is-active" : ""} key={href} href={resolveHref(href)}>{label}</a>)}<a className={academyClass} href={academyAnchor}>VANT Academy</a></nav>
      {showingAcademy
        ? <div className="header-cta"><AcademyAccessActions /></div>
        : <a className="button button-small header-cta" href="#diagnostico">Diagnosticar minha operação</a>}
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menu" onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegação móvel">
      {sectionLinks.map(([label, href]) => <a className={!showingAcademy && activeHref === href ? "is-active" : ""} key={href} href={resolveHref(href)} onClick={() => setOpen(false)}>{label}</a>)}
      <a className={academyClass} href={academyAnchor} onClick={() => setOpen(false)}>VANT Academy</a>
      {showingAcademy
        ? <AcademyAccessActions onClick={() => setOpen(false)} />
        : <a className="button" href="#diagnostico" onClick={() => setOpen(false)}>Diagnosticar minha operação</a>}
    </nav>
  </header>
  {showingAcademy
    ? <div className="mobile-sticky-cta academy-sticky-actions"><AcademyAccessActions /></div>
    : <a className="mobile-sticky-cta" href="#diagnostico">Diagnosticar minha operação <span className="arrow" aria-hidden="true">→︎</span></a>}
  </>;
}

