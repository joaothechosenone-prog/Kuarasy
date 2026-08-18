(() => {
  const links = [
    ["/", "Início"],
    ["/servicos/", "Serviços"],
    ["/acomodacoes/", "Acomodações"],
    ["/mhares/", "Mhares"],
    ["/eventos/", "Eventos"],
    ["/contato/", "Contato"],
  ];

  const headerRoot = document.querySelector("[data-site-header]");
  if (headerRoot) {
    const overlay = headerRoot.dataset.overlay === "true";
    headerRoot.outerHTML = `
      <header class="site-header ${overlay ? "site-header--overlay" : "site-header--solid"}">
        <a class="wordmark brand-logo brand-logo--header" href="/" aria-label="Pousada Kuarasy - início"><img src="/assets/media/logo-kuarasy-verde.png" alt="Pousada Kuarasy"></a>
        <nav class="desktop-nav" aria-label="Navegação principal">
          ${links.map(([href, label]) => `<a href="${href}"${href === "/" ? (location.pathname === "/" || location.pathname === "/site-pages/" ? ' class="is-active"' : "") : (location.pathname.startsWith(href) ? ' class="is-active"' : "")}>${label}</a>`).join("")}
        </nav>
        <button class="header-cta desktop-book" type="button">Agendar minha reserva</button>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menu"><span></span><span></span></button>
        <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
          <nav aria-label="Navegação móvel">
            ${links.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
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
          <div><a class="wordmark footer-wordmark brand-logo brand-logo--footer" href="/" aria-label="Pousada Kuarasy - início"><img src="/assets/media/logo-kuarasy-branca.png" alt="Pousada Kuarasy"></a><p>Um refúgio à beira-mar na Praia do Boqueirão, em Japaratinga.</p></div>
          <div class="footer-links">
            <div><span>Descubra</span><a href="/acomodacoes/">Acomodações</a><a href="/mhares/">Mhares Restaurante</a></div>
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
  let previousScrollY = window.scrollY;
  const syncHeaderContrast = () => {
    if (!siteHeader) return;
    const overHero = hero && window.scrollY < hero.offsetHeight - 1;
    const delta = window.scrollY - previousScrollY;
    siteHeader.classList.toggle("site-header--over-hero", Boolean(overHero));
    siteHeader.classList.toggle("site-header--scrolled", !overHero || window.scrollY > 24);
    if (!siteHeader.classList.contains("is-menu-open")) {
      if (window.scrollY <= 24 || delta < -5) siteHeader.classList.remove("site-header--hidden");
      if (window.scrollY > 120 && delta > 5) siteHeader.classList.add("site-header--hidden");
    }
    previousScrollY = window.scrollY;
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
    if (open) siteHeader?.classList.remove("site-header--hidden");
  });

  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = form.querySelector(".form-note");
    if (note) note.hidden = false;
  });

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".testimonial-track");
    const slides = [...carousel.querySelectorAll(".testimonial-slide")];
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const dots = carousel.querySelector("[data-carousel-dots]");
    let active = 0;
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir para o depoimento ${index + 1}`);
      dot.addEventListener("click", () => { active = index; update(); });
      dots?.appendChild(dot);
    });
    const update = () => {
      if (track) track.style.transform = `translateX(-${active * 100}%)`;
      [...(dots?.children || [])].forEach((dot, index) => dot.classList.toggle("is-active", index === active));
      if (previous) previous.disabled = slides.length < 2;
      if (next) next.disabled = slides.length < 2;
    };
    previous?.addEventListener("click", () => { active = (active - 1 + slides.length) % slides.length; update(); });
    next?.addEventListener("click", () => { active = (active + 1) % slides.length; update(); });
    update();
  });

  document.querySelectorAll("[data-coverflow]").forEach((carousel) => {
    const stage = carousel.querySelector("[data-coverflow-stage]");
    const cards = [...carousel.querySelectorAll("[data-coverflow-card]")];
    const previous = carousel.querySelector("[data-coverflow-prev]");
    const next = carousel.querySelector("[data-coverflow-next]");
    const dots = carousel.querySelector("[data-coverflow-dots]");
    if (!stage || !cards.length) return;

    let active = Math.floor(cards.length / 2);
    let dragStart = null;

    cards.forEach((card, index) => {
      card.setAttribute("role", "group");
      card.setAttribute("aria-roledescription", "slide");
      card.setAttribute("aria-label", `${index + 1} de ${cards.length}`);
      card.addEventListener("click", () => { active = index; updateCoverflow(); });

      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir para o depoimento ${index + 1}`);
      dot.addEventListener("click", () => { active = index; updateCoverflow(); });
      dots?.appendChild(dot);
    });

    const circularOffset = (index) => {
      let offset = index - active;
      if (offset > cards.length / 2) offset -= cards.length;
      if (offset < -cards.length / 2) offset += cards.length;
      return offset;
    };

    const updateCoverflow = () => {
      const cardWidth = cards[0].getBoundingClientRect().width || 220;
      const stageWidth = stage.getBoundingClientRect().width || window.innerWidth;
      const visibleDepth = stageWidth >= 1500 ? 5 : stageWidth >= 700 ? 4 : 2;
      const pitch = Math.max(cardWidth * .46, stageWidth / (visibleDepth * 2));
      cards.forEach((card, index) => {
        const offset = circularOffset(index);
        const distance = Math.abs(offset);
        const visible = distance <= visibleDepth;
        const tilt = Math.min(distance * 16, 52) * -Math.sign(offset);
        card.style.transform = `translateX(calc(-50% + ${offset * pitch}px)) translateZ(${-distance * 46}px) rotateY(${tilt}deg) scale(${1 - Math.min(distance * .035, .14)})`;
        card.style.opacity = visible ? String(Math.max(.72, 1 - distance * .08)) : "0";
        card.style.zIndex = String(20 - distance);
        card.style.pointerEvents = visible ? "auto" : "none";
        card.classList.toggle("is-active", index === active);
        card.setAttribute("aria-current", index === active ? "true" : "false");
      });
      [...(dots?.children || [])].forEach((dot, index) => dot.classList.toggle("is-active", index === active));
    };

    const nudge = (amount) => {
      active = (active + amount + cards.length) % cards.length;
      updateCoverflow();
    };

    previous?.addEventListener("click", () => nudge(-1));
    next?.addEventListener("click", () => nudge(1));
    stage.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); nudge(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); nudge(1); }
    });
    stage.addEventListener("pointerdown", (event) => {
      dragStart = event.clientX;
      stage.setPointerCapture?.(event.pointerId);
      stage.classList.add("is-dragging");
    });
    stage.addEventListener("pointerup", (event) => {
      if (dragStart !== null) {
        const distance = event.clientX - dragStart;
        if (Math.abs(distance) > 42) nudge(distance > 0 ? -1 : 1);
      }
      dragStart = null;
      stage.classList.remove("is-dragging");
    });
    stage.addEventListener("pointercancel", () => {
      dragStart = null;
      stage.classList.remove("is-dragging");
    });
    window.addEventListener("resize", updateCoverflow);
    updateCoverflow();
  });

  document.querySelectorAll("[data-hero-slideshow]").forEach((hero) => {
    const slides = [...hero.querySelectorAll(".hero-slide")];
    if (slides.length < 2) return;
    let active = 0;
    window.setInterval(() => {
      slides[active].classList.remove("is-active");
      active = (active + 1) % slides.length;
      slides[active].classList.add("is-active");
    }, 5200);
  });

  if (window.gsap && window.ScrollTrigger && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray("[data-reveal]").forEach((element) => {
      gsap.fromTo(element, { y: 46, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1.15, ease: "power3.out",
        scrollTrigger: { trigger: element, start: "top 86%", end: "bottom 12%", toggleActions: "play reverse play reverse" },
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
        scrollTrigger: { trigger: element, start: "top 88%", end: "bottom 10%", toggleActions: "play reverse play reverse" },
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
