(() => {
  const links = [
    ["/acomodacoes/", "Acomodações"],
    ["/mhares/", "Mhares"],
    ["/beach-club/", "Beach Club"],
    ["/eventos/", "Eventos"],
    ["/servicos/", "Serviços"],
  ];

  const headerRoot = document.querySelector("[data-site-header]");
  if (headerRoot) {
    const overlay = headerRoot.dataset.overlay === "true";
    headerRoot.outerHTML = `
      <header class="site-header ${overlay ? "site-header--overlay" : "site-header--solid"}">
        <a class="wordmark" href="/" aria-label="Pousada Kuarasy - início"><small>Pousada</small><strong>Kuarasy</strong></a>
        <nav class="desktop-nav" aria-label="Navegação principal">
          ${links.map(([href, label]) => `<a href="${href}"${location.pathname.startsWith(href) ? ' class="is-active"' : ""}>${label}</a>`).join("")}
        </nav>
        <a class="header-cta desktop-book" href="/contato/">Reservar</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu"><span></span><span></span></button>
        <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
          <nav aria-label="Navegação móvel">
            <a href="/">Início</a>
            ${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
            <a href="/contato/">Contato</a>
          </nav>
          <div class="mobile-menu-meta"><a href="tel:+5582981084726">+55 82 98108-4726</a><span>Praia do Boqueirão · Japaratinga</span></div>
        </div>
      </header>`;
  }

  const footerRoot = document.querySelector("[data-site-footer]");
  if (footerRoot) {
    footerRoot.outerHTML = `
      <footer class="footer">
        <div class="footer-top">
          <div><a class="wordmark footer-wordmark" href="/"><small>Pousada</small><strong>Kuarasy</strong></a><p>Um refúgio à beira-mar na Praia do Boqueirão, em Japaratinga.</p></div>
          <div class="footer-links">
            <div><span>Descubra</span><a href="/acomodacoes/">Acomodações</a><a href="/mhares/">Mhares Restaurante</a><a href="/beach-club/">Beach Club</a></div>
            <div><span>Planeje</span><a href="/servicos/">Serviços</a><a href="/eventos/">Eventos</a><a href="/contato/">Contato</a></div>
            <div><span>Fale conosco</span><a href="https://wa.me/5582981084726">WhatsApp</a><a href="mailto:kuarasy.gerencia@gmail.com">E-mail</a><a href="https://www.instagram.com/pousadakuarasy/">Instagram</a></div>
          </div>
        </div>
        <div class="footer-bottom"><span>© 2026 Pousada Kuarasy</span><span>Japaratinga · Alagoas · Brasil</span></div>
      </footer>`;
  }

  const menu = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const siteHeader = document.querySelector(".site-header");
  const hero = document.querySelector(".hero, .page-hero");
  document.body.classList.toggle("has-no-page-hero", !hero);
  const syncHeaderContrast = () => {
    if (!siteHeader) return;
    const overHero = hero && window.scrollY < hero.offsetHeight - 1;
    siteHeader.classList.toggle("site-header--over-hero", Boolean(overHero));
    siteHeader.classList.toggle("site-header--scrolled", !overHero || window.scrollY > 24);
  };
  syncHeaderContrast();
  window.addEventListener("scroll", syncHeaderContrast, { passive: true });
  window.addEventListener("resize", syncHeaderContrast);
  menu?.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    mobileMenu?.classList.toggle("is-open", open);
    mobileMenu?.setAttribute("aria-hidden", String(!open));
    siteHeader?.classList.toggle("is-menu-open", open);
  });

  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector(".form-note");
    if (note) note.hidden = false;
  });

  if (window.gsap && window.ScrollTrigger && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("[data-reveal]").forEach((element) => {
      gsap.fromTo(element, { y: 46, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.15, ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 86%", once: true },
      });
    });
    gsap.utils.toArray("[data-parallax]").forEach((element) => {
      gsap.fromTo(element, { yPercent: -7, scale: 1.08 }, {
        yPercent: 7, scale: 1.02, ease: "none",
        scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 1.2 },
      });
    });
    gsap.utils.toArray("[data-image-reveal]").forEach((element) => {
      gsap.fromTo(element, {
        clipPath: "inset(9% 7% 9% 7%)",
        scale: .96,
      }, {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        duration: 1.35,
        ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 88%", once: true },
      });
    });
    gsap.utils.toArray(".experience-card").forEach((card, index) => {
      gsap.fromTo(card, { y: 35 + index * 14 }, {
        y: 0,
        ease: "none",
        scrollTrigger: { trigger: card, start: "top bottom", end: "top 48%", scrub: 1 },
      });
    });
    const film = document.querySelector(".film-media");
    if (film) {
      gsap.fromTo(film, { scale: 1.14 }, {
        scale: 1, ease: "none",
        scrollTrigger: { trigger: ".film-section", start: "top bottom", end: "bottom top", scrub: 1.2 },
      });
    }
  }
})();
