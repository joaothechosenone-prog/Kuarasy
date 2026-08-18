import type { Metadata } from "next";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Motion } from "../components/Motion";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Mhares Restaurante | Pousada Kuarasy", description: "Cozinha nordestina contemporânea à beira-mar em Japaratinga." };

export default function MharesPage() {
  return <main><Motion />
    <PageHero eyebrow="Mhares Restaurante" title="A cozinha nordestina em sua forma mais contemporânea" subtitle="Sabores autênticos, ingredientes frescos e uma vista que transforma cada refeição." image="/media/restaurant.jpeg" shade />
    <section className="mhares-editorial section-shell">
      <div className="editorial-copy" data-reveal><p className="eyebrow">Conceito gastronômico</p><h2>Tradição reinterpretada</h2><p>No coração da Kuarasy, o Restaurante Mhares une criatividade, autenticidade e os sabores marcantes do Nordeste brasileiro. O cardápio reúne frutos do mar, carnes, saladas, massas, risotos e sobremesas para diferentes paladares.</p></div>
      <div className="mhares-photo-pair"><div className="mhares-photo mhares-photo--one" data-image-reveal><img src="/media/dish.jpeg" alt="Prato do Restaurante Mhares" /></div><div className="mhares-photo mhares-photo--two" data-image-reveal><img src="/media/cocktail.jpeg" alt="Drink autoral do Restaurante Mhares" /></div></div>
    </section>
    <section className="wide-story wide-story--video">
      <video autoPlay muted loop playsInline preload="metadata"><source src="/media/kuarasy-details.mp4" type="video/mp4" /></video><div className="wide-story-shade" />
      <div className="wide-story-card" data-reveal><p className="eyebrow">Uma mesa com vista para o mar</p><h2>Da primeira luz ao jantar à beira-mar</h2><p>O Mhares funciona diariamente das 8h às 21h30, recebendo hóspedes e visitantes para café, almoço e jantar. Ao anoitecer, a experiência ganha luz de velas e clima tropical.</p></div>
    </section>
    <CTA title="Reserve sua mesa e viva essa experiência" label="Quero reservar minha mesa" />
    <Footer />
  </main>;
}
