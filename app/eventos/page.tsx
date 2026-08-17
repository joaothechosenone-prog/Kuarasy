import type { Metadata } from "next";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Motion } from "../components/Motion";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "Eventos | Pousada Kuarasy", description: "Casamentos e celebrações à beira-mar em Japaratinga." };

const types = ["Casamentos", "Aniversários", "Reuniões e confraternizações", "Celebrações entre familiares e amigos"];

export default function EventsPage() {
  return <main><Motion />
    <PageHero eyebrow="Eventos" title="Celebrações inesquecíveis à beira-mar" subtitle="Casamentos, réveillons e momentos especiais em um dos cenários mais encantadores do litoral alagoano." image="/media/wedding.jpeg" />
    <section className="events-intro section-shell">
      <div data-reveal><p className="eyebrow">Até 120 pessoas</p><h2>Cada celebração merece o cenário certo</h2><p>Entre convidados e equipe de apoio, a Kuarasy recebe celebrações cercadas pelo mar e pela natureza de Japaratinga.</p></div>
      <ol>{types.map((type, index) => <li key={type} data-reveal><span>{String(index + 1).padStart(2, "0")}</span>{type}</li>)}</ol>
    </section>
    <section className="split-feature split-feature--reverse">
      <div className="split-media"><img src="/media/beach-sunset.jpeg" alt="Pôr do sol em Japaratinga" data-parallax /></div>
      <div className="split-copy" data-reveal><p className="eyebrow">Um cenário que muda com o dia</p><h2>Do azul do mar aos tons dourados do entardecer</h2><p>A pousada está preparada para receber todas as etapas do seu evento com atenção, cuidado e liberdade para refletir o estilo de quem celebra.</p></div>
    </section>
    <CTA title="Vamos planejar o seu evento" subtitle="Conte com nossa equipe para cuidar de cada detalhe." label="Quero solicitar um orçamento" />
    <Footer />
  </main>;
}

