// ==========================================================================
// 1. SCROLL REVEAL
// Observa los elementos con [data-reveal] y les añade la clase "is-visible"
// cuando entran en el viewport. Así las secciones aparecen con una
// transición suave en vez de aparecer todas de golpe al cargar la página.
// ==========================================================================
const revealEls = document.querySelectorAll("[data-reveal]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target); // solo se anima una vez
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ==========================================================================
// 2. SCROLL SUAVE AL BOTÓN "Desplázate"
// ==========================================================================
const scrollCue = document.querySelector(".scroll-cue");

if (scrollCue) {
  scrollCue.addEventListener("click", () => {
    const target = document.querySelector(scrollCue.dataset.scrollTarget);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}
