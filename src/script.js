const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const initHeader = () => {
  const header = document.querySelector("[data-header]");
  const updateHeader = () => {
    header.classList.toggle("header-scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
};

const initReveal = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
};

const initParallax = () => {
  const layers = document.querySelectorAll("[data-parallax]");

  if (prefersReducedMotion || layers.length === 0) {
    return;
  }

  let ticking = false;

  const moveLayers = () => {
    const center = window.scrollY + window.innerHeight / 2;

    layers.forEach((layer) => {
      const speed = Number(layer.dataset.speed || 0.1);
      const rect = layer.getBoundingClientRect();
      const layerCenter = window.scrollY + rect.top + rect.height / 2;
      const offset = (center - layerCenter) * speed;
      layer.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      layer.style.transform = `translate3d(0, var(--parallax-y), 0)`;
    });

    ticking = false;
  };

  const requestMove = () => {
    if (!ticking) {
      window.requestAnimationFrame(moveLayers);
      ticking = true;
    }
  };

  moveLayers();
  window.addEventListener("scroll", requestMove, { passive: true });
  window.addEventListener("resize", requestMove);
};

window.addEventListener("DOMContentLoaded", () => {
  initIcons();
  initHeader();
  initReveal();
  initParallax();
});
