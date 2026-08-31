"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

const revealCallbacks = new Map<Element, () => void>();
let revealObserver: IntersectionObserver | null = null;

function getRevealObserver() {
  if (revealObserver || typeof IntersectionObserver === "undefined") return revealObserver;
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const callback = revealCallbacks.get(entry.target);
      if (!callback) return;
      revealCallbacks.delete(entry.target);
      revealObserver?.unobserve(entry.target);
      callback();
    });
  }, { rootMargin: "0px 0px 360px", threshold: 0.01 });
  return revealObserver;
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || node.getBoundingClientRect().top <= window.innerHeight + 360) {
      setVisible(true);
      return;
    }
    const observer = getRevealObserver();
    if (!observer) {
      setVisible(true);
      return;
    }
    const reveal = () => setVisible(true);
    revealCallbacks.set(node, reveal);
    observer.observe(node);
    return () => {
      revealCallbacks.delete(node);
      observer.unobserve(node);
    };
  }, []);
  return <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
}
