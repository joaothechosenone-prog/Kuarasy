import type { Metadata } from "next";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Motion } from "../components/Motion";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Acomodações | Pousada Kuarasy", description: "Conheça os bangalôs e apartamentos da Kuarasy em Japaratinga." };

const rooms = [
  { number: "03", title: "Bangalôs Pé na Areia", copy: "Abra a varanda e encontre a piscina e o azul do mar como primeira imagem do dia. Banheiro ao ar livre, varanda privativa com rede e decoração contemporânea.", image: "/media/bungalow-hammock.jpeg" },
  { number: "03", title: "Bangalôs Vista Parcial Mar", copy: "Autenticidade e requinte em ambientes que dialogam com o entorno. Tons sóbrios, madeira e fibras naturais criam um refúgio intimista.", image: "/media/bungalows-aerial.jpeg" },
  { number: "08", title: "Apartamentos", copy: "Quatro unidades no térreo com vista para o jardim e quatro no primeiro andar com vista para o mar. Ambientes amplos, serenos e cuidadosamente decorados.", image: "/media/bungalow-interior.jpeg" },
];
const amenities = ["Varanda privativa com rede e mobiliário", "Ar-condicionado", "Smart TV", "Cafeteira elétrica", "Frigobar", "Cofre eletrônico", "Ramal telefônico", "Secador de cabelo", "Wi-Fi gratuito"];

export default function RoomsPage() {
  return <main><Motion />
    <PageHero eyebrow="Acomodações" title="Cada acomodação, um convite ao descanso" subtitle="14 acomodações para até duas pessoas, pensadas para unir conforto e a beleza natural de Japaratinga." image="/media/bungalow-interior.jpeg" />
    <section className="rooms-section section-shell">
      {rooms.map((room, index) => <article className={`room-feature ${index % 2 ? "room-feature--reverse" : ""}`} key={room.title}>
        <div className="room-image"><img src={room.image} alt="" data-parallax /></div>
        <div className="room-copy" data-reveal><span className="room-number">{room.number}</span><p className="eyebrow">Acomodações</p><h2>{room.title}</h2><p>{room.copy}</p></div>
      </article>)}
    </section>
    <section className="amenities"><div className="section-shell"><div className="section-heading" data-reveal><p className="eyebrow">Conforto em todos os detalhes</p><h2>O que você encontra em cada acomodação</h2></div><ul>{amenities.map((item, index) => <li key={item} data-reveal><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></div></section>
    <CTA title="Escolha a acomodação perfeita para a sua estadia" subtitle="Vagas limitadas durante a alta temporada em Japaratinga." label="Quero reservar agora" />
    <Footer />
  </main>;
}

