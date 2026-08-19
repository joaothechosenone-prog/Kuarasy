import Link from "next/link";

export function CTA({ title, subtitle, label = "Quero fazer minha reserva", href = "https://wa.me/5582981084726" }: { title: string; subtitle?: string; label?: string; href?: string }) {
  const external = href.startsWith("http");
  return (
    <section className="cta-section section-shell" data-reveal>
      <p className="eyebrow">Seu tempo começa aqui</p>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
      {external ? <a className="button button--green" href={href} target="_blank" rel="noreferrer">{label}</a> : <Link className="button button--green" href={href}>{label}</Link>}
      <p className="cta-disclaimer">Pessoas com restrições devem mencionar as necessidades no ato da reserva!</p>
    </section>
  );
}
