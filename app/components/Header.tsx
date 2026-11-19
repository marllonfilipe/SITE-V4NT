"use client";

import { useEffect, useState } from "react";

const sectionLinks = [["Soluções", "#solucoes"], ["VANT Platform", "#platform"], ["Como funciona", "#metodo"], ["VANT Score", "#score"], ["Cases", "#cases"], ["Sobre", "#sobre"]] as const;
const links = [...sectionLinks, ["Mentorias", "/mentorias"], ["VANT Academy", "/academy/login"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");
  const [pathname, setPathname] = useState("");
  const isAcademy = pathname === "/mentorias" || pathname.startsWith("/mentorias/") || pathname === "/academy" || pathname.startsWith("/academy/");
  const isAcademyExperience = pathname === "/academy" || pathname.startsWith("/academy/");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const syncPath = () => setPathname(window.location.pathname);
    const sections = ["inicio", ...sectionLinks.map(([, href]) => href.slice(1))].map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveHref(`#${visible.target.id}`);
    }, { rootMargin: "-28% 0px -58%", threshold: [0, .2, .5, .8] });
    onScroll();
    syncPath();
    sections.forEach(section => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", syncPath);
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("popstate", syncPath); };
  }, []);
  const resolveHref = (href: string) => href.startsWith("#") && isAcademy ? `/${href}` : href;
  const brandHref = isAcademy ? "/" : "#inicio";
  const ctaHref = isAcademyExperience ? "/" : isAcademy ? "/academy/login" : "#diagnostico";
  const ctaLabel = isAcademyExperience ? "Voltar ao site" : isAcademy ? "Entrar na Academy" : "Diagnosticar minha operação";
  return <>
  <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <div className="header-inner">
      <a className="brand" href={brandHref} aria-label="VANT - início"><img src="/images/vant-logo.webp" alt="VANT" decoding="async" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">{links.map(([label, href]) => <a className={(isAcademy && ((href === "/mentorias" && pathname === "/mentorias") || (href === "/academy/login" && isAcademyExperience))) || (!isAcademy && activeHref === href) ? "is-active" : ""} key={href} href={resolveHref(href)}>{label}</a>)}</nav>
      <a className="button button-small header-cta" href={ctaHref}>{ctaLabel}</a>
      <button className="menu-button" aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menu" onClick={() => setOpen(!open)}><span /><span /></button>
    </div>
    <nav id="mobile-menu" className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Navegação móvel">{links.map(([label, href]) => <a className={(isAcademy && ((href === "/mentorias" && pathname === "/mentorias") || (href === "/academy/login" && isAcademyExperience))) || (!isAcademy && activeHref === href) ? "is-active" : ""} key={href} href={resolveHref(href)} onClick={() => setOpen(false)}>{label}</a>)}<a className="button" href={ctaHref} onClick={() => setOpen(false)}>{ctaLabel}</a></nav>
  </header>
  <a className="mobile-sticky-cta" href={ctaHref}>{ctaLabel} <span className="arrow" aria-hidden="true">→︎</span></a>
  </>;
}

