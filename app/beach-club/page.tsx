import type { Metadata } from "next";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Motion } from "../components/Motion";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Beach Club | Pousada Kuarasy", description: "Piscina de frente para o mar, drinks autorais e o horizonte de Japaratinga." };

export default function BeachClubPage() {
  return <main><Motion />
    <PageHero eyebrow="Beach Club" title="Onde a piscina encontra o mar" subtitle="Drinks autorais, água na temperatura certa e a Praia do Boqueirão no horizonte." image="/media/pool-ocean.jpeg" />
    <section className="intro section-shell" data-reveal><p className="eyebrow">Aberto todos os dias</p><div className="intro-grid"><h2>Uma experiência que não tem hora para acabar</h2><div className="prose"><p>O Beach Club Kuarasy recebe também quem não está hospedado. Piscina com borda infinita, bar molhado das 11h às 17h e toda a estrutura de lazer criam um cenário raro no litoral alagoano.</p><p>A água permanece agradável mesmo à noite, e a experiência continua bem depois do pôr do sol.</p></div></div></section>
    <section className="film-section film-section--short">
      <video className="film-media" autoPlay muted loop playsInline poster="/media/cocktail.jpeg"><source src="/media/kuarasy-details.mp4" type="video/mp4" /></video>
      <div className="film-overlay" /><div className="film-copy" data-reveal><span>De dia, o azul</span><h2>À noite,<br />o dourado</h2></div>
    </section>
    <section className="day-night section-shell">
      <article data-reveal><span>01</span><h3>Durante o dia</h3><p>Relaxe na piscina com um drink em mãos, entre espreguiçadeiras, redes e bangalôs, sentindo a brisa que vem do mar.</p></article>
      <article data-reveal><span>02</span><h3>Ao entardecer</h3><p>O pôr do sol pinta o horizonte em tons dourados e transforma cada encontro em uma lembrança.</p></article>
      <article data-reveal><span>03</span><h3>Depois do sol</h3><p>A água segue agradável sob luz suave e atmosfera intimista, especialmente nas noites de lua cheia.</p></article>
    </section>
    <CTA title="Sua tarde na Kuarasy começa aqui" subtitle="Aberto para hóspedes e visitantes, todos os dias." />
    <Footer />
  </main>;
}

