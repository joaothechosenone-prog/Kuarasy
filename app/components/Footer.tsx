import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="wordmark footer-wordmark" href="/">
            <small>Pousada</small><strong>Kuarasy</strong>
          </Link>
          <p>Um refúgio à beira-mar na Praia do Boqueirão, em Japaratinga.</p>
        </div>
        <div className="footer-links">
          <div><span>Descubra</span><Link href="/acomodacoes">Acomodações</Link><Link href="/mhares">Mhares Restaurante</Link></div>
          <div><span>Planeje</span><Link href="/servicos">Serviços</Link><Link href="/eventos">Eventos</Link><Link href="/contato">Contato</Link></div>
          <div><span>Fale conosco</span><a href="https://wa.me/5582981084726">WhatsApp</a><a href="mailto:kuarasy.gerencia@gmail.com">E-mail</a><a href="https://www.instagram.com/pousadakuarasy/">Instagram</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Pousada Kuarasy</span><span>Japaratinga · Alagoas · Brasil</span></div>
    </footer>
  );
}
