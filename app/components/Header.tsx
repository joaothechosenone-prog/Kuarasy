"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["/", "Início"],
  ["/acomodacoes", "Acomodações"],
  ["/mhares", "Mhares"],
  ["/eventos", "Eventos"],
  ["/servicos", "Serviços"],
];

export function Header({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${overlay ? "site-header--overlay" : "site-header--solid"}`}>
      <Link className="wordmark" href="/" aria-label="Pousada Kuarasy - início">
        <small>Pousada</small>
        <strong>Kuarasy</strong>
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([href, label]) => (
          <Link className={pathname === href ? "is-active" : ""} href={href} key={href}>{label}</Link>
        ))}
      </nav>
      <Link className="header-cta desktop-book" href="/contato">Reservar</Link>
      <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
        <span /><span />
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Navegação móvel">
          {links.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/contato">Contato</Link>
        </nav>
        <div className="mobile-menu-meta">
          <a href="tel:+5582981084726">+55 82 98108-4726</a>
          <span>Praia do Boqueirão · Japaratinga</span>
        </div>
      </div>
    </header>
  );
}
