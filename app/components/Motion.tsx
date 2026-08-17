"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { y: 46, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 1.15,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.fromTo(element, { yPercent: -7, scale: 1.08 }, {
          yPercent: 7,
          scale: 1.02,
          ease: "none",
          scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
      });

      const film = document.querySelector<HTMLElement>(".film-media");
      if (film) {
        gsap.fromTo(film, { scale: 1.14 }, {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: ".film-section", start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
      }
    });

    return () => context.revert();
  }, []);

  return null;
}

