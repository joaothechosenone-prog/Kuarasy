import Link from "next/link";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Motion } from "./components/Motion";

const experiences = [
  { href: "/acomodacoes", eyebrow: "Acomodações", title: "14 refúgios à beira-mar", copy: "Bangalôs pé na areia e apartamentos entre o jardim e o oceano.", image: "/media/bungalow-interior.jpeg" },
  { href: "/mhares", eyebrow: "Gastronomia", title: "O Nordeste à mesa", copy: "Ingredientes frescos, técnica contemporânea e uma vista que muda tudo.", image: "/media/restaurant.jpeg" },
];

export default function Home() {
  return (
    <main>
      <Motion />
      <Header overlay />
      <section className="hero" aria-labelledby="hero-title">
        <video className="hero-media" autoPlay muted loop playsInline poster="/media/pool-ocean.jpeg">
          <source src="/media/hero-inicio.webm" type="video/webm" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content" data-reveal>
          <p className="eyebrow eyebrow--light">Japaratinga · Alagoas</p>
          <h1 id="hero-title">Onde o tempo desacelera e o mar vira paisagem da sua vida</h1>
          <p className="hero-copy">Pousada de charme com bangalôs à beira-mar, gastronomia autoral e a tranquilidade que você procura.</p>
          <a className="button button--light" href="https://wa.me/5582981084726" target="_blank" rel="noreferrer">Quero reservar minha estadia</a>
        </div>
        <div className="scroll-cue" aria-hidden="true"><span />Descubra</div>
      </section>

      <section className="intro section-shell" data-reveal>
        <p className="eyebrow">Nossa essência</p>
        <div className="intro-grid">
          <h2>Um refúgio nascido do respeito pelo autêntico</h2>
          <div className="prose">
            <p>Em uma área de quase 2.000 m² à beira-mar da Praia do Boqueirão, a Kuarasy nasceu para unir conforto, natureza e gastronomia em uma experiência só sua.</p>
            <p>A história começou em 2021, quando uma pequena pousada encontrou novos sonhadores. Raízes brasileiras e um olhar internacional deram início a uma transformação cuidadosa.</p>
            <p>Desde novembro de 2023, cada hóspede que chega se torna parte dessa história, escrita todos os dias diante do mar de Japaratinga.</p>
          </div>
        </div>
      </section>

      <section className="film-section">
        <video className="film-media" autoPlay muted loop playsInline poster="/media/beach-sunset.jpeg">
          <source src="/media/kuarasy-experience.mp4" type="video/mp4" />
        </video>
        <div className="film-overlay" />
        <div className="film-copy" data-reveal>
          <span>Respire</span>
          <h2>O luxo de viver<br />sem pressa</h2>
        </div>
      </section>

      <section className="experiences section-shell">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">Viva a Kuarasy</p>
          <h2>Experiências desenhadas ao ritmo do mar</h2>
        </div>
        <div className="experience-grid">
          {experiences.map((item, index) => (
            <Link className={`experience-card experience-card--${index + 1}`} href={item.href} key={item.href} data-reveal>
              <div className="experience-image"><img src={item.image} alt="" data-parallax /></div>
              <p className="eyebrow">{item.eyebrow}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <span className="text-link">Conhecer <b>↗</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="quote-section section-shell" data-reveal>
        <p className="eyebrow">Quem já viveu, recomenda</p>
        <blockquote>“Há lugares que a gente visita. E há lugares que passam a fazer parte da nossa história.”</blockquote>
        <p className="quote-note">Depoimentos verificados serão incluídos após a curadoria da pousada.</p>
      </section>

      <CTA title="Sua próxima lembrança inesquecível começa aqui" subtitle="Poucas datas disponíveis durante a alta temporada em Japaratinga." />
      <Footer />
    </main>
  );
}
