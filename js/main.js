/* Interacciones con JavaScript nativo. El contenido principal funciona sin JS. */
(() => {
  "use strict";
  const config = window.PORTFOLIO || {};
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
      placeholder.textContent = element.textContent;
      placeholder.className = element.className;
      placeholder.dataset.social = key;
      placeholder.setAttribute("aria-disabled", "true");
      placeholder.title = "Link coming soon";
      element.replaceWith(placeholder);
      return;
    }
    const link =
      element.tagName === "A" ? element : document.createElement("a");
    if (link !== element) {
      link.textContent = element.textContent;
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

  const dialog = document.querySelector(".project-dialog");
  let opener;
  const setText = (id, text) => {
    document.getElementById(id).textContent = text;
  };
  if (dialog) {
    document.querySelectorAll("[data-project]").forEach((button) => {
      button.addEventListener("click", () => {
        const project = config.projects?.[button.dataset.project];
        if (!project) return;
        opener = button;
        setText("dialog-title", project.title);
        setText("dialog-category", project.category);
        setText("dialog-summary", project.summary);
        const body = document.getElementById("dialog-body");
        body.replaceChildren(
          ...project.paragraphs.map((text) => {
            const p = document.createElement("p");
            p.textContent = text;
            return p;
          }),
        );
        const tags = document.getElementById("dialog-tags");
        tags.replaceChildren(
          ...project.stack.map((text) => {
            const span = document.createElement("span");
            span.textContent = text;
            return span;
          }),
        );
        const links = document.getElementById("dialog-links");
        links.replaceChildren();
        for (const [url, label] of [
          [project.repository, "View repository ↗"],
          [project.demo, "View project ↗"],
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
      opener?.focus({ preventScroll: true });
    });
  }
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
