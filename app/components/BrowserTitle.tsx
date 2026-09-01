"use client";

import { useEffect } from "react";

export function BrowserTitle() {
  useEffect(() => {
    document.title = "VANT";
  }, []);

  return null;
}
