import type { Metadata } from "next";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Motion } from "../components/Motion";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Serviços | Pousada Kuarasy", description: "Serviços pensados para uma estadia tranquila em Japaratinga." };

const services = [
  ["01", "Recepção", "Nossa equipe está disponível das 7h às 22h para recebê-lo com atenção e orientar sobre transfers, passeios e experiências na região."],
  ["02", "Transfer e passeios", "Por meio de parceiros de confiança, indicamos transfers entre os aeroportos de Recife e Maceió e a pousada, além de passeios por terra e mar."],
  ["03", "Café da manhã", "Servido diariamente, das 8h às 10h, em buffet ou à la carte, com sabores, sucos e frutas da culinária nordestina."],
  ["04", "Wi-Fi gratuito", "Internet de qualidade em todas as acomodações e nas áreas externas da pousada."],
  ["05", "Pet friendly e gay friendly", "Recebemos cães e gatos de pequeno porte, um por acomodação, e cultivamos um ambiente verdadeiramente acolhedor para todos."],
];

export default function ServicesPage() {
  return <main><Motion />
    <PageHero eyebrow="Serviços" title="Cuidamos dos detalhes para você não se preocupar com nada" subtitle="Da chegada à partida, tudo pensado para que sua única tarefa seja aproveitar." image="/media/entrance-night.jpeg" images={["/media/entrance-night.jpeg", "/media/bungalows-aerial.jpeg", "/media/pool-ocean.jpeg"]} />
    <section className="listing-section section-shell">
      <div className="section-heading" data-reveal><p className="eyebrow">Ao seu dispor</p><h2>Conforto que se revela nos detalhes</h2></div>
      <div className="service-list">{services.map(([number, title, copy]) => <article className="service-row" key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>
    <CTA title="Deixe os detalhes com a gente" subtitle="Sua estadia começa antes mesmo de você chegar." />
    <Footer />
  </main>;
}
