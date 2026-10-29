"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Shrink after scrolling past SHRINK_AT; expand again only near the top.
// The gap stops the header flickering as its own height change shifts the page.
const SHRINK_AT = 64;
const EXPAND_AT = 4;
// Pages need this much scroll room or shrinking could pull them back under EXPAND_AT.
const MIN_SCROLL_ROOM = 160;

/**
 * Keeps the header, toolbar and action bar pinned to the top while the page
 * scrolls, and sets `data-scrolled` so children can switch to a compact style
 * (see HospitalHeader). Its height is published as `--chrome-height` so
 * `scroll-padding-top` stops navigation scrolls from tucking content underneath it.
 */
export function StickyChrome({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(([entry]) => {
      root.style.setProperty("--chrome-height", `${entry.borderBoxSize[0].blockSize}px`);
    });
    observer.observe(element);
    return () => {
      observer.disconnect();
      root.style.removeProperty("--chrome-height");
    };
  }, []);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled((current) => {
        if (current) return y > EXPAND_AT;
        const room = document.documentElement.scrollHeight - window.innerHeight;
        return y > SHRINK_AT && room > MIN_SCROLL_ROOM;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} data-scrolled={scrolled} className="group/chrome sticky top-0 z-30 bg-white">
      {children}
    </div>
  );
}
