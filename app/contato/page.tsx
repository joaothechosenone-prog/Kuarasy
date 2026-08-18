import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Motion } from "../components/Motion";

export const metadata: Metadata = { title: "Contato | Pousada Kuarasy", description: "Entre em contato com a Pousada Kuarasy em Japaratinga." };

const faqs = [
  ["A pousada aceita crianças?", "A Kuarasy recebe hóspedes a partir de 12 anos no dia a dia. Em eventos e celebrações privadas, crianças de todas as idades são bem-vindas."],
  ["A pousada aceita pets?", "Sim. Aceitamos cães e gatos de pequeno porte, limitado a um pet por acomodação."],
  ["O café da manhã está incluso na diária?", "Sim, servido todos os dias das 8h às 10h, com sabores e frutas regionais."],
  ["Como faço para reservar?", "Você pode reservar pelo motor de reservas ou falar diretamente com a equipe pelo WhatsApp."],
  ["Vocês oferecem transfer do aeroporto?", "Sim. Indicamos serviços terceirizados quando solicitados antecipadamente pelo WhatsApp."],
  ["O restaurante é aberto para não hóspedes?", "Sim. O restaurante recebe visitantes diariamente e atende café, almoço e jantar."],
  ["Qual a capacidade máxima para eventos?", "Até 120 pessoas, somando convidados e equipe de apoio."],
  ["Como chegar até a pousada?", "Estamos a cerca de 130 km do aeroporto de Maceió e 140 km do aeroporto do Recife. O centro de Japaratinga fica a 6,7 km."],
];

export default function ContactPage() {
  return <main><Motion /><Header />
    <section className="contact-hero section-shell">
      <div data-reveal><p className="eyebrow">Contato</p><h1>Fale conosco</h1><p>Preencha o formulário ou entre em contato diretamente. Nossa equipe responde com atenção, simpatia e agilidade.</p></div>
      <div className="contact-details" data-reveal>
        <div><span>Telefone / WhatsApp</span><a href="tel:+5582981084726">(82) 98108-4726</a></div>
        <div><span>E-mail</span><a href="mailto:kuarasy.gerencia@gmail.com">kuarasy.gerencia@gmail.com</a><a href="mailto:huarasy@pousadakuarasy.com">huarasy@pousadakuarasy.com</a></div>
        <div><span>Endereço</span><p>Rua Projetada, s/n · Sítio Brasa<br />Praia do Boqueirão · Japaratinga, AL<br />CEP 57.950-000</p></div>
      </div>
    </section>
    <section className="contact-form-wrap section-shell" data-reveal><ContactForm /></section>
    <section className="faq-section"><div className="section-shell"><div className="section-heading" data-reveal><p className="eyebrow">Informações úteis</p><h2>Perguntas frequentes</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question} data-reveal><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <Footer />
  </main>;
}
