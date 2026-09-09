"use client";

import { useLayoutEffect } from "react";

export function InitialScrollGuard() {
  useLayoutEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    if (window.location.hash) {
      return () => {
        window.history.scrollRestoration = previousRestoration;
      };
    }

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const frame = window.requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 0);
    resetScroll();

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  return null;
}
