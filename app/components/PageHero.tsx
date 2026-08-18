"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";

export function PageHero({ eyebrow, title, subtitle, image, images, video, align = "center", shade = false }: { eyebrow: string; title: string; subtitle: string; image: string; images?: string[]; video?: string; align?: "center" | "left"; shade?: boolean }) {
  const slides = images?.length ? images : [image];
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (slides.length < 2) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5200);
    return () => window.clearInterval(timer);
  }, [slides.length]);
  return (
    <>
      <Header overlay />
      <section className={`page-hero page-hero--${align} ${!video && slides.length > 1 ? "page-hero--slideshow" : ""} ${shade ? "page-hero--strong-shade" : ""}`}>
        {video ? <video className="page-hero-media" autoPlay muted loop playsInline preload="auto"><source src={video} type="video/webm" /></video> : slides.length > 1 ? <div className="hero-slides">{slides.map((slide, index) => <img className={`hero-slide ${index === active ? "is-active" : ""}`} src={slide} alt="" key={slide} />)}</div> : <img className="page-hero-media" src={image} alt="" data-parallax />}
        <div className="page-hero-shade" />
        <div className="page-hero-content" data-reveal>
          <p className="eyebrow eyebrow--light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </section>
    </>
  );
}
