import { Header } from "./Header";

export function PageHero({ eyebrow, title, subtitle, image, align = "center" }: { eyebrow: string; title: string; subtitle: string; image: string; align?: "center" | "left" }) {
  return (
    <>
      <Header overlay />
      <section className={`page-hero page-hero--${align}`}>
        <img className="page-hero-media" src={image} alt="" data-parallax />
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

