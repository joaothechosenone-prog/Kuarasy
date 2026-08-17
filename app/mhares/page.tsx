import type { Metadata } from "next";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Motion } from "../components/Motion";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Mhares Restaurante | Pousada Kuarasy", description: "Cozinha nordestina contemporânea à beira-mar em Japaratinga." };

export default function MharesPage() {
  return <main><Motion />
    <PageHero eyebrow="Mhares Restaurante" title="A cozinha nordestina em sua forma mais contemporânea" subtitle="Sabores autênticos, ingredientes frescos e uma vista que transforma cada refeição." image="/media/restaurant.jpeg" />
    <section className="editorial-pair section-shell">
      <div className="editorial-copy" data-reveal><p className="eyebrow">Conceito gastronômico</p><h2>Tradição reinterpretada</h2><p>No coração da Kuarasy, o Restaurante Mhares une criatividade, autenticidade e os sabores marcantes do Nordeste brasileiro. O cardápio reúne frutos do mar, carnes, saladas, massas, risotos e sobremesas para diferentes paladares.</p></div>
      <div className="editorial-image"><img src="/media/dish.jpeg" alt="Prato do Restaurante Mhares" data-parallax /></div>
    </section>
    <section className="wide-story">
      <img src="/media/beach-sunset.jpeg" alt="Vista para o mar ao pôr do sol" data-parallax />
      <div className="wide-story-card" data-reveal><p className="eyebrow">Uma mesa com vista para o mar</p><h2>Da primeira luz ao jantar à beira-mar</h2><p>O Mhares funciona diariamente das 8h às 21h30, recebendo hóspedes e visitantes para café, almoço e jantar. Ao anoitecer, a experiência ganha luz de velas e clima tropical.</p></div>
    </section>
    <CTA title="Reserve sua mesa e viva essa experiência" label="Quero reservar minha mesa" />
    <Footer />
  </main>;
}

