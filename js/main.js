/* Interacciones con JavaScript nativo. El contenido principal funciona sin JS.
   Idiomas: inglés por defecto (texto en el HTML) y español (atributos data-es).
   La elección se recuerda en el navegador. */
(() => {
  "use strict";
  const config = window.PORTFOLIO || {};

  /* --- Enlaces sociales (correo, LinkedIn, GitHub) desde content.js --- */
  document.querySelectorAll("[data-social]").forEach((element) => {
    const key = element.dataset.social;
    const url =
      key === "email"
        ? config.email
          ? `mailto:${config.email}`
          : null
        : config[key];
    if (!url) {
      const placeholder = document.createElement("span");
      placeholder.innerHTML = element.innerHTML;
      placeholder.className = element.className;
      placeholder.dataset.social = key;
      if (element.dataset.es) placeholder.dataset.es = element.dataset.es;
      placeholder.setAttribute("aria-disabled", "true");
      placeholder.title = "Link coming soon";
      element.replaceWith(placeholder);
      return;
    }
    const link =
      element.tagName === "A" ? element : document.createElement("a");
    if (link !== element) {
      link.innerHTML = element.innerHTML;
      if (element.dataset.es) link.dataset.es = element.dataset.es;
      element.replaceWith(link);
    }
    link.href = url;
    link.removeAttribute("aria-disabled");
    link.removeAttribute("title");
    if (key !== "email") {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
  });

  /* --- Motor de idioma (i18n) --- */
  const LANGS = ["en", "es"];
  const DIALOG_LABELS = {
    en: { repository: "View repository ↗", demo: "View project ↗" },
    es: { repository: "Ver repositorio ↗", demo: "Ver proyecto ↗" },
  };
  const i18nEls = [...document.querySelectorAll("[data-es]")];
  const enHTML = new Map();
  i18nEls.forEach((el) => enHTML.set(el, el.innerHTML));

  const setYear = () => {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  };

  const readSavedLang = () => {
    try {
      const saved = localStorage.getItem("lang");
      return LANGS.includes(saved) ? saved : "en";
    } catch (_) {
      return "en";
    }
  };

  let currentLang = "en";
  let currentProjectKey = null;
  const dialog = document.querySelector(".project-dialog");

  const applyLang = (lang) => {
    if (!LANGS.includes(lang)) lang = "en";
    currentLang = lang;
    i18nEls.forEach((el) => {
      el.innerHTML = lang === "es" ? el.dataset.es : enHTML.get(el);
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
    setYear();
    if (dialog && dialog.open && currentProjectKey) renderDialog(currentProjectKey);
    try {
      localStorage.setItem("lang", lang);
    } catch (_) {
      /* Sin almacenamiento: el idioma solo dura esta visita. */
    }
  };

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  /* --- Progreso de lectura y navegación por secciones --- */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const progress = document.querySelector(".reading-progress");
  const navLinks = [...document.querySelectorAll(".section-nav a")];
  const sections = [...document.querySelectorAll("main > section[id]")];
  let scheduled = false;
  const updateScroll = () => {
    scheduled = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress)
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    let active = "home";
    for (const section of sections)
      if (section.getBoundingClientRect().top <= window.innerHeight * 0.4)
        active = section.id;
    for (const link of navLinks) {
      if (link.getAttribute("href") === `#${active}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };
  const queueScroll = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateScroll);
    }
  };
  window.addEventListener("scroll", queueScroll, { passive: true });
  window.addEventListener("resize", queueScroll, { passive: true });
  updateScroll();

  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const reveal = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(
        ".section-label,.about-copy,.about-photo,.stack,.section-heading,.project,.education-grid,.credentials,.work-grid",
      )
      .forEach((el) => {
        // No ocultar algo que ya esté en pantalla al cargar con un enlace de sección.
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.classList.add("reveal-ready");
          reveal.observe(el);
        }
      });
    reducedMotion.addEventListener("change", (event) => {
      if (event.matches) {
        document
          .querySelectorAll(".reveal-ready")
          .forEach((el) => el.classList.add("is-visible"));
        reveal.disconnect();
      }
    });
  }

  /* --- Movimiento sutil de los carteles --- */
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  document.querySelectorAll(".poster").forEach((poster) => {
    poster.addEventListener("pointermove", (event) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      const box = poster.getBoundingClientRect();
      poster.style.setProperty(
        "--ry",
        `${((event.clientX - box.left) / box.width - 0.5) * 5}deg`,
      );
      poster.style.setProperty(
        "--rx",
        `${-((event.clientY - box.top) / box.height - 0.5) * 5}deg`,
      );
    });
    poster.addEventListener("pointerleave", () => {
      poster.style.removeProperty("--rx");
      poster.style.removeProperty("--ry");
    });
  });

  /* --- Ficha de proyecto (bilingüe) --- */
  const setText = (id, text) => {
    document.getElementById(id).textContent = text;
  };
  function renderDialog(key) {
    const project = config.projects?.[key];
    if (!project) return;
    const t = project[currentLang] || project.en || {};
    setText("dialog-title", t.title || "");
    setText("dialog-category", t.category || "");
    setText("dialog-summary", t.summary || "");
    const body = document.getElementById("dialog-body");
    body.replaceChildren(
      ...(t.paragraphs || []).map((text) => {
        const p = document.createElement("p");
        p.textContent = text;
        return p;
      }),
    );
    const tags = document.getElementById("dialog-tags");
    tags.replaceChildren(
      ...(t.stack || []).map((text) => {
        const span = document.createElement("span");
        span.textContent = text;
        return span;
      }),
    );
    const links = document.getElementById("dialog-links");
    links.replaceChildren();
    const labels = DIALOG_LABELS[currentLang] || DIALOG_LABELS.en;
    for (const [url, label] of [
      [project.repository, labels.repository],
      [project.demo, labels.demo],
    ]) {
      if (!url || !/^https?:\/\//i.test(url)) continue;
      const link = document.createElement("a");
      link.href = url;
      link.textContent = label;
      link.className = "text-link";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      links.append(link);
    }
  }

  let opener;
  if (dialog) {
    document.querySelectorAll("[data-project]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!config.projects?.[button.dataset.project]) return;
        opener = button;
        currentProjectKey = button.dataset.project;
        renderDialog(currentProjectKey);
        dialog.showModal();
        document.body.classList.add("dialog-open");
        dialog.scrollTop = 0;
        dialog.querySelector(".dialog-close").focus();
      });
    });
    dialog
      .querySelector(".dialog-close")
      .addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
      )
        dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      currentProjectKey = null;
      opener?.focus({ preventScroll: true });
    });
  }

  /* Idioma inicial (recordado o inglés) — se aplica al final. */
  applyLang(readSavedLang());
})();
